"use client";

import { Plus } from 'lucide-react';
import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const TextGrid = ({ items }) => {
  const { containerVariants, textVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section-border max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 place-items-center font-sans relative">
        {items.map(item => (
          <div key={item.title} className="px-5 h-60 md:h-75 lg:h-85 xl:h-70 flex flex-col justify-center md:pt-15 md:justify-start border-b last:border-b-0 border-black/8 dark:border-white/14 md:border-b-0 md:odd:border-r md:nth-[-n+2]:border-b">
            <motion.h3
            variants={textVariants}
            className="title-color font-bold mb-3 text-lg md:text-xl lg:text-2xl">{item.title}</motion.h3>
            <motion.p
            variants={textVariants}
            className="text-color text-sm md:text-md lg:text-lg">{item.label}</motion.p>
          </div>
        ))}
        <Plus
          className='absolute text-color right-[-12] bottom-[-12] md:right-1/2 md:bottom-1/2 md:translate-x-1/2 md:translate-y-1/2'
        />
      </div>
    </motion.section>
  );
};