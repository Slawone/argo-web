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
  Contact,
} from "@/sections";
import { iscraVariants, ogImage } from "@/config";

const title = "Dataset в Native ZFS: управление хранением | ARGO.TECH";
const description =
  "Датасеты Native ZFS в ISCRA STORAGE: файловые системы, тома, снимки, клоны, наследование свойств, квоты и политики хранения.";
export const metadata = {
  title,
  description,
  alternates: { canonical: "/technology/dataset/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/dataset/",
    title,
    description,
    images: [ogImage("dataset")],
  },
};
const types = [
  [
    <span key="label">Filesystem</span>,
    <span key="value">Файловая система: файлы, каталоги, ACL, xattr</span>,
  ],
  [
    <span key="label">Volume</span>,
    <span key="value">Блочное устройство</span>,
  ],
  [
    <span key="label">Snapshot</span>,
    <span key="value">Снимок файловой системы или тома на момент TXG</span>,
  ],
  [
    <span key="label">Clone</span>,
    <span key="value">
      Записываемая копия снапшота (наследует тип исходного датасета)
    </span>,
  ],
];
const objects = [
  [
    <span key="label">Пул (pool)</span>,
    <span key="value">
      Верхний уровень: объединяет vdev, предоставляет пространство для датасетов
      (Dataset)
    </span>,
  ],
  [
    <span key="label">VDEV</span>,
    <span key="value">Физический уровень: диски, зеркала, RAID-Z</span>,
  ],
  [
    <span key="label">Файл</span>,
    <span key="value">
      Внутри датасета (Dataset): единица данных внутри файловой системы
    </span>,
  ],
  [
    <span key="label">ZIL</span>,
    <span key="value">
      Журнал: механизм синхронной записи, не является датасетом (Dataset)
    </span>,
  ],
  [
    <span key="label">ARC</span>,
    <span key="value">
      Кэш: в оперативной памяти, не является датасетом (Dataset)
    </span>,
  ],
  [
    <span key="label">{`ACL (Access Control List) `}</span>,
    <span key="value">Список управления доступом</span>,
  ],
];
const categories = [
  [
    <span key="label">Ускорить</span>,
    <span key="value">
      recordsize / compression / primarycache / secondarycache / atime /
      special_smal_blocks
    </span>,
  ],
  [
    <span key="label">Защитить</span>,
    <span key="value">
      copies / checksum / redundant_metadata / readonly / snapshot_limit
    </span>,
  ],
  [
    <span key="label">Ограничить доступ</span>,
    <span key="value">
      aclinherit / aclmode / setuid / encryption / encryption / snapshot_limit
    </span>,
  ],
  [
    <span key="label">Сэкономить</span>,
    <span key="value">
      compression / dedup / quota / refquota / reservation / snapshot_limit
    </span>,
  ],
  [
    <span key="label">Изолировать</span>,
    <span key="value">quota / userquota / groupquota / filesystem_limit</span>,
  ],
  [
    <span key="label">{`Отдать по сети `}</span>,
    <span key="value">sharenfs / sharesmb / mountpoint / snapdir</span>,
  ],
  [
    <span key="label">Совместимость</span>,
    <span key="value">casesensitivity / normalization / utf8only / version</span>,
  ],
];
const properties = [
  {
    title: "Ключевые правила",
    label: (
      <>
        Свойства датасетов в Native ZFS наследуются по иерархии сверху вниз:
        значение, заданное на родительском датасете, автоматически применяется
        ко всем потомкам. Однако есть исключения и некоторые свойства задаются
        индивидуально, а другие нельзя изменить после создания.
      </>
    ),
  },
  {
    title: "Только чтение (36+ свойств)",
    label: (
      <>
        Нельзя изменить. Система сама их показывает: сколько места занято, когда
        создан датасет (Dataset), какой у него тип, есть ли клоны, статус
        шифрования.
      </>
    ),
  },
  {
    title: "Можно менять (45+ свойств)",
    label: (
      <>
        <p>Задаёт администратор через zfs set. Делятся на:</p>{" "}
        <p>
          {" "}
          {`Наследуемые: задал на родителе, получили все потомки `} <br />{" "}
          (compression, atime, recordsize).{" "}
        </p>{" "}
        <p>
          {" "}
          {`Ненаследуемые: задаются каждому датасету отдельно `} <br /> (quota,
          reservation, volsize).{" "}
        </p>
      </>
    ),
  },
  {
    title: "Нельзя менять, но наследуются (5 свойств)",
    label: (
      <>
        <p>
          Задаются один раз при создании: casesensitivity, normalization,
          utf8only, encryption, volblocksize.
        </p>{" "}
        <p>​</p>
      </>
    ),
  },
];

const Heading = ({ children, secondary = false }) => (
  <PartnerInfo className="py-8 md:py-12.75" textClassName="max-w-260">
    <span
      className={
        secondary
          ? "text-color xl:text-[30px]"
          : "text-[#1f1f1f] dark:text-[#fffff1] xl:text-[30px]"
      }
    >
      {children}
    </span>
  </PartnerInfo>
);
const Table = ({ head, rows, wideLabel = false }) => (
  <PartnerTable
    head={head}
    rows={rows}
    gridClassName={
      wideLabel
        ? "grid-cols-[minmax(110px,337fr)_minmax(0,933fr)]"
        : "grid-cols-[minmax(110px,300fr)_minmax(0,970fr)]"
    }
    minWidthClassName="min-w-0"
    cellClassName="min-w-0 px-4 py-5 text-sm leading-6 md:text-lg xl:px-9.25 xl:pt-7.25 xl:pb-9.25 xl:text-2xl xl:leading-[33.2px]"
    headColumnClassNames={[
      "text-[#1f1f1f] dark:text-[#fffff1] font-bold",
      "text-[#1f1f1f] dark:text-[#fffff1] font-light",
    ]}
    columnClassNames={[
      "text-[#1f1f1f] dark:text-[#a1a1a1] font-bold",
      "text-[#1f1f1f] dark:text-[#a1a1a1] font-light break-words",
    ]}
  />
);

export default function DatasetPage() {
  return (
    <main className="page-iscra bg-white font-sans dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="DATASET"
        title={
          <>
            Логический
            <br />
            объект
          </>
        }
        className="xl:grid-cols-[55fr_45fr] xl:min-h-125.5 xl:pb-7"
        nameClassName="text-center text-[80px] sm:text-[120px] md:text-[clamp(96px,12vw,140px)] lg:text-[130px] xl:text-[180px] leading-normal bg-[linear-gradient(180deg,#7129ff_26.442%,#ff00e5_65.385%)] bg-clip-text text-transparent xl:pl-0"
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-[#fffff1] md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#a1a1a1] font-light xl:max-w-127.5 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Логический объект в пространстве имён Native ZFS, который является
        основной единицей управления хранением данных
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <Heading secondary>
        <strong className="font-bold text-[#1f1f1f] dark:text-[#fffff1]">
          ISCRA STORAGE:
        </strong>{" "}
        Dataset это основная единица управления хранением
      </Heading>
      <PartnerSplit
        hidePlus
        gridClassName="md:grid-cols-[747fr_523fr] xl:text-[28px] xl:leading-[33.2px]"
        left={
          <div className="font-normal">
            <span className="text-[#1f1f1f] dark:text-[#fffff1] font-medium">
              Dataset
            </span>{" "}
            <span className="text-[#1f1f1f] dark:text-[#fffff1]">{` в ISCRA STORAGE`}</span>{" "}
            <span>
              {" "}
              {` это основная единица управления хранением в Native ZFS. Все операции (создание, свойства, снапшоты, клоны, репликация) выполняются над датасетами. `}{" "}
              <br />В отличие от разделов и томов, датасеты создаются как
              каталоги и наследуют свойства по иерархии, обеспечивая гибкость
              администрирования Native ZFS.{" "}
            </span>
          </div>
        }
        right={
          <div className="font-normal">
            <span>{`Каждый `}</span>{" "}
            <span className="text-[#1f1f1f] dark:text-[#fffff1] font-medium">{`Dataset `}</span>{" "}
            <span className="text-[#1f1f1f] dark:text-[#fffff1]">
              в ISCRA STORAGE
            </span>{" "}
            <span>{` может иметь собственные квоты, резервации и политики кэширования. Это позволяет разделять ресурсы между пользователями, проектами или приложениями.`}</span>
          </div>
        }
      />
      <Heading>
        <strong className="font-medium">
          Dataset в Native ZFS ISCRA STORAGE
        </strong>
      </Heading>
      <Table head={["Тип", "Назначение"]} rows={types} />
      <div className="pt-8 md:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:text-[28px] xl:leading-[33.2px]"
          left={
            <div className="font-normal">
              <span className="text-[#1f1f1f] dark:text-[#fffff1] font-medium">{`Dataset в ISCRA STORAGE `}</span>{" "}
              <span className="text-[#1f1f1f] dark:text-[#fffff1] font-medium">
                {" "}
                <br />{" "}
              </span>{" "}
              <span>
                Логический объект в пространстве имён ZFS; Единица управления всё
                администрирование идёт через датасеты; Типизированный объект
                filesystem, volume, snapshot, clone, bookmark;
                Иерархическое дерево с наследованием свойств. Транзакционное
                свойство изменения фиксируются через TXG и uberblock.
              </span>
            </div>
          }
          right={
            <div className="font-normal">
              <span>{`Каждый `}</span>{" "}
              <span className="text-[#1f1f1f] dark:text-[#fffff1] font-medium">
                Dataset
              </span>{" "}
              <span className="text-[#1f1f1f] dark:text-[#fffff1] font-medium">{` `}</span>{" "}
              <span>{`в ISCRA STORAGE обладает возможностью использовать 86 параметров, управляющих поведением `}</span>{" "}
              <span className="text-[#1f1f1f] dark:text-[#fffff1] font-medium">
                Dataset.
              </span>
            </div>
          }
        />
      </div>
      <Heading>
        <strong className="font-medium">
          Объекты в Native ZFS ISCRA STORAGE
        </strong>
      </Heading>
      <Table wideLabel head={["Объект", "Отличие от Dataset"]} rows={objects} />
      <div className="pt-8 md:pt-12.75">
        <PartnerTextGrid
          items={properties}
          titleClassName="text-[#1f1f1f] dark:text-[#fffff1] xl:mb-[10.4px]"
          labelClassName="xl:whitespace-normal xl:text-[20.5px] xl:leading-6"
          cellClassName="xl:pb-8"
        />
      </div>
      <Heading>
        <strong className="font-medium">
          Основные категории свойств в Native ZFS ISCRA STORAGE
        </strong>
      </Heading>
      <Table head={["Задача", "Примеры свойств"]} rows={categories} />
      <div className="pt-8 md:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75 xl:text-[28px] xl:leading-[33.2px]"
          left={
            <div className="font-normal">
              <p>
                {" "}
                <span className="text-[#1f1f1f] dark:text-[#fffff1] font-medium">
                  Native ZFS ISCRA STORAGE,</span>{" "}
                <span>{` разделяет физическое хранение (VDEV) и логическое управление данными (Dataset), но они работают вместе: датасеты (Dataset) потребляют пространство из пула, который состоит из VDEV, а Native ZFS распределяет блоки датасетов (Dataset) по всем доступным top-level vdev.`}</span>{" "}
              </p>{" "}
              <p>​</p>
            </div>
          }
          right={
            <div className="flex h-full flex-col justify-between gap-8">
              <p className="text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px]">
                VDEV в Native ZFS ISCRA STORAGE это строительный блок пула
                (zpool): один или несколько vdev образуют пул, а внутри пула
                создаются датасеты (Dataset).
              </p>
              <Link
                href="/technology/vdev/"
                className="inline-flex min-h-10 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#a1a1a1] bg-[#ededed] px-4 py-2 text-base font-light text-black"
              >
                Virtual Device
                <Image
                  src="/dataset/button.svg"
                  width={19}
                  height={19}
                  alt=""
                />
              </Link>
            </div>
          }
        />
      </div>
      <Contact source="ISCRA STORAGE Dataset" />
    </main>
  );
}
