"use client";

import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/utils";
import { VDEV_TYPES, formatCapacity, formatPercent, plural } from "@/lib/zfs";
import { CapacityBar } from "./CapacityBar";

const diskBaseClassName =
  "w-9 h-9 rounded-full border flex-center text-xs font-normal transition select-none";

const Disk = ({ index, vdevIndex, role, failed, clickable, onClick }) => (
  <button
    type="button"
    disabled={!clickable}
    onClick={onClick}
    aria-label={`VDEV ${vdevIndex + 1}, диск ${index + 1}`}
    aria-pressed={failed}
    title={
      role === "parity"
        ? "Избыточность"
        : role === "data"
          ? "Данные"
          : "Не задействован"
    }
    className={cn(
      diskBaseClassName,
      role === "data" && "border-black/25 dark:border-white/30 text-color",
      role === "parity" && "bg-[#FF9000] border-transparent text-black",
      role === "spare" &&
        "border-dashed border-black/25 dark:border-white/30 text-color",
      failed && "bg-red-500! border-transparent! text-white line-through",
      clickable && "cursor-pointer hover:ring-2 hover:ring-red-400",
      !clickable && "cursor-default",
    )}
  >
    {index + 1}
  </button>
);

const LegendItem = ({ className, label }) => (
  <span className="inline-flex items-center gap-1.5 text-color text-xs md:text-sm">
    <span className={cn("w-3 h-3 rounded-full border", className)} />
    {label}
  </span>
);

export const PoolDiagram = ({
  pool,
  simulating,
  onToggleSimulating,
  failedByVdev,
  failedDisks,
  onToggleDisk,
}) => {
  const vdevLabel = VDEV_TYPES[pool.vdevType].label;
  const parityWord = pool.vdevType === "mirror" ? "копии" : "чётность";
  const poolLost = failedByVdev.some((failed) => failed > pool.parityPerVdev);
  const poolDegraded = !poolLost && failedByVdev.some((failed) => failed > 0);

  const vdevStatus = (vdevIndex) => {
    if (!simulating) return null;
    const failed = failedByVdev[vdevIndex] ?? 0;
    if (failed > pool.parityPerVdev) {
      return (
        <span className="inline-flex items-center gap-1 text-red-500 text-xs md:text-sm">
          <XCircle className="w-4 h-4" />
          VDEV потерян
        </span>
      );
    }
    if (failed > 0) {
      const remaining = pool.parityPerVdev - failed;
      return (
        <span className="inline-flex items-center gap-1 text-amber-500 text-xs md:text-sm">
          <AlertTriangle className="w-4 h-4" />
          Деградирован · отказов осталось: {remaining}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-emerald-500 text-xs md:text-sm">
        <CheckCircle2 className="w-4 h-4" />В норме
      </span>
    );
  };

  return (
    <div className="min-w-0 border border-black/8 dark:border-white/14 rounded-xl p-4 flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="title-color text-lg md:text-xl font-normal uppercase">
          Пул ZFS
        </h2>
        <button
          type="button"
          onClick={onToggleSimulating}
          disabled={!pool.vdevCount}
          aria-pressed={simulating}
          className={cn(
            "button min-h-10 border rounded-xl px-3 py-2 text-sm font-sans font-light cursor-pointer transition-all disabled:cursor-not-allowed disabled:opacity-50",
            simulating
              ? "bg-[#FF9000] border-transparent text-black"
              : "border-black/8 dark:border-white/[.145] text-[#0a0a0a] dark:text-white hover:bg-black/4 dark:hover:bg-[#1a1a1a]",
          )}
        >
          {simulating ? "Завершить симуляцию" : "Симуляция отказов"}
        </button>
      </div>

      {simulating && (
        <div
          className={cn(
            "flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm md:text-base",
            poolLost
              ? "bg-red-500/10 text-red-500"
              : poolDegraded
                ? "bg-amber-500/10 text-amber-500"
                : "bg-emerald-500/10 text-emerald-500",
          )}
        >
          {poolLost ? (
            <XCircle className="w-5 h-5" />
          ) : (
            <CheckCircle2 className="w-5 h-5" />
          )}
          {poolLost
            ? "Пул потерян: в одном VDEV отказало больше дисков, чем допускает уровень избыточности"
            : poolDegraded
              ? "Пул деградирован, но работает"
              : "Кликните по диску, чтобы смоделировать его отказ"}
        </div>
      )}

      <div className="flex flex-col gap-4">
        {!pool.vdevCount && (
          <p role="status" className="text-amber-400 text-sm">
            Недостаточно дисков для выбранного VDEV.
          </p>
        )}
        {Array.from({ length: pool.vdevCount }, (_, v) => (
          <div key={v} className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="title-color text-sm md:text-base">
                VDEV {v + 1} · {vdevLabel} · {pool.dataPerVdev}+
                {pool.parityPerVdev}
              </span>
              {vdevStatus(v)}
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: pool.width }, (_, d) => (
                <Disk
                  key={d}
                  index={d}
                  vdevIndex={v}
                  role={d < pool.dataPerVdev ? "data" : "parity"}
                  failed={simulating && failedDisks.includes(`${v}-${d}`)}
                  clickable={simulating}
                  onClick={() => onToggleDisk(`${v}-${d}`)}
                />
              ))}
            </div>
          </div>
        ))}

        {pool.leftover > 0 && (
          <div className="flex flex-col gap-2">
            <span className="text-color text-sm md:text-base">
              Не задействовано · {pool.leftover}{" "}
              {plural(pool.leftover, ["диск", "диска", "дисков"])}
            </span>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: pool.leftover }, (_, d) => (
                <span
                  key={d}
                  className={cn(
                    diskBaseClassName,
                    "border-dashed border-black/25 dark:border-white/30 text-color",
                  )}
                >
                  {pool.usedDisks + d + 1}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <LegendItem
          className="border-black/25 dark:border-white/30"
          label="Данные"
        />
        <LegendItem
          className="bg-[#FF9000] border-transparent"
          label={parityWord}
        />
        <LegendItem className="bg-red-500 border-transparent" label="Отказ" />
        <LegendItem
          className="border-dashed border-black/25 dark:border-white/30"
          label="Резерв"
        />
      </div>

      <CapacityBar pool={pool} />

      <p className="text-color text-xs md:text-sm">
        Сырая: {formatCapacity(pool.rawBytes)} · Полезная:{" "}
        {formatCapacity(pool.usableBytes)} · Эффективность:{" "}
        {formatPercent(pool.efficiency)}
      </p>
    </div>
  );
};
