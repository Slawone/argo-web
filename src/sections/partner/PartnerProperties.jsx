"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const PartnerProperties = ({ items, titleClassName = "title-color", className }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("page-container font-sans font-light", className)}
    >
      <div className="grid md:grid-cols-3 gap-5 lg:gap-x-9.5">
        {items.map((column, index) => (
          <ul
            key={index}
            className="flex flex-col gap-5 md:grid md:grid-rows-subgrid md:row-span-3 md:gap-7 px-4 md:px-9 py-6 md:py-8 xl:gap-6.75 xl:px-9.25 xl:pt-7.25 xl:pb-19.75 border main-border"
          >
            {column.map((item) => (
              <li key={item.title} className="flex flex-col gap-1 md:gap-2 xl:gap-2.5">
                <motion.h3
                  variants={textVariants}
                  className={cn(
                    titleClassName,
                    "text-lg md:text-xl lg:text-2xl xl:leading-5.5 font-medium xl:whitespace-nowrap",
                  )}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={textVariants}
                  className="text-color text-sm md:text-base lg:text-lg xl:text-xl leading-5 md:leading-6 xl:leading-5.5 xl:whitespace-pre"
                >
                  {item.text}
                </motion.p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </motion.section>
  );
};
