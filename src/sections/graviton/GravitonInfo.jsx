"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const GravitonInfo = ({ model, children }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container section-py px-4 text-center font-sans font-light text-base md:text-[28px] relative"
    >
      <motion.p variants={textVariants} className="max-w-245 mx-auto text-color">
        <span className="text-black dark:text-white uppercase text-sm md:text-[24px]">
          {model}:
        </span> {children}
      </motion.p>
    </motion.section>
  );
};
