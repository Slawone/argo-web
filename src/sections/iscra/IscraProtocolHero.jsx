"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const IscraProtocolHero = ({ name, title, nameClassName, children }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container font-sans overflow-hidden"
    >
      <div className="grid md:grid-cols-2 items-start gap-6 px-4 pt-6 pb-10 md:pt-16 md:pb-24 xl:pt-0 xl:pb-30.5">
        <motion.p
          variants={textVariants}
          aria-hidden="true"
          className={cn(
            "font-bold text-[120px] sm:text-[180px] md:text-[190px] lg:text-[260px] xl:text-[330px] leading-[0.8] xl:pl-10 xl:mt-19.25",
            nameClassName,
          )}
        >
          {name}
        </motion.p>
        <div className="flex flex-col gap-3 xl:gap-4 xl:pt-21">
          <motion.h1
            variants={textVariants}
            className="text-[#1f1f1f] dark:text-[#ededed] uppercase font-medium text-3xl md:text-4xl lg:text-5xl xl:text-[54px] xl:leading-[1.2]"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-[#1f1f1f] dark:text-[#ededed] uppercase font-light text-sm md:text-base lg:text-lg xl:text-[22px] xl:pl-14.5"
          >
            {children}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};
