"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const PartnerHero = ({ logo, title, visual, className, children }) => {
  const { containerVariants, textVariants, imageVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container overflow-hidden"
    >
      <div className={cn("grid md:grid-cols-2 items-center px-4 py-10 md:py-0", className)}>
        <div
          className={cn(
            "flex flex-col items-center gap-6 text-center",
            title ? "md:pl-10 xl:pl-10.5 xl:pb-10" : "md:gap-10",
          )}
        >
          {logo && (
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
          )}
          {title && (
            <motion.h1
              variants={textVariants}
              className="text-[#1f1f1f] dark:text-[#ededed] uppercase font-medium whitespace-pre-line text-2xl leading-[1.45] md:text-[32px] xl:text-[40px] xl:leading-[59px]"
            >
              {title}
            </motion.h1>
          )}
          {title ? (
            <motion.p
              variants={textVariants}
              className="text-[#1f1f1f] dark:text-[#ededed] uppercase font-light text-sm md:text-base lg:text-lg leading-normal"
            >
              {children}
            </motion.p>
          ) : (
            <motion.h1
              variants={textVariants}
              className="title-color uppercase font-light text-sm md:text-base lg:text-lg leading-normal"
            >
              {children}
            </motion.h1>
          )}
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
