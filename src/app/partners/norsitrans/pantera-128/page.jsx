import {
  PartnerProductHero,
  PartnerLogos,
  PartnerInfo,
  PartnerCompound,
  PartnerMechanisms,
  PartnerTextGrid,
  PartnerSplit,
  Contact,
} from "@/sections";
import { Breadcrumbs } from "@/components";
import { norsiVariants, norsiProductsVariants, partnerVariants, ogImage } from "@/config";

const MODEL = "ПАНТЕРА-128";
const REESTR_URL = "https://gisp.gov.ru/goods/#/product/4798350";

const title = `Одноконтроллерная СХД Норси Транс ${MODEL} — ARGO.TECH`;
const description =
  "Одноконтроллерная система хранения данных Норси Транс ПАНТЕРА-128 с программным комплексом ISCRA STORAGE: 128 дисков LFF в корпусе 5U, два процессора Intel Xeon Scalable, до 2 ТБ памяти, Ethernet до 100 Гбит/с. Для архивов, бэкапа и холодного хранения.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/partners/norsitrans/pantera-128/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/partners/norsitrans/pantera-128/",
    title,
    description,
    images: [ogImage("pantera-128")],
  },
};

export default function NorsiPantera128() {
  const { compoundTabs, features, mechanisms } = norsiProductsVariants.pantera128;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs
        className="page-container pt-2 mb-5 font-light text-color"
        lastLabel={MODEL}
      />
      <PartnerProductHero
        title={"Одноконтроллерная\nсистема хранения данных\nПАНТЕРА-128"}
        subtitle={"Плотность под конкретные задачи:\nархивы, бэкап, холодное хранение."}
        image={{ src: "/norsitrans/pantera-dark.svg", width: 790, height: 415 }}
        imageLight={{ src: "/norsitrans/pantera-light.svg", width: 790, height: 415 }}
        serverOffset={{ x: 86, y: 85 }}
      />
      <PartnerLogos items={norsiVariants.brandLogos} />
      <PartnerInfo className="pt-2 md:pt-4 xl:pt-13">
        <span className="font-medium xl:text-[30px]">
          <span className="accent-norsi">Плотность,</span>{" "}
          <span className="title-color">недостижимая для классических платформ</span>
        </span>
      </PartnerInfo>
      <PartnerCompound tabs={compoundTabs} reestrHref={REESTR_URL} accent={partnerVariants.accents.norsi}>
        <span className="title-color font-normal">Пантера-128</span>{" "}
        это петабайты хранения в пяти юнитах: 128 дисков LFF в одном шасси, без
        внешних полок и лишней коммутации. Два процессора Intel Xeon Scalable и до
        2 ТБ памяти дают ресурс под самые требовательные задачи хранения.
      </PartnerCompound>
      <PartnerInfo>
        <span className="xl:text-[30px]">
          <span className="title-color font-normal">{MODEL}:</span>{" "}
          <span className="accent-norsi">Место для роста. без замены платформы</span>
        </span>
      </PartnerInfo>
      <PartnerTextGrid items={features} />
      <div className="h-10 xl:h-25" />
      <PartnerSplit
        gridClassName="xl:text-[28px] xl:leading-[33.2px]"
        hidePlus
        left={
          <p className="text-color font-light leading-8.25">
            Холодное хранение это данные, к которым редко обращаются, но которые
            нельзя потерять: архивы, долгосрочные бэкапы, медиа, документы для
            комплаенса. Здесь решает не скорость, а ёмкость и цена за терабайт. И
            именно здесь Пантера-128 меняет правила: 128 дисков LFF в 5U. Около
            25 дисков на юнит до петабайтов ёмкости в одном шасси.
          </p>
        }
        right={
          <p className="text-color font-light leading-8.25">
            Архивы растут годами. Платить за них приходится каждый день.
          </p>
        }
      />
      <PartnerInfo>
        <span className="xl:text-[30px]">
          <span className="accent-norsi">Основные механизмы сохранности данных:</span>{" "}
          <span className="title-color font-normal">СХД {MODEL}</span>
        </span>
      </PartnerInfo>
      <PartnerMechanisms items={mechanisms} />
      <Contact source={`Норси Транс ${MODEL}`} />
    </main>
  );
}
