"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/utils";

const steps = [
  {
    image: "/storage/controller.svg",
    label: "Визуализация",
    icon: "/storage/meter.svg",
    iconActive: "/storage/meter-active.svg",
    title: "Визуализация",
    titleColor: "text-[#34C759]",
    text: "Отображение состояния оборудования и программных модулей в едином интерфейсе. Интуитивное управление с встроенной защитой повышает прозрачность и контроль за системой хранения",
  },
  {
    image: "/storage/pool.svg",
    label: "Диагностика",
    icon: "/storage/chart.svg",
    iconActive: "/storage/chart-active.svg",
    title: "Диагностика",
    titleColor: "text-[#007AFF]",
    text: "Модуль расширенной самодиагностики, позволяющий выполнять мониторинг работоспособности компонентов программного обеспечения с точностью до сервиса",
  },
  {
    image: "/storage/file-system.svg",
    label: "Интерфейс",
    icon: "/storage/arrow-up.svg",
    iconActive: "/storage/arrow-up-active.svg",
    title: "Интерфейс",
    titleColor: "text-[#007AFF]",
    text: "Графический интерфейс для управления комплексом хранения данных, позволяет создавать, удалять пулы из установленных жестких дисков, менять размер созданных пулов и томов",
  },
];

export const HardwareSection = () => {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleSelect = (index) => {
    setActive(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <>
      <section className="md:hidden page-container section-border section-py px-4 flex flex-col gap-15">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-base font-light uppercase leading-none title-color mb-5">
              {step.title}
            </h3>
            <p className="text-color main-text font-light mb-10">{step.text}</p>
            <Image
              src={step.image}
              width={300}
              height={100}
              alt=""
              className="w-[80%] self-center"
            />
          </div>
        ))}
      </section>
      <section className="hidden md:block page-container section-border px-4">
        <div className="flex justify-between">
          <div className="section-py flex flex-col items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y:  10 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.05 }}
                className="w-[70%] xl:w-[90%] xl:self-center"
              >
                <Image
                  src={steps[active].image}
                  width={618}
                  height={100}
                  alt=""
                  className="w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-10 lg:gap-15 xl:gap-20 relative section-py">
            {/* <div className="hidden md:block absolute z-0 -left-15 top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-linear-to-b from-[#34C759] to-[#007AFF]" /> */}
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-15 z-10">
                <button
                  onClick={() => handleSelect(i)}
                  aria-label={step.title}
                  className="mt-1 cursor-pointer absolute -left-19.5"
                >
                  <Image
                    src={active === i ? step.iconActive : step.icon}
                    width={36}
                    height={36}
                    alt=""
                  />
                </button>

                <div className="max-w-105">
                  <h3
                    className={cn(
                      active === i ? step.titleColor : "text-color",
                      "text-lg md:text-xl lg:text-2xl font-light uppercase leading-none mb-5",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="text-color main-text font-light">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
