import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Separator_3 } from "@/ui/svg";

const eventText =
  "text-sm font-light leading-6 md:text-base lg:text-lg xl:text-[20.5px]";
const TimelineEvent = ({
  label,
  icon,
  children,
  materials,
  compact = false,
  start = false,
}) => (
  <div className="grid gap-5 md:grid-cols-[333px_minmax(0,1fr)] md:gap-0">
    <div className="pr-9.25">
      <h3 className="text-lg font-medium uppercase leading-7.5 text-[#1f1f1f] dark:text-[#ededed] md:text-xl xl:text-[28px]">
        {label}
      </h3>
    </div>
    <div className="relative min-w-0">
      <div className="relative pl-12 md:pl-14">
        <Image
          src={start ? "/about/start.svg" : "/about/" + icon}
          width={36}
          height={start ? 122 : 36}
          alt=""
          className={
            start
              ? "absolute left-0 top-0 h-[122px] w-9 dark:invert-0 invert"
              : "absolute left-0 top-0 h-9 w-9"
          }
        />
        <div
          className={
            compact
              ? "text-sm font-light leading-7.5 md:text-base xl:text-lg"
              : eventText
          }
        >
          {children}
        </div>
      </div>
      {materials && (
        <div className="mt-6 pl-12 md:mt-12.75 md:pl-14">{materials}</div>
      )}
    </div>
  </div>
);
const NewsLink = ({ href, children = "Новость", cyan = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={
      "button inline-flex items-center justify-center rounded-lg! border px-7.5! text-base font-light " +
      (cyan ? "border-[#00B6CC]" : "border-[#00FF66]")
    }
  >
    {children}
    <ExternalLink width={16} height={16} />
  </a>
);
const logos = {
  intel: (
    <Image
      src="/about/intel-supermict.svg"
      width={220}
      height={53}
      alt="Intel и Supermicro"
      className="mx-auto h-auto max-w-full"
    />
  ),
  nvidia: (
    <Image
      src="/about/nvidia.svg"
      width={233}
      height={59}
      alt="NVIDIA"
      className="mx-auto h-auto max-w-full"
    />
  ),
};
export const Timeline = () => (
  <section className="page-container relative pb-10 font-sans text-[#1f1f1f] dark:text-[#a1a1a1]">
    <div
      aria-hidden="true"
      className="hidden md:block absolute bottom-10 left-4 top-0 w-px bg-[linear-gradient(180deg,#ff6600_0%,#ff00e5_25%,#c300ff_50%,#00b6cc_75%,#00b6cc_100%)] md:left-[351px]"
    />
    <div className="flex flex-col gap-12 md:gap-[127.5px]">
      <TimelineEvent label="Начало пути" start materials={logos.intel}>
        <span className="xl:whitespace-nowrap">
          <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
            2009
          </span>{" "}
          — Начало разработки собственной архитектуры хранения данных
          участниками{" "}
          <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
            OpenSolaris Community
          </span>
        </span>
        <br className="hidden xl:block" />{" "}
        <span className="xl:whitespace-nowrap">
          и формирование коммерческой версии. Участие в международных проектах,
          дало нашей команде бесценный опыт,
        </span>
        <br className="hidden xl:block" /> глубокое понимание лучших практик и
        возможность перенять передовые решения мирового уровня.
      </TimelineEvent>
      <TimelineEvent icon="event-2011.svg">
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2011
        </span>{" "}
        — (MVP) Создание первой версии продукта, на базе операционной системы
        Illumos, чтобы проверить ключевую концепцию решения и получить обратную
        связь от первых пользователей. В основе технологического стека лежали
        надежные компоненты Illumos и файловая система ZFS с поддержкой
        снапшотов и инструментами диагностики производительности.
      </TimelineEvent>
      <TimelineEvent
        label={
          <>
            <span className="font-light text-zinc-600 dark:text-[#a1a1a1]">
              Проект
            </span>{" "}
            <span className="font-medium text-[#1f1f1f] dark:text-[#ebedf0]">
              «Платон»
            </span>
          </>
        }
        icon="event-2015.svg"
      >
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2015
        </span>{" "}
        <span>{` `}</span> <span>{`— `}</span>{" "}
        <span>{`Инсталляция первого импортонезависимого решения хранения  на 20PB в России, проект «Платон».`}</span>
      </TimelineEvent>
      <TimelineEvent icon="event-2016.svg">
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2016
        </span>{" "}
        <span>{` `}</span> <span>—</span>{" "}
        <span>{` Внедрение блочного и объектного доступа (На платформе `}</span>{" "}
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          MinIO
        </span>{" "}
        <span>{`), к файловой системе `}</span>{" "}
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          ZFS
        </span>{" "}
        <span>.</span>
      </TimelineEvent>
      <TimelineEvent icon="event-2017.svg">
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2017
        </span>{" "}
        <span>{` `}</span> <span>—</span>{" "}
        <span>{` Оптимизация системы мониторинга для систем хранения больших видео потоков.`}</span>
      </TimelineEvent>
      <TimelineEvent
        label={
          <>
            <span className="font-light text-zinc-600 dark:text-[#a1a1a1]">
              Опыт
            </span>{" "}
            <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
              инсталляций
            </span>
          </>
        }
        icon="event-2018.svg"
        materials={logos.nvidia}
      >
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2018
        </span>{" "}
        <span>{` `}</span> <span>—</span>{" "}
        <span>{` Создание платформы хранения для работы с ИИ-кластерами.`}</span>
      </TimelineEvent>
      <TimelineEvent
        icon="event-2019.svg"
        materials={
          <div className="flex flex-wrap gap-5">
            <NewsLink cyan href="https://reestr.digital.gov.ru/reestr/307200/">
              Реестр
            </NewsLink>
            <NewsLink
              cyan
              href="https://reestr.fstec.ru/regview2?guid=06d5b959-3bcf-420e-958c-1141ba1fc228"
            >
              ФСТЭК
            </NewsLink>
          </div>
        }
      >
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">{`2019 `}</span>{" "}
        <span>—</span>{" "}
        <span>
          {" "}
          {` Внесение платформы хранения в Реестр Минцифры (Система хранения данных АРГО) `}{" "}
          <br className="hidden xl:block" /> Реестровая запись №5850 от
          20.09.2019 (1165007052583).{" "}
        </span>
      </TimelineEvent>
      <TimelineEvent label="Инновации" icon="event-2020.svg">
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2020
        </span>{" "}
        <span>{` `}</span> <span>—</span>{" "}
        <span>
          {" "}
          {` Развертывание ИИ-кластера с импортонезависимой системой хранения данных для обработки `}{" "}
          <br className="hidden xl:block" /> медицинских данных и исследований в
          период COVID-19.{" "}
        </span>
      </TimelineEvent>
      <TimelineEvent
        icon="event-ai.svg"
        compact
        materials={
          <Image
            src="/about/help.svg"
            width={755}
            height={499}
            alt="Примеры применения РЕ:Сурс в производстве, документообороте и подборе персонала"
            className="h-auto w-full"
          />
        }
      >
        <div className="flex flex-wrap items-center gap-2">
          Где еще может помочь
          <Image
            src="/about/resurs-logo.png"
            width={120}
            height={60}
            alt="AI.ARGO"
            className="h-auto w-30 object-contain"
          />
        </div>
      </TimelineEvent>
      <TimelineEvent icon="event-2021.svg">
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2021
        </span>{" "}
        <span>{` `}</span>{" "}
        <span>
          — Создание прототипов государственных облачных платформ для
          стран-партнеров (ОПЕК+).
        </span>
      </TimelineEvent>
      <TimelineEvent
        icon="event-2022.svg"
        materials={
          <div className="flex flex-col items-start gap-5">
            <div className="flex w-full flex-wrap items-center justify-center gap-5 mb-6">
              <Image
                src="/about/norsi.svg"
                width={150}
                height={38}
                alt="Норси Транс"
                className="h-auto"
              />
              <Image
                src="/about/ctt.svg"
                width={86}
                height={38}
                alt="ЦТТ"
                className="h-auto"
              />
              <Image
                src="/about/openyard.svg"
                width={150}
                height={38}
                alt="OpenYard"
                className="h-auto"
              />
            </div>
            <p className="text-sm font-light leading-7.5 md:text-lg">
              Соглашение о сотрудничестве с ведущим Дистрибьютером России
              Treolan (входит в группу «Ланит»)
            </p>
            <NewsLink href="https://lanit.ru/press/archive/kompaniya-treolan-nachinaet-postavki-produktsii-kompanii-argo-tekhnolodzhi-ist-?ysclid=mpwbwgugs8210241567" />
          </div>
        }
      >
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2022
        </span>{" "}
        <span>{` `}</span>{" "}
        <span>
          — Новые партнерства и первые внедрения на оборудовании из списка
          Минпромторга.
        </span>
      </TimelineEvent>
      <TimelineEvent
        icon="event-2023.svg"
        materials={
          <div className="flex flex-col items-start gap-5">
            <Image
              src="/about/graviton.svg"
              width={215}
              height={40}
              alt="Гравитон"
              className="mx-auto mb-6 h-auto"
            />
            <p className="text-sm font-light leading-7.5 md:text-lg">{`МТС предлагает корпоративным клиентам российские решения с хранением от ARGO.TECH `}</p>
            <NewsLink href="https://moskva.mts.ru/about/media-centr/soobshheniya-kompanii/novosti-mts-v-rossii-i-mire/2025-06-04/mts-predlozhit-korporativnym-klientam-rossijskie-resheniya-dlya-postroeniya-korporativnoj-it-infrastruktury?ysclid=mpwc2imdmr287522697" />
          </div>
        }
      >
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2023
        </span>{" "}
        <span>{` – Внесение в реестр как СХД/ПАК (с оборудованием «Гравитон»). Первые поставки в цифровые регионы.`}</span>
      </TimelineEvent>
      <TimelineEvent
        icon="event-2024.svg"
        materials={
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Image
              src="/about/loongson.svg"
              width={215}
              height={38}
              alt="Loongson"
              className="h-auto"
            />
            <Image
              src="/about/amd.svg"
              width={88}
              height={88}
              alt="AMD"
              className="h-auto"
            />
          </div>
        }
      >
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2024
        </span>{" "}
        <span>
          {" "}
          {` — Расширение и переработка системы мониторинга. Улучшение механизмов отказоустойчивости. `}{" "}
          <br className="hidden xl:block" /> Внесение в реестр универсального
          ИИ-решения.{" "}
        </span>
      </TimelineEvent>
      <TimelineEvent
        icon="event-2025.svg"
        materials={
          <div className="flex flex-col items-start gap-5">
            <div className="flex w-full flex-wrap items-center justify-center gap-5">
              <Image
                src="/about/kraftway.svg"
                width={215}
                height={38}
                alt="Kraftway"
                className="h-auto"
              />
              <Image
                src="/about/bitblaze.svg"
                width={188}
                height={38}
                alt="Bitblaze"
                className="h-auto"
              />
              <Image
                src="/about/mirea.svg"
                width={105}
                height={75}
                alt="МИРЭА"
                className="h-auto"
              />
            </div>
            <p className="text-sm font-light leading-7.5 md:text-lg">
              Содружество с ведущим производственным университетом страны МИРЭА
            </p>
            <NewsLink href="https://www.mirea.ru/mediapage/press-service/argo-tech-i-rtu-mirea-obyavili-o-sozdanii-sovmestnogo-proekta/?ysclid=mpwc6b0iee787832974" />
          </div>
        }
      >
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          2025
        </span>{" "}
        <span className="font-medium">{` `}</span>{" "}
        <span>{`— Выделение объектного доступа как самостоятельного решения. Альтернативные аппаратные платформы. Оптимизация производительности. Новая эра партнерств и технологий. Внедрение новых `}</span>{" "}
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          Framework
        </span>{" "}
        <span>
          {" "}
          {`. `} <br className="hidden xl:block" /> {`Создание `}{" "}
        </span>{" "}
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          РБК
        </span>{" "}
        <span>{` и `}</span>{" "}
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          Телеграм
        </span>{" "}
        <span>{` каналов.`}</span>
      </TimelineEvent>
      <div className="md:ml-[389px]">
        <Separator_3 className="h-auto w-full max-w-143.75" />
      </div>
      <TimelineEvent
        label="2026"
        icon="event-2026.svg"
        compact
        materials={
          <div className="flex flex-wrap gap-5">
            <Link
              href="/"
              className="button inline-flex items-center gap-2.5 rounded-lg! border-[#00B6CC] bg-white px-7.5! text-base dark:bg-[#0a0a0a]"
            >
              <Image
                src="/about/brand-argo.svg"
                width={20}
                height={17}
                alt=""
                className="invert dark:invert-0"
              />
              ARGO.TECH
            </Link>
            <a
              href="https://companies.rbc.ru/id/1165007052583-argotech/"
              target="_blank"
              rel="noopener noreferrer"
              className="button inline-flex items-center gap-2.5 rounded-lg! border-[#00B6CC] bg-white px-7.5! text-base dark:bg-[#0a0a0a]"
            >
              <Image
                src="/about/brand-rbc.svg"
                width={17}
                height={17}
                alt=""
                className="invert dark:invert-0"
              />
              РБК
            </a>
            <button
              type="button"
              className="button inline-flex items-center gap-2.5 rounded-lg! border-[#00B6CC] bg-white px-7.5! text-base uppercase dark:bg-[#0a0a0a]"
            >
              <Image
                src="/about/brand-tenchat.svg"
                width={20}
                height={19}
                alt=""
                className="invert dark:invert-0"
              />
              TenChat
            </button>
          </div>
        }
      >
        <span>{`Новая платформа хранения `}</span>{" "}
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          ISCRA
        </span>{" "}
        <span>. Новая версия решения</span>{" "}
        <span className="font-medium">{` `}</span>{" "}
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          STORAGE
        </span>{" "}
        <span>
          {" "}
          {`. Запуск решения на Альтернативных платформах. `}{" "}
          <br className="hidden xl:block" />{" "}
          {`Новые ИИ-решения в Реестре. Запуск продукта `}{" "}
        </span>{" "}
        <span className="font-medium text-[#1f1f1f] dark:text-[#ededed]">
          РЕ:Сурс
        </span>{" "}
        <span className="font-medium">.</span>
      </TimelineEvent>
      <TimelineEvent icon="event-version.svg">
        <span className="mb-5 inline-flex h-10 items-center rounded-full border border-[#00B6CC] px-4 text-sm font-medium text-[#00B6CC]">
          Ver. 3.19
        </span>
        <Image
          src="/about/storage-update.png"
          width={882}
          height={507}
          alt="Пулы, размер блока, контроль целостности, снимки, клоны и репликация STORAGE 3.19"
          className="h-auto w-full"
        />
      </TimelineEvent>
      <TimelineEvent
        icon="event-roadmap.png"
        compact
        materials={
          <Image
            src="/about/storage-roadmap.png"
            width={882}
            height={325}
            alt="Развитие STORAGE: скорость, безопасность и надежность"
            className="h-auto w-full"
          />
        }
      >
        <span>
          {" "}
          {`Еще больше функциональных возможностей в новой версии `}{" "}
          <br className="hidden xl:block" />{" "}
        </span>{" "}
        <span className="font-medium">STORAGE</span>{" "}
        <span>, будут доступны для всех инсталлированных систем</span>
      </TimelineEvent>
    </div>
  </section>
);
