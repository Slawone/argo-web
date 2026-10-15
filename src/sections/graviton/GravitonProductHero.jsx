"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const GravitonProductHero = ({ title, subtitle, image, imageLight }) => {
  const { containerVariants, textVariants, imageVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container font-sans"
    >
      <div className="grid md:grid-cols-2 items-start gap-8 px-4 py-10 md:py-20">
        <motion.div variants={imageVariants} className="order-2 md:order-1">
          <Image
            src={imageLight.src}
            width={imageLight.width}
            height={imageLight.height}
            alt={title}
            priority
            className="dark:hidden w-full h-auto md:-mt-[10.5%]"
          />
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={title}
            priority
            className="hidden dark:block w-full h-auto md:-mt-[10.5%]"
          />
        </motion.div>
        <div className="order-1 md:order-2 flex flex-col gap-5 md:gap-8 md:text-right">
          <motion.h1
            variants={textVariants}
            className="title-color font-medium uppercase whitespace-pre-line leading-[1.44] text-2xl md:text-[32px] lg:text-[40px]"
          >
            {title}
          </motion.h1>
          <motion.p variants={textVariants} className="title-color uppercase whitespace-pre-line main-text">
            {subtitle}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};
