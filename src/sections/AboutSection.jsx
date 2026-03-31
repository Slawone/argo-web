"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";

export const AboutSection = () => {
  const { containerVariants, itemVariants, textVariants } =
    motionVariants;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section-border text-color px-4 grid md:grid-cols-[7fr_5fr] items-center"
    >
      <div className="py-5 md:py-10 md:border-r md:border-r-black/8 md:dark:border-r-white/14">
        <div className="w-25 md:w-30 text-center text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase mb-5">
          О Компании
        </div>
        <motion.p
          variants={textVariants}
          className="wrap-balance text-sm md:text-base lg:text-lg"
        >
          <span className="title-color">ООО “АРГО ТЕХНОЛОДЖИ ИСТ”</span> это
          компания разработчик программного обеспечения, работающий с передовыми
          технологиями, таким и как искусственный интеллект и системы хранения
          данных .
        </motion.p>
      </div>
      <div className="py-5 md:py-10 md:pl-4">
        <motion.p
          variants={textVariants}
          className="mb-5 text-sm md:text-base lg:text-lg"
        >
          Мы - эффективная команда разработчиков, программных комплексов, систем
          управления и мониторинга.
        </motion.p>
        <motion.div variants={itemVariants} className="flex items-center gap-5">
          <Link
            className="flex items-center gap-2 text-[14px] lg:text-[16px] bg-[#171717] dark:bg-[#ededed] border-transparent text-white dark:text-[#0a0a0a] hover:bg-[#383838] dark:hover:bg-[#ccc] rounded-full px-3 py-1 md:hover:scale-110 transition-all lg:px-5 lg:py-2"
            href={"/req"}
          >
            Реквизиты <ExternalLink width={18} height={18} />
          </Link>
          <Link
            className="flex items-center gap-2 text-[12px] md:text-[14px] lg:text-[16px] bg-[#171717] dark:bg-[#ededed] border-transparent text-white dark:text-[#0a0a0a] hover:bg-[#383838] dark:hover:bg-[#ccc] rounded-full px-3 py-1 md:hover:scale-110 transition-all lg:px-5 lg:py-2"
            href={"/documents"}
          >
            Для МИНЦИФРЫ <ExternalLink width={18} height={18} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
