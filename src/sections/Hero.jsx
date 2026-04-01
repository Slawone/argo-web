"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
      className="section-border px-4 dark:bg-[url('/hero-bg.jpg')] bg-cover bg-center relative md:flex md:items-center"
    >
      <div className="absolute inset-0 dark:bg-black/70 z-0"></div>

      <div className=" mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="py-10 md:py-20 relative z-20">
          <motion.h1
            variants={textVariants}
            className="font-sans title-color font-bold uppercase mb-5 text-xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-10 xl:leading-16"
          >
            Больше, чем <br /> система хранения данных
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="max-w-150 mb-10 leading-7.5 text-sm md:text-lg lg:text-xl text-color"
          >
            ARGO.TECH разрабатывает сертифицированное программное обеспечение
            для хранения и обработки данных с 2016 года. Решения для
            корпоративных и госструктур: безопасность, надежность, соответствие
            стандартам РФ
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5"
          >
            <Link href={"/storage"} className="pointer-events-none">
              <Button variant="primary">Storage</Button>
            </Link>
            <Button variant="secondary" className="pointer-events-none">
              Связаться
            </Button>
          </motion.div>
        </div>
        <motion.div
          variants={imageVariants}
          className="relative flex items-center justify-center rounded-full
            bg-[radial-gradient(circle,rgba(0,182,204,0.6)_0%,rgba(0,182,204,0.6)_35%,transparent_70%)]
            dark:bg-[radial-gradient(circle,rgba(0,182,204,0.8)_0%,rgba(0,182,204,0.4)_35%,transparent_70%)] z-0"
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
