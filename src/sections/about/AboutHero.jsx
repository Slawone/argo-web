"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const AboutHero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const srcPath =
    mounted && resolvedTheme === "dark"
      ? "/about/hero-dark.svg"
      : "/about/hero-light.svg";
  
  const mb = 
    mounted && resolvedTheme === "dark"
      ? ""
      : "mb-5 md:mb-15";

  return (
    <>
      <section className="page-container section-border flex justify-center">
        <Image 
          src={srcPath}
          width={888}
          height={405}
          alt=""
          className={mb}
        />
      </section>
      <section
        className="page-container section-border text-color font-sans px-4 grid md:grid-cols-[7fr_5fr] items-start"
      >
        <div className="py-5 md:py-10 md:border-r md:border-r-black/8 md:dark:border-r-white/14">
          <div className="w-25 md:w-30 text-center text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase mb-5">
            Миссия
          </div>
          <p
            className="wrap-balance text-sm md:text-base lg:text-lg font-light leading-6 max-w-162.5"
          >
            <span className="title-color">Меняем правила игры:</span> создаем инновационные программные решения, чтобы Российский бизнес работал на собственных технологиях - стабильно, безопасно. эффективно. Мы не просто пишем код - мы строим цифровую инфраструктуру будущего. <span className="title-color">Каждый наш продукт</span> - это шаг к технологической независимости, возможность для компаний работать без сбоев, защищать данные и уверенно развиваться в условиях глобальных вызовов.
          </p>
        </div>
        <div className="py-5 md:py-10 md:pl-4">
          <div className="w-25 md:w-30 text-center text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase mb-5 hidden md:block invisible">
            О Компании
          </div>
          <p
            className="mb-5 text-sm md:text-base lg:text-lg font-light leading-6"
          >
            Мы создаем решения с учетом политики импортозамещения и стандартов
            критической информационной инфраструктуры.
          </p>
          <div
            className="flex items-center gap-5"
          >
            <a
              className="button button-primary flex-center"
              href="https://www.cnews.ru/news/line/2025-11-20_argotech_vpervye_predstavila?ysclid=mpv1gkokj5920313653"
              target="_blank"
            >
              Подробнее <ExternalLink width={18} height={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
