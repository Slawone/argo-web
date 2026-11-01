"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";

const diagrams = {
  snapshot: {
    label: "Snapshot",
    srcLight: "/atomicsnapshot/snapshot-light.svg",
    src: "/atomicsnapshot/snapshot-dark.svg",
    width: 748,
    height: 183,
  },
  clone: {
    label: "Clone",
    srcLight: "/atomicsnapshot/clone-light.svg",
    src: "/atomicsnapshot/clone-dark.svg",
    width: 747,
    height: 322,
  },
};

export const IscraSnapshotDiagram = ({ variant = "snapshot" }) => {
  const { containerVariants, textVariants } = motionVariants;
  const diagram = diagrams[variant];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container border main-border font-sans"
    >
      <div className="grid md:grid-cols-[300px_minmax(0,1fr)]">
        <motion.h2
          variants={textVariants}
          className="title-color px-4 pt-5 pb-2 md:py-8 xl:px-9.25 xl:py-8.25 text-lg md:text-xl lg:text-2xl font-bold uppercase md:border-r main-border"
        >
          {diagram.label}
        </motion.h2>
        <motion.div
          variants={textVariants}
          className="px-4 py-6 md:py-8 xl:px-9.25 xl:py-8.25"
        >
          <Image
            src={diagram.srcLight}
            width={diagram.width}
            height={diagram.height}
            alt={diagram.label}
            className="h-auto w-full dark:hidden"
          />
          <Image
            src={diagram.src}
            width={diagram.width}
            height={diagram.height}
            alt={diagram.label}
            className="hidden h-auto w-full dark:block"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
