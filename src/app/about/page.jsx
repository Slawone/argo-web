import { Breadcrumbs } from "@/components";
import { AboutHero, Timeline, Faq } from "@/sections";
import { faqVariants } from "@/config";

export const metadata = {
  title: "Страница истории компании ARGO.TECH",
  description:
    "История ARGO.TECH: от разработки в 2009 до российских СХД в реестрах Минцифры. Инсталляции на 20 ПБ и более, внедрения в госсектор, партнёрства с МТС, МИРЭА, РБК.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/about/",
    title: "Страница истории компании ARGO.TECH",
    description:
      "История ARGO.TECH: от разработки в 2009 до российских СХД в реестрах Минцифры. Инсталляции на 20 ПБ и более, внедрения в госсектор, партнёрства с МТС, МИРЭА, РБК.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function About() {
  const { faqAbout } = faqVariants;

  return (
    <>
      <main className="font-sans bg-white dark:bg-black">
        <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
        <AboutHero />
        <Timeline /> 
        <Faq variants={faqAbout} />
      </main>
    </>
  );
}
