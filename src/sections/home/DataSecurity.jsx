"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { EcoSystem, WebStorage } from "@/ui";

export const DataSecurity = () => {
  const { containerVariants, textVariants, imageVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container text-color main-text section-border grid md:grid-cols-2"
    >
      <div className="py-5 px-4 grid grid-rows-[auto_1fr] md:border-r border-black/8 dark:border-white/14 md:py-10 md:px-4">
        <div className="">
          <motion.div variants={textVariants} className="mb-2">
            Широкий портфель
          </motion.div>
          <motion.p variants={textVariants} className="mb-5">
            <span className="title-color">Экосистема</span> ИТ-решений для
            хранения, защиты и управления данными. Продукты{" "}
            <span className="title-color">ARGO.TECH</span> создаются командой,
            которая с 2016 года работает с инфраструктурой, понимает задачи
            инженеров и помогает повышать отказоустойчивость и стабильность
            систем.
          </motion.p>
        </div>
        <EcoSystem className="w-full h-auto" />
      </div>
      <div className="py-5 px-4 grid grid-rows-[auto_1fr] md:py-10 md:px-4">
        <div className="">
          <motion.div variants={textVariants} className="mb-2">
            Безопасная разработка и защита данных
          </motion.div>
          <motion.p variants={textVariants} className="mb-5">
            <span className="title-color">Более 10 лет</span> лет создаём
            средства информационной безопасности. ARGO.TECH лицензирована ФСТЭК
            России (Л050-00107-00/00581308 от 13.08.2021), что подтверждает
            соответствие требованиям.
          </motion.p>
        </div>
        <div>
          <WebStorage className="w-full h-auto" />
        </div>
      </div>
    </motion.section>
  );
};
