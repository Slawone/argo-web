"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  DISKS_MAX,
  DEFAULT_CONFIG,
  calculatePool,
  clampWidth,
  getRecommendations,
  getFailureStatus,
} from "@/lib/zfs";
import { ConfigPanel } from "./ConfigPanel";
import { PoolDiagram } from "./PoolDiagram";
import { ResultsPanel } from "./ResultsPanel";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export const ZfsCalculator = () => {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [failed, setFailed] = useState([]);
  const [simulating, setSimulating] = useState(false);

  const pool = useMemo(() => calculatePool(config), [config]);
  const recommendations = useMemo(
    () => getRecommendations(pool, config.disksTotal),
    [pool, config.disksTotal],
  );

  const updateConfig = (patch) => setConfig((c) => ({ ...c, ...patch }));

  const updateTopology = (patch) => {
    setConfig((c) => {
      const next = { ...c, ...patch };
      next.disksTotal = Math.min(Math.max(next.disksTotal, 1), DISKS_MAX);
      next.disksPerVdev = clampWidth(
        next.vdevType,
        next.disksPerVdev,
        next.disksTotal,
      );
      return next;
    });
    setFailed([]);
  };

  const reset = () => {
    setConfig(DEFAULT_CONFIG);
    setFailed([]);
    setSimulating(false);
  };

  const failureStatus = useMemo(
    () => getFailureStatus(pool, failed, simulating),
    [pool, failed, simulating],
  );

  const toggleDisk = (key) =>
    setFailed((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );

  return (
    <section
      id="zfs-calculator"
      aria-label="Интерактивный калькулятор пула ZFS"
      className="page-container bg-white dark:bg-black [color-scheme:light] dark:[color-scheme:dark] px-4 md:px-6 font-light flex flex-col gap-4"
    >
      <motion.div {...fadeIn} className="flex flex-col gap-4">
        <div className="grid min-w-0 gap-4 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_232px]">
          <ConfigPanel
            config={config}
            pool={pool}
            onConfigChange={updateConfig}
            onTopologyChange={updateTopology}
            onReset={reset}
          />
          <PoolDiagram
            pool={pool}
            simulating={simulating}
            onToggleSimulating={() => setSimulating((s) => !s)}
            failedByVdev={failureStatus.failedByVdev}
            failedDisks={failed}
            onToggleDisk={toggleDisk}
          />
        </div>
        <ResultsPanel
          pool={pool}
          recommendations={recommendations}
          failureStatus={failureStatus}
        />
      </motion.div>
    </section>
  );
};
