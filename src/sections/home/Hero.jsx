"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { useOrderForm } from "@/components";
import { Button } from "@/ui";
import { Lines } from "@/ui";

export function Hero({ className }) {
  const { containerVariants, itemVariants, textVariants, imageVariants } =
    motionVariants;

  const { open } = useOrderForm();

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative"
    >
      <div className="section-py">
        <div className="flex flex-col items-center px-4">
          <motion.h1
            variants={textVariants}
            className="font-sans text-center title-color font-medium uppercase leading-[130%] text-[24px] md:text-7xl mb-2.5 md:mb-5"
          >
            Больше, чем <br /> система хранения данных
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-color font-light main-text text-center mb-5 md:mb-10"
          >
            ARGO.TECH разрабатывает сертифицированное программное обеспечение
            для хранения и обработки <br /> данных с 2016 года. Решения для
            корпоративных и госструктур: безопасность, надежность, соответствие
            стандартам РФ
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5"
          >
            <Button variant="primary" onClick={() => open("Связаться")}>
              Связаться
            </Button>
            <Link href={"/storage"}>
              <Button variant="secondary">Хранение</Button>
            </Link>
          </motion.div>
        </div>
        <Lines className="md:-mt-10 w-screen" />
      </div>
    </motion.section>
  );
}
