"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="section-border max-w-7xl mx-auto px-4 text-color grid md:grid-cols-[7fr_5fr] items-center xl:items-end">
      <div className="py-5 md:py-10 md:border-r md:border-r-black/8 md:dark:border-r-white/14">
        <div className="w-25 md:w-30 text-center text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase mb-5">
          О Компании
        </div>
        <p className="text-xl md:text-[24px] font-light wrap-balance md:*:pr-4">
          <span className="title-color">ООО “АРГО ТЕХНОЛОДЖИ ИСТ”</span>это
          компания разработчик программного обеспечения, работающий с передовыми
          технологиями, таким и как искусственный интеллект и системы хранения
          данных .
        </p>
      </div>
      <div className="py-5 md:py-10 md:pl-4">
        <p className="md:text-[18px] mb-5">
          Мы - эффективная команда разработчиков, программных комплексов, систем
          управления и мониторинга.
        </p>
        <div className="flex items-center gap-5">
          <Link
            className="flex items-center gap-2 text-[14px] lg:text-[16px] bg-[#171717] dark:bg-[#ededed] border-transparent text-white dark:text-[#0a0a0a] hover:bg-[#383838] dark:hover:bg-[#ccc] rounded-full px-3 py-1 md:hover:scale-110 transition-all lg:px-5 lg:py-2"
            href={"/req"}
          >
            Реквизиты <ExternalLink width={18} height={18} />{" "}
          </Link>
          <Link
            className="flex items-center gap-2 text-[14px] lg:text-[16px] bg-[#171717] dark:bg-[#ededed] border-transparent text-white dark:text-[#0a0a0a] hover:bg-[#383838] dark:hover:bg-[#ccc] rounded-full px-3 py-1 md:hover:scale-110 transition-all lg:px-5 lg:py-2"
            href={"/documents"}
          >
            Для МИНЦИФРЫ <ExternalLink width={18} height={18} />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};
