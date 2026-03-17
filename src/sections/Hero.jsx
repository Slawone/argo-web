"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/ui";
import { motionVariants } from "@/config";

export function Hero() {
  const { containerVariants, itemVariants, textVariants, imageVariants } =
    motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mx-auto min-h-[calc(100vh-204px)] dark:bg-[url('/hero-bg.jpg')] bg-cover bg-center relative md:flex md:items-center"
    >
      <div className="absolute inset-0 dark:bg-black/70 z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="py-10 md:py-20 relative z-20">
          <motion.h1
            variants={textVariants}
            className="font-sans text-black font-bold dark:text-white uppercase mb-5 text-xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Больше, чем <br /> система хранения данных
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="max-w-150 md:max-w-150 mb-10 text-sm md:text-md lg:text-lg text-color"
          >
            <span className="text-black dark:text-white">ARGO.TECH</span> с 2016
            года разрабатывает отечественные сертифицированные программные
            решения для хранения и обработки данных, используемые в
            корпоративных и государственных ИТ-системах
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5"
          >
            <Link href={"/storage"}>
              <Button variant="primary" className="w-30">
                Storage
              </Button>
            </Link>
            <Button variant="secondary" className="w-30">
              Связаться
            </Button>
          </motion.div>
          <Plus className="absolute text-color top-0 md:top-10 left-[-10]" />
        </div>
        <motion.div
          variants={imageVariants}
          className="relative flex items-center justify-center rounded-full
            bg-[radial-gradient(circle,rgba(0,182,204,0.35)_0%,rgba(0,182,204,0.2)_35%,transparent_70%)] z-0"
        >
          <Image
            src="/triangle.svg"
            alt="triangle"
            width={320}
            height={180}
            priority
            className="relative z-10 mb-20 md:mb-0 w-55 md:w-80"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
