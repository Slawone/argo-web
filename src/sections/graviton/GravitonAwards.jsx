"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants, gravitonVariants } from "@/config";

export const GravitonAwards = () => {
  const { containerVariants, textVariants } = motionVariants;
  const { awards } = gravitonVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container font-sans font-light"
    >
      <ul className="grid md:grid-cols-3">
        {awards.map((award) => (
          <motion.li
            key={award.title}
            variants={textVariants}
            className="flex items-start gap-6 px-4 py-4 md:py-8"
          >
            <Image
              src={award.image}
              width={award.width}
              height={award.height}
              alt=""
              className="shrink-0 w-14 md:w-auto h-auto"
            />
            <div>
              <h3 className="title-color uppercase text-base md:text-lg lg:text-xl mb-1 font-medium">
                {award.title}
              </h3>
              {award.accent && (
                <p className="uppercase text-sm md:text-base lg:text-lg text-[#D40032] drop-shadow-[0_0_12px_rgba(212,0,50,0.8)]">
                  {award.accent}
                </p>
              )}
              <p className="text-color main-text">
                {award.text}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
