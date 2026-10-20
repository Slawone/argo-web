import Image from "next/image";
import {
  PartnerHero,
  PartnerLogos,
  PartnerSplit,
  PartnerInfo,
  PartnerProducts,
  PartnerProperties,
  PartnerTextGrid,
  Contact,
  Faq,
} from "@/sections";
import { Breadcrumbs } from "@/components";
import { norsiVariants, partnerVariants, faqVariants } from "@/config";

const ATLON_NEWS_URL =
  "https://atlon.ru/news/poleznaya_informacia/v_rf_stali_dostupny_unikalnye_sistemy_khraneniya_dannykh/";

const title = "ARGO.TECH × Норси Транс — российские системы хранения данных";
const description =
  "ARGO.TECH и Норси Транс: отечественные системы хранения данных на контроллерах Норси Транс с программным комплексом ISCRA STORAGE — от компактных решений до распределённых СХД на десятки тысяч дисков.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/partners/norsitrans/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/partners/norsitrans/",
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

const logo = {
  light: "/norsitrans/logo-black.svg",
  dark: "/norsitrans/logo.svg",
  width: 369,
  height: 75,
  alt: "Норси Транс",
};

const visual = (
  <div className="relative w-80 lg:w-118 aspect-472/366 my-16 xl:mt-21 xl:mb-31 xl:mr-12">
    <Image
      src="/norsitrans/hero-chrome-light.webp"
      width={943}
      height={726}
      alt=""
      priority
      className="dark:hidden absolute inset-x-0 top-0 w-full h-auto"
    />
    <Image
      src="/norsitrans/hero-chrome.webp"
      width={943}
      height={732}
      alt=""
      priority
      className="hidden dark:block absolute inset-0 w-full h-full"
    />
  </div>
);

export default function NorsiTrans() {
  const { logos, minprom, products, useCases } = norsiVariants;
  const { properties } = partnerVariants;
  const { faqNorsiTrans } = faqVariants;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <PartnerHero logo={logo} visual={visual}>
        ЗАО “НОРСИ-ТРАНС” отечественная компания полного цикла:
        <br className="hidden lg:inline" /> разрабатывает и производит серверы, контроллеры и системы
        <br className="hidden lg:inline" /> хранения данных
      </PartnerHero>
      <PartnerLogos items={logos} />
      <PartnerSplit
        gridClassName="xl:grid-cols-[1fr_515px] xl:text-[25.5px]"
        rightClassName="xl:pr-5"
        left={
          <p className="font-normal leading-8.25">
            <span className="title-color font-medium">Компания Норси Транс и ARGO.TECH</span>{" "}
            сотрудничает с 2021
            <br className="hidden xl:inline" /> года. Мы объединяем аппаратные платформы Норси Транс
            <br className="hidden xl:inline" /> и программный комплекс ISCRA STORAGE в единые системы
            <br className="hidden xl:inline" /> хранения данных (СХД). Такое сочетание обеспечивает
            <br className="hidden xl:inline" /> отказоустойчивую работу, высокую производительность и полное
            <br className="hidden xl:inline" /> соответствие требованиям импортозамещения.
          </p>
        }
        right={
          <a
            href={ATLON_NEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 xl:gap-2.5 group"
          >
            <p className="group-hover:title-color transition-colors font-normal leading-8.25 xl:whitespace-nowrap">
              Модели вычислительных контроллеров
              <br className="hidden xl:inline" /> Норси Транс с ISCRA STORAGE позволяют
              <br className="hidden xl:inline" /> строить системы хранения любого
              <br className="hidden xl:inline" /> масштаба — от компактных решений
              <br className="hidden xl:inline" /> до крупных распределённых СХД
              <br className="hidden xl:inline" /> на десятки тысяч дисков.
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
      <PartnerInfo model="ТИАРА-А4">
        Двухконтроллерная отечественная система хранения данных с высоким
        <br className="hidden xl:inline" /> уровнем отказоустойчивости.
      </PartnerInfo>
      <PartnerSplit
        gridClassName="xl:grid-cols-[1fr_515px] xl:text-[25.5px]"
        left={
          <p className="font-normal leading-8.25">
            Решения <span className="title-color font-medium">Норси Транс и ARGO.TECH</span>{" "}
            позволяют строить системы
            <br className="hidden xl:inline" /> хранения со следующими преимуществами: масштабирование
            <br className="hidden xl:inline" /> до 8 контроллеров по мере роста; отказоустойчивость нужного
            <br className="hidden xl:inline" /> уровня под конкретную задачу; единая платформа без смены
            <br className="hidden xl:inline" /> архитектуры на любом этапе.
          </p>
        }
        right={
          <p className="font-normal leading-8.25 xl:whitespace-nowrap">
            Десятки наших решений и систем по всей
            <br className="hidden xl:inline" /> России, каждый день: под защитой.
            <br className="hidden xl:inline" /> Государственные инфраструктуры,
            <br className="hidden xl:inline" /> энергетика и транспортная инфраструктура.
          </p>
        }
      />
      <PartnerInfo model="Контроллер ПАЛАДИН-212 НИКА.469555.001">
        Начните Систему Хранения Данных
        <br className="hidden xl:inline" /> с одного контроллера
      </PartnerInfo>
      <PartnerProducts
        products={products}
        minprom={minprom}
        buttonClassName="button-accent-norsi"
      />
      <PartnerInfo model="ПАНТЕРА-128">
        До 120 дисков в одном корпусе, идеал для холодного хранения.
      </PartnerInfo>
      <PartnerProperties items={properties} titleClassName="accent-norsi" />
      <PartnerInfo model="ТИАРА-А4">
        Российская СХД для задач, где нет права на ошибку
      </PartnerInfo>
      <PartnerTextGrid items={useCases} titleClassName="accent-norsi" />
      <Contact source="Норси Транс" />
      <Faq variants={faqNorsiTrans} titleClassName="text-[#007AFF]" />
    </main>
  );
}
