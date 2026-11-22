// Упрощённая модель расчёта пула ZFS:
//   usable = raw × (1 − parity/width) × (1 − SLOP − METASLAB)
// При включённом резервировании объём для заполнения дополнительно умножается на 0.85.
// Фиксированные оценки служебных расходов, а не точный расчёт резервов ZFS.

export const SLOP_FRACTION = 0.032;
export const METASLAB_FRACTION = 0.016;
export const POOL_RESERVE_FRACTION = 0.15;

export const DISKS_MAX = 60;

export const DISK_SIZES_TB = [
  1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 30,
];

export const DEFAULT_CONFIG = {
  disksTotal: 6,
  diskSizeTB: 8,
  vdevType: "raidz2",
  disksPerVdev: 6,
  reserveSpace: false,
};

export const VDEV_TYPES = {
  stripe: {
    label: "Stripe",
    minWidth: 1,
    maxWidth: 1,
    defaultWidth: 1,
    parityDisks: () => 0,
    description:
      "Склейка дисков без избыточности. Отказ любого диска — потеря всего пула.",
  },
  mirror: {
    label: "Mirror",
    minWidth: 2,
    maxWidth: 3,
    defaultWidth: 2,
    parityDisks: (width) => width - 1,
    description:
      "Зеркалирование: каждый VDEV хранит 1 копию данных, остальные диски — её копии.",
  },
  raidz1: {
    label: "RAIDZ1",
    minWidth: 2,
    maxWidth: 20,
    defaultWidth: 5,
    parityDisks: () => 1,
    description: "Одна чётность — переживает отказ 1 диска в каждом VDEV.",
  },
  raidz2: {
    label: "RAIDZ2",
    minWidth: 3,
    maxWidth: 20,
    defaultWidth: 6,
    parityDisks: () => 2,
    description: "Двойная чётность — переживает отказ 2 дисков в каждом VDEV.",
  },
  raidz3: {
    label: "RAIDZ3",
    minWidth: 4,
    maxWidth: 20,
    defaultWidth: 8,
    parityDisks: () => 3,
    description: "Тройная чётность — переживает отказ 3 дисков в каждом VDEV.",
  },
};

export const clampWidth = (vdevType, width, disksTotal = DISKS_MAX) => {
  const type = VDEV_TYPES[vdevType];
  const max = Math.max(
    Math.min(type.maxWidth, Math.max(disksTotal, 1)),
    type.minWidth,
  );
  return Math.min(Math.max(Math.trunc(width), type.minWidth), max);
};

export const tbToBytes = (tb) => tb * 1e12;
export const bytesToTiB = (bytes) => bytes / 2 ** 40;
export const bytesToTB = (bytes) => bytes / 1e12;

export const formatTB = (bytes) => `${bytesToTB(bytes).toFixed(2)} TB`;
export const formatTiB = (bytes) => `${bytesToTiB(bytes).toFixed(2)} TiB`;
export const formatCapacity = (bytes) =>
  `${formatTB(bytes)} / ${formatTiB(bytes)}`;
export const formatPercent = (fraction) => `${(fraction * 100).toFixed(1)}%`;

export const plural = (n, forms) => {
  const n10 = n % 10;
  const n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return forms[0];
  if (n10 >= 2 && n10 <= 4 && (n100 < 10 || n100 >= 20)) return forms[1];
  return forms[2];
};

export function calculatePool({
  disksTotal,
  diskSizeTB,
  vdevType,
  disksPerVdev,
  reserveSpace = false,
}) {
  const type = VDEV_TYPES[vdevType];
  const width = clampWidth(vdevType, disksPerVdev, disksTotal);
  const isStripe = vdevType === "stripe";
  const vdevCount = isStripe ? disksTotal : Math.floor(disksTotal / width);
  const leftover = isStripe ? 0 : disksTotal % width;
  const usedDisks = isStripe ? disksTotal : vdevCount * width;
  const parityPerVdev = type.parityDisks(width);
  const dataPerVdev = width - parityPerVdev;

  const rawBytes = usedDisks * tbToBytes(diskSizeTB);
  const dataFraction = vdevCount > 0 ? dataPerVdev / width : 0;
  const theoreticalBytes = rawBytes * dataFraction;
  const baseUsableBytes =
    theoreticalBytes * (1 - SLOP_FRACTION - METASLAB_FRACTION);
  const reservedBytes = reserveSpace
    ? baseUsableBytes * POOL_RESERVE_FRACTION
    : 0;
  const usableBytes = baseUsableBytes - reservedBytes;
  const slopBytes = theoreticalBytes * SLOP_FRACTION;
  const metaslabBytes = theoreticalBytes * METASLAB_FRACTION;
  const parityBytes = rawBytes - theoreticalBytes;
  const efficiency = rawBytes > 0 ? usableBytes / rawBytes : 0;

  return {
    vdevType,
    width,
    vdevCount,
    leftover,
    usedDisks,
    disksTotal,
    diskSizeTB,
    parityPerVdev,
    dataPerVdev,
    rawBytes,
    reserveSpace,
    baseUsableBytes,
    reservedBytes,
    usableBytes,
    parityBytes,
    slopBytes,
    metaslabBytes,
    otherBytes: 0,
    dataFraction,
    efficiency,
    faultTolerance: {
      perVdev: parityPerVdev,
      maxDistributed: parityPerVdev * vdevCount,
      vdevCount,
    },
    overhead: [
      {
        id: "parity",
        label: vdevType === "mirror" ? "Зеркальные копии" : "Чётность",
        bytes: parityBytes,
        fraction: rawBytes > 0 ? parityBytes / rawBytes : 0,
      },
      {
        id: "slop",
        label: "Slop space",
        bytes: slopBytes,
        fraction: rawBytes > 0 ? slopBytes / rawBytes : 0,
      },
      {
        id: "metaslab",
        label: "Metaslab",
        bytes: metaslabBytes,
        fraction: rawBytes > 0 ? metaslabBytes / rawBytes : 0,
      },
      { id: "other", label: "Прочее", bytes: 0, fraction: 0 },
    ],
  };
}

export function getFailureStatus(pool, failedDisks, simulating) {
  const failedByVdev = Array.from({ length: pool.vdevCount }, () => 0);
  if (simulating) {
    for (let v = 0; v < pool.vdevCount; v += 1) {
      for (let d = 0; d < pool.width; d += 1) {
        if (failedDisks.includes(`${v}-${d}`)) failedByVdev[v] += 1;
      }
    }
  }
  const remaining = failedByVdev.map((count) => pool.parityPerVdev - count);
  const poolLost = remaining.some((count) => count < 0);
  return {
    failedByVdev,
    poolLost,
    degraded: !poolLost && failedByVdev.some((count) => count > 0),
    remainingWorst: remaining.length ? Math.max(Math.min(...remaining), 0) : 0,
  };
}

export function getRecommendations(pool, disksTotal) {
  if (!pool.vdevCount) {
    return [
      "Недостаточно дисков для выбранной конфигурации — уменьшите ширину VDEV или добавьте диски.",
    ];
  }

  const recs = [];

  if (pool.vdevType === "stripe") {
    recs.push(
      "Stripe не защищает данные: отказ одного диска уничтожит весь пул. Используйте его только для временных данных.",
    );
  }
  if (pool.vdevCount === 1 && pool.vdevType !== "stripe") {
    recs.push(
      "В пуле один VDEV — производительность пула равна производительности одного VDEV.",
    );
  }
  if (pool.leftover > 0) {
    recs.push(
      `${pool.leftover} ${plural(pool.leftover, ["диск не задействован", "диска не задействовано", "дисков не задействовано"])} — объедините их в отдельный VDEV или оставьте горячим резервом.`,
    );
  }
  if (pool.vdevType === "raidz1" && pool.width >= 6) {
    recs.push(
      "Широкий RAIDZ1 долго восстанавливается после отказа — для дисков большой ёмкости надёжнее RAIDZ2.",
    );
  }
  if (pool.vdevType === "mirror" && pool.width === 2 && pool.vdevCount > 1) {
    recs.push(
      "Параллельные зеркала дают высокую производительность, но 50% ёмкости уходит на избыточность.",
    );
  }
  if (disksTotal >= 8 && pool.leftover === 0 && pool.vdevType !== "stripe") {
    recs.push(
      "Выделите один диск горячим резервом (hot spare) для автоматической замены при отказе.",
    );
  }
  if (pool.rawBytes > 0 && pool.baseUsableBytes / pool.rawBytes < 0.5) {
    recs.push(
      "Эффективность ниже 50% — возможно, стоит расширить VDEV или пересмотреть тип RAID.",
    );
  }

  return recs.slice(0, 4);
}
