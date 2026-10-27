"use client";

import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const PartnerTable = ({
  head,
  rows,
  gridClassName,
  columnClassNames = [],
  headColumnClassNames = [],
  minWidthClassName = "min-w-160",
  className,
  cellClassName,
}) => {
  const { containerVariants, textVariants } = motionVariants;

  const renderRow = (cells, key, classNames) => (
    <div key={key} className={cn("grid border-b main-border last:border-b-0", gridClassName)}>
      {cells.map((cell, index) => (
        <div
          key={index}
          className={cn(
            "flex px-4 border-r main-border last:border-r-0",
            cellClassName,
            classNames[index],
          )}
        >
          {cell}
        </div>
      ))}
    </div>
  );

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("page-container font-sans", className)}
    >
      <motion.div variants={textVariants} className="overflow-x-auto">
        <div className={cn("border main-border", minWidthClassName)}>
          {head && renderRow(head, "head", headColumnClassNames)}
          {rows.map((row, index) => renderRow(row, index, columnClassNames))}
        </div>
      </motion.div>
    </motion.section>
  );
};
