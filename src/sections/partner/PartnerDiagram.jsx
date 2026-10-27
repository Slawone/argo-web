"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";

const CELL_W = 920;
const CELL_H = 450;

const place = ({ left, top, width }) => ({
  left: `${(left / CELL_W) * 100}%`,
  top: `${(top / CELL_H) * 100}%`,
  width: `${(width / CELL_W) * 100}%`,
});

export const PartnerDiagram = ({ title, alt, image, imageLight }) => {
  const { containerVariants, textVariants, imageVariants } = motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container border main-border font-sans font-light overflow-hidden"
    >
      <div className="grid md:grid-cols-[350fr_920fr]">
        <div className="px-4 py-6 md:px-9 md:py-8 xl:px-12.5 xl:pt-12.5 border-b md:border-b-0 md:border-r main-border">
          <motion.h2
            variants={textVariants}
            className="text-color uppercase text-xl lg:text-[28px] leading-[34px]"
          >
            {title}
          </motion.h2>
        </div>
        <motion.div variants={imageVariants}>
          <div
            className="relative"
            style={{ aspectRatio: `${CELL_W} / ${CELL_H}` }}
          >
            <Image
              src={imageLight.src}
              width={imageLight.width}
              height={imageLight.height}
              alt={alt}
              style={place(imageLight.place)}
              className="dark:hidden absolute h-auto max-w-none"
            />
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={alt}
              style={place(image.place)}
              className="hidden dark:block absolute h-auto max-w-none"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
