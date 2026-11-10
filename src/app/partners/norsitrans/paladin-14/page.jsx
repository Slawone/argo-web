import {
  PartnerProductHero,
  PartnerLogos,
  PartnerInfo,
  PartnerCompound,
  PartnerMechanisms,
  PartnerTextGrid,
  PartnerProducts,
  Contact,
} from "@/sections";
import { Breadcrumbs } from "@/components";
import { norsiVariants, norsiProductsVariants, partnerVariants, ogImage } from "@/config";

const REESTR_URL = "https://gisp.gov.ru/goods/#/product/4427663";
const MODEL = "ПАЛАДИН-14";

const title = `СХД Норси-Транс ПАЛАДИН-Х14 с ISCRA STORAGE(СХД АРГО) | ARGO.TECH`;
const description =
  "СХД на платформе Норси-Транс ПАЛАДИН-Х14 с ISCRA STORAGE(СХД АРГО): корпус 1U, два Intel Xeon Scalable, 4 диска LFF, 2 слота M.2, DDR4. Запросите КП";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/partners/norsitrans/paladin-14/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/partners/norsitrans/paladin-14/",
    title,
    description,
    images: [ogImage("paladin-14")],
  },
};

export default function NorsiPaladin14() {
  const { compoundTabs, features, jbods, mechanisms } = norsiProductsVariants.paladin14;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <Breadcrumbs
        className="page-container pt-2 mb-5 font-light text-color"
        lastLabel={MODEL}
      />
      <PartnerProductHero
        title={"Контроллер\nсистемы хранения данных\nПАЛАДИН-14"}
        subtitle={"Построен на базе материнской платы\nНИКА.469555.001."}
        image={{ src: "/norsitrans/paladin14-dark.svg", width: 675, height: 487 }}
        imageLight={{ src: "/norsitrans/paladin14-light.svg", width: 670, height: 450 }}
        serverOffset={{ x: 40, y: 52 }}
      />
      <PartnerLogos items={norsiVariants.brandLogos} />
      <PartnerInfo className="pt-2 md:pt-4 xl:pt-13">
        <span className="font-medium xl:text-[30px]">
          <span className="accent-norsi">1U: Когда размер имеет значение</span>
        </span>
      </PartnerInfo>
      <PartnerCompound tabs={compoundTabs} reestrHref={REESTR_URL} accent={partnerVariants.accents.norsi}>
        <span className="title-color font-normal">Паладин 14</span>{" "}
        контроллер, из которого вы собираете СХД под задачу. Возьмите 1 контроллер:
        получите базовую систему. 2 контроллера: отказоустойчивую СХД. 4 контроллера:
        кластер. Добавьте JBOD-полки для ёмкости или узлы “Пантера-128” и вырастете
        до десятков петабайт.
      </PartnerCompound>
      <PartnerInfo>
        <span className="xl:text-[30px]">
          <span className="title-color font-normal">
            1U, в котором достаточно мощности для серьёзных задач.
          </span>
        </span>
      </PartnerInfo>
      <PartnerTextGrid items={features} />
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
