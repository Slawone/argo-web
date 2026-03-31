"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/ui";

const tabs = [
  {
    id: "storage",
    label: "Storage",
    leftText: (
      <>
        Объединённая судостроительная корпорация (ОСК) существенно оптимизировала процессы резервного копирования данных. Благодаря внедрению системы хранения данных АРГО с полезным объёмом свыше 1 ПБ удалось добиться двукратного ускорения работы <span className="title-color">Veeam Backup.</span>
      </>
    ),
    rightText: (
      <>
        Продукты{" "}
        <span className="title-color uppercase">Argo.tech</span>{" "}
        разрабатываются в России и сопровождаются
        <span className="title-color uppercase"> до 10 лет</span>,
        обеспечивая стабильную работу инфраструктуры на всём жизненном цикле.
      </>
    ),
  },
  {
    id: "s3",
    label: "S3",
    leftText: (
      <>
        Локальное объектное хранилище с поддержкой{" "}
        <a
          href="https://www.cnews.ru/news/line/2025-11-25_argotech_predstavila_lokalnoe?ysclid=mihhibz4fu353566861"
          className="inline-flex glex-wrap gap-1 title-color"
          target="_blank"
        >
          S3 API <ExternalLink className="w-4 h-4 title-color" />
        </a>
        . Поддерживает уровни репликации{" "}
        <span className="title-color font-bold">
          RF=1/2/3 и Erasure Coding Reed–Solomon (10,4).
        </span>
      </>
    ),
    rightText: (
      <>
        Экономия места при хранении больших объёмов данных.{" "}
        <span className="title-color font-bold">S3-хранилище</span> работает без
        ограничений по вложенным каталогам и обеспечивает быстрый доступ к
        данным с высокой надёжностью.
      </>
    ),
  },
  {
    id: "monitoring",
    label: "Monitoring",
    leftText: (
      <>
        Метрополитен доверяет нам критическую{" "}
        <a
          className="inline-flex glex-wrap gap-1 title-color"
          href="https://www.cnews.ru/news/line/2021-05-13_rossijskij_proizvoditel?ysclid=mihhyxf3ht361827532"
          target="_blank"
        >
          инфраструктуру <ExternalLink className="w-4 h-4 title-color" />
        </a>{" "}
        в качестве альтернативы иностранного производителя.
      </>
    ),
    rightText: (
      <>
        Нам доверяют <span className="title-color font-bold">с 2015 года</span>,
        хранение - управление - обработку и мониторинг систем и вычислений ИИ.
      </>
    ),
  },
  {
    id: "ai",
    label: "AI",
    leftText: (
      <>
        Автоматизация документов на базе{" "}
        <a
          className="inline-flex glex-wrap gap-1 title-color"
          href="https://companies.rbc.ru/news/HvgmtDeJGo/ii-sokratil-podgotovku-dokumentov-s-2-dnej-do-74-sekund/"
          target="_blank"
        >
          ИИ <ExternalLink className="w-4 h-4 title-color" />
        </a>{" "}
        сократила подготовку{" "}
        <span className="title-color font-bold">с 2 дней до 74 секунд</span> —
        меньше рисков, больше эффективности.
      </>
    ),
    rightText: (
      <>
        <a
          className="inline-flex glex-wrap gap-1 title-color"
          href="https://companies.rbc.ru/news/UvW8JznLj8/ii-sokratil-srok-zakryitiya-vakansij-s-28-do-14-dnej/"
          target="_blank"
        >
          Автоматизация подбора персонала{" "}
          <ExternalLink className="w-4 h-4 title-color" />
        </a>{" "}
        на базе ИИ{" "}
        <span className="title-color font-bold">
          ускоряет найм и снижает затраты.
        </span>{" "}
        Автоматизация сократила подготовку с 2 дней до 74 секунд — меньше
        рисков, больше эффективности.{" "}
        <a
          className="inline-flex glex-wrap gap-1 title-color"
          href="https://companies.rbc.ru/news/JCe1TlzNXp/ii-na-proizvodstve-povyishenie-distsiplinyi-i-sokraschenie-izderzhek-na-20/"
          target="_blank"
        >
          Автоматизация производственных процессов{" "}
          <ExternalLink className="w-4 h-4 title-color" />
        </a>{" "}
        повышает эффективность и сокращает издержки.
      </>
    ),
  },
];

export const Tabs = () => {
  const [active, setActive] = useState(tabs[0]);
  const containerRef = useRef(null);

  return (
    <section className="section-border mx-auto relative">
      <div className="md:grid md:grid-cols-[7fr_5fr] relative">
        {/* left */}
        <span className="absolute left-4 top-5 hidden md:block text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase">
          Кейсы
        </span>
        <div className="w-full px-4 py-5 md:border-r md:border-r-black/8 md:dark:border-white/14 h-40 md:h-70 lg:h-80 md:pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="text-sm md:text-md lg:text-lg text-color "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {active.leftText}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* right */}
        <div className="w-full px-4 py-5 mb-6 md:mb-0 h-40 md:h-70 lg:h-80 md:pt-20 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "right"}
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm md:text-md lg:text-lg mb-5 text-color md:mb-10">
                {active.rightText}
              </p>
            </motion.div>
          </AnimatePresence>
          {active.id === "storage" && (
            <Button variant="primary" className="lg:max-w-1/2 md:absolute bottom-10">
              Перейти к продукту
              <Image
                className="invert dark:invert-0"
                src="/stars.svg"
                alt="Логотип ARGO.TECH"
                width={20}
                height={20}
                priority
              />
            </Button>
          )}
        </div>
      </div>
      {/* tabs */}
      <div className="w-full px-4 relative bottom-3 left-1/2 -translate-x-1/2 md:absolute md:max-w-6/12 lg:max-w-5/12 xl:max-w-4/12 md:left-0 md:translate-x-0 md:bottom-10">
        <div
          ref={containerRef}
          className="flex border border-black/8 dark:border-white/[.145] rounded-full p-1 overflow-hidden"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => setActive(tab)}
              className={`cursor-pointer relative flex-1 px-4 py-2 text-sm rounded-full transition text-center z-10 ${
                active.id === tab.id
                  ? "bg-[#171717] dark:bg-[#ededed] border-transparent text-white dark:text-[#0a0a0a] hover:bg-[#383838] dark:hover:bg-[#ccc]"
                  : "text-[#0a0a0a] dark:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
