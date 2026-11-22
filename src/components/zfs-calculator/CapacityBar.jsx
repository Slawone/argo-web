"use client";

import { cn } from "@/utils";
import { SLOP_FRACTION, METASLAB_FRACTION, formatPercent } from "@/lib/zfs";

const segments = (pool) => {
  const overhead = pool.dataFraction * (SLOP_FRACTION + METASLAB_FRACTION);
  return [
    {
      id: "data",
      label: "Данные",
      fraction: pool.efficiency,
      className: "bg-[#00B6CC]",
    },
    {
      id: "parity",
      label: pool.vdevType === "mirror" ? "Зеркальные копии" : "Чётность",
      fraction: pool.vdevCount ? 1 - pool.dataFraction : 0,
      className: "bg-[#FF9000]",
    },
    ...(pool.reserveSpace
      ? [
          {
            id: "reserve",
            label: "Свободный резерв (15% полезной ёмкости)",
            fraction: pool.rawBytes ? pool.reservedBytes / pool.rawBytes : 0,
            className: "bg-[#8b5cf6]",
          },
        ]
      : []),
    {
      id: "overhead",
      label: "Оверхед ZFS",
      fraction: pool.vdevCount ? overhead : 0,
      className: "bg-zinc-400 dark:bg-zinc-600",
    },
  ];
};

export const CapacityBar = ({ pool }) => (
  <div className="flex flex-col gap-2.5">
    {pool.reserveSpace && (
      <p className="text-color text-xs">
        Доли на диаграмме указаны от сырой ёмкости пула.
      </p>
    )}
    <div className="flex h-6 w-full rounded-lg overflow-hidden border border-black/8 dark:border-white/14">
      {segments(pool).map((segment) => (
        <div
          key={segment.id}
          title={`${segment.label}: ${formatPercent(segment.fraction)}`}
          className={cn(
            "h-full transition-all duration-300",
            segment.className,
          )}
          style={{ width: `${segment.fraction * 100}%` }}
        />
      ))}
    </div>
    <div className="flex flex-wrap gap-x-5 gap-y-1.5">
      {segments(pool).map((segment) => (
        <span
          key={segment.id}
          className="inline-flex items-center gap-1.5 text-color text-xs md:text-sm"
        >
          <span className={cn("w-3 h-3 rounded-sm", segment.className)} />
          {segment.label} · {formatPercent(segment.fraction)}
        </span>
      ))}
    </div>
  </div>
);
