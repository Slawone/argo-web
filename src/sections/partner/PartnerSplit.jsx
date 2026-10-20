"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const PartnerSplit = ({ left, right, gridClassName, rightClassName }) => {
  const { containerVariants, textVariants } = motionVariants;
  const cellClassName = "px-4 py-8 md:py-10 xl:pt-7.25 xl:pb-9.5 xl:px-9.25";

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container border main-border relative font-sans font-light text-color"
    >
      <div
        className={cn(
          "grid md:grid-cols-[59fr_41fr] text-base md:text-xl lg:text-[28px] lg:leading-normal",
          gridClassName,
        )}
      >
        <motion.div
          variants={textVariants}
          className={cn(cellClassName, "border-b md:border-b-0 md:border-r main-border")}
        >
          {left}
        </motion.div>
        <motion.div variants={textVariants} className={cn(cellClassName, rightClassName)}>
          {right}
        </motion.div>
      </div>
      <Plus className="absolute text-color right-[-12] top-[-12]" />
    </motion.section>
  );
};
