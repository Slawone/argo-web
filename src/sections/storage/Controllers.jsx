import Image from "next/image";
import { Initiators } from "@/ui/svg";

export const Controllers = () => {
  return (
    <section className="page-container section-border">
      <div className="grid md:grid-cols-[7fr_5fr]">
        {/* left */}
        <div className="flex flex-col items-start gap-8 font-light section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14">
          <p className="text-lg md:text-xl lg:text-2xl font-light text-color">
            <span className="title-color">Нет единой точки отказа.</span>{" "}
            Контроллеры системы хранения обеспечивают балансировку нагрузки и
            автоматический Failover (аварийное переключение), поддерживая
            непрерывный доступ к данным.
          </p>
          <ul className="main-text font-light text-color flex flex-col gap-4 max-w-150">
            <li className="flex gap-2 items-baseline">
              <Image
                src="/assymetric-arrow.svg"
                width={12}
                height={12}
                alt=""
              />
              <p>
                Каждый сервер имеет несколько независимых путей к данным.
                Поддерживается{" "}
                <span className="title-color">
                  Asymmetric Logical Unit Access
                </span>{" "}
                (ALUA) - технология, обеспечивающая оптимальный выбор активного
                пути и мгновенное переключение при сбое.
              </p>
            </li>
            <li className="flex gap-2 items-baseline">
              <Image src="/lightning.svg" width={12} height={12} alt="" />
              <p>
                <span className="title-color">Непрерывный доступ:</span> потеря
                кабеля или порта не вызывает простоя.Система выполняет
                автоматическое перераспределение запросов по всем доступным
                линиям.
              </p>
            </li>
            <li className="flex gap-2 items-baseline">
              <Image src="/shield.svg" width={12} height={12} alt="" />
              <p>
                <span className="title-color">Двойная надёжность:</span> каждая
                операция выполняется по нескольким путям одновременно, что
                повышает отказоустойчивость и стабильность системы хранения
                данных.
              </p>
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
