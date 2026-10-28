"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

const POINTS = "162.5,0 325,305 0,305";

const STEP = 2.5;

const buildLayers = (falloff, reach) => {
  const fade = (distance) => Math.max(0, 1 - distance / (reach + STEP)) ** 2;
  const layers = [];
  const count = Math.round(reach / STEP);
  for (let index = 1; index <= count; index += 1) {
    const distance = index * STEP;
    const outer = falloff(distance) * fade(distance);
    const inner = falloff(distance + STEP) * fade(distance + STEP);
    layers.push({
      width: distance * 2,
      opacity: Number((1 - (1 - outer) / (1 - inner)).toFixed(3)),
    });
  }
  return layers.reverse();
};

const glowLayers = buildLayers(
  (distance) => 0.9 * Math.exp(-distance / 7) + 0.22 * Math.exp(-distance / 40),
  110,
);
const shadowLayers = buildLayers(
  (distance) => 0.55 * Math.exp(-distance / 12) + 0.38 * Math.exp(-distance / 50),
  130,
);

const Triangle = ({ className }) => (
  <svg
    viewBox="0 0 325 305"
    aria-hidden="true"
    className={cn("h-auto overflow-visible", className)}
  >
    <g className="dark:hidden" strokeLinejoin="round" fill="none">
      {shadowLayers.map((layer) => (
        <polygon
          key={layer.width}
          points={POINTS}
          strokeWidth={layer.width}
          strokeOpacity={layer.opacity}
          className="stroke-black"
        />
      ))}
    </g>
    <g className="hidden dark:inline" strokeLinejoin="round" fill="none">
      {glowLayers.map((layer) => (
        <polygon
          key={layer.width}
          points={POINTS}
          strokeWidth={layer.width}
          strokeOpacity={layer.opacity}
          className="stroke-white"
        />
      ))}
    </g>
    <polygon points={POINTS} className="fill-white dark:fill-black" />
  </svg>
);

const titleClassName =
  "title-color uppercase font-medium text-3xl md:text-4xl lg:text-5xl xl:text-[55px] xl:leading-[1.5]";
const textClassName =
  "text-color uppercase font-extralight text-sm md:text-base lg:text-lg xl:text-[20.5px] xl:leading-[1.5]";

export const StorageSlogan = ({ left, right }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container font-sans"
    >
      <div className="relative grid gap-8 px-4 pt-6 pb-10 md:grid-cols-[1fr_auto] md:items-center md:gap-x-10 md:px-10 md:py-14 xl:block xl:min-h-125.5 xl:p-0">
        <div className="flex flex-col items-center gap-3 text-center md:col-start-1 md:row-start-1 md:items-start md:text-left xl:absolute xl:left-12.25 xl:top-30.75 xl:w-124 xl:gap-0">
          <motion.h1 variants={textVariants} className={titleClassName}>
            {left.title}
          </motion.h1>
          <motion.p variants={textVariants} className={textClassName}>
            {left.text}
          </motion.p>
        </div>
        <div className="flex justify-center md:col-start-2 md:row-span-2 md:row-start-1 xl:absolute xl:left-1/2 xl:top-34.75 xl:-translate-x-1/2">
          <Triangle className="w-48 sm:w-60 md:w-60 lg:w-72 xl:w-81.25" />
        </div>
        <div className="flex flex-col items-center gap-3 text-center md:col-start-1 md:row-start-2 md:items-start md:text-left xl:absolute xl:right-12.5 xl:items-end xl:text-right xl:top-30.75 xl:w-92 xl:gap-0">
          <motion.h2 variants={textVariants} className={titleClassName}>
            {right.title}
          </motion.h2>
          <motion.p variants={textVariants} className={textClassName}>
            {right.text}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};
