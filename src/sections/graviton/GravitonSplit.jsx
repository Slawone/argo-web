"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { motionVariants } from "@/config";

export const GravitonSplit = ({ left, right }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container border main-border relative font-sans font-light text-color"
    >
      <div className="grid md:grid-cols-[59fr_41fr] text-base md:text-xl lg:text-[28px] lg:leading-[1.5]">
        <motion.div
          variants={textVariants}
          className="px-4 py-8 md:py-10 border-b md:border-b-0 md:border-r main-border"
        >
          {left}
        </motion.div>
        <motion.div variants={textVariants} className="px-4 py-8 md:py-10">
          {right}
        </motion.div>
      </div>
      <Plus className="absolute text-color right-[-12] top-[-12]" />
    </motion.section>
  );
};
