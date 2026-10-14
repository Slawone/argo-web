"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const GravitonMechanisms = ({ items }) => {
  const { itemVariants } = motionVariants;

  return (
    <motion.section
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container border main-border font-sans font-light"
    >
      <dl className="divide-y divide-black/8 dark:divide-white/14">
        {items.map((item) => (
          <div key={item.title} className="grid md:grid-cols-[300px_1fr]">
            <dt className="title-color text-lg md:text-xl lg:text-2xl px-4 pt-5 md:py-8 md:border-r main-border">
              {item.title}
            </dt>
            <dd className="text-color main-text px-4 pt-2 pb-5 md:py-8">
              {item.text}
            </dd>
          </div>
        ))}
      </dl>
    </motion.section>
  );
};
