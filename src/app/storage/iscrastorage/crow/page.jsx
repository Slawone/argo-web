import { Breadcrumbs } from "@/components";
import {
  IscraProtocolHero,
  PartnerLogos,
  PartnerInfo,
  PartnerTextGrid,
  PartnerTable,
  Contact,
} from "@/sections";
import { iscraVariants, ogImage } from "@/config";
import { cn } from "@/utils";

const title = "C/ROW и write hole в ISCRA STORAGE — атомарность Native ZFS | ARGO.TECH";
const description =
  "C/ROW (copy-on-write и redirect-on-write) в ISCRA STORAGE: Native ZFS не перезаписывает используемые блоки, исключает write hole и обеспечивает быстрые снимки, контрольные суммы end-to-end и единую архитектуру с RAID-Z.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/storage/iscrastorage/crow/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/storage/iscrastorage/crow/",
    title,
    description,
    images: [ogImage("crow")],
  },
};

const accentClassName = "text-[#FF9000]";
const gridLabelClassName = "xl:whitespace-normal xl:text-[20.5px] xl:leading-6";
const gridCellClassName = "xl:pb-9";

const Lines = ({ lines }) =>
  lines.map((line, index) => (
    <span key={index} className={cn("block", !line && "h-6")}>
      {line}
    </span>
  ));

const atomicityItems = [
  {
    title: "Среда RAID Z",
    label: (
      <Lines
        lines={[
          "Для Native RAID-Z в ISCRA STORAGE одновременно формируется новая полная полоса, содержащая данные и соответствующую parity.",
          "Создаются новые блоки метаданных с указателями на новые данные.",
          "В родительских block pointer сохраняются контрольные суммы дочерних блоков.",
          "",
          "Изменения распространяются вверх по дереву метаданных.",
          "После записи всех блоков ZFS фиксирует новый корень дерева в новом uberblock.",
        ]}
      />
    ),
  },
  {
    title: "Uberblock является точкой фиксации",
    label: (
      <Lines
        lines={[
          "Если питание пропало до его записи, новое дерево недоступно, а ZFS продолжает использовать прежнее согласованное состояние; если новый uberblock записан, он указывает на полностью сформированное новое дерево; частично записанные блоки незавершённой транзакции",
          "не становятся частью доступной файловой системы.",
        ]}
      />
    ),
  },
  {
    title: "Поддержка ZFS",
    label: (
      <Lines
        lines={[
          "В терминологии snapshot-систем ZFS не является классическим copy-before-write решением.",
          "",
          "Хотя базовая архитектура называется Copy-on-Write, при изменении данных ZFS работает по принципу redirect-on-write: старый блок остаётся на месте, новый записывается в свободное пространство, а активное дерево переключается на него.",
          "",
          "Поэтому ISCRA получает преимущества RoW — отсутствие дополнительного копирования старого блока, быстрые snapshot и эффективное совместное использование пространства — вместе с транзакционной моделью ZFS, end-to-end checksums и интеграцией с RAID-Z",
        ]}
      />
    ),
  },
  {
    title: "Приоритетное и последовательное восстановление",
    label:
      "Наши продукты проходят многоуровневые проверки безопасности и контроля качества. Решения соответствуют требованиям информационной безопасности и нормативам защиты информации, обеспечивая надёжную защиту корпоративной инфраструктуры",
  },
];

const compareHead = [
  "Характеристика",
  "Классический snapshot CoW",
  "RoW",
  <span key="iscra" className={cn(accentClassName, "font-bold")}>
    Native ZFS в ISCRA
  </span>,
];

const accent = (text) => (
  <span key={text} className={accentClassName}>
    {text}
  </span>
);

const strong = (text) => (
  <span key={text} className="title-color">
    {text}
  </span>
);

const compareRows = [
  ["Старый блок перед изменением", "Копируется", "Остаётся на месте", "Остаётся на месте"],
  ["Новые данные", "Перезаписывают исходный блок", "Пишутся в новый блок", "Пишутся в новый блок"],
  ["Дополнительная запись старых данных", "Да", "Нет", "Нет"],
  ["First-write penalty", "Выраженный", "Ниже", "Нет отдельного copy-before-write"],
  ["Создание snapshot", "Быстрое", "Быстрое", accent("Практически мгновенное")],
  ["Выделенная snapshot area", "Часто используется", "Зависит от реализации", "Не требуется"],
  ["Защита metadata", "Зависит от snapshot engine", "Зависит от реализации", "TXG и Uberblock"],
  [
    "Контрольные суммы",
    strong("Не являются частью механизма"),
    strong("Не являются частью механизма"),
    "End-to-end Checksums",
  ],
  [
    "Интеграция с RAID",
    "Обычно отдельный слой",
    "Зависит от реализации",
    "Единая архитектура ZFS и RAID-Z",
  ],
  [
    "Несколько snapshot",
    "Зависит от реализации",
    "Старые блоки могут разделяться",
    "Один блок может использоваться многими Snapshot",
  ],
  ["Writable clone", "Отдельный механизм", "Обычно поддерживается", "Native ZFS Clone"],
  [
    "Инкрементальная репликация",
    "Отдельный механизм",
    "Зависит от продукта",
    "ZFS Send на основе Snapshot",
  ],
];

const compareCellClassName =
  "min-h-12 items-center justify-center px-2 py-2 text-center text-xs xl:text-[14px] xl:leading-[17px] font-normal";
const compareColumnClassNames = ["text-color", "text-color", "text-color", "title-color"];
const compareHeadCellClassName = "uppercase text-[10px] xl:text-[12px] bg-black/3 dark:bg-white/6";

const featureItems = [
  {
    title: "Транзакции копирования при записи",
    label:
      "Архитектура, исключающая перезапись существующих блоков данных. Новые данные всегда записываются в свободное место, а указатели обновляются только после успешного завершения операции. Это гарантирует консистентность файловой системы даже при внезапном отключении питания (отсутствие write hole)",
  },
  {
    title: "Неизменяемые снимки",
    label:
      "Создание мгновенных снимков файловой системы на определенный момент времени без остановки сервисов. Благодаря архитектуре файловой системы Copy-on-Write, снимки являются неизменяемыми точечными копиями данных. Они защищают от случайного удаления, повреждения файлов или атак вирусов-шифровальщиков, позволяя мгновенно откатить всю систему или отдельный файл к исходному состоянию.",
  },
  {
    title: "Самовосстанавливающаяся архитектура",
    label: (
      <>
        При обнаружении несовпадения контрольной суммы в массиве, система автоматически
        извлекает корректную копию данных с другого диска
        <br className="hidden xl:inline" /> и исправляет поврежденный блок на лету, информируя
        администратора
        <br className="hidden xl:inline" /> о проблеме.
      </>
    ),
  },
  {
    title: "Приоритетное и последовательное восстановление",
    label:
      "Интеллектуальные алгоритмы восстановления массива, которые минимизируют нагрузку на здоровые диски в процессе реконструкции данных, снижая риск каскадного отказа накопителей.",
  },
];

export default function IscraCrow() {
  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="C/ROW"
        title="write hole (C/ROW)"
        className="xl:pb-7 xl:min-h-125.5"
        nameClassName={cn(
          "whitespace-nowrap text-center text-[100px] md:text-[120px] lg:text-[160px] xl:text-[200px] leading-none xl:pl-0 xl:mt-29.75 xl:w-144 xl:-ml-1.5",
          accentClassName,
        )}
        textClassName="xl:ml-23 xl:w-123.5 xl:gap-0 xl:pt-30.75"
        titleClassName="xl:text-right xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="font-extralight xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        <span className="block">
          Атомарность Native ZFS в ISCRA STORAGE решает проблему write-hole:
        </span>
        <span className="block font-bold">
          не перезаписывая используемые блоки
          <br className="hidden xl:inline" /> на прежнем месте.
        </span>
        <span className="block mt-4 xl:mt-7.75">
          Изменение выполняется как новая транзакция:
        </span>
        <span className="block font-bold mt-2 xl:mt-3.5 xl:whitespace-nowrap">
          Новые данные записываются в свободное место.
        </span>
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <PartnerInfo className="xl:pt-17.25" textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-bold">ISCRA STORAGE:</span> Хранение на уровне
          ядра. Контроль на уровне байта.
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={atomicityItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="font-normal xl:text-[30px]">
          <span className="title-color">Российская СХД мирового уровня. </span>
          <span className="text-[#a1a1a1] dark:text-[#ededed]">Нативно. Надёжно. Навсегда.</span>
        </span>
      </PartnerInfo>
      <PartnerTable
        head={compareHead}
        rows={compareRows}
        gridClassName="grid-cols-4"
        minWidthClassName="min-w-180"
        cellClassName={compareCellClassName}
        columnClassNames={compareColumnClassNames}
        headColumnClassNames={[
          cn(compareHeadCellClassName, "title-color"),
          cn(compareHeadCellClassName, "title-color"),
          cn(compareHeadCellClassName, "title-color"),
          compareHeadCellClassName,
        ]}
      />
      <div className="h-10 xl:h-25" />
      <PartnerTextGrid
        items={featureItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <div className="pt-10 xl:pt-20" />
      <Contact source="ISCRA STORAGE C/ROW" />
    </main>
  );
}
