import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components";
import {
  IscraProtocolHero,
  IscraSnapshotDiagram,
  PartnerLogos,
  PartnerInfo,
  PartnerSplit,
  Contact,
} from "@/sections";
import { iscraVariants, ogImage } from "@/config";

const title = "SLOG в ISCRA STORAGE — отдельный журнал синхронных записей ZIL | ARGO.TECH";
const description =
  "SLOG (Separate Log) в ISCRA STORAGE: выделенное устройство для журнала намерений ZFS (ZIL) синхронных транзакций. Как работает синхронная запись без SLOG на HDD и с SLOG на SSD/NVMe: задержка, IOPS, подтверждение операций.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/technology/slog/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/slog/",
    title,
    description,
    images: [ogImage("slog")],
  },
};

const pillLinkClassName =
  "inline-flex items-center gap-1.5 rounded-lg border border-[#e5e5e5] dark:border-white/20 bg-white px-4 py-1.5 text-sm md:text-base font-normal text-[#1f1f1f] shadow-sm transition-transform md:hover:scale-105";

const splitGridClassName = "xl:text-[28px] xl:leading-[33.2px] xl:min-h-68.5";

export default function IscraSlog() {
  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="SLOG"
        title="Separate Log"
        className="xl:pb-7 xl:min-h-125.5"
        nameClassName="text-center uppercase text-[64px] md:text-[120px] lg:text-[160px] xl:text-[200px] leading-normal bg-[linear-gradient(180deg,#7129FF_0%,#A285DB_96.11%)] bg-clip-text text-transparent"
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#a1a1a1] dark:text-[#a1a1a1] font-extralight xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Выделенное устройство для журнала синхронных транзакций (ZIL) Native ZFS в
        ISCRA STORAGE
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <div className="h-10 xl:h-25" />
      <PartnerSplit
        gridClassName={splitGridClassName}
        left={
          <p className="text-color font-normal leading-8.25">
            <span className="title-color font-medium">
              SLOG (Separate Log) это выделенное устройство для журнала синхронных
              транзакций ZFS (ZIL).
            </span>
            <span>
              {" "}
              SLOG не является кэшем записи. Асинхронные операции записи не затрагивают
              ZIL — они накапливаются в памяти и сбрасываются на диск в рамках
              следующей транзакционной группы (TXG). ARC и L2ARC ускоряют чтение, а
              SLOG ускоряет синхронную запись.
            </span>
          </p>
        }
        right={
          <div className="flex h-full flex-col">
            <p className="text-color font-normal text-base md:text-lg xl:text-[20px] xl:leading-[33px]">
              <span className="title-color font-medium">
                MRU (Most Recently Used) и MFU (Most Frequently Used)
              </span>
              <span>
                {" "}
                это два списка, которыми оперирует алгоритм ARC (Adaptive Replacement
                Cache) в ISCRA STORAGE. Они определяют, какие данные кэшируются в
                оперативной памяти и как кэш адаптируется к нагрузке.
              </span>
            </p>
            <div className="mt-6">
              <Link href="/technology/zil/" className={`${pillLinkClassName} pointer-events-none`}>
                ZIL (ZFS Intent Log)
                <Sparkles className="size-4 text-[#7129FF]" />
              </Link>
            </div>
          </div>
        }
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          ARC всегда работает в{" "}
          <span className="title-color font-bold">RAM</span>
        </span>
      </PartnerInfo>
      <IscraSnapshotDiagram variant="withoutslog" />
      <div className="h-10 xl:h-25" />
      <PartnerSplit
        gridClassName={splitGridClassName}
        left={
          <p className="text-color font-normal leading-8.25">
            <span className="title-color font-medium">
              Синхронные записи попадают в ZIL, который находится на основных дисках
              пула (HDD).
            </span>
            <span>
              {" "}
              Каждый fsync должен ждать, пока медленные диски выполнят операцию. Данные
              часто записываются дважды (сначала в ZIL, затем в основной пул). Высокая
              задержка, IOPS ограничен возможностями пула.
            </span>
          </p>
        }
        right={<span />}
        rightClassName="max-md:hidden"
      />
      <div className="h-10 xl:h-25" />
      <IscraSnapshotDiagram variant="withslog" />
      <div className="h-10 xl:h-25" />
      <PartnerSplit
        gridClassName={splitGridClassName}
        left={
          <p className="text-color font-normal leading-8.25">
            <span className="title-color font-medium">
              ZIL переносится на выделенное быстрое устройство (SSD/NVMe).
            </span>
            <span>
              {" "}
              Синхронные записи попадают в быстрый журнал, и Native ZFS в ISCRA STORAGE
              немедленно подтверждает операцию приложению — не дожидаясь медленных
              основных дисков. Данные позже записываются в основной пул в фоновом
              режиме (в рамках TXG). Низкая задержка, высокий IOPS.
            </span>
          </p>
        }
        right={<span />}
        rightClassName="max-md:hidden"
      />
      <div className="pt-10 xl:pt-20" />
      <Contact source="ISCRA STORAGE SLOG" />
    </main>
  );
}
