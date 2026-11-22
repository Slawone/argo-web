"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const AboutHero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const srcPath =
    mounted && resolvedTheme === "dark"
      ? "/about/hero-dark.svg"
      : "/about/hero-light.svg";

  return (
    <>
      <section className="page-container py-5 md:py-15 grid place-items-center px-4">
        <Image src={srcPath} width={888} height={265} alt="" className="" />
      </section>
      <section className="page-container py-5 md:py-10 xl:pt-15.25 xl:pb-12.75">
        <div className="grid border main-border md:grid-cols-[747fr_523fr] text-[#1f1f1f] dark:text-[#a1a1a1]">
          <div className="border-b main-border px-4 py-6 md:border-b-0 md:border-r xl:px-9.25 xl:pt-7.25 xl:pb-9.25">
            <span className="mb-5 inline-flex h-10 items-center rounded-full border border-[#00B6CC] px-4 text-sm font-light text-[#00B6CC]">
              Миссия
            </span>
            <p className="text-sm font-light leading-6 md:text-base lg:text-lg xl:text-[20.5px]">
              <span className="font-medium text-[#1f1f1f] dark:text-white">
                Меняем правила игры:
              </span>{" "}
              создаем инновационные программные решения, чтобы Российский бизнес
              работал на собственных технологиях — стабильно, безопасно,
              эффективно. Мы не просто пишем код — мы строим цифровую
              инфраструктуру будущего.{" "}
              <span className="font-medium text-[#1f1f1f] dark:text-white">
                Каждый наш продукт
              </span>{" "}
              — это шаг к технологической независимости, возможность для
              компаний работать без сбоев, защищать данные и уверенно
              развиваться в условиях глобальных вызовов.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 px-4 py-6 xl:px-9.25 xl:pt-24.5 xl:pb-11">
            <p className="text-sm font-light leading-6 md:text-base lg:text-lg xl:text-[20.5px]">
              <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
                Мы — одна из первых команд в России
              </span>
              , разработавшая классическую систему хранения данных. Наша цель —
              создать для России инструменты для уверенного роста.
            </p>
            <a
              className="button button-primary flex-center rounded-lg!"
              href="https://www.cnews.ru/news/line/2025-11-20_argotech_vpervye_predstavila?ysclid=mpv1gkokj5920313653"
              target="_blank"
              rel="noopener noreferrer"
            >
              Подробнее <ExternalLink width={16} height={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
