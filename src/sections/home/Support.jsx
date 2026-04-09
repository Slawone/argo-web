"use client"

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { ArgoChat, ArgoForm, ArgoStorage } from "@/ui";

export const Support = () => {
  const { containerVariants, textVariants, imageVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative page-container section-border font-sans main-text text-color"
    >
      <motion.h3
        variants={textVariants}
        className=" mx-4 text-center mt-5 text-base md:text-xl lg:text-[28px] md:absolute md:w-150 lg:w-200 md:left-1/2 md:-translate-x-1/2 md:mt-7"
      >
        <span className="title-color">
          Расширенная поддержка без лишних затрат.
        </span>{" "}
        Управление через контроль состояния и аналитику инфраструктуры в едином
        интерфейсе.
      </motion.h3>
      <div className="grid md:grid-cols-3 text-center">
        <div className="px-4 py-5 flex flex-col items-center md:pt-30 lg:pt-40">
          <ArgoStorage className="w-3/4 h-auto mb-5 md:w-full md:hover:-translate-y-1 transition-all" />
          <motion.p variants={textVariants}>Визуализация состояния оборудования и нагрузки</motion.p>
        </div>
        <div className="border-black/8 dark:border-white/14 md:border-r md:border-l px-4 flex flex-col items-center md:pt-30 lg:pt-40">
          <ArgoForm className="w-3/4 h-auto mb-5 md:w-full md:hover:-translate-y-1 transition-all" />
          <motion.p variants={textVariants}>Управление через личные кабинеты</motion.p>
        </div>
        <div className="px-4 py-5 flex flex-col items-center md:pt-30 lg:pt-40">
          <ArgoChat className="w-3/4 h-auto mb-5 md:w-full md:hover:-translate-y-1 transition-all" />
          <motion.p variants={textVariants}>
            Поддержка в режиме реального времени{" "}
            <span className="title-color">реальными</span> инженерами
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};
