import Image from "next/image";
import Link from "next/link";
import { Download, Sparkles } from "lucide-react";
import {
  PartnerHero,
  PartnerLogos,
  PartnerCompound,
  PartnerInfo,
  PartnerSplit,
  PartnerDiagram,
  PartnerTextGrid,
  IscraProtocols,
  PartnerMechanisms,
  Contact,
  Faq,
} from "@/sections";
import { Breadcrumbs } from "@/components";
import { iscraVariants, partnerVariants, faqVariants, ogImage } from "@/config";

const title = "ISCRA STORAGE (СХД АРГО) российская СХД на Native ZFS | ARGO.TECH";
const description =
  "ISCRA STORAGE(СХД АРГО): двухконтроллерная отказоустойчивая СХД на Native ZFS. Блочный и файловый доступ: iSCSI, Fibre Channel, NFS, SMB. Реестр Минцифры №5850.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/storage/iscrastorage/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/storage/iscrastorage/",
    title,
    description,
    images: [ogImage("iscrastorage")],
  },
};

const visual = (
  <div className="relative w-80 xl:w-111.25 xl:mr-6 aspect-445/437">
    <Image
      src="/iscra/hero-light.svg"
      width={309}
      height={301}
      alt=""
      priority
      className="dark:hidden absolute left-[13.26%] top-[13.5%] w-[69.44%] h-auto"
    />
    <Image
      src="/iscra/hero.svg"
      width={445}
      height={437}
      alt=""
      priority
      className="hidden dark:block absolute inset-0 w-full h-full"
    />
  </div>
);

const pillLinkClassName =
  "inline-flex items-center gap-1.5 rounded-lg border border-[#e5e5e5] dark:border-white/20 bg-white px-4 py-1.5 text-sm md:text-base font-normal text-[#1f1f1f] shadow-sm transition-transform md:hover:scale-105";
const splitGridClassName = "xl:text-[27px] xl:leading-[33.2px] xl:min-h-68.5";

const reliability = {
  dark: { src: "/iscra/reliability.svg", width: 983, height: 478, place: { left: -33, top: -31, width: 983 } },
  light: { src: "/iscra/reliability-light.svg", width: 836, height: 338, place: { left: 69, top: 21, width: 836 } },
};

export default function IscraStorage() {
  const { logos, compoundTabs, protocols, features, details, mechanisms } = iscraVariants;
  const { faqIscra } = faqVariants;

  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <PartnerHero
        title={"Система хранения данных\nразработанная в России"}
        visual={visual}
        className="md:pt-11.5"
      >
        Безусловный флагман среди универсальных систем хранения
        <br className="hidden lg:inline" /> <span className="font-bold">ISCRA STORAGE,</span> как
        часть импортонезависимых решений
      </PartnerHero>
      <PartnerLogos items={logos} />
      <PartnerCompound
        variant="card"
        className="xl:pt-18"
        tabs={compoundTabs}
        accent={partnerVariants.accents.iscra}
        actions={
          <>
            <a
              href="/iscra/ISCRA_SolutionArchitec_Web_Online_10.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary flex-center"
            >
              <Download width={20} height={20} />
              Презентация
            </a>
            <Link href="/storage/iscrastorage/certification/" className="button button-primary flex-center">
              Совместимость
            </Link>
          </>
        }
        reestrHref="https://reestr.digital.gov.ru/reestr/307200/?sphrase_id=29283771"
      >
        <div className="flex flex-col gap-8.25 font-light text-base md:text-xl xl:text-[23px] xl:leading-8.25 xl:whitespace-pre text-[#1f1f1f] dark:text-[#707070]">
          <p>
            <span className="title-color font-medium">ISCRA STORAGE OS</span>
            {"\n"}(Intellectual Scalable Clusterised Reliable Appliance Storage)
          </p>
          <p>
            <span className="title-color font-medium">Разработка ARGO.TECH:</span> ISCRA (illumos
            based); Cluster{"\n"}Framework; Extra Framework; Monitoring; PoolHA; SAFL; Plugins;
            {"\n"}Utils; Fault Management; Web.
          </p>
          <p>
            <span className="title-color font-medium">Технологии:</span> illumos (OpenSolaris
            based); ZFS (Zettabyte File{"\n"}System); System Frameworks; Fault Management;
            Userspace Utils;{"\n"}COMSTAR; Drivers.
          </p>
        </div>
      </PartnerCompound>
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-medium">Многоконтроллерная платформа:</span> с
          накопителями, сетевыми интерфейсами
          <br className="hidden xl:inline" /> и предустановленным ПО хранения, которая поставляется
          как единый законченный продукт.
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName="md:grid-cols-[632fr_638fr] xl:text-[26.5px]"
        cellClassName="xl:pt-11.75 xl:pb-21.75"
        left={
          <p className="font-light leading-8.25">
            <span className="title-color font-normal">
              Отказоустойчивая двухконтроллерная платформа
            </span>{" "}
            с<br className="hidden xl:inline" /> модульным дисковым массивом и одновременной
            <br className="hidden xl:inline" /> поддержкой блочных и файловых протоколов доступа
            <br className="hidden xl:inline" /> к данным, выполненный по технологии
            <br className="hidden xl:inline" /> без единой точки отказа.
          </p>
        }
        right={
          <p className="font-light leading-8.25">
            Режим работы: Active/Active или Active/Optimized, что
            <br className="hidden xl:inline" /> исключает единую точку отказа и обеспечивает
            <br className="hidden xl:inline" /> непрерывный доступ
            <br className="hidden xl:inline" /> к данным при проведении обслуживания.
          </p>
        }
      />
      <div className="pt-10 xl:pt-16.75">
        <PartnerDiagram
          title="Надежность"
          alt="Схема отказоустойчивой двухконтроллерной платформы ISCRA STORAGE: два активных контроллера с протоколами NFS, SMB, S3, FC, iSCSI и дисковые полки JBOD / JBOF"
          image={reliability.dark}
          imageLight={reliability.light}
        />
      </div>
      <PartnerInfo>
        <span className="xl:text-[30px]">
          <span className="title-color font-medium">Гибкие настройки:</span> Индивидуальная
          настройка под различные виды нагрузок.
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={features}
        labelClassName="xl:text-[20px] xl:leading-5.5"
        cellClassName="xl:pb-7.5"
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-medium">Расширенная поддержка без лишних затрат.</span>{" "}
          Управление через контроль состояния
          <br className="hidden xl:inline" /> и аналитику инфраструктуры в едином интерфейсе
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={details}
        labelClassName="xl:text-[20px] xl:leading-5.5"
        cellClassName="xl:pb-7.5"
      />
      <PartnerInfo>
        <span className="xl:text-[30px]">
          <span className="accent-iscra font-medium">ISCRA STORAGE:</span> обеспечивает
          интуитивное и безопасное управление всеми
          <br className="hidden xl:inline" /> компонентами системы хранения данных
        </span>
      </PartnerInfo>
      <IscraProtocols intro={protocols.intro} items={protocols.items} />
      <PartnerInfo>
        <span className="xl:text-[30px]">
          <span className="title-color font-medium">Основные механизмы сохранности данных:</span>{" "}
          <span className="accent-iscra font-medium">ISCRA STORAGE</span>
        </span>
      </PartnerInfo>
      <PartnerMechanisms items={mechanisms} />
      <div className="pt-10 xl:pt-20">
        <PartnerSplit
          gridClassName="md:grid-cols-[680fr_590fr] xl:text-[26.5px]"
          cellClassName="xl:pt-10 xl:pb-10.5"
          left={
            <p className="font-light leading-8.25">
              Полнофункциональный веб-интерфейс (GUI): современный
              <br className="hidden xl:inline" /> интерфейс на русском языке, доступный через
              браузер
              <br className="hidden xl:inline" /> по управляющим IP-адресам любого из контроллеров.
              <br className="hidden xl:inline" />
              <br className="hidden xl:inline" /> Не требует установки дополнительных программных
              <br className="hidden xl:inline" /> компонентов или выделенного оборудования.
              <br className="hidden xl:inline" /> Все основные функции ISCRA STORAGE доступны в GUI
              <br className="hidden xl:inline" /> без каких-либо ограничений.
            </p>
          }
          right={
            <p className="font-light leading-8.25">
              Подробный аудит и безопасность: подсистема
              <br className="hidden xl:inline" /> управления обеспечивает детальную фиксацию
              <br className="hidden xl:inline" /> всех действий пользователей и системных событий.
              <br className="hidden xl:inline" />
              <br className="hidden xl:inline" /> Обновление управляющего ПО и микрокодов
              <br className="hidden xl:inline" /> производится без потери доступа к данным
              <br className="hidden xl:inline" /> и остановки сервисов.
            </p>
          }
        />
      </div>
      <div className="pt-10 xl:pt-20">
        <PartnerSplit
          gridClassName={splitGridClassName}
          left={
            <p className="text-color leading-8.25">
              <span className="title-color font-medium">HCL (Hardware Compatibility List)</span>
              <span className="font-light">
                {" "}
                это верифицированный перечень серверных платформ, HBA-адаптеров (SAS/SATA, Fibre Channel), накопителей (SSD, HDD, NVMe), дисковых полок (JBOD), сетевых адаптеров и компонентов питания, которые прошли многоуровневое тестирование на совместимость с Native ZFS в среде ISCRA STORAGE и подтверждены для промышленной эксплуатации в составе программных комплексов.
              </span>
            </p>
          }
          right={
            <div className="flex h-full flex-col justify-between">
              <p className="text-color font-light text-base md:text-lg xl:text-[20px] xl:leading-8.25">
                Список обновляется по мере выхода новых версий ISCRA STORAGE OS и появления новых моделей оборудования.
              </p>
              <div className="mt-6">
                <Link href="/technology/arc/" className={pillLinkClassName}>
                  Hardware Compatibility List
                  <Sparkles className="size-4 text-[#FF9000]" />
                </Link>
              </div>
            </div>
          }
        />
      </div>
      <div className="pt-10 xl:pt-20">
        <Faq variants={faqIscra} titleClassName="text-[#FF9000]" />
      </div>
      <Contact source="ISCRA STORAGE" />
    </main>
  );
}
