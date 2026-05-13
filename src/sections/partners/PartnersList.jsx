"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const PartnersList = ({ logos }) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="page-container section-border relative overflow-hidden section-py">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent" />

      <div className="overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{
            x: ["0px", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center px-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="h-auto w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
