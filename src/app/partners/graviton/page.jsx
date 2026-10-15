import Image from "next/image";
import {
  GravitonHero,
  GravitonAwards,
  GravitonSplit,
  GravitonInfo,
  GravitonProducts,
  GravitonProperties,
  TextGrid,
  Contact,
  Faq
} from "@/sections";
import { Breadcrumbs } from "@/components";
import { gravitonVariants, faqVariants } from "@/config";

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

export default function Graviton() {
  const { useCases } = gravitonVariants;
  const { faqGraviton } = faqVariants;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <GravitonHero />
      <GravitonAwards />
      <GravitonSplit
        left={
          <p className="font-normal leading-8.25">
            <span className="title-color font-medium">Компания Гравитон и ARGO.TECH</span>{" "}
            сотрудничает с 2022 года. Наши команды объединяют аппаратные
            платформы Гравитон и программный комплекс ISCRA STORAGE. Результат:
            единые системы хранения, которые работают отказоустойчиво и строятся
            на российских технологиях.
          </p>
        }
        right={
          <a
            href={PAK_CASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group"
          >
            <p className="group-hover:title-color transition-colors font-normal leading-8.25">
              Компания Гравитон и ARGO.TECH развернули программно-аппаратный
              комплекс (ПАК) для ФБУН НИИ СБМ Роспотребнадзора: <br />
              <span className="title-color font-medium">
                Научно-исследовательского института системной биологии и
                медицины
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
      <GravitonInfo model="ГРАВИТОН СХ424А24БМ,ТСЦМ.466539.006-01">
        Импортонезависимая высокопроизводительная СХД, для государственных
        закупок и объектов <span className="title-color">КИИ</span>.
      </GravitonInfo>
      <GravitonSplit
        left={
          <p className="font-normal leading-8.25">
            <span className="title-color font-medium">Гарантированная совместимость</span>
            <br />
            Поддерживаем весь спектр инфраструктурных решений: от операционных
            систем до платформ виртуализации, СЗИ и систем резервного
            копирования. Локальных и международных. Без дополнительных настроек.
          </p>
        }
        right={
          <p className="font-normal leading-8.25">
            <span className="title-color font-medium">
              Надёжность, подтверждённая масштабом.
            </span>
            <br />
            Ежедневно — десятки петабайт, под защитой: государственные
            инфраструктуры, крупные операторы данных, задачи высшей категории.
          </p>
        }
      />
      <GravitonProducts />
      <GravitonInfo model="СХ424И24БМ-АР">
        Высокий показатель <span className="graviton-color">Throughput</span> в
        сегменте систем среднего уровня.
      </GravitonInfo>
      <GravitonProperties />
      <GravitonInfo model="СХ412И36БМ16Т-АР">
        Для хранения критически важной информации
      </GravitonInfo>
      <TextGrid
        items={useCases}
        titleClassName="graviton-color"
        className="border-b!"
      />
      <Contact source="Гравитон" />
      <Faq variants={faqGraviton} titleClassName="text-[#D40032]" />
    </main>
  );
}
