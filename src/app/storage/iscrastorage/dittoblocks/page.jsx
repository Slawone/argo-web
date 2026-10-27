import { Breadcrumbs } from "@/components";
import {
  IscraProtocolHero,
  PartnerLogos,
  PartnerInfo,
  PartnerSplit,
  Contact,
} from "@/sections";
import { iscraVariants, ogImage } from "@/config";

const title = "Ditto blocks Copies=N в ISCRA STORAGE — защита от bit rot | ARGO.TECH";
const description =
  "Технология Ditto blocks в ISCRA STORAGE автоматически дублирует метаданные Native ZFS, а Copies=N управляет числом копий данных. Защита от bit rot (тихого повреждения данных) и надёжное хранение на уровне байта.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/storage/iscrastorage/dittoblocks/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/storage/iscrastorage/dittoblocks/",
    title,
    description,
    images: [ogImage("dittoblocks")],
  },
};

const splitClassName = "xl:text-[26.5px] xl:min-h-91.25";
const textClassName = "font-normal leading-8.25";

export default function IscraDittoBlocks() {
  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name={"BIT\nROT"}
        title={
          <>
            Ditto blocks
            <br className="hidden xl:inline" /> Copies=N
          </>
        }
        className="xl:pb-7"
        nameClassName="whitespace-pre-line text-center text-[#FF1500] leading-none xl:text-[200px] xl:pl-0 xl:mt-18.5 xl:w-144 xl:-ml-1.5"
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Механизм дублирования блоков данных, для обеспечения надежности
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <PartnerInfo className="xl:pt-17.25" textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-bold">ISCRA STORAGE:</span> Хранение на уровне
          ядра. Контроль на уровне байта.
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName="xl:text-[26.5px]"
        left={
          <p className={textClassName}>
            <span className="text-[#FF1500] font-medium">Bit rot</span> (также известный как
            тихое повреждение данных, silent data corruption) это самопроизвольное изменение
            одного или нескольких битов в блоке данных на носителе: Не сопровождается аппаратной
            ошибкой; Не обнаруживается стандартными средствами; Накапливается со временем
          </p>
        }
        right={
          <p className="font-normal leading-8.25 title-color">
            Система считает, что данные в порядке, но на самом деле они уже изменились.
          </p>
        }
      />
      <PartnerInfo>
        <span className="title-color font-medium xl:text-[30px]">
          Технология Ditto blocks в ISCRA STORAGE
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName={`md:grid-cols-2 ${splitClassName}`}
        rightClassName="xl:flex xl:items-center"
        left={
          <p className={textClassName}>
            Технология Ditto blocks в ISCRA STORAGE
            <br className="hidden xl:inline" /> это механизм автоматического резервирования
            <br className="hidden xl:inline" /> по примеру технологии{" "}
            <span className="title-color">Copies = N:</span> метаданных Native ZFS в ISCRA
            STORAGE. Главная цель — защита от bit rot (тихого повреждения данных). Если один
            блок метаданных оказывается нечитаемым из-за дефекта носителя, ISCRA STORAGE может
            использовать другую копию, чтобы восстановить структуру файловой системы
          </p>
        }
        right={
          <p className={textClassName}>
            В ISCRA STORAGE технология Ditto Blocks работает как невидимый, но важный страж
            целостности.
            <br className="hidden xl:inline" /> Она автоматически защищает метаданные Native ZFS
            <br className="hidden xl:inline" /> от bit rot, что в сочетании с контролем версий и
            RAID-Z делает систему хранения по-настоящему отказоустойчивой и надёжной.
          </p>
        }
      />
      <PartnerInfo>
        <span className="title-color font-medium xl:text-[30px]">
          Технология Copies = N в ISCRA STORAGE
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName={`md:grid-cols-2 ${splitClassName}`}
        rightClassName="xl:flex xl:items-center"
        left={
          <p className={textClassName}>
            Технология <span className="title-color">Copies = N</span> в ISCRA STORAGE
            управляет количеством копий данных, хранимых для этого набора данных. Эти копии
            являются дополнением к любой избыточности, обеспечиваемой пулом, например,
            зеркалированием или RAID-Z. Копии хранятся на разных дисках, если это возможно.
            Изменение этого свойства влияет только на вновь записываемые данные. Поэтому
            устанавливайте это свойство во время создания файловой системы.
          </p>
        }
        right={
          <p className={textClassName}>
            Двойная защита там, где это важно: Copies=N позволяет защитить выбранные данные
            (например, критичные БД, юридические документы, медицинские архивы)
            дополнительными копиями, даже если пул уже имеет избыточность.
          </p>
        }
      />
      <div className="pt-10 xl:pt-20" />
      <Contact source="ISCRA STORAGE Ditto blocks" />
    </main>
  );
}
