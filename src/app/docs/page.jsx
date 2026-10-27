import { Breadcrumbs } from "@/components";
import { DocumentList, Contact } from "@/sections";
import { documentsVariants, ogImage } from "@/config";

export const metadata = {
  title: "Документы и реквизиты ARGO.TECH — реестр Минцифры №5850",
  description:
    "Официальные документы ООО «Арго Технолоджи Ист»: реквизиты компании, записи в реестре российского ПО Минцифры (№5850, №31727), свидетельство о регистрации программы для ЭВМ, политика обработки персональных данных, прайс-лист.",
  alternates: {
    canonical: "/docs/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/docs/",
    title: "Документы и реквизиты ARGO.TECH — реестр Минцифры №5850",
    description:
      "Официальные документы ООО «Арго Технолоджи Ист»: реквизиты компании, записи в реестре российского ПО Минцифры (№5850, №31727), свидетельство о регистрации программы для ЭВМ, политика обработки персональных данных, прайс-лист.",
    images: [ogImage("docs")],
  },
};

export default function DocumentsPage() {
  const { docs } = documentsVariants;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <section className="section-py">
        <div className="page-container">
          <Breadcrumbs className="mb-5 font-light text-color" />
          <h1 className="text-[20px] md:text-[45px] uppercase title-color font-medium mb-7.5">
            {"Документы ооо “арго технолоджи ист”"}
          </h1>

          <p className="font-light text-[16px] md:text-[18px] text-color border-b border-b-black/8 dark:border-b-white/14 pb-2 mb-7.5">
            Последнее обновление 12 января 2026
          </p>

          <p className="font-light text-[16px] md:text-[18px] text-color mb-7.5">
            Обращаем ваше внимание, что на данной странице размещены основные
            документы. В случае отсутствия требуемого документа в представленном
            перечне, вы можете направить официальный запрос по электронной почте:
            info@argo.tech. Мы обработаем ваш запрос и предоставим запрашиваемые
            материалы в кратчайшие сроки.
          </p>

          <DocumentList items={docs} />
        </div>
      </section>
      <Contact source="Документы" />
    </main>
  );
}
