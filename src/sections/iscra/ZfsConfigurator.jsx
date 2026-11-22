import { TechnologyLines as DesignLines } from "@/components/TechnologyLines";
import { PoolRaidDiagram } from "./PoolRaidDiagram";
import { cn } from "@/utils";

export const ZfsConfigurator = ({ className }) => (
  <section
    className={cn(
      "page-container my-8 grid border main-border text-color md:my-12.75 md:grid-cols-[618fr_652fr] xl:min-h-94.75",
      className,
    )}
  >
    <div className="min-w-0 border-b main-border px-4 py-8 md:border-b-0 md:border-r xl:px-9.25 xl:pt-7.25 xl:pb-9.25">
      <h2 className="mb-5.75 text-2xl font-medium uppercase text-[#1f1f1f] tracking-[-1.5px] dark:text-[#ededed] xl:text-[30px] xl:leading-[33.2px]">
        Конфигуратор
      </h2>
      <p className="text-base font-light md:text-lg xl:text-[20.5px] xl:leading-7.5">
        <DesignLines
          lines={[
            "Информация носит ознакомительный характер. Расчёт конфигуратора даёт",
            "ориентировочное представление о полезном объёме и структуре vdev.",
          ]}
        />
      </p>
    </div>
    <div className="min-w-0">
      <p className="border-b main-border px-4 py-8 text-base font-light md:text-lg xl:px-9.25 xl:py-7.25 xl:text-[20.5px] xl:leading-6">
        <DesignLines
          lines={[
            "Конфигуратор RAID-Z для Native ZFS ISCRA STORAGE помогает рассчитать",
            "ориентировочный полезный объём готового хранилища для заданного",
            "количества дисков и выбранного уровня избыточности. Он показывает,",
            "сколько места останется под данные после вычета ёмкости, отведённой",
            "под чётность, и предупреждает, если конфигурация приводит к",
            "неэффективному использованию дисков.",
          ]}
        />
      </p>
      <PoolRaidDiagram />
    </div>
  </section>
);
