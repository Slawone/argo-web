"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const PartnerInfo = ({ model, className, children }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "page-container px-4 pt-10 pb-11 md:pt-16 md:pb-18 xl:pt-25 xl:pb-27.5 text-center font-sans font-light text-base md:text-[28px] xl:leading-[33.2px] relative",
        className,
      )}
    >
      <motion.p variants={textVariants} className="max-w-245 mx-auto text-color">
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
