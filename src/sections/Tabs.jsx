"use client";

import { useState } from "react";
import { Plus, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const Tabs = ({ items }) => {
  const { containerVariants, textVariants } = motionVariants;
  const [activeTab, setActiveTab] = useState("storage");

  const tabs = [
    {
      id: "storage",
      label: "Storage",
    },
    {
      id: "s3",
      label: "S3",
    },
    {
      id: "monitoring",
      label: "Monitoring",
    },
    {
      id: "ai",
      label: "AI",
    },
  ];

  const tabContent = {
    storage: (
      <>
        <div className="border-b md:border-b-0 md:border-r border-black/8 dark:border-white/14 px-5 py-6 md:py-10">
          <span className="text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase inline-block mb-5">
            Кейсы
          </span>
          <p
            className="max-w-135 md:mb-10 text-[12px] sm:text-sm md:text-[18px]"
          >
            <a
              className="flex flex-wrap gap-1"
              href="https://www.cnews.ru/news/line/2025-08-22_argotech_vnedrila_shd_v_obedinennuyu?ysclid=mihcye6dfp825576861"
              target="_blank"
            >
              <span>Объединенная судостроительная корпорация</span>
              <ExternalLink className="w-4 h-4 title-color" />
            </a>{" "}
            добилась двукратного ускорения{" "}
            <span className="title-color">Veeam Backup</span> благодаря
            использованию системы хранения данных{" "}
            <span className="title-color uppercase">Storage</span> с полезным
            объёмом свыше 1 ПБ.
          </p>
        </div>
        <div className="px-5 pt-6 pb-10 md:py-10">
          <p className="text-[12px] sm:text-sm md:text-[18px]">
            Продукты <span className="title-color uppercase">Argo.tech</span>{" "}
            разрабатываются в России и сопровождаются{" "}
            <span className="title-color uppercase">до 10 лет</span>,
            обеспечивая стабильную работу инфраструктуры на всём жизненном
            цикле.
          </p>
        </div>
      </>
    ),
    s3: (
      <>
        <div className="border-r border-black/8 dark:border-white/14 px-5 py-10">
          <span className="text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase uppercase inline-block mb-5">
            Кейсы
          </span>
          <p className="max-w-135 mb-10">
            Локальное объектное хранилище с поддержкой{" "}
            <a
              href="https://www.cnews.ru/news/line/2025-11-25_argotech_predstavila_lokalnoe?ysclid=mihhibz4fu353566861"
              target="_blank"
            >
              S3 API
              <ExternalLink />
            </a>{" "}
            . Поддерживает уровни репликации{" "}
            <span className="title-color">
              RF=1/2/3 и Erasure Coding Reed–Solomon (10,4)
            </span>
            .
          </p>
        </div>
        <div className="px-5 py-15">
          <p>
            Экономия места при хранении больших объёмов данных.{" "}
            <span className="title-color">S3-хранилище</span>
            работает без ограничений по вложенным каталогам и обеспечивает
            быстрый доступ к данным с высокой надёжностью
          </p>
        </div>
      </>
    ),
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="section-border max-w-7xl mx-auto relative"
    >
      <div className="relative text-color">
        <div className="grid md:grid-cols-[7fr_5fr] items-center">
          {tabContent[activeTab]}
        </div>
        <div className="absolute bottom-0 left-4 mt-4 border rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={cn(
                "cursor-pointer",
                activeTab === tab.id
                  ? "bg-[#171717] dark:bg-[#ededed] border-transparent text-white dark:text-[#0a0a0a] hover:bg-[#383838] dark:hover:bg-[#ccc] rounded-full w-22 py-2 transition-colors"
                  : "border-black/8 text-[#0a0a0a] dark:text-white hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] rounded-full w-22 py-2",
              )}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
