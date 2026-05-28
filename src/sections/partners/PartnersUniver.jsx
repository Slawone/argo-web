import Image from "next/image";
import { ExternalLink } from "lucide-react";

export const PartnersUniver = () => {
  return (
    <section className="relative page-container section-border font-sans font-light text-color">
      <div className="section-border grid md:grid-cols-[8fr_4fr]">
        <div className="section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14 flex flex-col items-start gap-5">
          <div className="text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase">
            Кейсы
          </div>
          <p className="text-color font-light max-w-150">
            <span className="title-color">Мощный канал дистрибуции</span>{" "}
            формирует необходимую инфраструктуру для масштабирования наших
            решений, обеспечивая бесшовную интеграцию на всех уровнях. Для нашей
            команды важно иметь открытость взаимодействия и чёткие правила
            работы в канале.
            <a
              href="https://companies.rbc.ru/news/TiiPfn6xFB/kak-ustroena-it-distributsiya-v-rossii/"
              className=""
              target="_blank"
            >
              <ExternalLink
                width={18}
                height={18}
                className="inline ml-1 -mt-1 text-black dark:text-white"
              />
            </a>
          </p>
        </div>
        <div className="section-py px-4 md:flex md:justify-center">
          <Image src="/partners/iser.svg" alt="" width={308} height={230} />
        </div>
      </div>
      <div className="section-border py-5 font-sans font-light text-base md:text-[28px] flex items-center justify-center gap-5">
        <p className="text-color">
          <span className="title-color">Технологии</span>
        </p>
        <Image
          src="/partners/aiargo.svg"
          alt=""
          width={120}
          height={50}
          className="mt-2"
        />
      </div>
      <div className="section-border section-py font-sans font-light text-base md:text-[28px] flex justify-center gap-3">
        <p className="text-color">
          <span className="title-color">Работа</span> с университетами
        </p>
      </div>
    </section>
  );
};
