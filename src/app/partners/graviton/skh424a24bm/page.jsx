import {
  GravitonProductHero,
  GravitonLogos,
  GravitonInfo,
  GravitonCompound,
  GravitonMechanisms,
  TextGrid,
  Contact,
  Faq,
} from "@/sections";
import { Breadcrumbs } from "@/components";
import { gravitonProductsVariants, faqVariants } from "@/config";

const MODEL = "СХ424А24БМ, ТСЦМ.466539.006-01";
const REESTR_URL = "https://gisp.gov.ru/goods/#/product/5599310";

const title = `СХД Гравитон ${MODEL} — ARGO.TECH`;
const description =
  "Система хранения данных Гравитон СХ424А24БМ на AMD EPYC 7513 с программным комплексом ISCRA STORAGE: два активных контроллера, до 24 накопителей, Ethernet до 200 Гбит/с, Fibre Channel до 64 Гбит/с.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/partners/graviton/skh424a24bm/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/partners/graviton/skh424a24bm/",
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

export default function GravitonSkh424a24bm() {
  const { compoundTabs, features, mechanisms } = gravitonProductsVariants.skh424a24bm;
  const { faqGraviton } = faqVariants;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs
        className="page-container pt-2 mb-5 font-light text-color"
        lastLabel="СХ424А24БМ"
      />
      <GravitonProductHero
        title={`Система хранения данных Гравитон ${MODEL}`}
        subtitle="Одна система: множество государственных задач"
        image={{ src: "/graviton/skh424a24bm-hero.png", width: 878, height: 386 }}
        imageLight={{ src: "/graviton/skh424a24bm-hero-light.svg", width: 878, height: 386 }}
        serverOffset={{ x: 86, y: 83 }}
      />
      <GravitonLogos />
      <GravitonInfo>
        <span className="font-medium xl:text-[30px]">
          <span className="text-[#D40032]">Надёжность.</span>{" "}
          <span className="title-color">Производительность. Гибкость.</span>
        </span>
      </GravitonInfo>
      <GravitonCompound tabs={compoundTabs} reestrHref={REESTR_URL}>
        <span className="title-color font-normal">
          Высокопроизводительная система хранения данных: {MODEL}:
        </span>{" "}
        Контроллеры системы хранения с AMD EPYC 7513, обеспечивают параллелизм
        и помогают достигать самых высоких показателей{" "}
        <span className="title-color">Throughput</span>
      </GravitonCompound>
      <GravitonInfo>
        <span className="font-medium xl:text-[30px]">
          <span className="title-color">Самый высокий</span>{" "}
          <span className="text-[#D40032]">Throughput</span>
        </span>
      </GravitonInfo>
      <TextGrid items={features} className="border-b!" />
      <GravitonInfo>
        <span className="font-medium xl:text-[30px]">
          <span className="title-color">
            Основные механизмы сохранности данных: {MODEL}
          </span>
        </span>
      </GravitonInfo>
      <GravitonMechanisms items={mechanisms} />
      <Contact source={`Гравитон ${MODEL}`} />
      <Faq variants={faqGraviton} titleClassName="text-[#D40032]" />
    </main>
  );
}
