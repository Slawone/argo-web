"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { motionVariants } from "@/config";

export const Info = ({ text }) => {
  const {containerVariants, textVariants } = motionVariants;

  if (!text) return null;

  const [firstWord, ...rest] = text.trim().split(/\s+/);
  const restText = rest.join(" ");

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section-border section-py text-center font-sans text-base md:text-[28px] relative"
    >
      <motion.p variants={textVariants}>
        <span className="text-black dark:text-white font-bold uppercase text-sm md:text-[24px]">
          {firstWord}
        </span>{" "}
        <span className="text-color">{restText}</span>
      </motion.p>
      <Plus className="absolute text-color right-[-12] top-[-12]" />
    </motion.section>
  );
};
