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
            <Image
              src="/graviton/logo.svg"
              width={368}
              height={68}
              alt="Гравитон"
              priority
              className="w-56 md:w-72 lg:w-92 h-auto invert dark:invert-0"
            />
          </motion.div>
          <motion.h1
            variants={textVariants}
            className="max-w-138.5 title-color uppercase font-light main-text"
          >
            Компания Гравитон надёжный партнёр в области импортозамещения,
            занимающий лидирующие позиции на рынке российской вычислительной
            техники.
          </motion.h1>
        </div>
        <motion.div
          variants={imageVariants}
          className="hidden md:flex justify-center"
        >
          <Image
            src="/graviton/logo-light.svg"
            width={322}
            height={327}
            alt=""
            className="dark:hidden w-57 lg:w-80.5 h-auto my-12 lg:my-16"
          />
          <Image
            src="/graviton/logo-neon.svg"
            width={448}
            height={461}
            alt=""
            className="hidden dark:block w-80 lg:w-112 h-auto"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
