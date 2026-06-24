"use client";
import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    image: "/storage/controller.svg",
    label: "Визуализация",
    icon: "/storage/meter.svg",
    title: "Визуализация",
    text: "Отображение состояния оборудования и программных модулей в едином интерфейсе. Интуитивное управление с встроенной защитой повышает прозрачность и контроль за системой хранения",
  },
  {
    image: "/storage/pool.svg",
    label: "Диагностика",
    icon: "/storage/chart.svg",
    title: "Диагностика",
    text: "Модуль расширенной самодиагностики, позволяющий выполнять мониторинг работоспособности компонентов программного обеспечения с точностью до сервиса",
  },
  {
    image: "/storage/file-system.svg",
    label: "Интерфейс",
    icon: "/storage/arrow-up.svg",
    title: "Интерфейс",
    text: "Графический интерфейс для управления комплексом хранения данных, позволяет создавать, удалять пулы из установленных жестких дисков, менять размер созданных пулов и томов",
  },
];

export const HardwareSection = () => {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const handleSelect = (index) => {
    if (index === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 150);
  };

  return (
    <section className="page-container section-border">
      <div className="">
        <div className="">
          <Image src={steps[active].image} width={618} height={100} alt="" />
        </div>
        <div className="">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              aria-label={step.title}
            >
              <Image
                src={step.icon}
                width={36}
                height={36}
                alt=""
              />
            </button>
          ))}
        </div>
        
      </div>
    </section>
  );
};
