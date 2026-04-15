"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { Pools } from "@/ui";

export const Control = () => {
    const { containerVariants, textVariants } =
    motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container section-border"
    >
      <div className="grid lg:grid-cols-[5fr_7fr]">
        {/* Левая колонка */}
        <div className="font-light section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14">
          <motion.h2
            variants={textVariants}
            className="text-base md:text-xl lg:text-[28px] font-light uppercase leading-none title-color sticky top-30"
          >
            Контроль
          </motion.h2>
        </div>
        {/* Правая колонка */}
        <div className="flex flex-col items-start gap-8 section-py px-4">
          <motion.div
            variants={textVariants}
            className="text-color main-text font-light"
          >
            <span className="title-color text-lg md:text-xl lg:text-2xl md:mb-5">
              Мониторинг системы –{" "}
            </span>
            <br /> статистика, состояние, сервисы, сеть из одного окна
          </motion.div>
          <motion.div
            variants={textVariants}
            className="leading-7.5 text-sm md:text-lg lg:text-xl title-color"
          >
            Write Bandwidth: All <span className="accent-color">pools</span>
          </motion.div>
          <Pools />
        </div>
      </div>
    </motion.section>
  );
};
