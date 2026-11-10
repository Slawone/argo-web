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

const title = "MRU и MFU в ISCRA STORAGE(СХД АРГО): списки кэша ARC | ARGO.TECH";
const description =
  "MRU (недавние данные) и MFU (частые) два списка алгоритма ARC. Как кэш адаптируется к нагрузке: балансировка, первое чтение, автоматическое расширение.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/technology/mrumfu/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/mrumfu/",
    title,
    description,
    images: [ogImage("mrumfu")],
  },
};

const pillLinkClassName =
  "inline-flex items-center gap-1.5 rounded-lg border border-[#e5e5e5] dark:border-white/20 bg-white px-4 py-1.5 text-sm md:text-base font-normal text-[#1f1f1f] shadow-sm transition-transform md:hover:scale-105";

const splitGridClassName = "xl:text-[28px] xl:leading-[33.2px] xl:min-h-68.5";
const gridLabelClassName = "xl:whitespace-normal xl:text-[20.5px] xl:leading-6";
const gridCellClassName = "xl:pb-9";

const featureItems = [
  {
    title: "Балансировка",
    label:
      "Native ZFS в ISCRA STORAGE это не пассивный кэш. Он балансирует между MRU и MFU, динамически перераспределяя память под то, что действительно нужно системе.",
  },
  {
    title: "Первое чтение",
    label:
      "Когда блок читается впервые, он попадает в MRU. При повторном обращении ISCRA STORAGE фиксирует это и переводит блок в MFU — так кэш адаптируется к реальной нагрузке и дольше удерживает популярные данные.",
  },
  {
    title: "Автоматическое расширение",
    label:
      "ARC самостоятельно решает, сколько памяти выделить под MRU, а сколько под MFU. При росте горячих данных расширяется MFU: при преобладании разовых запросов — MRU. Это позволяет кэш подстраиваться под текущий профиль нагрузки.",
  },
  {
    title: "Эффективность",
    label:
      "ARC одинаково хорошо работает в двух мирах: там, где данные читают снова и снова (базы данных, виртуализация), и там, где их читают один раз и забывают (потоковое чтение). Кэш адаптируется к обоим сценариям без ручной настройки.",
  },
];

export default function IscraMruMfu() {
  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name={
          <>
            MRU
            <br />
            MFU
          </>
        }
        title={
          <>
            Most Recently Used
            <br />
            Most Frequently Used
          </>
        }
        className="xl:pb-7 xl:min-h-125.5"
        nameClassName="text-center uppercase text-[64px] md:text-[110px] lg:text-[150px] xl:text-[180px] leading-[1.1] bg-[linear-gradient(180deg,#7129FF_0%,#A285DB_96.11%)] bg-clip-text text-transparent"
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#a1a1a1] dark:text-[#a1a1a1] font-extralight xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        В ARC список MRU (Most Recently Used) отвечает за недавно запрошенные блоки, а
        MFU (Most Frequently Used) за данные, к которым обращались повторно. Такое
        разделение позволяет кэшу адаптироваться к нагрузке
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <div className="h-10 xl:h-25" />
      <PartnerSplit
        gridClassName={splitGridClassName}
        left={
          <p className="text-color font-normal leading-8.25">
            <span className="title-color font-medium">MRU (Most Recently Used)</span>
            <span>
              {" "}
              это свежие данные, к которым обратились только что.{" "}
            </span>
            <span className="title-color font-medium">MFU (Most Frequently Used)</span>
            <span>
              {" "}
              данные, доказавшие популярность повторными запросами. ARC адаптивно
              балансирует между этими списками, ускоряя доступ к востребованным блокам.
            </span>
          </p>
        }
        right={
          <div className="flex h-full flex-col">
            <p className="text-color font-normal text-base md:text-lg xl:text-[20px] xl:leading-8.25">
              <span className="title-color font-medium">
                ARC (Adaptive Replacement Cache)
              </span>
              <span>
                {" "}
                это основной кэш чтения ISCRA STORAGE в оперативной памяти, который
                адаптивно балансирует между двумя списками: MRU (Most Recently Used) и
                MFU (Most Frequently Used)
              </span>
            </p>
            <div className="mt-6">
              <Link href="/technology/arc/" className={pillLinkClassName}>
                ARC (Adaptive Replacement Cache)
                <Sparkles className="size-4 text-[#007AFF]" />
              </Link>
            </div>
          </div>
        }
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="title-color xl:text-[30px]">
          <span className="font-bold">ARC:</span> Не просто кэш — адаптивный интеллект
          хранения.
        </span>
      </PartnerInfo>
      <IscraSnapshotDiagram variant="mrumfu" />
      <PartnerInfo textClassName="max-w-260">
        <span className="title-color xl:text-[30px]">
          <span className="font-bold">ARC:</span> память, которая знает, что важно.
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={featureItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <div className="pt-10 xl:pt-20" />
      <Contact source="ISCRA STORAGE MRU/MFU" />
    </main>
  );
}
