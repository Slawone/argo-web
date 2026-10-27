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
import { cn } from "@/utils";

const title = "Writable Clone в ISCRA STORAGE — мгновенные записываемые копии данных | ARGO.TECH";
const description =
  "Writable Clone в ISCRA STORAGE: механизм Native ZFS, позволяющий создать записываемую копию файловой системы или тома на основе снапшота. Клон создаётся за секунды и не занимает места, пока в нём не начали писать.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/storage/iscrastorage/writableclone/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/storage/iscrastorage/writableclone/",
    title,
    description,
    images: [ogImage("writableclone")],
  },
};

const accentClassName = "text-[#20ec73]";
const gridLabelClassName = "xl:whitespace-normal xl:text-[20.5px] xl:leading-6";
const gridCellClassName = "xl:pb-9";
const tableCellClassName = "min-h-16 items-center py-1.25 text-sm xl:text-[18px] xl:leading-[27px]";
const tableColumnClassNames = ["text-color", "text-color", "title-color"];
const tableHeadColumnClassNames = ["title-color", "text-color", ""];

const Lines = ({ lines }) =>
  lines.map((line, index) => (
    <span key={index} className={cn("block", !line && "h-6")}>
      {line}
    </span>
  ));

const advantages = [
  ["Мгновенное создание", "Клон создаётся за секунды, независимо от объёма данных."],
  [
    "Экономия дискового пространства",
    "Изначально клон не занимает места. Растёт только по мере изменений.",
  ],
  ["Изоляция данных", "Изменения в клоне не влияют на исходный снапшот и другие клоны."],
  [
    "Гибкость",
    "Клон можно использовать как обычную файловую систему или том: монтировать, писать, удалять файлы.",
  ],
  [
    "Безопасность",
    "Идеален для тестирования обновлений, миграций, изменений конфигурации без риска для продакшена.",
  ],
];

const cloneItems = [
  {
    title: "Преимущества",
    label: advantages.map(([name, text]) => (
      <span key={name} className="block">
        <span className={cn("block", accentClassName)}>{name}</span>
        <span className="block">{text}</span>
      </span>
    )),
  },
  {
    title: "Возможности",
    label:
      "Возможность создания полноценных копий файловых систем или томов на базе существующих снимков. Клоны создаются мгновенно и изначально не занимают места на дисках. Это идеальный инструмент для развёртывания сотен однотипных виртуальных машин, создания тестовых сред с реальными данными или быстрого восстановления баз данных",
  },
  {
    title: "Правила",
    label: (
      <Lines
        lines={[
          "Клон создаётся не копированием данных, а созданием новой записи в пространстве имён Native ZFS, которая ссылается на существующее дерево блоков снапшота. Это операция уровня метаданных — она не зависит от объёма данных.",
          "",
          "При создании клон не занимает места — все блоки общие со снапшотом. Native ZFS в ISCRA STORAGE использует Copy-on-Write / Redirect-on-Write: новые данные пишутся в свободные блоки, старые остаются общими.",
        ]}
      />
    ),
  },
  {
    title: "Гибкость",
    label: (
      <Lines
        lines={[
          "Клон — это полноценный датасет ZFS. Он поддерживает всё, что поддерживает обычная файловая система или том:",
          "",
          "Монтирование — как обычный датасет (zfs mount).",
          "Запись — файлы, каталоги, атрибуты.",
          "Снапшоты — можно создать снапшот клона.",
          "Клоны клона — через снапшот клона.",
          "Квоты и резервации — можно задать.",
          "Свойства — наследуются от снапшота, но можно переопределить.",
          "NFS/SMB шары — можно отдать по сети.",
          "ZVOL — клон тома можно использовать как блочное устройство.",
        ]}
      />
    ),
  },
];

const advantageHead = [
  "Преимущество",
  "Техническая основа",
  <span key="effect" className={cn(accentClassName, "font-medium")}>
    Практический эффект
  </span>,
];

const advantageRows = [
  [
    "Мгновенное создание",
    "Ссылка на дерево блоков, а не копирование",
    <span key="1" className="font-medium">
      Секунды вместо часов
    </span>,
  ],
  ["Экономия места", "Copy-on-Write, общие блоки", "Терабайты вместо петабайт"],
  ["Изоляция", "Независимый датасет, новые блоки при записи", "Тесты не ломают продакшен"],
  ["Гибкость", "Полноценный датасет ZFS", "Монтирование, запись, снапшоты, шары"],
  ["Безопасность", "CoW + независимость", "Безопасное тестирование и миграции"],
];

const useItems = [
  {
    title: "Мгновенное развёртывание",
    label: (
      <span className="text-[#1f1f1f] dark:text-[#20ec73]">
        Создать 100 виртуальных машин из одного шаблона — секунды, а не часы. Все 100 клонов
        делят одни и те же блоки, пока в них не начали писать.
      </span>
    ),
  },
  {
    title: "Dev/Prod разделение",
    label: "Один снапшот — много клонов для разработчиков, тестировщиков, аналитиков.",
  },
  {
    title: "Тестовые среды из продакшена",
    label:
      "Клонировать боевую базу данных для тестов — мгновенно. Тесты работают с реальными данными, не влияя на продакшен.",
  },
  {
    title: "Экономия места",
    label:
      "10 клонов базы 1 ТБ занимают 1 ТБ, пока в них не начали вносить уникальные изменения. По мере записи — растут только изменённые блоки.",
  },
];

const compareHead = [
  "Характеристика",
  "Snapshot",
  <span key="clone" className="text-[#1f1f1f] dark:text-[#20ec73]">
    Writable Clone
  </span>,
];

const compareRows = [
  [
    "Запись",
    "Только чтение",
    <span key="1" className="font-medium">
      Чтение и запись
    </span>,
  ],
  ["Можно удалить Snapshot?", "Да (если нет клонов)", "Нет, пока клон существует"],
  ["Использование", "Точка восстановления", "Рабочая копия"],
  ["Зависимость", "Нет", "Зависит от снапшота"],
];

export default function IscraWritableClone() {
  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="CLONE"
        title={
          <>
            Writable
            <br /> Clone
          </>
        }
        className="xl:pb-7 xl:min-h-125.5"
        nameClassName={cn(
          "whitespace-nowrap text-center text-[100px] md:text-[120px] lg:text-[160px] xl:text-[200px] leading-none xl:pl-0 xl:mt-29.75 xl:w-144 xl:-ml-1.5",
          accentClassName,
        )}
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-2.5"
        titleClassName="xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#a1a1a1] dark:text-[#a1a1a1] font-extralight xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        мгновенные записываемые копии данных
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <PartnerInfo className="xl:pt-17.25" textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-bold">ISCRA STORAGE:</span> Хранение на уровне
          ядра. Контроль на уровне байта.
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName="xl:text-[26.5px] xl:min-h-68.5"
        left={
          <p className="font-normal leading-8.25">
            <span className="title-color font-medium">Writable Clone</span> это механизм Native
            ZFS в ISCRA STORAGE, позволяющий создать записываемую копию файловой системы или
            тома на основе существующего снапшота. Клон формируется мгновенно и при создании не
            потребляет дискового пространства.
          </p>
        }
        right={
          <p className="font-normal leading-8.25">
            Создание клона занимает секунды, независимо от объёма данных. 100 виртуальных машин
            из одного шаблона
            <br className="hidden xl:inline" /> за минуты, а не за дни.
          </p>
        }
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className={cn(accentClassName, "font-medium")}>Writable Clone:</span> Создаётся из
          снапшота
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={cloneItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="font-normal text-[#1f1f1f] dark:text-[#20ec73] xl:text-[30px]">
          Преимущество Writable Clone ISCRA STORAGE:
        </span>
      </PartnerInfo>
      <PartnerTable
        head={advantageHead}
        rows={advantageRows}
        gridClassName="grid-cols-3"
        cellClassName={tableCellClassName}
        columnClassNames={tableColumnClassNames}
        headColumnClassNames={tableHeadColumnClassNames}
        className="px-4 xl:px-8.75"
      />
      <div className="h-10 xl:h-25" />
      <PartnerTextGrid
        items={useItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="font-normal xl:text-[30px]">Snapshot vs Writable Clone</span>
      </PartnerInfo>
      <PartnerTable
        head={compareHead}
        rows={compareRows}
        gridClassName="grid-cols-3"
        cellClassName={tableCellClassName}
        columnClassNames={tableColumnClassNames}
        headColumnClassNames={tableHeadColumnClassNames}
        className="px-4 xl:px-8.75"
      />
      <div className="pt-10 xl:pt-20" />
      <Contact source="ISCRA STORAGE Writable Clone" />
    </main>
  );
}
