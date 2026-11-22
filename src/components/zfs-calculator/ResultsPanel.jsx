"use client";

import { ShieldAlert, ShieldCheck, Lightbulb } from "lucide-react";
import { cn } from "@/utils";
import {
  SLOP_FRACTION,
  METASLAB_FRACTION,
  formatCapacity,
  formatPercent,
  plural,
  tbToBytes,
} from "@/lib/zfs";

const cardClassName =
  "border border-black/8 dark:border-white/14 rounded-xl p-4 md:p-6 flex flex-col gap-3";

const StatCard = ({ title, children }) => (
  <div className={cardClassName}>
    <span className="title-color text-sm md:text-base font-normal uppercase">
      {title}
    </span>
    {children}
  </div>
);

const safetyLevels = {
  stripe: { label: "Отсутствует", className: "text-red-500" },
  raidz1: { label: "Базовая", className: "text-amber-500" },
  raidz2: { label: "Высокая", className: "text-emerald-500" },
  raidz3: { label: "Максимальная", className: "text-emerald-500" },
  "mirror-2": { label: "Высокая", className: "text-emerald-500" },
  "mirror-3": { label: "Максимальная", className: "text-emerald-500" },
};

export const ResultsPanel = ({ pool, recommendations, failureStatus }) => {
  const level =
    safetyLevels[
      pool.vdevType === "mirror" ? `mirror-${pool.width}` : pool.vdevType
    ] || safetyLevels.stripe;

  const overheadTotal = pool.overhead.reduce(
    (sum, item) => sum + item.fraction,
    0,
  );

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <StatCard title="Сырая ёмкость">
        <span className="title-color text-2xl md:text-3xl font-normal">
          {formatCapacity(pool.rawBytes)}
        </span>
        <span className="text-color text-sm md:text-base">
          {pool.usedDisks} {plural(pool.usedDisks, ["диск", "диска", "дисков"])}{" "}
          × {pool.diskSizeTB} TB
        </span>
        {pool.leftover > 0 && (
          <span className="text-color text-sm">
            Всего установлено:{" "}
            {formatCapacity(tbToBytes(pool.disksTotal * pool.diskSizeTB))}.
            Незадействованные диски не включены в ёмкость пула.
          </span>
        )}
      </StatCard>

      <StatCard title="Полезная ёмкость">
        <output className="title-color text-2xl md:text-3xl font-normal">
          {formatCapacity(pool.usableBytes)}
        </output>
        <span className="text-color text-sm md:text-base">
          Эффективность {formatPercent(pool.efficiency)}
        </span>
        {pool.reserveSpace && (
          <span className="text-color text-sm md:text-base">
            Оставлено свободным 15%: {formatCapacity(pool.reservedBytes)}.
            Ёмкость до резервирования: {formatCapacity(pool.baseUsableBytes)}.
          </span>
        )}
        <div className="h-2 rounded-full bg-black/8 dark:bg-white/10 overflow-hidden">
          <div
            className="h-full bg-[#00B6CC] transition-all duration-300"
            style={{ width: `${pool.efficiency * 100}%` }}
          />
        </div>
      </StatCard>

      <StatCard title="Отказоустойчивость">
        <span
          role="status"
          className={cn(
            "inline-flex items-center gap-2 text-lg md:text-xl font-normal",
            !pool.vdevCount
              ? "text-amber-400"
              : failureStatus.poolLost
                ? "text-red-500"
                : level.className,
          )}
        >
          {!pool.vdevCount || failureStatus.poolLost ? (
            <ShieldAlert className="w-6 h-6" />
          ) : (
            <ShieldCheck className="w-6 h-6" />
          )}
          {!pool.vdevCount
            ? "Недостаточно дисков"
            : failureStatus.poolLost
              ? "Пул потерян"
              : level.label}
        </span>
        <span className="text-color text-sm md:text-base">
          {!pool.vdevCount
            ? "Добавьте диски или выберите другой тип VDEV."
            : failureStatus.poolLost
              ? "В одном VDEV отказало больше дисков, чем допускает уровень избыточности."
              : pool.faultTolerance.perVdev === 0
                ? "Отказ любого диска приведёт к потере пула."
                : failureStatus.degraded
                  ? `Деградирован · минимальный запас отказов: ${failureStatus.remainingWorst}`
                  : `Переживает отказ ${pool.faultTolerance.perVdev} ${plural(pool.faultTolerance.perVdev, ["диска", "дисков", "дисков"])} в каждом VDEV` +
                    (pool.faultTolerance.maxDistributed >
                    pool.faultTolerance.perVdev
                      ? `; до ${pool.faultTolerance.maxDistributed} суммарно при распределении отказов между VDEV`
                      : "")}
        </span>
      </StatCard>

      <StatCard title={`Оверхед · ${formatPercent(overheadTotal)}`}>
        <ul className="flex flex-col gap-2">
          {pool.overhead.map((item) => (
            <li key={item.id} className="flex flex-col gap-1">
              <div className="flex items-center justify-between text-sm md:text-base">
                <span className="text-color">{item.label}</span>
                <span className="title-color">
                  {formatPercent(item.fraction)}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-black/8 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-zinc-400 dark:bg-zinc-600 transition-all duration-300"
                  style={{ width: `${item.fraction * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
        <span className="text-color text-xs md:text-sm">
          Slop space ({formatPercent(SLOP_FRACTION)} из теоретической ёмкости) и
          metaslab ({formatPercent(METASLAB_FRACTION)}) — резервы, которые ZFS
          держит под служебные нужды.
        </span>
      </StatCard>

      <div className={cn(cardClassName, "md:col-span-2")}>
        <span className="title-color text-sm md:text-base font-normal uppercase inline-flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-[#00B6CC]" />
          Рекомендации
        </span>
        <ul className="flex flex-col gap-2">
          {recommendations.map((rec, index) => (
            <li
              key={index}
              className="flex gap-2.5 text-color text-sm md:text-base"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00B6CC] shrink-0" />
              {rec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
