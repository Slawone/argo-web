import { Breadcrumbs } from "@/components";
import { AboutHero, Timeline } from "@/sections";
import { ogImage } from "@/config";

export const metadata = {
  title: "О компании ARGO.TECH Российский разработчик СХД",
  description:
    "История ARGO.TECH: путь к российским СХД в реестрах Минцифры. Инсталляции на 20 ПБ и более, внедрения в госсектор, партнёрства с МТС, и МИРЭА.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/about/",
    title: "О компании ARGO.TECH Российский разработчик СХД",
    description:
      "История ARGO.TECH: путь к российским СХД в реестрах Минцифры. Инсталляции на 20 ПБ и более, внедрения в госсектор, партнёрства с МТС, и МИРЭА.",
    images: [ogImage("about")],
  },
};

export default function About() {
  return (
    <>
      <main className="font-sans bg-white dark:bg-black">
        <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
        <AboutHero />
        <Timeline />
      </main>
    </>
  );
}
