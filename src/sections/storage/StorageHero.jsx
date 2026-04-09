"use client";

import Image from "next/image"
import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const StorageHero = () => {
  const { containerVariants, textVariants, imageVariants } =
    motionVariants;

  return (
    <motion.section variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
      className="page-container section-border px-4 section-py font-light"
    >
      <div className="flex flex-col max-w-216.25 mx-auto">
        <div className="flex items-center gap-2.5 mb-7">
          <span className="main-text accent-color uppercase border rounded-full px-4 py-0.5 md:px-4 md:py-1 lg:px-5">New</span>
          <motion.span variants={textVariants} className="text-color leading-7.5 text-[12px] md:text-lg lg:text-xl">Реестровая запись №5850 от 20.09.2019</motion.span>
        </div>
        <motion.div variants={imageVariants} className="mb-5 mx-auto">
          <Image src="/storage-hero.svg" alt="storage" width={668} height={228} className="" />
        </motion.div>
        <motion.p variants={textVariants} className="max-w-170 mx-auto uppercase text-color leading-7.5 text-sm md:text-lg lg:text-xl text-center">
          Программный комплекс хранения данных (СХД АРГО) с гибкой архитектурой от ARGO.TECH. Решение для программно-аппаратных комплексов хранения данных (Node Appliance), совместимое с оборудованием российских производителей. Поддержка нескольких уровней отказоустойчивости СХД.
        </motion.p>
      </div>
    </motion.section>
  )
}