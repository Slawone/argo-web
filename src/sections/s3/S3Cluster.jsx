"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";

const boxClassName =
  "border main-border px-4 py-6 md:px-9 md:py-7.5 xl:min-h-124";
const headingClassName =
  "title-color font-medium text-xl xl:text-2xl leading-8.5";
const textClassName = "text-color font-light text-base xl:text-xl xl:leading-5.5";

const Ring = ({ value }) => {
  const radius = 26;
  const length = 2 * Math.PI * radius;

  return (
    <svg
      viewBox="0 0 60 60"
      className="size-13 xl:size-14 shrink-0 -rotate-90 overflow-visible dark:drop-shadow-[0_0_5px_#7129ff]"
      aria-hidden="true"
    >
      <circle cx="30" cy="30" r={radius} fill="none" strokeWidth="2.5" className="stroke-[#7129ff]/25" />
      <circle
        cx="30"
        cy="30"
        r={radius}
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={`${(length * value) / 100} ${length}`}
        className="stroke-[#7129ff]"
      />
      <text
        x="30"
        y="30"
        textAnchor="middle"
        dominantBaseline="central"
        className="rotate-90 origin-center fill-[#1f1f1f] dark:fill-[#ededed] text-base font-normal"
      >
        {value}
      </text>
    </svg>
  );
};

export const S3Cluster = ({ types, nodes, status }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container font-sans grid gap-6 md:grid-cols-3 xl:gap-9.5"
    >
      <motion.div variants={textVariants} className={boxClassName}>
        <h3 className={headingClassName}>{types.title}</h3>
        <div className="mt-5 flex flex-col gap-5">
          {types.items.map((item) => (
            <div key={item.title}>
              <h4 className={headingClassName}>{item.title}</h4>
              <ul className={textClassName}>
                {item.lines.map((line) => (
                  <li key={line} className="pl-4 -indent-4 first:mt-2">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={textVariants} className={boxClassName}>
        <h3 className={headingClassName}>{nodes.title}</h3>
        <div className="mt-5 flex flex-col gap-5">
          {nodes.items.map((item) => (
            <div key={item.title}>
              <h4 className={headingClassName}>{item.title}</h4>
              <ul className={textClassName}>
                {item.lines.map((line) => (
                  <li key={line} className="pl-4 -indent-4 first:mt-2">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={textVariants}
        className={`${boxClassName} flex flex-col gap-7.5 md:px-4 xl:pt-9`}
      >
        {status.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-4 rounded-lg border main-border px-4 py-5 xl:px-5 xl:h-22.75"
          >
            <div className="min-w-0">
              <p className="flex items-baseline gap-3 text-sm text-[#1f1f1f] dark:text-[#ededed]">
                <span>
                  argo.tech/siii/<span className="text-[#004ede]">{item.name}</span>
                </span>
                <span className="text-xs text-[#707070] dark:text-[#a1a1a1]">(1m ago)</span>
              </p>
              <p className="mt-1 text-base whitespace-nowrap text-[#1f1f1f] dark:text-[#ededed]">
                {item.sync}
              </p>
            </div>
            <Ring value={item.value} />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};
