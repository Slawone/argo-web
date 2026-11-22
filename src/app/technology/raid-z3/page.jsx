import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components";
import { TechnologyLines as Lines } from "@/components/TechnologyLines";
import {
  IscraProtocolHero,
  PartnerLogos,
  PartnerInfo,
  PartnerSplit,
  PartnerTextGrid,
} from "@/sections";
import { RaidZFaq } from "@/sections/iscra/RaidZFaq";
import { ZfsConfigurator } from "@/sections/iscra/ZfsConfigurator";
import { iscraVariants, ogImage } from "@/config";
import { buildFaqJsonLd } from "@/lib/jsonLd";

const title = "RAID-Z3 в Native ZFS: тройная чётность | ARGO.TECH";
const description =
  "RAID-Z3 в ISCRA STORAGE: тройная распределённая чётность P, Q и R, защита при отказе трёх дисков, самовосстановление и восстановление после URE.";
export const metadata = {
  title,
  description,
  alternates: { canonical: "/technology/raid-z3/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/raid-z3/",
    title,
    description,
    images: [ogImage("raid-z3")],
  },
};
const primary = "text-[#1f1f1f] dark:text-[#fffff1]";
const headingPrimary = "text-[#1f1f1f] dark:text-white";
const secondary = "text-[#1f1f1f] dark:text-[#a1a1a1]";
const Text = ({ children }) => {
  const lines = children.split("\n");
  return (
    <Lines
      lines={lines}
      joinWithoutSpaceAfter={lines.flatMap((line, index) =>
        line.endsWith("-") ? [index] : [],
      )}
    />
  );
};
const Paragraphs = ({ blocks }) => (
  <div className="space-y-6">
    {blocks.map((block, index) => (
      <p key={index}>
        <Text>{block}</Text>
      </p>
    ))}
  </div>
);

const benefits = [
  {
    title: "Высокая отказоустойчивость",
    label: (
      <Paragraphs
        blocks={[
          "Высокая отказоустойчивость: до трёх дисков.",
          `RAID-Z3 в Native ZFS ISCRA STORAGE обеспечивает сохранность данных
при одновременном отказе любых трёх дисков в пределах одного VDEV.
Это наиболее отказоустойчивый уровень RAID-Z в Native ZFS ISCRA
STORAGE, предназначенный для критически важных данных и массивов
большой ёмкости.`,
        ]}
      />
    ),
  },
  {
    title: "Дополнительная защита во время восстановления",
    label: (
      <Text>{`При замене отказавшего диска RAID-Z3 в Native ZFS ISCRA STORAGE
сохраняет возможность выдержать отказ ещё двух дисков в том же VDEV.
Это существенно снижает риск потери данных во время длительного
восстановления, особенно в массивах на HDD большой ёмкости.`}</Text>
    ),
  },
  {
    title: "Снижение риска при замене дисков",
    label: (
      <Text>{`Тройная распределённая чётность снижает вероятность потери данных
при возникновении дополнительных отказов в процессе замены
и восстановления накопителей. Это особенно актуально для массивов с HDD
большой ёмкости, например 16 ТБ и выше, где процесс resilver может
занимать продолжительное время.`}</Text>
    ),
  },
  {
    title: "Целостность данных и самовосстановление (Self-Healing)",
    label: (
      <Text>{`Native ZFS ISCRA STORAGE использует сквозные контрольные суммы
для обнаружения повреждений данных и метаданных, включая скрытые
ошибки (bit rot). При обнаружении повреждённого блока ZFS автоматически
реконструирует корректные данные с использованием избыточности
RAID-Z3 и, при наличии возможности, исправляет повреждение
на накопителе.`}</Text>
    ),
  },
];
const capacity = [
  {
    title: "Эффективность использования ёмкости",
    label: (
      <Text>{`В RAID-Z3 под тройную чётность используется пространство,
приблизительно эквивалентное ёмкости трёх дисков в vdev. Например,
конфигурация из 11 дисков (8 для данных + 3 для чётности) обеспечивает
теоретическую полезную ёмкость 72,7% от суммарной. Это выше,
чем у двухстороннего зеркалирования (50%), при сохранении устойчивости
к отказу любых трёх дисков в пределах VDEV.`}</Text>
    ),
  },
  {
    title: "Защита от ошибок",
    label: (
      <Text>{`Фактическая доступная ёмкость зависит от размеров блоков данных,
выравнивания и служебных накладных расходов ZFS. Защита
от неисправимых ошибок чтения (URE). Во время восстановления массива
могут возникать неисправимые ошибки чтения (Unrecoverable Read Error,
URE) на оставшихся дисках.`}</Text>
    ),
  },
  {
    title: "Тройная распределенная четность",
    label: (
      <Paragraphs
        blocks={[
          `Благодаря тройной распределённой чётности RAID-Z3 способен
компенсировать дополнительные ошибки чтения в пределах доступной
избыточности. Даже после отказа одного диска RAID-Z3 сохраняет
возможность восстановления данных при возникновении ошибок чтения
на двух других дисках в пределах одного страйпа.`,
          `Это обеспечивает дополнительную защиту по сравнению с RAID-Z1 и RAID-Z2,
особенно при длительном восстановлении массивов большой ёмкости.`,
        ]}
      />
    ),
  },
];

const faq = [
  {
    title: "Что такое RAID-Z3?",
    answer:
      "RAID-Z3 в Native ZFS ISCRA STORAGE — это уровень избыточности ZFS с тройной распределённой чётностью (P, Q и R), обеспечивающий сохранность данных при одновременном отказе любых трёх дисков в пределах одного vdev.",
  },
  {
    title: "Чем RAID-Z3 отличается от RAID 7?",
    answer: `RAID-Z3 в Native ZFS ISCRA STORAGE и RAID 7 или его аналог RAID 7.3 компании RAIDIX реализуют тройную распределённую чётность, обеспечивая устойчивость к одновременному отказу любых трёх дисков в пределах одной группы хранения.

Основное различие заключается в архитектуре управления данными.

RAID-Z3 интегрирован непосредственно в файловую систему ZFS и использует переменную ширину страйпа, Copy-on-Write (CoW), транзакционную модель записи и сквозные контрольные суммы. Это обеспечивает согласованность данных и чётности, устраняет традиционную проблему write hole и позволяет автоматически обнаруживать и исправлять повреждения данных при наличии достаточной избыточности.

RAIDIX RAID 7.3 представляет собой самостоятельную реализацию программного RAID с тройной чётностью, ориентированную на высокую производительность вычисления чётности и реконструкции массивов. В продуктах RAIDIX предусмотрены собственные механизмы защиты целостности данных, восстановления после сбоев записи и оптимизации реконструкции.

Таким образом, обе технологии обеспечивают сопоставимый уровень защиты от отказов накопителей, но используют различные подходы к организации записи, контролю целостности и восстановлению данных.`,
  },
  {
    title: "Сколько дисков нужно для RAID-Z3?",
    answer: `Минимум 4 диска. В такой конфигурации теоретическая полезная ёмкость составляет всего 25% от суммарной.

Для более эффективного использования пространства рекомендуется 7–8 и более дисков в зависимости от требований к ёмкости и производительности. С увеличением количества дисков повышается теоретическая эффективность использования ёмкости, однако чрезмерное увеличение ширины vdev может отрицательно сказаться на производительности и времени восстановления.`,
  },
  {
    title: "Когда лучше использовать RAID-Z3 вместо RAID-Z2?",
    answer: `RAID-Z3 рекомендуется для особо критичных данных, массивов на HDD большой ёмкости (например, 16 ТБ и выше) и конфигураций с длительным временем восстановления, где требуется устойчивость к одновременному отказу трёх дисков.

RAID-Z2 выдерживает отказ двух дисков в пределах одного vdev, обеспечивая высокий уровень защиты при меньших затратах ёмкости на избыточность.

RAID-Z3 предоставляет дополнительный запас отказоустойчивости во время resilver, когда массив особенно уязвим к новым отказам накопителей и ошибкам чтения.`,
  },
  {
    title: "Как RAID-Z3 влияет на полезную ёмкость?",
    answer: `В RAID-Z3 для хранения тройной чётности используется пространство, приблизительно эквивалентное ёмкости трёх дисков в vdev.

Например, для 11 дисков по 4 ТБ теоретическая полезная ёмкость составит 32 ТБ (72,7%), а для 8 дисков по 4 ТБ — 20 ТБ (62,5%).

Чем больше дисков в vdev, тем выше теоретическая эффективность использования ёмкости. Фактическая доступная ёмкость может быть ниже расчётной из-за особенностей размещения блоков, выравнивания и служебных накладных расходов ZFS.

На объём свободного пространства также влияют снапшоты, клоны, сжатие, дедупликация и характер записываемых данных.`,
  },
];

const Heading = ({ children, muted = false }) => (
  <PartnerInfo
    className="py-8 md:py-12.75 xl:py-12.75"
    textClassName="max-w-none"
  >
    <span className={`${muted ? secondary : headingPrimary} xl:text-[30px]`}>
      {children}
    </span>
  </PartnerInfo>
);
const Cards = ({ items }) => (
  <PartnerTextGrid
    items={items}
    titleClassName={`${headingPrimary} xl:whitespace-nowrap`}
    fillEmpty={items.length % 2 === 1}
    labelClassName="xl:whitespace-normal xl:text-[20.5px] xl:leading-6"
    cellClassName="min-w-0 border-[#d4d4d4] dark:border-[#1d2332] [&>svg]:hidden"
  />
);

export default function RaidZ3Page() {
  const logos = [0, 1, 3, 2, 4].map((index) => iscraVariants.logos[index]);
  return (
    <main className="page-iscra flow-root bg-white font-sans dark:bg-black [&_.main-border]:border-[#d4d4d4] [&_.section-border]:border-[#d4d4d4] dark:[&_.main-border]:border-[#1d2332] dark:[&_.section-border]:border-[#1d2332]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(faq)).replace(/</g, "\\u003c"),
        }}
      />
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="RAID-Z3"
        title={
          <>
            Redundant Array of
            <br />
            Independent Disks Z3
          </>
        }
        className="xl:grid-cols-[55fr_45fr] xl:min-h-121.25 xl:pb-7"
        nameClassName="min-w-0 text-center whitespace-nowrap text-[80px] sm:text-[120px] md:text-[clamp(88px,12vw,140px)] lg:text-[140px] xl:text-[200px] leading-normal bg-[linear-gradient(0deg,rgba(25,21,246,0.78)_33.654%,#ff00e5_79.808%)] bg-clip-text text-transparent xl:pl-0 xl:mt-30.75 xl:-ml-4"
        textClassName="min-w-0 items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-[#fffff1] md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5] xl:whitespace-nowrap"
        subtitleClassName="text-[#1f1f1f] dark:text-[#fffff1] font-extralight xl:max-w-127.5 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Обеспечивает сохранность данных при одновременном отказе любых трёх
        дисков
      </IscraProtocolHero>
      <div className="md:[&_section]:py-12.75 md:[&_li]:min-h-22.25">
        <PartnerLogos items={logos} />
      </div>
      <Heading>
        <strong className="font-bold">RAID Z3:</strong>{" "}
        <span className={secondary}>Максимальная отказоустойчивость</span>
      </Heading>
      <div className="pt-8 md:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-94.75 xl:text-[28px] xl:leading-[33.2px]"
          leftClassName="flex min-w-0 items-center xl:py-5"
          rightClassName="min-w-0 xl:pr-5"
          left={
            <div
              className={`min-w-0 space-y-8 font-normal xl:space-y-[33.2px] ${headingPrimary}`}
            >
              <p>
                <Text>{`RAID-Z3: уровень избыточности Native ZFS в ISCRA STORAGE
с тройной распределённой чётностью (P, Q и R),
обеспечивающий сохранность данных при одновременном
отказе любых трёх дисков в пределах одного VDEV.`}</Text>
              </p>
              <p>
                <Text>{`RAID-Z3 развивает принцип двойной чётности RAID 6, добавляя
третий независимый компонент чётности. Такая конфигурация
обеспечивает повышенную отказоустойчивость и особенно
актуальна для массивов большой ёмкости, где восстановление
после отказа диска может занимать значительное время.`}</Text>
              </p>
            </div>
          }
          right={
            <div className="flex h-full flex-col gap-7.5">
              <div className="text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px]">
                <Text>{`RAID-Z2 превосходит RAID-Z1 по уровню защиты
и рекомендован для больших объёмов данных и ёмких дисков,
где риск каскадного отказа или URE при восстановлении
особенно высок.`}</Text>
              </div>
              <Link
                href="/technology/raid-z/"
                className="mt-auto inline-flex min-h-11 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#1f1f1f] bg-[#ededed] px-4 py-2 text-base font-light text-black dark:border-white"
              >
                RAID-Z
                <Image
                  src="/raid-z3/button-light.svg"
                  width={19}
                  height={19}
                  alt=""
                  className="dark:hidden"
                />
                <Image
                  src="/raid-z3/button-dark.svg"
                  width={19}
                  height={19}
                  alt=""
                  className="hidden dark:block"
                />
              </Link>
            </div>
          }
        />
      </div>
      <div className="pt-8 md:pt-12.75">
        <Cards items={benefits} />
      </div>
      <Heading>
        <strong className="font-bold">RAID Z3:</strong>{" "}
        <span className="font-light">
          Тройная чётность без Write Hole и RMW.
        </span>
      </Heading>
      <Cards items={capacity} />
      <div className="pt-8 md:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75 xl:text-[28px] xl:leading-[33.2px]"
          leftClassName="flex min-w-0 items-center"
          rightClassName="min-w-0 xl:pr-5"
          left={
            <div className={`min-w-0 font-normal ${primary}`}>
              <Text>{`URE (Unrecoverable Read Error) или неисправимая ошибка
чтения, при которой накопитель не может прочитать данные
с носителя и сообщает об этом хосту. В отличие от “тихого”
повреждения (bit rot), URE является явной ошибкой: диск
пытался прочитать сектор, но не смог, и возвращает ошибку
ввода-вывода.`}</Text>
            </div>
          }
          right={
            <div className="flex h-full flex-col gap-7.5">
              <div className="text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px]">
                <Text>{`Для больших HDD (8 ТБ и выше) риск URE при восстановлении
становится очень высоким.`}</Text>
              </div>
              <Link
                href="/technology/error/"
                className="mt-auto inline-flex min-h-11 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#1f1f1f] bg-[#ededed] px-4 py-2 text-base font-light text-black dark:border-white"
              >
                Unrecoverable Read Error
                <Image src="/raid-z/button.svg" width={19} height={19} alt="" />
              </Link>
            </div>
          }
        />
      </div>
      <RaidZFaq items={faq} level={3} />
      <ZfsConfigurator />
    </main>
  );
}
