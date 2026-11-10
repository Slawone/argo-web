import { PartnersList, PartnersHero, PartnersTech, PartnersDigital, PartnersWork, PartnersUniver } from "@/sections";
import { Breadcrumbs } from "@/components";
import { partnersLogos, ogImage } from "@/config";

export const metadata = {
  title: "Технологические партнёры и интеграции | ARGO.TECH",
  description:
    "Партнёры ARGO.TECH: оборудование (Норси-Транс, Гравитон, Ютинет, Депо), ПО (РОСА, АЛЬТ, РЕД ОС), вузы (МИРЭА, МЭИ). Тестирование, поддержка до 10 лет.",
  alternates: {
    canonical: "/partners/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/partners/",
    title: "Технологические партнёры и интеграции | ARGO.TECH",
    description:
      "Партнёры ARGO.TECH: оборудование (Норси-Транс, Гравитон, Ютинет, Депо), ПО (РОСА, АЛЬТ, РЕД ОС), вузы (МИРЭА, МЭИ). Тестирование, поддержка до 10 лет.",
    images: [ogImage("partners")],
  },
};

export default function Partners() {
  const { logos1, logos2, logos3 } = partnersLogos;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <PartnersHero />
      <PartnersList logos={logos1} />
      <PartnersTech />
      <PartnersList logos={logos2} />
      <PartnersDigital />
      <PartnersWork />
      <PartnersList logos={logos3} />
      <PartnersUniver />
    </main>
  );
}
