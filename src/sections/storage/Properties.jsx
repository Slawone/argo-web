"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { propertiesVariants } from "@/config";
import { li } from "framer-motion/client";

export const Properties = () => {
  const { containerVariants, textVariants } = motionVariants;
  const { propVariant1, propVariant2, propVariant3 } = propertiesVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative page-container section-border font-sans main-text text-color font-light"
    >
      <motion.h3
        variants={textVariants}
        className="absolute left-4 top-10 text-base md:text-xl lg:text-[28px] font-light uppercase leading-none title-color "
      >
        Свойства
      </motion.h3>
      <div className="grid md:grid-cols-3">
        <div className="px-4 py-5 pt-20 md:pt-30">
          <ul className="flex flex-col gap-2 md:gap-5">
            {propVariant1.map((item, index) => (
              <li key={index} className="md:h-25 flex flex-col md:gap-2">
                <motion.h3
                  variants={textVariants}
                  className="text-lg md:text-xl lg:text-2xl font-light title-color"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={textVariants}
                  className="main-text font-light text-color"
                >
                  {item.text}
                </motion.p>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-black/8 dark:border-white/14 md:border-r md:border-l py-5 px-4 pt-5 md:pt-30">
          <ul className="flex flex-col gap-2 md:gap-5">
            {propVariant2.map((item, index) => (
              <li key={index} className="md:h-25 flex flex-col md:gap-2">
                <motion.h3
                  variants={textVariants}
                  className="text-lg md:text-xl lg:text-2xl font-light title-color"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={textVariants}
                  className="main-text font-light text-color"
                >
                  {item.text}
                </motion.p>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 py-5 pt-5 md:pt-30">
          <ul className="flex flex-col gap-2 md:gap-5">
            {propVariant3.map((item, index) => (
              <li key={index} className="md:h-25 flex flex-col md:gap-2">
                <motion.h3
                  variants={textVariants}
                  className="text-lg md:text-xl lg:text-2xl font-light title-color"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={textVariants}
                  className="main-text font-light text-color"
                >
                  {item.text}
                </motion.p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};
