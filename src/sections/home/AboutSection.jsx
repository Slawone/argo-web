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
      className="section-border text-color font-sans px-4 grid md:grid-cols-[7fr_5fr] items-start"
    >
      <div className="py-5 md:py-10 md:border-r md:border-r-black/8 md:dark:border-r-white/14">
        <div className="w-25 md:w-30 text-center text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase mb-5">
          О Компании
        </div>
        <motion.p
          variants={textVariants}
          className="wrap-balance text-sm md:text-base lg:text-lg font-light leading-6 max-w-162.5"
        >
          <span className="title-color">ООО “АРГО ТЕХНОЛОДЖИ ИСТ”</span>{" "}
          разрабатывает программные комплексы для современных систем хранения
          данных и прикладных решений в области искусственного интеллекта. Наш
          программный комплекс служит интеллектуальным ядром СХД - он
          автоматизирует управление данными, гарантирует их отказоустойчивость и
          безопасность, а также обеспечивает линейное масштабирование под
          растущие задачи бизнеса.
        </motion.p>
      </div>
      <div className="py-5 md:py-10 md:pl-4">
        <div className="w-25 md:w-30 text-center text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase mb-5 hidden md:block invisible">
          О Компании
        </div>
        <motion.p
          variants={textVariants}
          className="mb-5 text-sm md:text-base lg:text-lg font-light leading-6"
        >
          Мы создаем решения с учетом политики импортозамещения и стандартов
          критической информационной инфраструктуры.
        </motion.p>
        <motion.div variants={itemVariants} className="flex items-center gap-5">
          <a
            className="button button-primary flex-center"
            href="/docs/Арго_Реквизиты__2026.pdf"
            target="_blank"
          >
            Реквизиты <ExternalLink width={18} height={18} />
          </a>
          <Link
            className="button button-primary flex-center"
            href={"/documents"}
          >
            Для МИНЦИФРЫ <ExternalLink width={18} height={18} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
