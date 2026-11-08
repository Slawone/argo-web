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

const title = "ARC и L2ARC в ISCRA STORAGE — адаптивный кэш замещения | ARGO.TECH";
const description =
  "ARC (Adaptive Replacement Cache) в ISCRA STORAGE: адаптивный кэш в оперативной памяти, балансирующий между MRU (свежие) и MFU (частые) данными, и L2ARC — второй уровень кэша на SSD. Когда L2ARC полезен, а когда вреден.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/technology/arc/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/arc/",
    title,
    description,
    images: [ogImage("arc")],
  },
};

const gridLabelClassName = "xl:whitespace-normal xl:text-[20.5px] xl:leading-6";
const bigGridLabelClassName = "xl:whitespace-normal xl:text-[28px] xl:leading-[33.2px]";
const gridCellClassName = "xl:pb-9";

const pillLinkClassName =
  "inline-flex items-center gap-1.5 rounded-lg border border-[#e5e5e5] dark:border-white/20 bg-white px-4 py-1.5 text-sm md:text-base font-normal text-[#1f1f1f] shadow-sm transition-transform md:hover:scale-105";

const leadClassName = "font-medium text-[#1f1f1f] dark:text-[#ededed]";
const tailClassName = "dark:text-[#a1a1a1]";

const arcItems = [
  {
    title: "arc-1",
    label: (
      <>
        <span className={leadClassName}>ARC это основной кэш ISCRA STORAGE</span>
        <span className={tailClassName}>
          {" "}
          в оперативной памяти, он адаптивно балансирует между MRU (свежие) и MFU
          (частые) данными, снижает нагрузку на диски и ускоряет доступ к данным.
        </span>
      </>
    ),
  },
  {
    title: "arc-2",
    label: (
      <>
        <span className={leadClassName}>В ISCRA STORAGE</span>
        <span className={tailClassName}>
          {" "}
          алгоритм ARC примечателен тем, что отслеживает не только недавно
          использованные объекты (LRU-кэш), но и часто используемые (MFU-кэш).
        </span>
      </>
    ),
  },
];

const hierarchyItems = [
  {
    title: "hierarchy-1",
    label:
      "Кэш в Системе Хранения Данных это не “одна функция”, а иерархия уровней. ARC в RAM даёт максимальную скорость для самых горячих данных. L2ARC на SSD расширяет кэш за пределы оперативной памяти, когда её не хватает. В ISCRA STORAGE оба механизма работают на уровне файловой системы Native ZFS и настраиваются под конкретный профиль нагрузки.",
  },
  {
    title: "hierarchy-2",
    label: (
      <span className="block text-sm md:text-base lg:text-lg xl:text-[20px] xl:leading-[33px]">
        <span className="title-color font-medium">
          MRU (Most Recently Used) и MFU (Most Frequently Used)
        </span>
        <span className={tailClassName}>
          {" "}
          это два списка, которыми оперирует алгоритм ARC (Adaptive Replacement Cache)
          в ISCRA STORAGE. Они определяют, какие данные кэшируются в оперативной
          памяти и как кэш адаптируется к нагрузке.
        </span>
        <span className="mt-5 block">
          <Link href="/technology/mrumfu/" className={pillLinkClassName}>
            MRU / MFU
            <Sparkles className="size-4 text-[#007AFF]" />
          </Link>
        </span>
      </span>
    ),
  },
];

const useItems = [
  {
    title: "Рабочий набор больше RAM, но меньше L2ARC",
    label:
      "Классический сценарий: у вас 64GB RAM, рабочий набор 200 GB горячих данных. ARC не вмещает всё, начинаются вытеснения. L2ARC на SSD/NVMe подхватывает то, что вылетает из RAM, и при повторном обращении данные читаются с SSD, а не с медленных HDD.",
  },
  {
    title: "Случайное чтение горячих блоков",
    label:
      "L2ARC создан для случайного чтения статичного контента. Если пользователи или приложения многократно запрашивают одни и те же блоки, L2ARC снижает нагрузку на диски пула и ускоряет отклик.",
  },
  {
    title: "Много пользователей с общим горячим набором",
    label: (
      <>
        <p>
          Если несколько пользователей обращаются к одним и тем же файлам (общие
          проектные папки, шаблоны VM, индексы), L2ARC даёт выигрыш: один кэшированный
          блок обслуживает запросы все
        </p>
        <p className="mt-5">Хранение DDT при дедупликации</p>
        <p className="mt-1">
          Если таблица дедупликации (DDT) не помещается в RAM, её можно разместить на
          L2ARC это даёт средний уровень между быстрой памятью и медленными дисками.
        </p>
      </>
    ),
  },
  {
    title: "Persistent L2ARC",
    label:
      "С включённым persistent L2ARC кэш восстанавливается после перезагрузки. Это критично для систем, которые часто перезагружаются иначе кэш каждый раз холодный.",
  },
];

const misuseItems = [
  {
    title: "Последовательные нагрузки (read-once)",
    label:
      "Бэкапы, архивация, потоковое видео, аналитические сканы. Блоки читаются один раз и больше не нужны. L2ARC будет наполняться впустую, изнашивая SSD, без единого попадания.",
  },
  {
    title: "Рабочий набор полностью помещается в ARC",
    label:
      "Если ARC справляется сам (высокий hitratio, мало вытеснений), L2ARC не даст ничего. Все запросы обслуживаются из RAM, а L2ARC просто декоративный.",
  },
];

const SectionHeading = ({ children, gray = false }) => (
  <PartnerInfo className="xl:py-15" textClassName="max-w-none">
    <span
      className={`font-medium xl:text-2xl ${gray ? "text-color" : "title-color"}`}
    >
      {children}
    </span>
  </PartnerInfo>
);

export default function IscraArc() {
  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="ARC"
        title={
          <>
            Adaptive
            <br />
            Replacement Cache
          </>
        }
        className="xl:pb-7 xl:min-h-125.5"
        nameClassName="text-center uppercase text-[64px] md:text-[120px] lg:text-[160px] xl:text-[200px] leading-normal bg-[linear-gradient(180deg,#007AFF_0%,#004999_96.11%)] bg-clip-text text-transparent"
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#a1a1a1] dark:text-[#a1a1a1] font-extralight xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        ARC (Adaptive Replacement Cache) алгоритм кэширования, для управления
        оперативной памятью.
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <PartnerInfo className="xl:pt-17.25" textClassName="max-w-260">
        <span className="title-color xl:text-[30px]">
          <span className="font-bold">L2ARC:</span> Может быть уменьшен или увеличен
          без остановки системы
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={arcItems}
        titleClassName="hidden"
        labelClassName={bigGridLabelClassName}
        cellClassName={gridCellClassName}
        gridClassName="md:grid-cols-[59fr_41fr]"
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="title-color xl:text-[30px]">
          <span className="font-bold">L2ARC:</span> полезен, когда рабочий набор данных
          больше оперативной памяти, но всё ещё помещается в SSD-кэш
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={hierarchyItems}
        titleClassName="hidden"
        labelClassName={bigGridLabelClassName}
        cellClassName={gridCellClassName}
        gridClassName="md:grid-cols-[59fr_41fr]"
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          ARC всегда работает в{" "}
          <span className="title-color font-bold">RAM</span>
        </span>
      </PartnerInfo>
      <IscraSnapshotDiagram variant="arc" />
      <SectionHeading>Когда L2ARC полезен:</SectionHeading>
      <PartnerTextGrid
        items={useItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <SectionHeading>Когда L2ARC не полезен или вреден:</SectionHeading>
      <PartnerTextGrid
        items={misuseItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <SectionHeading gray>
        Очень частая ошибка: считать L2ARC как процент от объёма HDD-Pool.
      </SectionHeading>
      <PartnerSplit
        gridClassName="xl:text-[28px] xl:leading-[33.2px] xl:min-h-68.5"
        left={
          <p className="text-color font-normal leading-8.25">
            В ISCRA STORAGE есть один кэш чтения в оперативной памяти (ARC), опциональный
            второй кэш чтения на диске (L2ARC) и два типа устройств на пути записи,
            которые часто ошибочно принимают за кэши, но они ими не являются: отдельный
            журнал намерений (SLOG)
          </p>
        }
        right={
          <div className="flex h-full flex-col">
            <p className="text-color font-normal text-base md:text-lg xl:text-[20px] xl:leading-8.25">
              ARC ускоряет чтение, SLOG ускоряет синхронную запись. Они не конкурируют
              и не дополняют друг друга напрямую в Native ZFS ISCRA STORAGE они решают
              разные задачи.
            </p>
            <div className="mt-6 xl:mt-[95px]">
              <Link href="/technology/slog/" className={pillLinkClassName}>
                SLOG (Separate Log)
                <Sparkles className="size-4 text-[#007AFF]" />
              </Link>
            </div>
          </div>
        }
      />
      <div className="pt-10 xl:pt-20" />
      <Contact source="ISCRA STORAGE ARC" />
    </main>
  );
}
