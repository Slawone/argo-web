import { Breadcrumbs } from "@/components";
import { DocumentList, Contact } from "@/sections";
import { documentsVariants, ogImage } from "@/config";

const title = "Сертификаты совместимости ISCRA STORAGE (№5850) — ARGO.TECH";
const description =
  "Сертификаты совместимости ISCRA STORAGE (№5850 от 20.09.2019) с российскими операционными системами и платформами виртуализации: РЕД ОС, РЕД Виртуализация, Горизонт ВС, UTINET Glovirt, zVirt, Base ALT, ROSA Virtualization, РОСА ХРОМ.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/storage/iscrastorage/certification/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/storage/iscrastorage/certification/",
    title,
    description,
    images: [ogImage("certification")],
  },
};

export default function CertificationPage() {
  const { certificates } = documentsVariants;

  return (
    <main className="font-sans bg-white dark:bg-black">
      <section className="section-py">
        <div className="page-container">
          <Breadcrumbs className="mb-5 font-light text-color" />
          <h1 className="text-[20px] md:text-[40px] uppercase title-color font-medium mb-7.5">
            Сертификаты совместимости ISCRA STORAGE (№5850 / 20.09.2019)
          </h1>

          <p className="font-light text-[16px] md:text-[18px] text-color border-b border-b-black/8 dark:border-b-white/14 pb-2 mb-7.5">
            Дата последнего обновления - 11.11.2025
          </p>

          <DocumentList items={certificates} itemClassName="md:text-[20px]" />
        </div>
      </section>
      <Contact source="Сертификаты совместимости" />
    </main>
  );
}
