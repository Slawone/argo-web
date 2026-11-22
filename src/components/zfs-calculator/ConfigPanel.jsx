"use client";

import { Check, Minus, Plus, RotateCcw } from "lucide-react";
import { cn } from "@/utils";
import { DISKS_MAX, DISK_SIZES_TB, VDEV_TYPES, plural } from "@/lib/zfs";

const labelClassName = "title-color font-normal text-base md:text-lg";
const hintClassName = "text-color text-sm";

const pillClassName = (active) =>
  cn(
    "h-9 px-3 rounded-lg border text-sm md:text-base font-light transition cursor-pointer whitespace-nowrap",
    active
      ? "bg-[#171717] dark:bg-[#ededed] text-white dark:text-[#0a0a0a] border-transparent"
      : "border-black/8 dark:border-white/14 text-color hover:border-black/30 dark:hover:border-white/30",
  );

const Stepper = ({ id, value, min, max, onChange, disabled }) => {
  const set = (next) => onChange(Math.min(Math.max(next, min), max));

  return (
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          "flex h-11 border border-black/8 dark:border-white/14 rounded-lg overflow-hidden",
          disabled && "opacity-50",
        )}
      >
        <button
          type="button"
          aria-label="Уменьшить"
          disabled={disabled || value <= min}
          onClick={() => set(value - 1)}
          className="w-11 shrink-0 flex-center title-color cursor-pointer hover:bg-black/4 dark:hover:bg-white/10 disabled:cursor-not-allowed"
        >
          <Minus className="w-4 h-4" />
        </button>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          disabled={disabled}
          value={value}
          onChange={(e) => set(parseInt(e.target.value, 10) || min)}
          className="w-full min-w-0 text-center bg-transparent title-color font-light text-lg focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          aria-label="Увеличить"
          disabled={disabled || value >= max}
          onClick={() => set(value + 1)}
          className="w-11 shrink-0 flex-center title-color cursor-pointer hover:bg-black/4 dark:hover:bg-white/10 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <input
        id={`${id}-range`}
        type="range"
        aria-labelledby={`${id}-label`}
        min={min}
        max={max}
        step={1}
        value={value}
        disabled={disabled || min >= max}
        onChange={(e) => set(Number(e.target.value))}
        className="h-6 w-full cursor-pointer accent-[#00B6CC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B6CC] disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
};

export const ConfigPanel = ({
  config,
  pool,
  onConfigChange,
  onTopologyChange,
  onReset,
}) => {
  const type = VDEV_TYPES[config.vdevType];

  return (
    <div className="min-w-0 border border-black/8 dark:border-white/14 rounded-xl p-4 md:p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="title-color text-lg md:text-xl font-normal uppercase">
          Конфигурация пула
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-sm text-color hover:text-black dark:hover:text-white transition cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          Сбросить
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label
          id="disks-total-label"
          htmlFor="disks-total"
          className={labelClassName}
        >
          Дисков в системе
        </label>
        <Stepper
          id="disks-total"
          value={config.disksTotal}
          min={1}
          max={DISKS_MAX}
          onChange={(disksTotal) => onTopologyChange({ disksTotal })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className={labelClassName}>Размер диска</span>
        <div
          role="group"
          aria-label="Размер диска"
          className="flex gap-2 overflow-x-auto pb-1 -mb-1"
        >
          {DISK_SIZES_TB.map((size) => (
            <button
              key={size}
              type="button"
              aria-pressed={config.diskSizeTB === size}
              onClick={() => onConfigChange({ diskSizeTB: size })}
              className={cn(
                pillClassName(config.diskSizeTB === size),
                "flex-1",
              )}
            >
              {size} TB
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className={labelClassName}>Тип VDEV</span>
        <div
          role="group"
          aria-label="Тип VDEV"
          className="flex flex-wrap gap-2"
        >
          {Object.entries(VDEV_TYPES).map(([id, vdev]) => (
            <button
              key={id}
              type="button"
              aria-pressed={config.vdevType === id}
              onClick={() =>
                onTopologyChange({
                  vdevType: id,
                  disksPerVdev: vdev.defaultWidth,
                })
              }
              className={cn(
                pillClassName(config.vdevType === id),
                "flex-1 min-w-18",
              )}
            >
              {vdev.label}
            </button>
          ))}
        </div>
        <p className={hintClassName}>{type.description}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label
          id="disks-per-vdev-label"
          htmlFor="disks-per-vdev"
          className={labelClassName}
        >
          Дисков в VDEV (ширина)
        </label>
        <Stepper
          id="disks-per-vdev"
          value={pool.width}
          min={type.minWidth}
          max={Math.max(
            type.minWidth,
            Math.min(type.maxWidth, config.disksTotal),
          )}
          disabled={config.vdevType === "stripe"}
          onChange={(disksPerVdev) => onTopologyChange({ disksPerVdev })}
        />
        <p className={hintClassName}>
          {config.disksTotal}{" "}
          {plural(config.disksTotal, ["диск", "диска", "дисков"])} ÷{" "}
          {pool.width} на VDEV = {pool.vdevCount}{" "}
          {plural(pool.vdevCount, ["VDEV", "VDEV", "VDEV"])}
          {pool.leftover > 0 &&
            ` · ${pool.leftover} ${plural(pool.leftover, ["диск", "диска", "дисков"])} не задействовано`}
          {config.vdevType === "stripe" && " · каждый диск — отдельный VDEV"}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <button
          type="button"
          role="switch"
          aria-checked={config.reserveSpace}
          aria-label="Резервирование (ограничение свободного пространства 15%)"
          onClick={() => onConfigChange({ reserveSpace: !config.reserveSpace })}
          className={cn(
            "flex items-center gap-3 rounded-lg border px-3.5 py-3 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B6CC]",
            config.reserveSpace
              ? "border-[#00B6CC] bg-[#00B6CC]/10"
              : "border-black/8 dark:border-white/14",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "flex size-5 shrink-0 items-center justify-center rounded border",
              config.reserveSpace
                ? "border-[#00B6CC] bg-[#00B6CC] text-black"
                : "border-black/30 dark:border-white/30",
            )}
          >
            {config.reserveSpace && <Check className="size-4" />}
          </span>
          <span className="title-color text-base md:text-lg">
            Резервирование (ограничение свободного пространства 15%)
          </span>
          <span
            aria-hidden="true"
            className="ml-auto shrink-0 text-color text-sm"
          >
            {config.reserveSpace ? "Вкл" : "Выкл"}
          </span>
        </button>
        <p className={hintClassName}>
          Оставлять 15% полезной ёмкости свободными. Резерв применяется после
          вычета чётности и служебных расходов ZFS.
        </p>
      </div>
    </div>
  );
};
