import { Breadcrumbs } from "@/components";
import {
  Compound,
  Control,
  StorageHero,
  Safety,
  Info,
  TextGrid,
  Controllers,
  Faq,
  Properties,
  Partnerships,
  Scale,
  StorageInfo,
  HardwareSection,
} from "@/sections";
import { textsVariants } from "@/config";
import { faqVariants } from "@/config";
import { buildFaqJsonLd } from "@/lib/jsonLd";

export const metadata = {
  title: "СХД АРГО — реестр №5850, для госзаказчиков и импортозамещения",
  description:
    "Блочная СХД с возможностью объединения до 4 кластеров (8 контроллеров) под единым управлением. Кэширование L2ARC, снимки, репликация, дедупликация. В реестрах Минцифры и Минпромторга.",
  alternates: {
    canonical: "/storage/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/storage/",
    title: "СХД АРГО — реестр №5850, для госзаказчиков и импортозамещения",
    description:
      "Блочная СХД с возможностью объединения до 4 кластеров (8 контроллеров) под единым управлением. Кэширование L2ARC, снимки, репликация, дедупликация. В реестрах Минцифры и Минпромторга.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Storage() {
  const { textItems3 } = textsVariants;
  const { faqStorage } = faqVariants;
  const faqJsonLd = buildFaqJsonLd(faqStorage);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="font-sans bg-white dark:bg-black">
        <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
        <StorageHero />
        <Compound />
        <Control />
        <Info text="Многоконтроллерность повышает отказоустойчивость" />
        <TextGrid items={textItems3} />
        <Safety />
        <Controllers />
        <Properties />
        <Info text="Данные - опора цифрового суверенитета" />
        <Scale />
        <Partnerships />
        <StorageInfo />
        <HardwareSection />
        <Faq variants={faqStorage} />
      </main>
    </>
  );
}
