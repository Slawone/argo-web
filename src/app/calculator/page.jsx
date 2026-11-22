import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components";
import { TechnologyLines } from "@/components/TechnologyLines";
import {
  IscraProtocolHero,
  PartnerLogos,
  PartnerInfo,
  PartnerSplit,
  PartnerTextGrid,
} from "@/sections";
import { ZfsCalculator } from "@/components/zfs-calculator";
import { CalculatorFaq } from "@/components/zfs-calculator/CalculatorFaq";
import { calculatorFaq } from "@/config/calculatorFaq";
import { iscraVariants, ogImage } from "@/config";
import { buildFaqJsonLd } from "@/lib/jsonLd";

const title =
  "Калькулятор Native ZFS — ёмкость и отказоустойчивость пула | ARGO.TECH";
const description =
  "Онлайн-калькулятор Native ZFS ISCRA STORAGE: расчёт полезной ёмкости для RAIDZ1, RAIDZ2, RAIDZ3, mirror и stripe с учётом служебных расходов. Визуализация VDEV и симуляция отказов дисков.";
export const metadata = {
  title,
  description,
  alternates: { canonical: "/calculator/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/calculator/",
    title,
    description,
    images: [ogImage("calculator")],
  },
};
const applicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Калькулятор Native ZFS ISCRA STORAGE",
  url: "https://argo.tech/calculator/",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "RUB" },
  description,
};
const primary = "text-[#1f1f1f] dark:text-[#fffff1]";
const secondary = "text-[#1f1f1f] dark:text-[#a1a1a1]";
const Text = ({ children }) => <TechnologyLines lines={children.split("\n")} />;
const Heading = ({ children }) => (
  <PartnerInfo
    className="py-8 md:py-12.75 xl:py-12.75"
    textClassName="max-w-245"
  >
    <span className={`${primary} xl:text-[30px]`}>{children}</span>
  </PartnerInfo>
);
const recommendations = [
  {
    title: "Уровень заполнения 85%",
    label: (
      <p>
        Для стабильной работы пула Native ZFS в ISCRA STORAGE рекомендуем не
        заполнять его более чем на 85% от полезной ёмкости. Пока в пуле
        достаточно свободного места, ZFS быстро находит место для новых блоков и
        записывает данные последовательно. При высокой заполненности свободное
        пространство становится фрагментированным, и поиск места для записи
        занимает всё больше времени. Из-за механизма copy-on-write это особенно
        заметно при записи, при работе со снапшотами и при восстановлении после
        отказа диска (resilver).
      </p>
    ),
  },
  {
    title: "Если пул заполнен?",
    label: (
      <div>
        <p className="mb-6">
          Что происходит, если пул заполнен выше рекомендуемого уровня:
        </p>
        <ul className="list-none">
          {[
            "Растёт задержка записи и падает пропускная способность;",
            "Чаще проявляется фрагментация, и производительность не возвращается к прежнему уровню даже после освобождения места;",
            "Ресильвер и scrub занимают больше времени;",
            "Снапшоты и клоны быстрее “съедают” остаток свободного места.",
          ].map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Широкие VDEV",
    label: (
      <div className="space-y-6">
        <p>
          Широкие VDEV в RAIDZ могут дольше восстанавливаться после отказа
          диска. Производительность на случайных операциях (IOPS) зависит от
          размера блоков, числа VDEV и профиля нагрузки. На практике удобнее
          использовать VDEV из 6–12 дисков.
        </p>
        <p>
          В конфигураторе Native ZFS в ISCRA STORAGE выберите размер диска, тип
          VDEV и общее число дисков, а затем укажите, сколько дисков входит в
          один VDEV. Число VDEV в пуле рассчитывается автоматически. Большее
          число VDEV может повысить производительность случайных операций;
          результат зависит от нагрузки. Оставшиеся диски, если их число не
          делится на ширину VDEV нацело, можно использовать как hot spare или
          подобрать другую ширину.
        </p>
      </div>
    ),
  },
  {
    title: "Симуляция отказа",
    label: (
      <div className="space-y-6">
        <p>
          Блок “Симуляция отказов” показывает, как выбранная конфигурация
          переживёт выход дисков из строя. Каждый VDEV отображается схемой с
          пронумерованными дисками.
        </p>
        <p>
          Цветом отмечено назначение каждого диска: данные, чётность, отказ и
          резерв. Отметьте один или несколько дисков как вышедшие из строя, и
          калькулятор покажет, сохранится ли доступ к данным.
        </p>
        <p>
          Для RAIDZ1, RAIDZ2 и RAIDZ3 пул переживает отказ одного, двух и трёх
          дисков в каждом VDEV соответственно. Если в одном VDEV откажет больше
          дисков, чем допускает его чётность, данные всего пула будут потеряны,
          потому что пул состоит из нескольких VDEV, и потеря любого из них
          означает потерю пула. Для зеркал важно, чтобы в каждой группе остался
          хотя бы один исправный диск. Для stripe отказ любого диска приводит к
          потере данных.
        </p>
      </div>
    ),
  },
];

export default function CalculatorPage() {
  const logos = [0, 1, 3, 2, 4].map((index) => iscraVariants.logos[index]);
  return (
    <main className="page-iscra flow-root bg-white font-sans dark:bg-black [&_.main-border]:border-[#ededed] [&_.section-border]:border-[#ededed] dark:[&_.main-border]:border-[#1d2332] dark:[&_.section-border]:border-[#1d2332]">
      {[applicationJsonLd, buildFaqJsonLd(calculatorFaq)].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name={"ZFS Pool\nCalculator"}
        title={
          <>
            Калькулятор
            <br />
            Native ZFS Pool
          </>
        }
        className="xl:min-h-121.25 xl:pb-7"
        nameClassName="min-w-0 whitespace-pre-line text-center uppercase text-[50px] sm:text-[80px] md:text-[clamp(48px,7.5vw,96px)] lg:text-[clamp(88px,7.5vw,96px)] xl:text-[120px] xl:w-[650px] leading-[1.5] bg-[linear-gradient(180deg,#16aaf8_20.192%,#d036b4_48.077%,#5e2f59_100%)] bg-clip-text text-transparent xl:pl-0 xl:mt-14"
        textClassName="min-w-0 items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-[#fffff1] md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#1f1f1f] dark:text-[#fffff1] font-extralight xl:max-w-127.5 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Онлайн-калькулятор ZFS: рассчитайте полезную ёмкость, эффективность и
        отказоустойчивость пула для RAIDZ1, RAIDZ2, RAIDZ3, mirror и stripe.
      </IscraProtocolHero>
      <div className="md:[&_section]:py-12.75 md:[&_li]:min-h-22.25">
        <PartnerLogos items={logos} />
      </div>
      <div className="pt-8 md:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-94.75 xl:text-[28px] xl:leading-[33.2px]"
          leftClassName="flex min-w-0 items-center"
          rightClassName="min-w-0 xl:pr-4"
          left={
            <p className={`font-normal ${primary}`}>
              <Text>{`Онлайн-калькулятор Native ZFS в ISCRA STORAGE помогает
рассчитать конфигурацию пула. Выберите тип VDEV (stripe,
mirror, RAIDZ1, RAIDZ2 или RAIDZ3), укажите количество и
размер накопителей, и сразу получите ориентировочный объём
хранения. Калькулятор учитывает потери на чётность,
служебные резервы ZFS (slop space и metaslab), показывает
эффективность использования дисков и число отказов,
которые пул переживёт без потери данных.`}</Text>
            </p>
          }
          right={
            <div className="flex h-full flex-col gap-8.5">
              <p
                className={`text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px] ${secondary}`}
              >
                <Text>{`Калькулятор будет полезен системным администраторам,
DevOps- и SRE-инженерам, архитекторам систем хранения
и ИТ-руководителям, которые выбирают конфигурацию пула
до покупки оборудования. С его помощью можно быстро
сравнить RAIDZ2 и mirror, оценить, как изменится ёмкость
при другой ширине VDEV, и подобрать баланс между
надёжностью, объёмом и производительностью.`}</Text>
              </p>
              <Link
                href="/technology/raid-z/"
                className="inline-flex min-h-11 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#1f1f1f] bg-[#ededed] px-4 py-2 text-base font-light text-black dark:border-[#fffff1]"
              >
                RAID-Z
                <Image
                  src="/raid-z3/button-dark.svg"
                  width={18.7}
                  height={18.699}
                  alt=""
                />
              </Link>
            </div>
          }
        />
      </div>
      <Heading>
        <strong className="font-bold">ISCRA STORAGE RAID Z:</strong>{" "}
        <span className={secondary}>Рекомендации</span>
      </Heading>
      <PartnerTextGrid
        items={recommendations}
        titleClassName={primary}
        labelClassName="xl:w-[561px] xl:whitespace-normal xl:text-[20.5px] xl:leading-6"
        cellClassName="min-w-0 border-[#ededed] dark:border-[#1d2332] [&>svg]:hidden"
      />
      <Heading>
        <strong className="font-bold">Калькулятор RAID Z:</strong>{" "}
        <span className={secondary}>
          Спланируйте состав пула ZFS: выберите тип VDEV, число и размер дисков
        </span>
      </Heading>
      <ZfsCalculator />
      <div className="pt-8 md:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-83 xl:text-[28px] xl:leading-[33.2px]"
          leftClassName="flex min-w-0 items-center"
          rightClassName="min-w-0 xl:pr-5"
          left={
            <p className={`font-light ${secondary}`}>
              <strong className={`font-medium ${primary}`}>
                Сырая ёмкость.
              </strong>{" "}
              Число дисков умножается на размер одного диска. Производители
              указывают объём в терабайтах (TB, 10¹² байт), а Native ZFS в ISCRA
              STORAGE и операционные системы показывают его в тебибайтах (TiB,
              2⁴⁰ байт), поэтому цифры отличаются: 48 TB равны 43,66 TiB.
              Калькулятор показывает оба значения.
            </p>
          }
          right={
            <p className={`font-light ${secondary}`}>
              <strong className={`font-medium ${primary}`}>
                Служебные резервы ZFS.
              </strong>{" "}
              Из оставшейся ёмкости вычитаются два резерва:{" "}
              <strong className={`font-medium ${primary}`}>slop space:</strong>{" "}
              запас, который ZFS держит, чтобы пул не “упёрся” в переполнение и
              сохранял возможность удалять данные и выполнять служебные
              операции;{" "}
              <strong className={`font-medium ${primary}`}>
                metaslab overhead:
              </strong>{" "}
              место под метаданные, с помощью которых ZFS распределяет блоки.
            </p>
          }
        />
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-49.75 xl:text-[28px] xl:leading-[33.2px]"
          cellClassName="border-t-0"
          leftClassName="flex min-w-0 items-center"
          className="border-t-0"
          left={
            <p className={`font-light ${secondary}`}>
              <Text>{`Реальная ёмкость пула Native ZFS в ISCRA STORAGE зависит
от нескольких параметров: ashift (размера физического сектора),
размера блока (recordsize для файловых систем или volblocksize
для томов) и от того, сжимаются ли данные.`}</Text>
            </p>
          }
          right={<div aria-hidden="true" />}
        />
      </div>
      <CalculatorFaq items={calculatorFaq} />
    </main>
  );
}
