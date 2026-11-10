import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components";
import {
  IscraProtocolHero,
  IscraSnapshotDiagram,
  PartnerLogos,
  PartnerInfo,
  PartnerSplit,
  PartnerTextGrid,
  Contact,
} from "@/sections";
import { iscraVariants, ogImage } from "@/config";
import { cn } from "@/utils";

const title = "Atomic Snapshot в  STORAGE(СХД АРГО): снимки данных | ARGO.TECH";
const description =
  "Atomic Snapshot: снимок создаётся как единая неделимая операция и фиксирует согласованное состояние данных, в том числе для нескольких файловых систем";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/technology/atomicsnapshot/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/atomicsnapshot/",
    title,
    description,
    images: [ogImage("atomicsnapshot")],
  },
};

const accentClassName = "text-[#007AFF]";
const gridLabelClassName = "xl:whitespace-normal xl:text-[20.5px] xl:leading-6";
const gridCellClassName = "xl:pb-9";

const Lines = ({ lines }) =>
  lines.map((line, index) => (
    <span key={index} className={cn("block", !line && "h-6")}>
      {line}
    </span>
  ));

const architectureItems = [
  {
    title: "Архитектура",
    label:
      "Native ZFS в ISCRA STORAGE называет свою архитектуру Copy-on-Write, но при изменении данных фактически выполняет Redirect-on-Write: новый блок записывается в свободное место, а указатель переключается на него.",
  },
  {
    title: "Значение",
    label: (
      <Lines
        lines={[
          "Термин CoW используется в двух значениях:",
          "Общий Copy-on-Write существующий блок не изменяется, а новая версия записывается отдельно. Именно так работает ZFS.",
          "",
          "Классический CoW snapshot перед перезаписью исходного блока его старое содержимое сначала копируется в snapshot reserve. Такой механизм правильнее называть copy-before-write.",
        ]}
      />
    ),
  },
  {
    title: "Механизм",
    label: (
      <Lines
        lines={[
          "Native ZFS в ISCRA использует этот механизм не только для snapshot, а для всех изменений данных. Изменённый блок записывается в новое место.",
          "",
          "После сбоя выбирается целиком старое или целиком новое состояние дерева. Это даёт ZFS преимущество перед RoW, реализованным только как отдельный snapshot-механизм.",
        ]}
      />
    ),
  },
  {
    title: "Сторонние решения",
    label:
      "В сторонних системах snapshot является дополнительным уровнем поверх традиционной файловой системы или RAID.",
  },
];

const snapshotItems = [
  {
    title: "Прямое чтение",
    label:
      "Snapshot содержит собственный корень дерева и непосредственно ссылается на нужные блоки. Для чтения не требуется последовательно просматривать длинную цепочку журналов изменений или delta-файлов.",
  },
  {
    title: "Без лишних копий",
    label:
      "Количество snapshot не создаёт копию блока для каждого из них. Если один старый блок входит в десять snapshot, Native ZFS в ISCRA STORAGE не хранит десять физических копий. Все snapshot могут ссылаться на один и тот же неизменяемый блок.",
  },
  {
    title: "Транзакционная согласованность",
    label:
      "RoW сам по себе описывает только размещение нового блока. В Native ZFS ISCRA STORAGE он дополнен: транзакционными группами; CoW-деревом metadata; контрольными суммами; фиксацией через uberblock; интеграцией с RAID-Z.",
  },
  {
    title: "Рекурсивные снимки",
    label:
      "Когда вы используете команду snapshot для создания снимка файловой системы, вы можете применить опцию для рекурсивного создания снимков всех дочерних файловых систем. Рекурсивные снимки ZFS создаются быстро, как одна атомарная операция. Снимки создаются вместе (все сразу) или не создаются вообще. Преимущество атомарных операций создания снимков состоит в том, что данные снимка всегда берутся в один согласованный момент времени, даже для дочерних файловых систем.",
  },
];

const cloneItems = [
  {
    title: "Единая основа",
    label:
      "Единая основа для clone и replication в Native ZFS ISCRA STORAGE позволяет: мгновенно создавать snapshot; создавать writable clone с общими исходными блоками; выполнять rollback; передавать полные и инкрементальные snapshot через zfs send.",
  },
  {
    title: "Свойства",
    label: (
      <Lines
        lines={[
          "При создании снимок не занимает места. Все блоки данных являются общими между активной файловой системой и снимком. Если есть предыдущие снимки, блоки могут быть общими и с ними.",
          "",
          "По мере изменения файловой системы пространство, которое ранее было общим, становится уникальным для снимка и, следовательно, учитывается в свойстве снимка.",
        ]}
      />
    ),
  },
  {
    title: "Клоны",
    label:
      "Clone: это записываемый том или файловая система, начальное содержимое которых совпадает с набором данных, из которого он был создан. Как и в случае со снимками, создание клона происходит почти мгновенно и изначально не потребляет дополнительного дискового пространства. Кроме того, вы можете создать снимок клона. Clone могут быть созданы только из снимка. Когда снимок клонируется, между клоном и снимком создаётся неявная зависимость. Даже если клон создан в другом месте иерархии наборов данных, исходный снимок не может быть уничтожен, пока существует клон.",
  },
  {
    title: "Инкрементальная репликация",
    label:
      "В системе ISCRA STORAGE доступна: Инкрементальная асинхронная репликация, стоимость инкремента пропорциональна объёму изменённых данных, а не размеру файловой системы. Даже если вы изменили один байт в 10-гигабайтном файле передается только затронутый блок.",
  },
];

export default function IscraAtomicSnapshot() {
  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name={
          <>
            ATOMIC
            <br />
            SNAPSHOT
          </>
        }
        title={
          <>
            Атомарный
            <br />
            снимок
          </>
        }
        className="xl:pb-7 xl:min-h-125.5"
        nameClassName={cn(
          "text-center uppercase text-[64px] sm:text-[72px] md:text-[88px] lg:text-[100px] xl:text-[120px] leading-normal",
          accentClassName,
        )}
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#a1a1a1] dark:text-[#a1a1a1] font-extralight xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Все данные в снимке соответствуют одному согласованному моменту времени, даже если
        снимок создаётся для нескольких файловых систем
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <PartnerInfo className="xl:pt-17.25" textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-bold">ISCRA STORAGE:</span> Рекурсивные снимки, с
          единым согласованным моментом времени
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName="xl:text-[26.5px] xl:min-h-68.5"
        left={
          <p className="font-normal leading-8.25">
            <span className="title-color font-medium">В ISCRA STORAGE Атомарный Снапшот</span>,
            это не отдельный тип снимка, а свойство и гарантия того, что снимок создаётся как
            единая, неделимая операция, которая фиксирует строго согласованное состояние
            данных на определённый момент времени.
          </p>
        }
        right={
          <p className="font-normal leading-8.25">
            <span className="title-color font-medium">Native ZFS в ISCRA STORAGE</span> один
            механизм управляет: рабочими данными; snapshot; clone; metadata; контрольными
            суммами; размещением на mirror или RAID-Z; транзакционной фиксацией состояния.
          </p>
        }
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          Отдельному <span className="title-color font-bold">Snapshot Engine</span> не
          требуется синхронизировать свою таблицу блоков с файловой системой.
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={architectureItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <div className="h-10 xl:h-25" />
      <IscraSnapshotDiagram variant="snapshot" />
      <div className="h-10 xl:h-25" />
      <PartnerTextGrid
        items={snapshotItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="title-color font-bold xl:text-[30px]">
          Единая основа для Clone и Replication
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName="xl:text-[26.5px] xl:min-h-68.5"
        left={
          <p className="title-color font-normal leading-8.25">
            Клон занимает место только для изменённых данных. Десять клонов базы объёмом 1 ТБ
            занимают 1 ТБ, пока в них не начали вносить уникальные изменения. По мере записи
            растут только изменённые блоки — экономия места сохраняется.
          </p>
        }
        right={
          <div className="flex h-full flex-col justify-between gap-6">
            <p className="font-normal leading-8.25 text-base md:text-xl lg:text-[22px] lg:leading-8">
              <span className="title-color font-medium">Writable Clone</span> это механизм
              Native ZFS в ISCRA STORAGE, который позволяет создать записываемую копию
              файловой системы или тома на основе существующего снапшота.
            </p>
            <div>
              <Link
                href="/technology/writableclone/"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#e5e5e5] dark:border-white/20 bg-white px-4 py-1.5 text-sm md:text-base font-normal text-[#1f1f1f] shadow-sm transition-transform md:hover:scale-105"
              >
                Writable Clone
                <Sparkles className="size-4 text-[#007AFF]" />
              </Link>
            </div>
          </div>
        }
      />
      <div className="h-10 xl:h-25" />
      <IscraSnapshotDiagram variant="clone" />
      <div className="h-10 xl:h-25" />
      <PartnerTextGrid
        items={cloneItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <div className="pt-10 xl:pt-20" />
      <Contact source="ISCRA STORAGE Atomic Snapshot" />
    </main>
  );
}
