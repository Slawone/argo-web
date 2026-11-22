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

const title = "VDEV в Native ZFS (СХД АРГО): что это и какие бывают, ARGO.TECH";
const description =
  "VDEV строительный блок пула Native ZFS: mirror, RAID-Z, special, SLOG. Как тип vdev влияет на отказоустойчивость и скорость в ISCRA STORAGE (СХД АРГО)";
export const metadata = {
  title,
  description,
  alternates: { canonical: "/technology/vdev/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/vdev/",
    title,
    description,
    images: [ogImage("vdev")],
  },
};
const architecture = [
  {
    title: "Архитектура",
    label: (
      <>
        Native ZFS ISCRA STORAGE разделяет физическое хранение, логические
        объекты данных и уровень предоставления доступа. Такая трёхуровневая
        архитектура позволяет гибко управлять хранением и обеспечивает
        масштабируемость.
      </>
    ),
  },
  {
    title: "Преимущества",
    label: (
      <>
        <p>{`Гибкость: VDEV можно добавлять в пул для расширения ёмкости `}</p>{" "}
        <p>и производительности.</p>{" "}
        <p>
          Изоляция: каждый датасет имеет собственные свойства (квоты, сжатие,
          снапшоты).
        </p>
      </>
    ),
  },
  {
    title: "Иерархия",
    label: (
      <>
        <p>
          Физический уровень: диски (HDD, SSD, NVMe) объединяются в VDEV
          виртуальные устройства с заданной избыточностью.
        </p>{" "}
        <p>
          Уровень пула: один или несколько VDEV образуют pool (пул): единое
          пространство хранения.
        </p>{" "}
        <p>
          Логический уровень: внутри пула создаются файловые datasets и блочные
          volumes (ZVOL).
        </p>
      </>
    ),
  },
  {
    title: "Масштабируемость",
    label: (
      <>
        <p>
          Pool (пул) объединяет ресурсы нескольких VDEV, обеспечивая параллелизм
          и отказоустойчивость.
        </p>{" "}
        <p>​</p>
      </>
    ),
  },
];
const special = [
  {
    title: "Что может храниться на Special VDEV",
    label: (
      <>
        Метаданные файловой системы и деревья блоков; indirect blocks
        пользовательских данных; таблицы дедупликации; опционально - малые блоки
        файлов, если функция поддерживается и включена.
      </>
    ),
  },
  {
    title: "Требования",
    label: (
      <>
        {`Поскольку special VDEV хранит актуальные экземпляры части блоков, потеря устройства сверх его избыточности является фатальным событием. `}{" "}
        <br /> Для практического применения предпочтительны зеркальные (N-way
        mirror) enterprise SSD/NVMe с защитой от потери питания и достаточным
        ресурсом записи.
      </>
    ),
  },
  {
    title: "Что ускоряется",
    label: (
      <>
        Обход каталогов, поиск и stat; создание и удаление большого количества
        небольших файлов; запись и чтение блоков; работа с многочисленными
        snapshots; metadata-intensive workloads; small-block I/O, если малые
        блоки размещаются на special class.
      </>
    ),
  },
];
const roles = [
  [
    <span key="role">Data VDEV</span>,
    <span key="description">Основные данные и метаданные</span>,
  ],
  [
    <span key="role">Special / Metadata</span>,
    <span key="description">{`Метаданные и опционально малые блоки `}</span>,
  ],
  [
    <span key="role">SLOG</span>,
    <span key="description">{`Записи ZIL для sync-транзакций `}</span>,
  ],
  [
    <span key="role">L2ARC</span>,
    <span key="description">Копии часто читаемых блоков</span>,
  ],
  [
    <span key="role">Hot Spare</span>,
    <span key="description">
      <p>Ничего во время штатного режима работы; Данные, когда защищаемое</p>{" "}
      <p>устройство вышло из строя</p>
    </span>,
  ],
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
const Grid = ({ items }) => (
  <PartnerTextGrid
    items={items}
    fillEmpty={items.length % 2 === 1}
    titleClassName="text-[#1f1f1f] dark:text-[#fffff1] xl:mb-[10.4px]"
    labelClassName="xl:whitespace-normal xl:text-[20.5px] xl:leading-6"
    cellClassName="xl:pb-8"
  />
);
const Topic = ({ left, right, label, href }) => {
  const Action = href ? Link : "button";
  return (
    <PartnerSplit
      hidePlus
      gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75 xl:text-[28px] xl:leading-[33.2px]"
      left={<div className="font-normal">{left}</div>}
      right={
        <div className="flex h-full flex-col justify-between gap-8">
          <div className="text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px]">
            {right}
          </div>
          <Action
            href={href}
            type={href ? undefined : "button"}
            className="inline-flex min-h-10 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#a1a1a1] bg-[#ededed] px-4 py-2 text-base font-light text-black"
          >
            {label}
            <Image src="/vdev/button.svg" width={19} height={19} alt="" />
          </Action>
        </div>
      }
    />
  );
};

export default function VdevPage() {
  return (
    <main className="page-iscra bg-white font-sans dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="VDEV"
        title={
          <>
            Virtual Device
            <br />
            строительный блок
          </>
        }
        className="xl:min-h-125.5 xl:pb-7"
        nameClassName="text-center text-[110px] sm:text-[160px] md:text-[clamp(130px,17vw,170px)] lg:text-[180px] xl:text-[200px] leading-normal bg-[linear-gradient(0deg,#7129ff_26.442%,#ff9100_65.385%)] dark:bg-[linear-gradient(180deg,#7129ff_26.442%,#ff9100_65.385%)] bg-clip-text text-transparent xl:pl-0"
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-[#fffff1] md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#a1a1a1] font-light xl:max-w-127.5 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Логическая группа физических дисков, SSD или разделов, объединённых в
        пул Native ZFS для обеспечения избыточности и производительности
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <Heading secondary>
        <strong className="font-bold text-[#1f1f1f] dark:text-[#fffff1]">
          VIRTUAL DEVICE:
        </strong>{" "}
        Фундаментальный строительный блок пула хранения
      </Heading>
      <PartnerSplit
        hidePlus
        gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-68.5 xl:text-[28px] xl:leading-[33.2px]"
        left={
          <div className="font-normal">
            <p>
              {" "}
              <span className="font-medium text-[#1f1f1f] dark:text-[#fffff1]">
                VDEV в ISCRA STORAGE (Virtual Device)
              </span>
              <span className="font-medium">{` `}</span>
              <span>{`это виртуальное устройство в Native ZFS, которое представляет собой логическую группу физических устройств (дисков, файлов, LUN) с определённой схемой избыточности `}</span>{" "}
            </p>{" "}
            <p>{`и размещения данных. `}</p>
          </div>
        }
        right={
          <div className="font-normal">
            <span className="text-[#1f1f1f] dark:text-[#fffff1]">
              VDEV в ISCRA STORAGE (Virtual Device)
            </span>{" "}
            <span>{` это строительный блок пула (zpool): один или несколько vdev образуют пул, а внутри пула создаются датасеты.`}</span>
          </div>
        }
      />
      <div className="pt-8 md:pt-12.75">
        <Grid items={architecture} />
      </div>
      <div className="pt-8 md:pt-12.75">
        <Topic
          label="POOL Native ZFS"
          href="/technology/pool/"
          left={
            <>
              <span className="text-[#1f1f1f] dark:text-[#fffff1]">{`VDEV в ISCRA STORAGE (Virtual Device) `}</span>{" "}
              <span>
                {" "}
                {`группа устройств `} <br />{" "}
                {`с определённой схемой размещения и защиты данных. `} <br /> На
                уровне VDEV задаются допустимое количество отказов, полезная
                ёмкость, IOPS, пропускная способность и характер восстановления.
                Тип VDEV определяет баланс между надёжностью и
                производительностью.{" "}
              </span>
            </>
          }
          right={
            <>
              {`Допустимое количество отказов или сколько дисков может выйти из строя без потери данных (зависит от типа `}{" "}
              <br /> VDEV: mirror, RAID-Z1/2/3).
            </>
          }
        />
      </div>
      <div className="pt-8 md:pt-12.75">
        <Topic
          label="Snapshot"
          href="/technology/atomicsnapshot/"
          left={
            <>
              <span>{`Физические диски это нижний уровень хранения в архитектуре `}</span>{" "}
              <span className="text-[#1f1f1f] dark:text-[#fffff1]">{`Native ZFS ISCRA STORAGE: `}</span>{" "}
              <span>
                HDD, SSD и NVMe содержат блоки данных, метаданных и
                избыточности. Однако сам по себе диск не определяет защиту
                данных: эта характеристика появляется только после включения
                диска в VDEV.
              </span>
            </>
          }
          right={
            <>
              {`Отказоустойчивость задаётся на уровне VDEV, пространство объединяется на уровне Pool (Пул), а свойства, snapshots `}{" "}
              <br />{" "}
              {`и способы доступа назначаются логическим объектам внутри пула. `}
            </>
          }
        />
      </div>
      <section className="page-container mt-8 border main-border md:mt-12.75">
        <div className="grid md:grid-cols-[350fr_920fr]">
          <h2 className="border-b main-border px-5 py-8 text-xl font-normal text-[#1f1f1f] dark:text-[#fffff1] md:border-b-0 md:border-r xl:pl-12.5 xl:pt-12.5 xl:text-[28px]">
            ISCRA STORAGE
          </h2>
          <div className="px-4 py-10 md:px-9.25 xl:py-24">
            <Image
              src="/vdev/diagram-light.png"
              width={745}
              height={698}
              alt="Архитектура ISCRA STORAGE: диски, VDEV, пул, датасеты и блочные тома"
              className="mx-auto h-auto max-w-full dark:hidden"
            />
            <Image
              src="/vdev/diagram-dark.png"
              width={745}
              height={698}
              alt="Архитектура ISCRA STORAGE: диски, VDEV, пул, датасеты и блочные тома"
              className="mx-auto hidden h-auto max-w-full dark:block"
            />
          </div>
        </div>
      </section>
      <div id="special-vdev" className="scroll-mt-20">
        <Heading>
          <strong className="font-medium">
            Special VDEV: выделенный VDEV верхнего уровня
          </strong>
        </Heading>
      </div>
      <PartnerTable
        head={["Роль", "Что хранит"]}
        rows={roles}
        minWidthClassName="min-w-0"
        gridClassName="grid-cols-[minmax(110px,300fr)_minmax(0,970fr)]"
        cellClassName="min-w-0 px-4 py-5 text-sm leading-6 md:text-lg xl:px-9.25 xl:pt-7.25 xl:pb-9.25 xl:text-2xl xl:leading-[33.2px]"
        headColumnClassNames={[
          "text-[#1f1f1f] dark:text-[#fffff1] font-bold",
          "text-[#1f1f1f] dark:text-[#fffff1] font-light",
        ]}
        columnClassNames={[
          "text-[#1f1f1f] dark:text-[#fffff1] font-bold",
          "text-[#1f1f1f] dark:text-[#a1a1a1] font-light break-words",
        ]}
      />
      <Heading>
        <strong className="font-bold">
          Никогда не добавляйте Special VDEV как одиночное устройство
        </strong>
      </Heading>
      <Grid items={special} />
      <div className="pt-8 md:pt-12.75">
        <Topic
          label="SLOG (Separate Log)"
          href="/technology/slog/"
          left={
            <>
              <span className="text-[#1f1f1f] dark:text-[#fffff1]">{`SLOG (Separate Log) `}</span>{" "}
              <span>
                это выделенное устройство (обычно SSD или NVMe) для журнала ZIL
                (ZFS Intent Log), который используется для синхронных операций
                записи. SLOG не является кэшем записи: он только ускоряет
                подтверждение синхронных операций
              </span>
            </>
          }
          right={
            <>
              <span>{`Если нагрузка `}</span> <span>в ISCRA STORAGE</span>{" "}
              <span>
                {`требует синхронной записи (базы данных, NFS, виртуализация), и вы хотите снизить задержку, то используйте SLOG на быстром SSD/NVMe`}{" "}
                <br /> <br />{" "}
              </span>
            </>
          }
        />
      </div>
      <Contact source="ISCRA STORAGE VDEV" />
    </main>
  );
}
