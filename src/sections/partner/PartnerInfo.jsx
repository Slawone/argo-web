"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const PartnerInfo = ({ model, className, textClassName, children }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "page-container px-4 py-10 md:py-16 xl:py-25 text-center font-sans font-light text-base md:text-[28px] xl:leading-[33.2px] relative",
        className,
      )}
    >
      <motion.p variants={textVariants} className={cn("max-w-245 mx-auto text-color", textClassName)}>
        {model && (
          <>
            <span className="text-black dark:text-white uppercase text-sm md:text-[24px] font-normal">
              {model}:
            </span>{" "}
          </>
        )}
        {children}
      </motion.p>
    </motion.section>
  );
};
