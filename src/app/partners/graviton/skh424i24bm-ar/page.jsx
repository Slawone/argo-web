import {
  PartnerProductHero,
  PartnerLogos,
  PartnerInfo,
  PartnerCompound,
  PartnerMechanisms,
  PartnerTextGrid,
  Contact,
  Faq,
} from "@/sections";
import { Breadcrumbs } from "@/components";
import { gravitonVariants, gravitonProductsVariants, partnerVariants, faqVariants } from "@/config";

const MODEL = "СХ424И24БМ-АР";
const MODEL_FULL = "СХ424И24БМ-АР ЕЦРТ.466539.012 / ЕЦРТ.466539.012-05";
const REESTR_URL = "https://gisp.gov.ru/goods/#/product/3978889";

const title = `СХД Гравитон ${MODEL} на процессорах Intel — ARGO.TECH`;
const description =
  "Корпоративная система хранения данных Гравитон СХ424И24БМ-АР на процессорах Intel с программным комплексом ISCRA STORAGE: отказоустойчивая архитектура, 24 HDD и 24 SSD, Ethernet до 100 Гбит/с, Fibre Channel 16/32 Гбит/с.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/partners/graviton/skh424i24bm-ar/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/partners/graviton/skh424i24bm-ar/",
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

export default function GravitonSkh424i24bmAr() {
  const { compoundTabs, features, mechanisms } = gravitonProductsVariants.skh424i24bmAr;
  const { faqGraviton } = faqVariants;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs
        className="page-container pt-2 mb-5 font-light text-color"
        lastLabel={MODEL}
      />
      <PartnerProductHero
        title={"Система хранения данных\nГравитон СХ424И24БМ-АР\nЕЦРТ.466539.012\nЕЦРТ.466539.012-05"}
        subtitle={"Корпоративная система хранения данных\nс отказоустойчивой архитектурой"}
        image={{ src: "/graviton/skh424a24bm-hero1.svg", width: 878, height: 386 }}
        imageLight={{ src: "/graviton/skh424a24bm-hero1-light.svg", width: 878, height: 386 }}
        serverOffset={{ x: 86, y: 83 }}
      />
      <PartnerLogos items={gravitonVariants.logos} />
      <PartnerInfo className="pt-2 md:pt-4 xl:pt-13">
        <span className="font-medium xl:text-[30px] title-color">
          Отказоустойчивость и Российское происхождение
        </span>
      </PartnerInfo>
      <PartnerCompound tabs={compoundTabs} reestrHref={REESTR_URL} accent={partnerVariants.accents.graviton}>
        <span className="title-color font-normal">
          Высокопроизводительная СХД ГРАВИТОН {MODEL_FULL} на процессорах Intel:
        </span>{" "}
        Предназначена для задач, требующих максимальной скорости доступа к
        данным, бесперебойной работы и высокой отказоустойчивости.
      </PartnerCompound>
      <PartnerInfo>
        <span className="font-medium xl:text-[30px]">
          <span className="text-[#D40032]">{MODEL}:</span>{" "}
          <span className="title-color">Флагман совместного решения</span>
        </span>
      </PartnerInfo>
      <PartnerTextGrid items={features} />
      <PartnerInfo>
        <span className="font-medium xl:text-[30px]">
          <span className="title-color">Основные механизмы сохранности данных:</span>
          <br />
          <span className="text-[#D40032]">
            {MODEL}: ЕЦРТ.466539.012; ЕЦРТ.466539.012-05
          </span>
        </span>
      </PartnerInfo>
      <PartnerMechanisms items={mechanisms} />
      <Contact source={`Гравитон ${MODEL}`} />
      <Faq variants={faqGraviton} titleClassName="text-[#D40032]" />
    </main>
  );
}
