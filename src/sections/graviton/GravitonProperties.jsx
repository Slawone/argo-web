"use client";

import { motion } from "framer-motion";
import { motionVariants, gravitonVariants } from "@/config";

export const GravitonProperties = () => {
  const { containerVariants, textVariants } = motionVariants;
  const { properties } = gravitonVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container py-5 md:py-10 font-sans font-light"
    >
      {/* subgrid: строки общие для всех колонок, поэтому заголовки стоят на одном уровне */}
      <div className="grid md:grid-cols-3 gap-5 lg:gap-x-9.5">
        {properties.map((column, index) => (
          <ul
            key={index}
            className="flex flex-col gap-5 md:grid md:grid-rows-subgrid md:row-span-3 md:gap-7 px-4 md:px-9 py-6 md:py-8 border main-border"
          >
            {column.map((item) => (
              <li key={item.title} className="flex flex-col gap-1 md:gap-2">
                <motion.h3
                  variants={textVariants}
                  className="title-color text-lg md:text-xl lg:text-2xl font-medium"
                >
                  {item.title}
                </motion.h3>
                <motion.p variants={textVariants} className="text-color main-text">
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
