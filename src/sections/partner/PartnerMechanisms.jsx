"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const PartnerMechanisms = ({ items, columnClassName, textClassName }) => {
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
          <div
            key={item.title}
            className={cn("grid md:grid-cols-[300px_minmax(0,1fr)]", columnClassName)}
          >
            <dt className="title-color text-lg md:text-xl lg:text-2xl px-4 pt-5 md:py-8 xl:px-9.25 xl:py-8.25 xl:leading-[33.2px] xl:whitespace-pre md:border-r main-border font-bold">
              {item.title}
            </dt>
            <dd
              className={cn(
                "text-color text-sm leading-5 md:text-base md:leading-6 lg:text-lg lg:leading-7.5 xl:text-[23px] xl:leading-[33.2px] xl:whitespace-pre px-4 pt-2 pb-5 md:py-8 xl:px-9.25 xl:py-8.25",
                textClassName,
              )}
            >
              {item.content ?? item.text}
            </dd>
          </div>
        ))}
      </dl>
    </motion.section>
  );
};
