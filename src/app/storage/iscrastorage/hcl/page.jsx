import { Download } from "lucide-react";
import { Breadcrumbs } from "@/components";
import {
  IscraProtocolHero,
  PartnerLogos,
  PartnerInfo,
  PartnerSplit,
  PartnerMechanisms,
  PartnerTable,
  Contact,
} from "@/sections";
import { iscraVariants, hclVariants, ogImage } from "@/config";

const title = "HCL ISCRA STORAGE (СХД АРГО) — список проверенного оборудования";
const description =
  "Полный HCL ISCRA STORAGE: серверы, HBA, JBOD и накопители, проверенные для Native ZFS. Российские вендоры. Соответствие КИИ. Скачать список.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/storage/iscrastorage/hcl/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/storage/iscrastorage/hcl/",
    title,
    description,
    images: [ogImage("hcl")],
  },
};

const pillLinkClassName =
  "inline-flex items-center gap-1.5 rounded-lg border border-[#e5e5e5] dark:border-white/20 bg-white px-4 py-1.5 text-sm md:text-base font-normal text-[#1f1f1f] shadow-sm transition-transform md:hover:scale-105";

const SectionHeading = ({ children }) => (
  <PartnerInfo className="xl:py-15" textClassName="max-w-none">
    <span className="xl:text-[30px]">{children}</span>
  </PartnerInfo>
);

const HclTable = ({ items }) => (
  <PartnerTable
    rows={items.map(({ name, models, chip }) => [
      <span key="name" className="title-color font-bold">
        {name}
      </span>,
      <span key="models" className="text-color">
        {models.split("\n").map((line, index) => (
          <span key={index} className={index > 0 ? "block pl-3.5" : "block"}>
            {line}
          </span>
        ))}
      </span>,
      <span key="chip" className="text-color whitespace-pre-line">
        {chip}
      </span>,
    ])}
    gridClassName="md:grid-cols-[300px_minmax(0,1fr)_300px]"
    minWidthClassName="min-w-200"
    cellClassName="items-start px-4 py-5 md:px-9 md:py-6 xl:px-9.25 xl:py-8.25 text-sm leading-5 md:text-base md:leading-6 lg:text-lg lg:leading-7.5 xl:text-[23px] xl:leading-[33.2px]"
  />
);

export default function IscraStorageHcl() {
  const { platforms, sasHba, ethernet, fibreChannel, infiniband, sasDisks } = hclVariants;

  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs
        className="page-container pt-2 mb-5 font-light text-color"
        lastLabel="HCL"
      />
      <IscraProtocolHero
        name="HCL"
        title={
          <>
            Hardware Compatibility List
            <br />
            ISCRA STORAGE
          </>
        }
        className="xl:pb-7 xl:min-h-125.5"
        nameClassName="text-center uppercase text-[64px] md:text-[120px] lg:text-[160px] xl:text-[200px] leading-normal bg-[linear-gradient(180deg,#FF9000_11.06%,#7129FF_100%)] bg-clip-text text-transparent"
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#a1a1a1] dark:text-[#a1a1a1] font-extralight xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Верифицированный перечень серверных платформ, адаптеров, накопителей, дисковых
        полок (JBOD), сетевых адаптеров и компонентов питания
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <PartnerInfo textClassName="max-w-260">
        <span className="title-color xl:text-[30px]">
          <span className="font-bold">ISCRA STORAGE:</span> Гарантия предсказуемого
          поведения
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName="xl:text-[28px] xl:leading-[33.2px] xl:min-h-68.5"
        left={
          <p className="text-color font-normal leading-8.25">
            <span className="title-color font-medium">
              HCL (Hardware Compatibility List)
            </span>
            <span className="font-light">
              {" "}
              это верифицированный перечень оборудования, для которого ООО “АРГО
              ТЕХНОЛОДЖИ ИСТ” подтверждает не только базовую работоспособность, но и
              предсказуемое поведение на всех уровнях стека: от драйвера устройства в
              ядре ISCRA STORAGE до файловой системы Native ZFS.
            </span>
          </p>
        }
        right={
          <div className="flex h-full flex-col">
            <p className="text-color font-normal text-base md:text-lg xl:text-[20px] xl:leading-[33px]">
              HCL включает оборудование российских производителей (Гравитон, UTINET,
              DEPO, Норси Транс и др.), что упрощает построение импортонезависимой
              инфраструктуры. Полный список: в файле HCL. Если устройства нет в списке,
              обратитесь в поддержку для проверки совместимости.
            </p>
            <div className="mt-6">
              <a
                href="/storage/HCL_ISCRA_Storage.xlsx"
                download
                className={pillLinkClassName}
              >
                HCL ISCRA STORAGE
                <Download className="size-4 text-[#FF9000]" />
              </a>
            </div>
          </div>
        }
      />
      <SectionHeading>
        <span className="title-color font-bold">Верифицированные платформы:</span>{" "}
        <span className="text-color">модели прошедших тестирование.</span>
      </SectionHeading>
      <PartnerMechanisms items={platforms} textClassName="xl:whitespace-pre-wrap" />
      <SectionHeading>
        <span className="title-color font-bold">Верифицированные SAS-HBA:</span>{" "}
        <span className="text-color">Serial Attached SCSI Host Bus Adapter</span>
      </SectionHeading>
      <HclTable items={sasHba} />
      <SectionHeading>
        <span className="title-color font-bold">Верифицированные Ethernet адаптеры:</span>{" "}
        <span className="text-color">Сетевые карты (NIC)</span>
      </SectionHeading>
      <HclTable items={ethernet} />
      <SectionHeading>
        <span className="title-color font-bold">
          Верифицированные Fibre Channel адаптеры
        </span>
      </SectionHeading>
      <HclTable items={fibreChannel} />
      <SectionHeading>
        <span className="title-color font-bold">Верифицированные Infiniband адаптеры</span>
      </SectionHeading>
      <HclTable items={infiniband} />
      <SectionHeading>
        <span className="title-color font-bold">Верифицированные SAS диски</span>
      </SectionHeading>
      <HclTable items={sasDisks} />
      <div className="pt-10 xl:pt-20" />
      <Contact source="ISCRA STORAGE HCL" />
    </main>
  );
}
