import { Copy } from "lucide-react";
import { Breadcrumbs } from "@/components";
import {
  S3Hero,
  S3CodeTabs,
  S3Table,
  S3Cluster,
  S3Files,
  PartnerInfo,
  PartnerSplit,
  PartnerTextGrid,
  Contact,
  Faq,
} from "@/sections";
import { s3Variants, faqVariants, ogImage } from "@/config";

const title = "S3 STORAGE — ARGO SIII, S3-совместимое объектное хранилище | ARGO.TECH";
const description =
  "ARGO SIII (Secure. Immutable. Intelligent. Infrastructure.) — российский программный комплекс объектного хранения на основе SeaweedFS: S3 API, Object Lock, версионирование, Erasure Coding, геораспределённое масштабирование и мультипротокольный доступ.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/storage/s3storage/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/storage/s3storage/",
    title,
    description,
    images: [ogImage("s3storage")],
  },
};

const { objectTabs, multipartTabs, compareHead, compareRows, cluster, features } = s3Variants;
const { faqS3 } = faqVariants;

const splitTextClassName = "lg:text-xl xl:text-[20px] lg:leading-normal xl:leading-7.5";
const gridLabelClassName = "xl:whitespace-normal xl:text-[20px] xl:leading-5.75";
const gridTitleClassName = "title-color xl:mb-3 xl:text-[28px]";

const Lines = ({ lines }) =>
  lines.map((line, index) => (
    <span key={index} className="block">
      {typeof line === "string" ? line : <span className="text-[#7315f6]">{line.accent}</span>}
    </span>
  ));

const featureItems = features.map((item) => ({
  title: item.title,
  label: (
    <Lines lines={Array.isArray(item.label) ? item.label : item.label.split("\n")} />
  ),
  cellClassName: "xl:pb-9",
}));

const bandLead = "text-[#955fff] dark:text-[#ededed] font-medium";

export default function S3Storage() {
  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <S3Hero
        alt="Неоновая комната с логотипом ARGO SIII"
        title={
          <>
            Программный комплекс объектного хранения ARGO SIII
            <br className="hidden xl:inline" /> (Secure. Immutable. Intelligent. Infrastructure.)
          </>
        }
        source="S3 STORAGE"
      />
      <PartnerSplit
        hidePlus
        gridClassName={`md:grid-cols-2 xl:min-h-137.5 ${splitTextClassName}`}
        leftClassName="min-w-0 xl:pt-15.5 xl:pb-11.5 xl:pl-13 xl:pr-4"
        rightClassName="min-w-0 flex items-start xl:pt-26 xl:pl-10 xl:pr-10 xl:pb-10"
        left={
          <div className="text-[#1f1f1f] dark:text-[#ededed] font-extralight">
            <div className="flex items-center gap-5 mb-4">
              <h2 className="text-2xl xl:text-[28px] uppercase font-medium leading-10.25">
                Состав
              </h2>
              <span className="inline-flex h-10 items-center rounded-full border border-[#7315f6] px-5 text-base font-light text-[#7315f6]">
                NEW
              </span>
            </div>
            <div className="flex flex-col gap-7.5">
              <p>
                ARGO SIII (Secure. Immutable. Intelligent. Infrastructure.) (SeaweedFS based),
                O(1) Disk Seek, Erasure Coding, Bucket Policies, Multi-protocol, Monitoring
              </p>
              <p>
                ARGO SIII объектная система хранения данных, которая поставляется в виде
                программно-аппаратного комплекса на оборудовании технологических партнеров:
              </p>
              <p className="font-normal">ГРАВИТОН, НОРСИ ТРАНС, DEPO, UTINET</p>
              <p>
                Основа решения двухуровневая архитектура, которая не задыхается на метаданных ,
                что позволяет ей быть самой быстрой в своем классе.
              </p>
            </div>
          </div>
        }
        right={<S3CodeTabs tabs={objectTabs} bodyClassName="xl:min-h-72.75" />}
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[24px]">
          <span className={bandLead}>Сбои устраняются автоматически</span> — без вашего участия
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={featureItems}
        titleClassName={gridTitleClassName}
        labelClassName={gridLabelClassName}
      />
      <div className="pt-10 xl:pt-16">
        <PartnerSplit
          gridClassName={`md:grid-cols-[543fr_727fr] xl:min-h-93.25 ${splitTextClassName}`}
          leftClassName="min-w-0 xl:pt-17.5 xl:pb-10 xl:pl-9 xl:pr-9"
          rightClassName="min-w-0 xl:pt-7.5 xl:pb-7.5 xl:px-0"
          left={
            <div className="text-color font-light">
              <h2 className="title-color text-2xl xl:text-[28px] font-medium mb-5 leading-10.25">
                Особенности
              </h2>
              <Lines
                lines={[
                  "Количество объектов в бакете: неограниченно",
                  "Количество во вложенных директорий: неограниченно",
                  "Репликация: RF=1/2/3",
                  "Механизмы обеспечения отказоустойчивости",
                  "Геораспределенное масштабирование",
                  "Российское решение для локального хранения данных",
                ]}
              />
            </div>
          }
          right={
            <S3Files label="Стопка файлов в хранилище ARGO SIII">
              <p className="pointer-events-none absolute left-[7.2%] top-[62.5%] -translate-y-1/2 whitespace-nowrap font-normal tracking-[0.07em] text-[4.6cqw] text-[#1f1f1f] dark:text-[#ededed]">
                Максимальный размер объекта 5Тб
              </p>
              <p className="pointer-events-none absolute left-[7.2%] top-[77.2%] -translate-y-1/2 flex items-center gap-[0.6cqw] whitespace-nowrap font-mono font-semibold text-[2.05cqw] text-[#1f1f1f] dark:text-[#ededed]">
                <span>Erasure</span>
                <span className="rounded-[0.5cqw] bg-[#7129ff] px-[0.7cqw] text-white">Coding:</span>
                <span>Reed-Solomon</span>
                <span className="rounded-[0.5cqw] bg-[#7129ff] px-[0.7cqw] text-white">(10 4)</span>
                <Copy className="ml-[0.8cqw] size-[2.5cqw] text-[#707070]" aria-hidden="true" />
              </p>
              <p className="pointer-events-none absolute left-[7.2%] top-[88.3%] -translate-y-1/2 flex items-center gap-[0.6cqw] whitespace-nowrap font-mono font-semibold text-[2.05cqw] text-[#1f1f1f] dark:text-[#ededed]">
                <span>Быстрее чем</span>
                <span className="rounded-full border border-[#7129ff] px-[0.8cqw]">local</span>
                <span>storage</span>
              </p>
            </S3Files>
          }
        />
      </div>
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[24px]">
          <span className="text-[#1f1f1f] dark:text-[#ededed] font-medium">Миллиарды файлов</span>{" "}
          <span className="text-[#955ffd] font-medium">—</span>{" "}
          <span className="text-color font-medium">одна операция чтения</span>
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName={`md:grid-cols-[584fr_686fr] xl:min-h-97.75 ${splitTextClassName}`}
        leftClassName="min-w-0 xl:pt-6.25 xl:pb-7.5 xl:pl-8.5 xl:pr-8.5"
        rightClassName="min-w-0 xl:pt-7 xl:pb-7.5 xl:pl-9 xl:pr-9"
        left={
          <S3CodeTabs
            tabs={multipartTabs}
            rowClassName="h-7.25"
            bodyClassName="xl:min-h-62"
            selectedClassName="bg-[#7129ff]"
          />
        }
        right={<S3Table head={compareHead} rows={compareRows} />}
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[24px]">
          <span className="text-[#1f1f1f] dark:text-[#ededed] font-medium">
            Пример организации кластера
          </span>
        </span>
      </PartnerInfo>
      <S3Cluster types={cluster.types} nodes={cluster.nodes} status={cluster.status} />
      <div className="pt-6 xl:pt-13">
        <Faq variants={faqS3} titleClassName="text-[#7129ff]" />
      </div>
      <Contact source="S3 STORAGE" />
    </main>
  );
}
