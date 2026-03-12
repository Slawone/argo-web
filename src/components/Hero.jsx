"use client";

import Link from "next/link";
import { Button } from "@/components";

export function Hero() {
  return (
    <section className="overflow-hidden border border-gray-800 mix-blend-screen mx-auto max-w-300 grid grid-cols-1 grid-rows-[1fr] relative">
      <div
        className="absolute inset-0 -z-20 animated"
        style={{
          background:
            "radial-gradient(80% 100% at 0% 100%, #f97316 50%, #67f0ff 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 60%)",
          maskImage: "linear-gradient(to top, black 0%, transparent 60%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
      <div className="hidden md:block">
        <div className="grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="border-b border-r border-gray-800 mix-blend-screen  last:border-r-0 aspect-square"
            />
          ))}
        </div>
      </div>
      <div className="border-b border-gray-800 mix-blend-screen text-center py-10 px-2 md:py-20">
        <h1 className="uppercase text-white text-xl mb-5 md:text-2xl lg:text-3xl xl:text-4xl">
          Больше, чем система хранения данных
        </h1>
        <p className="max-w-200 text-center mx-auto mb-10 text-sm md:text-md lg:text-lg">
          ARGO.TECH с 2016 года разрабатывает отечественные сертифицированные
          программные решения для хранения и обработки данных, используемые в
          корпоративных и государственных ИТ-системах
        </p>
        <div className="flex justify-center gap-5">
          <Link href={"/storage"}>
            <Button>Storage</Button>
          </Link>
          <Button>Связаться</Button>
        </div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="border-b border-r border-gray-800 mix-blend-screen  last:border-r-0 aspect-square"
            />
          ))}
        </div>
        <div className="grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="border-b border-r border-gray-800 mix-blend-screen  last:border-r-0 aspect-square"
            />
          ))}
        </div>
        <div className="grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="border-r border-gray-800 mix-blend-screen last:border-r-0 aspect-square"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
