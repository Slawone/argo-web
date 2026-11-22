import test from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_CONFIG,
  DISK_SIZES_TB,
  VDEV_TYPES,
  calculatePool,
  getFailureStatus,
  getRecommendations,
  bytesToTiB,
  tbToBytes,
  formatCapacity,
} from "./zfs.js";

const close = (actual, expected) =>
  assert.ok(
    Math.abs(actual - expected) <= Math.max(1, Math.abs(expected)) * 1e-12,
    `${actual} ≠ ${expected}`,
  );

test("FAQ example: six 8 TB disks in RAIDZ2 yield about 27.7 TiB", () => {
  const p = calculatePool(DEFAULT_CONFIG);
  close(p.rawBytes, 48e12);
  assert.equal(bytesToTiB(p.rawBytes).toFixed(2), "43.66");
  assert.equal(bytesToTiB(p.usableBytes).toFixed(2), "27.71");
  close(p.efficiency, 0.6346666666666667);
});

test("TB is decimal and TiB is binary", () => {
  close(tbToBytes(8), 8e12);
  assert.equal(bytesToTiB(tbToBytes(8)).toFixed(2), "7.28");
});

for (const [vdevType, width, dataDisks, tolerance] of [
  ["stripe", 1, 1, 0],
  ["mirror", 2, 1, 1],
  ["mirror", 3, 1, 2],
  ["raidz1", 6, 5, 1],
  ["raidz2", 6, 4, 2],
  ["raidz3", 6, 3, 3],
]) {
  test(`${vdevType} width ${width}: capacity and failure boundary`, () => {
    const p = calculatePool({
      ...DEFAULT_CONFIG,
      disksTotal: width * 2,
      disksPerVdev: width,
      vdevType,
    });
    close(p.usableBytes, 2 * dataDisks * 8e12 * 0.952);
    assert.equal(p.faultTolerance.perVdev, tolerance);
    const failed = Array.from({ length: tolerance }, (_, i) => `0-${i}`);
    assert.equal(getFailureStatus(p, failed, true).poolLost, false);
    assert.equal(
      getFailureStatus(p, [...failed, `0-${tolerance}`], true).poolLost,
      true,
    );
  });
}

test("RAIDZ2 tolerates distributed failures but loses the pool after three in one VDEV", () => {
  const p = calculatePool({ ...DEFAULT_CONFIG, disksTotal: 12 });
  assert.equal(
    getFailureStatus(p, ["0-4", "0-5", "1-4", "1-5"], true).poolLost,
    false,
  );
  assert.equal(getFailureStatus(p, ["0-0", "0-4", "0-5"], true).poolLost, true);
});

test("failure counts use selected disk keys; disabling simulation clears the displayed failures", () => {
  const p = calculatePool(DEFAULT_CONFIG);
  assert.deepEqual(
    getFailureStatus(p, ["0-5", "2-0", "0-8"], true).failedByVdev,
    [1],
  );
  assert.equal(getFailureStatus(p, ["0-5"], true).degraded, true);
  assert.equal(getFailureStatus(p, ["0-5"], false).degraded, false);
});

test("leftover disks do not form an incomplete VDEV", () => {
  const p = calculatePool({ ...DEFAULT_CONFIG, disksTotal: 7 });
  assert.equal(p.vdevCount, 1);
  assert.equal(p.leftover, 1);
  assert.equal(p.usedDisks, 6);
  close(p.rawBytes, 48e12);
});

test("insufficient disks produce zero capacity and an actionable recommendation", () => {
  const p = calculatePool({
    ...DEFAULT_CONFIG,
    disksTotal: 1,
    vdevType: "raidz3",
  });
  assert.equal(p.vdevCount, 0);
  assert.equal(p.usableBytes, 0);
  assert.equal(p.efficiency, 0);
  assert.equal(p.leftover, 1);
  assert.match(getRecommendations(p, 1)[0], /Недостаточно дисков/);
});

test("capacity is displayed in decimal TB and binary TiB", () => {
  assert.equal(formatCapacity(48e12), "48.00 TB / 43.66 TiB");
  assert.equal(formatCapacity(0), "0.00 TB / 0.00 TiB");
});

test("15% reservation reduces usable capacity without changing redundancy or service overhead", () => {
  const base = calculatePool(DEFAULT_CONFIG);
  const reserved = calculatePool({ ...DEFAULT_CONFIG, reserveSpace: true });
  close(reserved.usableBytes, base.usableBytes * 0.85);
  close(reserved.reservedBytes, base.usableBytes * 0.15);
  assert.equal(formatCapacity(reserved.usableBytes), "25.89 TB / 23.55 TiB");
  assert.deepEqual(reserved.faultTolerance, base.faultTolerance);
  assert.deepEqual(reserved.overhead, base.overhead);
  close(reserved.rawBytes, base.rawBytes);
  assert.equal(
    getFailureStatus(reserved, ["0-0", "0-1", "0-2"], true).poolLost,
    true,
  );
});

test("supported sizes and topologies conserve capacity with and without 15% reservation", () => {
  for (const vdevType of Object.keys(VDEV_TYPES)) {
    for (const diskSizeTB of DISK_SIZES_TB) {
      for (let disksTotal = 1; disksTotal <= 60; disksTotal += 1) {
        for (const disksPerVdev of [1, 2, 3, 4, 6, 8, 12, 20, 60]) {
          const p = calculatePool({
            disksTotal,
            diskSizeTB,
            disksPerVdev,
            vdevType,
          });
          close(
            p.usableBytes + p.parityBytes + p.slopBytes + p.metaslabBytes,
            p.rawBytes,
          );
          assert.equal(p.usedDisks + p.leftover, disksTotal);
          assert.ok(p.usableBytes >= 0 && p.usableBytes <= p.rawBytes);
          assert.ok(Number.isFinite(p.efficiency));
          const reserved = calculatePool({
            disksTotal,
            diskSizeTB,
            disksPerVdev,
            vdevType,
            reserveSpace: true,
          });
          close(reserved.usableBytes, p.usableBytes * 0.85);
          close(
            reserved.usableBytes +
              reserved.reservedBytes +
              reserved.parityBytes +
              reserved.slopBytes +
              reserved.metaslabBytes,
            p.rawBytes,
          );
          if (p.rawBytes)
            close(
              p.efficiency +
                p.overhead.reduce((sum, item) => sum + item.fraction, 0),
              1,
            );
        }
      }
    }
  }
});
