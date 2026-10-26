"use client";

import { Plus } from 'lucide-react';
import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const TextGrid = ({
  items,
  titleClassName = "title-color",
  className,
  cellClassName,
  labelClassName,
}) => {
  const { containerVariants, textVariants } = motionVariants;
  const count = items.length;
  const odd = count % 2 === 1;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("page-container section-border", odd && "md:border-r-0!", className)}
    >
      <div className="grid md:grid-cols-2 font-sans main-text">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "px-5 py-10 flex flex-col justify-start border-b last-of-type:border-b-0 border-black/8 dark:border-white/14 md:border-b-0 md:odd:border-r relative",
              (index < count - 2 || (odd && index >= count - 2)) && "md:border-b",
              odd && "md:even:border-r md:last-of-type:border-b",
              cellClassName,
              item.cellClassName,
            )}
          >
            <motion.h3
              variants={textVariants}
              className={cn(titleClassName, "mb-3 text-lg md:text-xl lg:text-2xl font-medium")}
            >
              {item.title}
            </motion.h3>
            <motion.p
              variants={textVariants}
              className={cn("text-color", labelClassName)}
            >
              {item.label}
            </motion.p>
            {index === 0 && (
              <Plus
                className="absolute text-color right-0 bottom-0 translate-x-1/2 translate-y-1/2"
              />
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
};