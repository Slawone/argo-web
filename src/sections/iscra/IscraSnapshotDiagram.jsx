"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

const diagrams = {
  snapshot: {
    label: "Snapshot",
    srcLight: "/atomicsnapshot/snapshot-light.png",
    src: "/atomicsnapshot/snapshot.png",
    width: 748,
    height: 183,
  },
  clone: {
    label: "Clone",
    srcLight: "/atomicsnapshot/clone-light.png",
    src: "/atomicsnapshot/clone.png",
    width: 747,
    height: 322,
  },
  arc: {
    label: "ARC L1 / L2",
    srcLight: "/arc/arc_l1-light.png",
    src: "/arc/arcl1-dark.png",
    width: 746,
    height: 312,
    imageCellClassName: "px-4 pt-6 pb-10 md:pt-8 md:pb-14 xl:px-9.25 xl:pt-8 xl:pb-14",
  },
  withoutslog: {
    label: "Without SLOG",
    srcLight: "/slog/withoutslog-light.png",
    src: "/slog/withoutslog-darkpng.png",
    width: 921,
    height: 452,
    imageCellClassName: "px-4 pt-6 pb-10 md:pt-8 md:pb-14 xl:px-9.25 xl:pt-8 xl:pb-14",
  },
  withslog: {
    label: "With SLOG",
    srcLight: "/slog/withslog-light.png",
    src: "/slog/withslog-dark.png",
    width: 921,
    height: 452,
    imageCellClassName: "px-4 pt-6 pb-10 md:pt-8 md:pb-14 xl:px-9.25 xl:pt-8 xl:pb-14",
  },
  mrumfu: {
    label: "MRU / MFU",
    srcLight: "/mrumfu/withoutslog-light.png",
    src: "/mrumfu/withoutslog-dark.png",
    width: 745,
    height: 308,
    imageCellClassName: "px-4 pt-6 pb-10 md:pt-8 md:pb-14 xl:px-9.25 xl:pt-8 xl:pb-14",
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
          className={cn(
            "px-4 py-6 md:py-8 xl:px-9.25 xl:py-8.25",
            diagram.imageCellClassName,
          )}
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
