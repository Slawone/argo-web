import {
  PartnerProductHero,
  PartnerLogos,
  PartnerInfo,
  PartnerCompound,
  PartnerMechanisms,
  PartnerTextGrid,
  PartnerProducts,
  PartnerSplit,
  Contact,
} from "@/sections";
import { Breadcrumbs } from "@/components";
import { norsiVariants, norsiProductsVariants, partnerVariants, ogImage } from "@/config";

const REESTR_URL = "https://gisp.gov.ru/goods/#/product/4427665";
const MODEL = "ПАЛАДИН-212";

const title = `СХД Норси-Транс ПАЛАДИН-Х12 с ISCRA STORAGE(СХД АРГО) | ARGO.TECH`;
const description =
  "СХД на платформе Норси-Транс ПАЛАДИН-Х12 с ISCRA STORAGE(СХД АРГО): корпус 2U, два Intel Xeon Scalable, 12 диска LFF, 2 слота M.2, DDR4. Запросите КП";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/partners/norsitrans/paladin-212/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/partners/norsitrans/paladin-212/",
    title,
    description,
    images: [ogImage("paladin-212")],
  },
};

export default function NorsiPaladin212() {
  const { compoundTabs, features, jbods, mechanisms } = norsiProductsVariants.paladin212;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs
        className="page-container pt-2 mb-5 font-light text-color"
        lastLabel={MODEL}
      />
      <PartnerProductHero
        title={"Контроллер\nсистемы хранения данных\nПАЛАДИН-212"}
        subtitle={"Построен на базе материнской платы\nНИКА.469555.001."}
        image={{ src: "/norsitrans/paladin212-dark.svg", width: 670, height: 450 }}
        imageLight={{ src: "/norsitrans/paladin212-light.svg", width: 670, height: 450 }}
        serverOffset={{ x: 40, y: 52 }}
      />
      <PartnerLogos items={norsiVariants.brandLogos} />
      <PartnerInfo className="pt-2 md:pt-4 xl:pt-13">
        <span className="font-medium xl:text-[30px]">
          <span className="accent-norsi">Контроллер,</span>{" "}
          <span className="title-color">который умеет все.</span>
        </span>
      </PartnerInfo>
      <PartnerCompound tabs={compoundTabs} reestrHref={REESTR_URL} accent={partnerVariants.accents.norsi}>
        <span className="title-color font-normal">Паладин-212</span>{" "}
        контроллер, из которого вы собираете СХД под задачу. Возьмите 1 контроллер:
        получите базовую систему. 2 контроллера: отказоустойчивую СХД. 4 контроллера:
        кластер. Добавьте JBOD-полки для ёмкости или узлы “Пантера-128” и вырастете
        до десятков петабайт.
      </PartnerCompound>
      <PartnerInfo>
        <span className="title-color xl:text-[30px]">
          <span className="font-medium">{MODEL}:</span>{" "}
          <span className="font-normal">Один контроллер — любая конфигурация.</span>
        </span>
      </PartnerInfo>
      <PartnerTextGrid items={features} />
      <div className="h-10 xl:h-25" />
      <PartnerSplit
        gridClassName="xl:text-[28px] xl:leading-[33.2px]"
        hidePlus
        left={
          <p className="text-color font-light leading-8.25">
            Компания “НОРСИ-ТРАНС” российский разработчик и производитель серверного
            оборудования, систем хранения данных и программных платформ. Её решения
            используются в проектах, где требования к надёжности и независимости от
            зарубежных технологий особенно высоки — в государственном секторе,
            инфраструктуре и системах критической важности.
          </p>
        }
        right={
          <p className="text-color font-light leading-8.25">
            Для проектов, где не выбирают наугад.
          </p>
        }
      />
      <div className="h-10 xl:h-25" />
      <PartnerProducts
        products={jbods}
        minprom={norsiVariants.minprom}
        buttonClassName="button-accent-norsi"
      />
      <PartnerInfo>
        <span className="xl:text-[30px]">
          <span className="accent-norsi">Основные механизмы сохранности данных:</span>{" "}
          <span className="title-color font-normal">{MODEL}</span>
        </span>
      </PartnerInfo>
      <PartnerMechanisms items={mechanisms} />
      <Contact source={`Норси Транс ${MODEL}`} />
    </main>
  );
}
