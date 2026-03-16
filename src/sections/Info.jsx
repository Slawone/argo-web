"use client";

import { motion } from "framer-motion";
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
      className="section-border max-w-7xl mx-auto section-py text-center font-sans md:text-xl">
      <motion.p
        variants={textVariants}
      >
        <span className="text-black dark:text-white font-bold">{firstWord}</span>{" "}
        <span className="text-color">{restText}</span>
      </motion.p>
    </motion.section>
  );
};
