import Image from "next/image";
import {
  PartnerHero,
  GravitonAwards,
  PartnerSplit,
  PartnerInfo,
  PartnerProducts,
  PartnerProperties,
  PartnerTextGrid,
  Contact,
  Faq
} from "@/sections";
import { Breadcrumbs } from "@/components";
import { gravitonVariants, partnerVariants, faqVariants } from "@/config";

const PAK_CASE_URL =
  "https://companies.rbc.ru/news/IcQPkklepG/graviton-i-argotech-postavili-pak-dlya-fbun-nii-sbm-rospotrebnadzora/";

const description =
  "ARGO.TECH и Гравитон: российские системы хранения данных на аппаратных платформах Гравитон с программным комплексом ISCRA STORAGE. СХД в реестре Минпромторга для госзакупок и объектов КИИ.";

export const metadata = {
  title: "ARGO.TECH × Гравитон — российские системы хранения данных",
  description,
  alternates: {
    canonical: "/partners/graviton/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/partners/graviton/",
    title: "ARGO.TECH × Гравитон — российские системы хранения данных",
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

const logo = {
  light: "/graviton/logo-red.svg",
  dark: "/graviton/logo.svg",
  width: 368,
  height: 68,
  alt: "Гравитон",
};

const visual = (
  <div className="relative w-80 lg:w-md aspect-448/461">
    <Image
      src="/graviton/logo-light.svg"
      width={322}
      height={327}
      alt=""
      className="dark:hidden absolute left-[14.06%] top-[15.6%] w-[71.875%] h-auto"
    />
    <Image
      src="/graviton/logo-neon.svg"
      width={448}
      height={461}
      alt=""
      className="hidden dark:block absolute inset-0 w-full h-full"
    />
  </div>
);

export default function Graviton() {
  const { products, minprom, useCases } = gravitonVariants;
  const { properties } = partnerVariants;
  const { faqGraviton } = faqVariants;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <PartnerHero logo={logo} visual={visual}>
        Компания Гравитон надёжный партнёр в области импортозамещения,
        <br className="hidden lg:inline" /> занимающий лидирующие позиции на
        рынке российской
        <br className="hidden lg:inline" /> вычислительной техники.
      </PartnerHero>
      <GravitonAwards />
      <PartnerSplit
        gridClassName="xl:grid-cols-[1fr_515px] xl:text-[26.5px]"
        rightClassName="xl:pr-5"
        left={
          <p className="font-normal leading-8.25">
            <span className="title-color font-medium">Компания Гравитон и ARGO.TECH</span>{" "}
            сотрудничает с 2022 года.
            <br className="hidden xl:inline" /> Наши команды объединяют аппаратные платформы Гравитон
            <br className="hidden xl:inline" /> и программный комплекс ISCRA STORAGE. Результат: единые
            <br className="hidden xl:inline" /> системы хранения, которые работают отказоустойчиво
            <br className="hidden xl:inline" /> и строятся на российских технологиях.
          </p>
        }
        right={
          <a
            href={PAK_CASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 xl:gap-2.5 group"
          >
            <p className="group-hover:title-color transition-colors font-normal leading-8.25 xl:whitespace-nowrap">
              Компания Гравитон и ARGO.TECH
              <br className="hidden xl:inline" /> развернули программно-аппаратный
              <br className="hidden xl:inline" /> комплекс (ПАК) для ФБУН НИИ СБМ
              <br className="hidden xl:inline" /> Роспотребнадзора: <br />
              <span className="title-color font-medium">
                Научно-исследовательского института
                <br className="hidden xl:inline" /> системной биологии и медицины
              </span>
            </p>
            <Image
              src="/graviton/external-link.svg"
              width={36}
              height={36}
              alt=""
              className="shrink-0 w-7 md:w-9 invert dark:invert-0 md:group-hover:scale-110 transition-transform"
            />
          </a>
        }
      />
      <PartnerInfo model="ГРАВИТОН СХ424А24БМ,ТСЦМ.466539.006-01">
        Импортонезависимая
        <br className="hidden xl:inline" /> высокопроизводительная СХД, для государственных закупок и объектов{" "}
        <span className="accent-graviton">КИИ</span>.
      </PartnerInfo>
      <PartnerSplit
        gridClassName="xl:grid-cols-[1fr_515px] xl:text-[26.5px]"
        left={
          <p className="font-normal leading-8.25">
            <span className="title-color font-medium">Гарантированная совместимость</span>
            <br />
            Поддерживаем весь спектр инфраструктурных решений:
            <br className="hidden xl:inline" /> от операционных систем до платформ виртуализации, СЗИ
            <br className="hidden xl:inline" /> и систем резервного копирования. Локальных
            <br className="hidden xl:inline" /> и международных. Без дополнительных настроек.
          </p>
        }
        right={
          <p className="font-normal leading-8.25 xl:whitespace-nowrap">
            <span className="title-color font-medium">
              Надёжность, подтверждённая
              <br className="hidden xl:inline" /> масштабом.
            </span>
            <br />
            Ежедневно — десятки петабайт,
            <br className="hidden xl:inline" /> под защитой: государственные
            <br className="hidden xl:inline" /> инфраструктуры, крупные операторы
            <br className="hidden xl:inline" /> данных, задачи высшей категории.
          </p>
        }
      />
      <PartnerProducts
        products={products}
        minprom={minprom}
        buttonClassName="button-accent-graviton"
        className="pt-10 md:pt-16 xl:pt-25"
      />
      <PartnerInfo model="СХ424И24БМ-АР">
        Высокий показатель <span className="accent-graviton">Throughput</span> в
        сегменте систем среднего уровня.
      </PartnerInfo>
      <PartnerProperties items={properties} />
      <PartnerInfo model="СХ412И36БМ16Т-АР">
        Для хранения критически важной информации
      </PartnerInfo>
      <PartnerTextGrid items={useCases} titleClassName="accent-graviton" />
      <Contact source="Гравитон" />
      <Faq variants={faqGraviton} titleClassName="text-[#D40032]" />
    </main>
  );
}
