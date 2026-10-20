"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const PartnerHero = ({ logo, visual, children }) => {
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
              src={logo.light}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
              priority
              className="dark:hidden w-56 md:w-72 lg:w-92 h-auto"
            />
            <Image
              src={logo.dark}
              width={logo.width}
              height={logo.height}
              alt=""
              priority
              className="hidden dark:block w-56 md:w-72 lg:w-92 h-auto"
            />
          </motion.div>
          <motion.h1
            variants={textVariants}
            className="title-color uppercase font-light text-sm md:text-base lg:text-lg leading-normal"
          >
            {children}
          </motion.h1>
        </div>
        <motion.div
          variants={imageVariants}
          className="hidden md:flex justify-end"
        >
          {visual}
        </motion.div>
      </div>
    </motion.section>
  );
};
