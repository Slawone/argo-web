import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components";
import {
  IscraProtocolHero,
  PartnerLogos,
  PartnerInfo,
  PartnerSplit,
  PartnerTextGrid,
  PartnerTable,
} from "@/sections";
import { iscraVariants, ogImage } from "@/config";
import { PoolRaidDiagram } from "@/sections/iscra/PoolRaidDiagram";

const title = "Pool в Native ZFS: объединение VDEV | ARGO.TECH";
const description =
  "Пул Native ZFS в ISCRA STORAGE: объединение VDEV, общее пространство для датасетов, распределение данных и планировщик ввода-вывода.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/technology/pool/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/pool/",
    title,
    description,
    images: [ogImage("pool")],
  },
};

const primary = "text-[#1f1f1f] dark:text-[#fffff1]";
// Preserve the desktop composition; smaller screens wrap the text naturally.
const DesignLines = ({ lines, joinWithoutSpaceAfter = [] }) => (
  <span className="xl:block">
    {lines.map((line, index) => (
      <span key={index} className="xl:block xl:whitespace-nowrap">
        {line}
        {index < lines.length - 1 && !joinWithoutSpaceAfter.includes(index) && (
          <span className="xl:hidden"> </span>
        )}
      </span>
    ))}
  </span>
);

const properties = [
  {
    title: "Native ZFS Pool",
    label: (
      <DesignLines
        lines={[
          "Pool объединяет ёмкость одного или нескольких VDEV и предоставляет",
          "общее пространство для datasets и volumes. Логические объекты",
          "не закрепляются за отдельными дисками: новые блоки размещаются",
          "средствами allocator по доступным top-level VDEV.",
        ]}
      />
    ),
  },
  {
    title: "Вводные",
    label: (
      <DesignLines
        lines={[
          "Добавление vdev увеличивает ёмкость пула.",
          "Несколько vdev увеличивают параллелизм и общую производительность.",
        ]}
      />
    ),
  },
  {
    title: "Filesystem Dataset",
    label: (
      <>
        <DesignLines
          lines={[
            "Управляемая файловая система Native ZFS внутри Pool.",
            "Она содержит файлы и каталоги, и может предоставляться по NFS и/или SMB.",
          ]}
        />
        <ul className="mt-6 list-none xl:whitespace-nowrap">
          <li>Пространство потребляется динамически из общего pool;</li>
          <li>Поддерживаются quota и reservation;</li>
          <li>Свойства наследуются дочерними datasets;</li>
          <li>Параметры кэширования задаются независимо;</li>
          <li>Для каждого dataset можно создавать snapshots.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Правило заполнения пула",
    label: (
      <>
        <DesignLines
          lines={[
            "Единого порога заполнения пула ZFS в процентах не существует.",
            "Оптимальный уровень зависит от recordsize, типа нагрузки и конфигурации",
            "vdev. Чем меньше размер блока, тем раньше начинается деградация",
            "аллокатора ZFS.",
          ]}
        />
        <p className="mt-6">
          <DesignLines
            lines={[
              "Практический ориентир: при recordsize=128K пул можно заполнять",
              "до 95% без заметной деградации производительности.",
            ]}
          />
        </p>
      </>
    ),
  },
];

const examples = [
  [
    "Недостаточно random\nIOPS",
    "Больше mirror data vdev, изменение типа физического\nносителя на более быстрый",
    "Увеличивается параллелизм основных\nустройств",
  ],
  [
    "Низкая sequential\nthroughput",
    "Больше data vdev (не mirror) и дисков в группе",
    "Увеличивается суммарная полоса",
  ],
  [
    "Высокая latency sync write",
    "Низколатентный mirrored SLOG, увеличение количества\nSLOG Device",
    "Быстрее подтверждается стабильная\nзапись",
  ],
  [
    "Медленные каталоги\nи small-file I/O",
    "Special / metadata vdev",
    "Метаданные обслуживаются\nбыстрым носителем",
  ],
  [
    "Повторные чтения\nне помещаются в RAM",
    "L2ARC",
    "Расширяется кэш чтения за пределы\nARC",
  ],
  [
    "Низкий ARC hit ratio",
    "Увеличение RAM",
    "ARC остаётся самым\nбыстрым уровнем кэша",
  ],
  [
    "Высокая latency VM /\niSCSI",
    "Mirror vdev + подходящий volblocksize; SLOG при sync;\nНеоптимальные параметры клиента",
    "Уменьшается data-path latency и I/O\namplification; настройки клиентской\nОС из коробки, не подходят\nдля Storage задач",
  ],
];

const Heading = ({ children, secondary = false }) => (
  <PartnerInfo
    className="py-8 md:py-12.75 xl:py-12.75"
    textClassName="max-w-260"
  >
    <span className={`${secondary ? "text-color" : primary} xl:text-[30px]`}>
      {children}
    </span>
  </PartnerInfo>
);

const Action = ({ href, children }) => {
  const Component = href ? Link : "button";
  return (
    <Component
      href={href}
      type={href ? undefined : "button"}
      className="inline-flex min-h-10 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#1f1f1f] bg-[#ededed] px-4 py-2 text-base font-light text-black dark:border-[#a1a1a1]"
    >
      {children}
      <Image src="/pool/button.svg" width={19} height={19} alt="" />
    </Component>
  );
};

const Topic = ({ left, right, children }) => (
  <PartnerSplit
    hidePlus
    gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75 xl:text-[28px] xl:leading-[33.2px]"
    leftClassName="flex min-w-0 items-center"
    rightClassName="min-w-0 xl:pr-5"
    left={<div className="min-w-0 font-normal">{left}</div>}
    right={
      <div className="flex h-full flex-col gap-7.5">
        <div className="text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px]">
          {right}
        </div>
        {children}
      </div>
    }
  />
);

export default function PoolPage() {
  const logos = [0, 1, 3, 2, 4].map((index) => iscraVariants.logos[index]);
  return (
    <main className="page-iscra flow-root bg-white font-sans dark:bg-black [&_.main-border]:border-[#d4d4d4] [&_.section-border]:border-[#d4d4d4] dark:[&_.main-border]:border-[#1d2332] dark:[&_.section-border]:border-[#1d2332]">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="POOL"
        title={
          <>
            Логическое
            <br />
            объединение VDEV
          </>
        }
        className="xl:min-h-121.25 xl:pb-7"
        nameClassName="text-center text-[110px] sm:text-[160px] md:text-[clamp(130px,17vw,170px)] lg:text-[180px] xl:text-[200px] leading-normal bg-[linear-gradient(0deg,#007aff_26.442%,#00b6cc_65.385%)] bg-clip-text text-transparent xl:pl-0 xl:mt-30.75"
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-[#fffff1] md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#1f1f1f] dark:text-[#fffff1] font-extralight xl:max-w-127.5 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        <DesignLines
          lines={[
            "Логическое объединение одного или нескольких VDEV",
            "(виртуальных устройств) в единое пространство хранения,",
            "из которого выделяется место для датасетов",
          ]}
        />
      </IscraProtocolHero>
      <div className="md:[&_section]:py-12.75 md:[&_li]:min-h-22.25">
        <PartnerLogos items={logos} />
      </div>
      <Heading secondary>
        <strong className={`font-bold ${primary}`}>POOL:</strong> собирает
        несколько VDEV, единое адресное пространство
      </Heading>
      <div className="pt-8 md:pt-12.75">
        <Topic
          left={
            <DesignLines
              lines={[
                <span key="intro">
                  <span className={primary}>
                    Pool (Пул, zpool) в Native ZFS ISCRA STORAGE
                  </span>{" "}
                  это логическое
                </span>,
                "объединение одного или нескольких VDEV (виртуальных",
                "устройств) в единое пространство хранения, из которого",
                "выделяется место для Датасетов (Dataset) (файловых систем и",
                "томов).",
              ]}
            />
          }
          right={
            <DesignLines
              lines={[
                "Pool (Пул, zpool) является верхним уровнем физической",
                <span key="native">
                  организации в{" "}
                  <span className={primary}>Native ZFS ISCRA STORAGE</span>: он
                  описывает
                </span>,
                "характеристики устройств (расположение, избыточность), но",
                "сам по себе не содержит файлов, для этого внутри него",
                "создаются Датасеты (Dataset)",
              ]}
            />
          }
        >
          <Action href="/technology/dataset/">Dataset</Action>
        </Topic>
      </div>
      <section className="page-container mt-8 grid border main-border md:mt-12.75 md:grid-cols-[280fr_990fr] xl:mt-26 xl:min-h-182.25">
        <h2 className="border-b main-border px-5 py-8 text-xl font-normal text-[#1f1f1f] dark:text-white md:border-b-0 md:border-r xl:pl-12.5 xl:pt-12.5 xl:text-[28px] xl:leading-[33.2px]">
          POOL
        </h2>
        <div className="flex min-w-0 items-center justify-center px-4 py-8 md:px-9.25 xl:pt-5 xl:pb-17.5">
          <Image
            src="/pool/diagram-light.png"
            width={874}
            height={547}
            alt="Пул ZFS объединяет VDEV с дисками; планировщик ISCRA Scheduler управляет очередями ввода-вывода и транзакционными группами TXG"
            className="h-auto max-w-full dark:hidden"
          />
          <Image
            src="/pool/diagram-dark.png"
            width={874}
            height={547}
            alt="Пул ZFS объединяет VDEV с дисками; планировщик ISCRA Scheduler управляет очередями ввода-вывода и транзакционными группами TXG"
            className="hidden h-auto max-w-full dark:block"
          />
        </div>
      </section>
      <div className="pt-8 md:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75 xl:text-[28px] xl:leading-[33.2px]"
          leftClassName="flex min-w-0 items-center"
          rightClassName="max-md:hidden"
          left={
            <p className={`font-normal ${primary}`}>
              <DesignLines
                lines={[
                  "Не все устройства в конфигурации Pool (Пул, zpool) выполняют",
                  "одинаковую роль. Data VDEV хранит основные данные,",
                  "а Special, Log и Cache L2ARC обслуживают отдельные классы",
                  "операций.",
                ]}
              />
            </p>
          }
          right={null}
        />
      </div>
      <Heading>
        <strong className="font-bold">
          Пространство потребляется динамически из общего Pool
        </strong>
      </Heading>
      <PartnerTextGrid
        items={properties}
        titleClassName={primary}
        labelClassName="xl:whitespace-normal xl:text-[20.5px] xl:leading-6"
        cellClassName="border-[#d4d4d4] dark:border-[#1d2332] [&>svg]:hidden"
      />
      <Heading>
        <strong className="font-medium">Примеры работы с Pool</strong>
      </Heading>
      <PartnerTable
        head={[
          <DesignLines key="problem" lines={["Наблюдаемая", "проблема"]} />,
          "Предпочтительный механизм",
          "Почему",
        ]}
        rows={examples.map((row) =>
          row.map((cell, index) => (
            <DesignLines key={index} lines={cell.split("\n")} />
          )),
        )}
        minWidthClassName="min-w-160 md:min-w-0"
        gridClassName="grid-cols-[300fr_567fr_403fr]"
        cellClassName="min-w-0 px-4 py-5 text-sm leading-6 md:text-lg xl:px-9.25 xl:pt-7.25 xl:pb-9.25 xl:text-2xl xl:leading-[33.2px]"
        headColumnClassNames={Array(3).fill(`${primary} font-bold`)}
        columnClassNames={Array(3).fill(
          "text-[#1f1f1f] dark:text-[#a1a1a1] font-light",
        )}
      />
      <div className="pt-8 md:pt-12.75">
        <Topic
          left={
            <DesignLines
              joinWithoutSpaceAfter={[0]}
              lines={[
                <span key="scheduler">
                  <span className={primary}>В Native ZFS ISCRA STORAGE</span>{" "}
                  существует планировщик ввода-
                </span>,
                "вывода (I/O Scheduler) это не один общий диспетчер,",
                "как в Linux, а система приоритетных очередей, которая",
                "определяет, в каком порядке и в каком соотношении Native ZFS",
                "отправляет запросы на vdev (физические устройства).",
              ]}
            />
          }
          right={
            <DesignLines
              lines={[
                "ISCRA Scheduler сама управляет очередями на уровне ядра,",
                "чтобы: Защитить синхронные операции (от которых зависит",
                "приложение) от застревания за фоновыми задачами.",
              ]}
            />
          }
        >
          <div className="mt-auto">
            <Action>ISCRA Scheduler</Action>
          </div>
        </Topic>
      </div>
      <section className="page-container my-8 grid border main-border text-color md:my-12.75 md:grid-cols-[618fr_652fr] xl:min-h-94.75">
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
    </main>
  );
}
