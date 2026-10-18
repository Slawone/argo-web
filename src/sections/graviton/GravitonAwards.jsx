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
      <ul className="grid md:grid-cols-3 xl:flex xl:justify-between">
        {awards.map((award) => (
          <motion.li
            key={award.title}
            variants={textVariants}
            className="flex items-center gap-6 xl:gap-6.5 px-4 xl:px-0 py-4 md:py-8"
          >
            <Image
              src={award.image}
              width={award.width}
              height={award.height}
              alt=""
              style={{ "--award-w": `${award.width}px` }}
              className="shrink-0 w-14 md:w-(--award-w) h-auto"
            />
            <div>
              <h3 className="title-color uppercase text-base md:text-lg lg:text-xl lg:leading-6.25 mb-1 font-medium xl:whitespace-pre">
                {award.title}
              </h3>
              {award.accent && (
                <p className="uppercase text-sm md:text-base lg:text-lg text-[#D40032] drop-shadow-[0_0_12px_rgba(212,0,50,0.8)]">
                  {award.accent}
                </p>
              )}
              <p className="title-color text-sm md:text-base lg:text-lg leading-5 md:leading-6 lg:leading-6.25 xl:whitespace-pre">
                {award.text}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
