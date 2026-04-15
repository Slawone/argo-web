import Image from "next/image";
import { Initiators } from "@/ui/svg";

export const Controllers = () => {
  return (
    <section className="page-container section-border">
      <div className="grid md:grid-cols-[7fr_5fr]">
        {/* left */}
        <div className="flex flex-col items-start gap-8 font-light section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14">
          <p className="">
            Нет единой точки отказа. Контроллеры системы хранения обеспечивают балансировку нагрузки и автоматический Failover (аварийное переключение), поддерживая непрерывный доступ к данным.
          </p>
          <ul className="">
            <li className="flex gap-2 items-baseline">
              <Image
                src="/assymetric-arrow.svg"
                width={12}
                height={12}
                alt=""
              />
              Каждый сервер имеет несколько независимых путей к данным.Поддерживается Asymmetric Logical Unit Access (ALUA) — технология, обеспечивающая оптимальный выбор активного пути и мгновенное переключение при сбое.
            </li>
            <li className="flex gap-2 items-baseline">
              <Image
                src="/lightning.svg"
                width={12}
                height={12}
                alt=""
              />
              Непрерывный доступ: потеря кабеля или порта не вызывает простоя.Система выполняет автоматическое перераспределение запросов по всем доступным линиям.
            </li>
            <li className="flex gap-2 items-baseline">
              <Image
                src="/shield.svg"
                width={12}
                height={12}
                alt=""
              />
              Двойная надёжность: каждая операция выполняется по нескольким путям одновременно, что повышает отказоустойчивость и стабильность системы хранения данных.
            </li>
          </ul>
        </div>
        {/* right */}
        <div className="section-py flex justify-center">
          <Initiators />
        </div>
      </div>
    </section>
  );
};
