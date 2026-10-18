"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const GravitonHero = () => {
  const { containerVariants, textVariants, imageVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container overflow-hidden"
    >
      <div className="grid md:grid-cols-2 items-center px-4 py-10 md:py-0">
        <div className="flex flex-col items-center gap-6 md:gap-10 text-center">
          <motion.div variants={textVariants}>
            {/* белый логотип в тёмной теме, красный (#D40032) в светлой */}
            <Image
              src="/graviton/logo-red.svg"
              width={368}
              height={68}
              alt="Гравитон"
              priority
              className="dark:hidden w-56 md:w-72 lg:w-92 h-auto"
            />
            <Image
              src="/graviton/logo.svg"
              width={368}
              height={68}
              alt=""
              priority
              className="hidden dark:block w-56 md:w-72 lg:w-92 h-auto"
            />
          </motion.div>
          <motion.h1
            variants={textVariants}
            className="title-color uppercase font-light text-sm md:text-base lg:text-lg leading-normal"
          >
            {/* переносы как в макете — только на широких экранах */}
            Компания Гравитон надёжный партнёр в области импортозамещения,
            <br className="hidden lg:inline" /> занимающий лидирующие позиции на
            рынке российской
            <br className="hidden lg:inline" /> вычислительной техники.
          </motion.h1>
        </div>
        <motion.div
          variants={imageVariants}
          className="hidden md:flex justify-end"
        >
          {/* Контейнер в пропорциях неоновой картинки (448×461, с запасом под свечение):
              светлая версия стоит внутри на месте шестиугольника, поэтому высота
              блока не меняется при переключении темы */}
          <div className="relative w-80 lg:w-md aspect-448/461">
            <Image
              src="/graviton/logo-light.svg"
              width={322}
              height={327}
              alt=""
              className="dark:hidden absolute left-[14.06%] top-[15.6%] w-[71.875%] h-auto"
            />
            <Image
              src="/graviton/logo-neon.svg"
              width={448}
              height={461}
              alt=""
              className="hidden dark:block absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
