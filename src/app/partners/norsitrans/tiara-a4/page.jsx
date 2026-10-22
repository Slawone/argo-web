import {
  PartnerProductHero,
  PartnerLogos,
  PartnerInfo,
  PartnerCompound,
  PartnerMechanisms,
  PartnerTextGrid,
  Contact,
} from "@/sections";
import { Breadcrumbs } from "@/components";
import { norsiVariants, norsiProductsVariants, partnerVariants } from "@/config";

const MODEL = "ТИАРА-А4";

const title = `Двухконтроллерная СХД Норси Транс ${MODEL} — ARGO.TECH`;
const description =
  "Двухконтроллерная система хранения данных Норси Транс ТИАРА-А4 с программным комплексом ISCRA STORAGE: отечественная СХД в корпусе 4U, до 24 накопителей, Ethernet до 100 Гбит/с, Fibre Channel 16/32 Гбит/с.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/partners/norsitrans/tiara-a4/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/partners/norsitrans/tiara-a4/",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function NorsiTiaraA4() {
  const { compoundTabs, features, mechanisms } = norsiProductsVariants.tiaraA4;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs
        className="page-container pt-2 mb-5 font-light text-color"
        lastLabel={MODEL}
      />
      <PartnerProductHero
        title={"Двухконтроллерная\nсистема хранения данных\nТИАРА-А4"}
        subtitle={"Два контроллера. Ноль простоев.\nОдна система: множество государственных задач"}
        image={{ src: "/norsitrans/tiara-hero.svg", width: 878, height: 386 }}
        imageLight={{ src: "/norsitrans/tiara-hero-light.svg", width: 878, height: 386 }}
        serverOffset={{ x: 86, y: 85 }}
      />
      <PartnerLogos items={norsiVariants.brandLogos} />
      <PartnerInfo className="pt-2 md:pt-4 xl:pt-13">
        <span className="font-medium xl:text-[30px]">
          <span className="title-color">Непрерывность.</span>{" "}
          <span className="accent-norsi">Масштабирование.</span>{" "}
          <span className="title-color">Отказоустойчивость.</span>
        </span>
      </PartnerInfo>
      <PartnerCompound tabs={compoundTabs} accent={partnerVariants.accents.norsi}>
        <span className="title-color font-normal">
          Двухконтроллерная система хранения данных: {MODEL}:
        </span>{" "}
        Отечественная СХД в корпусе 4U, предназначенная для построения
        отказоустойчивых кластеров виртуализации, баз данных и критически
        важных для бизнеса решений.
      </PartnerCompound>
      <PartnerInfo>
        <span className="xl:text-[30px]">
          <span className="title-color font-normal">{MODEL}:</span>{" "}
          <span className="accent-norsi">Плотность без компромиссов</span>
        </span>
      </PartnerInfo>
      <PartnerTextGrid items={features} />
      <PartnerInfo>
        <span className="xl:text-[30px]">
          <span className="accent-norsi">Основные механизмы сохранности данных:</span>{" "}
          <span className="title-color font-normal">НОРСИ ТРАНС {MODEL}</span>
        </span>
      </PartnerInfo>
      <PartnerMechanisms items={mechanisms} />
      <Contact source={`Норси Транс ${MODEL}`} />
    </main>
  );
}
