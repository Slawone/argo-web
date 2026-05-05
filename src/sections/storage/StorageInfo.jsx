"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { motionVariants } from "@/config";

export const StorageInfo = () => {
  const {containerVariants, textVariants } = motionVariants;
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container section-border section-py text-center text-color font-sans font-light text-base md:text-[28px] relative"
    >
      <motion.p variants={textVariants}>
        <span className="text-black dark:text-white uppercase text-sm md:text-[24px]">
          СХД АРГО
        </span>{" "}
        обеспечивает интуитивное и безопасное управление всеми компонентами системы <br /> хранения данных
      </motion.p>
      <Plus className="absolute text-color right-[-12] top-[-12]" />
    </motion.section>
  )
}
