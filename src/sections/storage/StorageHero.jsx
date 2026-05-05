"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { OrderForm } from "@/components";
import { Button } from "@/ui";

export const StorageHero = () => {
  const { containerVariants, textVariants, imageVariants } = motionVariants;
  const [formOpen, setformOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const srcPath =
    mounted && resolvedTheme === "dark"
      ? "/storage-hero-dark.svg"
      : "/storage-hero-light.svg";

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container section-border px-4 section-py font-light"
    >
      <div className="flex flex-col items-center max-w-216.25 mx-auto">
        <div className="flex items-center gap-2.5 mb-7">
          <span className="main-text accent-color uppercase border rounded-full px-4 py-0.5 md:px-4 md:py-1 lg:px-5">
            New
          </span>
          <motion.span
            variants={textVariants}
            className="text-color leading-7.5 text-[12px] md:text-lg lg:text-xl"
          >
            Реестровая запись №5850 от 20.09.2019
          </motion.span>
        </div>
        <motion.p
          variants={textVariants}
          className="max-w-170 mx-auto uppercase text-color leading-7.5 text-sm md:text-lg lg:text-xl text-center"
        >
          Программный комплекс хранения данных (СХД АРГО) с гибкой архитектурой
          от ARGO.TECH. Решение для программно-аппаратных комплексов хранения
          данных (Node Appliance), совместимое с оборудованием российских
          производителей. Поддержка нескольких уровней отказоустойчивости СХД.
        </motion.p>
        <motion.div variants={imageVariants} className="mb-5 mx-auto">
          <Image
            src={srcPath}
            alt="storage"
            width={668}
            height={228}
            className=""
          />
        </motion.div>
        <Button onClick={() => setformOpen(true)}>Запросить цену</Button>
      </div>
      <OrderForm isOpen={formOpen} onClose={() => setformOpen(false)} />
    </motion.section>
  );
};
