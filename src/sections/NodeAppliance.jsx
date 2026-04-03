"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { World } from "@/ui/svg";
import Globe from "@/components/Globe";

export const NodeAppliance = () => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section-border font-sans main-text text-color flex flex-col gap-10 items-center px-4 pt-5 md:pt-10"
    >
      <motion.h2
        variants={textVariants}
        className="text-center md:text-[18px] max-w-205"
      >
        СХД от ARGO.TECH на базе архитектуры Storage Node Appliance
        масштабируется без простоев. Каждый узел - готовое решение «из
        коробки», которое легко добавить в систему при росте данных.
        Надёжность и удобство в каждой детали.
      </motion.h2>
      {/* <World className="w-[60%] h-auto" /> */}
      <Globe />
    </motion.section>
  );
};
