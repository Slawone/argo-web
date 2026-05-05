'use client';

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/ui";
import { OrderForm } from "@/components";

const images = [
  {
    source: "/partners/rosa.svg",
    alt: "rosa",
  },
  {
    source: "/partners/gorizont.svg",
    alt: "gorizont",
  },
  {
    source: "/partners/arenadata.svg",
    alt: "arenadata",
  },
  {
    source: "/partners/rubackup.svg",
    alt: "rubackup",
  },
  {
    source: "/partners/beresta.svg",
    alt: "beresta",
  },
  {
    source: "/partners/orion.svg",
    alt: "orion",
  },
];

export const Partnerships = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formOpen, setformOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

    const srcPath =
    mounted && resolvedTheme === "dark"
      ? "/partnership-dark.svg"
      : "/partnership-light.svg";

  return (
    <section className="page-container section-border">
      <div className="grid md:grid-cols-2">
        {/* left */}
        <div className="md:border-r md:border-r-black/8 md:dark:border-white/14">
          <div className="">
            <h2 className="text-base md:text-xl lg:text-[28px] font-light uppercase leading-none title-color pt-10 pl-4 pb-10 border-b md:border-b-black/8 dark:border-b-white/14">
              Партнерства
            </h2>
          </div>
          <div className="grid grid-cols-2">
            {images.map((item, index) => (
              <div
                key={index}
                className="flex justify-center py-10 border-b odd:border-r border-black/8 dark:border-white/14"
              >
                <Image
                  src={item.source}
                  alt={item.alt}
                  width={110}
                  height={50}
                  className="max-w-full"
                />
              </div>
            ))}
          </div>
          <div className="border-b border-black/8 dark:border-white/14 md:border-0 pl-4 py-5">
            <Button onClick={() => setformOpen(true)}>Стать партнером</Button>
          </div>
        </div>
        {/* right */}
        <div className="">
          <div className="px-4 mb-10 font-light leading-7.5 text-sm md:text-lg lg:text-xl text-color border-b border-black/8 md:border-white/14 section-py">
            <span className="title-color">Развивая экосистему СХД АРГО</span>, мы решаем ключевые проблемы конечных
            заказчиков, помогая сделать правильный выбор
          </div>
          <div className="px-4 md:min-h-87.5 flex items-center">
            <Image src={srcPath} width={560} height={206} alt="partnership" /> 
          </div>
        </div>
      </div>
      <OrderForm isOpen={formOpen} onClose={() => setformOpen(false)} />
    </section>
  );
};
