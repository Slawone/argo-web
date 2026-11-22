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

const title = "RAID-Z2 в Native ZFS: двойная чётность | ARGO.TECH";
const description =
  "RAID-Z2 в ISCRA STORAGE: двойная распределённая чётность P и Q, защита при отказе двух дисков, переменная ширина страйпа и самовосстановление данных.";
export const metadata = {
  title,
  description,
  alternates: { canonical: "/technology/raid-z2/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/raid-z2/",
    title,
    description,
    images: [ogImage("raid-z2")],
  },
};
const primary = "text-[#1f1f1f] dark:text-[#fffff1]";
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

const architecture = [
  {
    title: "Распределение данных и чётности",
    label: (
      <Paragraphs
        blocks={[
          `RAID-Z2 в Native ZFS ISCRA STORAGE использует двойную распределённую
чётность (P и Q) и переменную ширину страйпа (Variable-Width Stripes).
При записи данные распределяются между дисками vdev, а для каждого
страйпа вычисляются два независимых компонента чётности (P и Q),
позволяющих восстановить недостающие данные при отказе любых двух
дисков.`,
          `Данные и оба компонента чётности распределяются между накопителями
без выделенных дисков чётности. При отказе одного или двух дисков
недостающие данные реконструируются на основе сохранившихся данных
и избыточной информации.`,
          `Такая организация обеспечивает отказоустойчивость при выходе из строя
любых двух дисков в пределах одного VDEV и распределяет нагрузку,
связанную с хранением чётности, между накопителями.
RAID-Z2 является функциональным аналогом RAID 6, но использует
архитектурные механизмы Native ZFS: переменную ширину страйпа,
Full-Stripe Write, Copy-on-Write (CoW) и сквозной контроль целостности
данных. Это позволяет устранить традиционную проблему write hole
и обеспечивает автоматическое исправление обнаруженных повреждений
данных (Self-Healing) при наличии достаточной избыточности.`,
        ]}
      />
    ),
  },
  {
    title: "Переменная ширина страйпа (variable-width stripes)",
    label: (
      <Text>{`RAID-Z2, как и RAID-Z1, не требует заполнения страйпа на всю ширину VDEV.
Ширина страйпа определяется размером записываемого блока данных,
что позволяет эффективно размещать блоки различного размера.`}</Text>
    ),
  },
  {
    title: "Full-stripe write и Copy-on-Write",
    label: (
      <Paragraphs
        blocks={[
          `RAID-Z2 в Native ZFS ISCRA STORAGE использует механизм записи полных
страйпов (Full-Stripe Write) в сочетании с технологией Copy-on-Write (CoW).`,
          `При изменении данных Native ZFS ISCRA STORAGE не перезаписывает
существующие блоки на месте, а размещает новые версии данных
и соответствующую чётность в свободном пространстве пула. Благодаря
переменной ширине страйпа данные и две независимые составляющие
чётности (P и Q) записываются совместно, без необходимости выполнения
характерных для классического RAID 6 операций Read-Modify-Write (RMW)
для обновления чётности.`,
          `Механизм Copy-on-Write обеспечивает согласованное обновление данных
и метаданных. Новые версии блоков становятся частью зафиксированного
состояния пула после успешной синхронизации соответствующей
транзакционной группы (Transaction Group, TXG). До этого момента
сохраняется предыдущее согласованное состояние данных.`,
          `Такая архитектура устраняет традиционную проблему write hole, при которой
сбой питания во время записи может привести к рассогласованию данных
и чётности. Частично записанные изменения не включаются в
зафиксированное состояние пула, что исключает использование новых
данных со старой чётностью.`,
          `В сочетании с двойной распределённой чётностью RAID-Z2 это обеспечивает
как согласованность данных при сбоях записи, так и устойчивость
к одновременному отказу любых двух дисков в пределах одного VDEV.`,
        ]}
      />
    ),
  },
  {
    title: "Контрольные суммы и self-healing",
    label: (
      <Paragraphs
        blocks={[
          `Native ZFS в ISCRA STORAGE обеспечивает сквозной контроль целостности
данных и метаданных с использованием контрольных сумм (checksum).
Контрольная сумма каждого блока хранится в родительском указателе (block
pointer), отдельно от самих данных.`,
          `При чтении Native ZFS в ISCRA STORAGE проверяет целостность блока,
сравнивая вычисленную контрольную сумму с сохранённым значением.`,
          `При обнаружении повреждения RAID-Z2 позволяет автоматически
восстановить корректные данные с использованием сохранившихся данных
и распределённой чётности (P и Q), если объём повреждений не превышает
возможности двукратной избыточности. Этот механизм автоматического
исправления повреждений называется self-healing.`,
          `Контрольные суммы позволяют обнаруживать не только ошибки, связанные
с отказами накопителей, но и скрытые повреждения данных (bit rot),
которые могут оставаться незамеченными традиционными RAID-массивами.
Дополнительно процедура scrub позволяет проверять целостность всех
размещённых данных в пуле, включая блоки, к которым длительное время
не было обращений. При обнаружении повреждений Native ZFS
автоматически исправляет их при наличии достаточной избыточности
RAID-Z2.`,
        ]}
      />
    ),
  },
];

const faq = [
  {
    title: "Что такое RAID-Z2?",
    answer:
      "RAID-Z2 в Native ZFS ISCRA STORAGE — это уровень избыточности ZFS с двойной распределённой чётностью (P и Q), обеспечивающий сохранность данных при одновременном отказе любых двух дисков в пределах vdev.",
  },
  {
    title: "Чем RAID-Z2 отличается от RAID 6?",
    answer:
      "RAID-Z2 использует переменную ширину страйпа и механизм Copy-on-Write (CoW). Это позволяет избежать традиционной проблемы классического RAID 6 — write hole (рассогласования данных и чётности при сбое записи), а также необходимости выполнять операции Read-Modify-Write (RMW) для обновления чётности при частичной записи страйпа.",
  },
  {
    title: "Сколько дисков нужно для RAID-Z2?",
    answer:
      "Минимум 3 диска. Для практического использования рекомендуется 5–6 и более дисков в зависимости от требований к ёмкости, производительности и отказоустойчивости. С увеличением количества дисков повышается теоретическая эффективность использования ёмкости, однако чрезмерное увеличение ширины vdev может отрицательно сказаться на производительности и времени восстановления.",
  },
  {
    title: "Можно ли добавить диск в RAID-Z2 vdev?",
    answer:
      "В используемой ISCRA STORAGE реализации Native ZFS расширение существующего RAID-Z2 vdev добавлением отдельного диска не поддерживается. Увеличить ёмкость можно последовательной заменой всех дисков на более вместительные либо добавлением нового vdev в пул.",
  },
  {
    title: "Когда лучше использовать RAID-Z3 вместо RAID-Z2?",
    answer:
      "RAID-Z3 рекомендуется для особо критичных данных, массивов на HDD очень большой ёмкости и конфигураций с длительным временем восстановления, где требуется устойчивость к одновременному отказу трёх дисков. RAID-Z2 выдерживает отказ двух дисков в пределах одного vdev, обеспечивая высокий уровень защиты при меньших затратах ёмкости на избыточность.",
  },
];

const Heading = ({ children, muted = false }) => (
  <PartnerInfo
    className="py-8 md:py-12.75 xl:py-12.75"
    textClassName="max-w-none"
  >
    <span className={`${muted ? secondary : primary} xl:text-[30px]`}>
      {children}
    </span>
  </PartnerInfo>
);
const Cards = ({ items }) => (
  <PartnerTextGrid
    items={items}
    titleClassName={`${primary} xl:whitespace-nowrap`}
    labelClassName="xl:whitespace-normal xl:text-[20.5px] xl:leading-6"
    cellClassName="min-w-0 border-[#d4d4d4] dark:border-[#1d2332] [&>svg]:hidden"
  />
);

export default function RaidZ2Page() {
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
        name="RAID-Z2"
        title={
          <>
            Redundant Array of
            <br />
            Independent Disks Z2
          </>
        }
        className="xl:grid-cols-[55fr_45fr] xl:min-h-121.25 xl:pb-7"
        nameClassName="min-w-0 text-center whitespace-nowrap text-[80px] sm:text-[120px] md:text-[clamp(88px,12vw,140px)] lg:text-[140px] xl:text-[200px] leading-normal bg-[linear-gradient(180deg,#004ede_33.654%,#ff00e5_79.808%)] bg-clip-text text-transparent xl:pl-0 xl:mt-30.75 xl:-ml-4"
        textClassName="min-w-0 items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-[#fffff1] md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5] xl:whitespace-nowrap"
        subtitleClassName="text-[#1f1f1f] dark:text-[#fffff1] font-extralight xl:max-w-127.5 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Обеспечивает избыточность на уровне двух дисков
      </IscraProtocolHero>
      <div className="md:[&_section]:py-12.75 md:[&_li]:min-h-22.25">
        <PartnerLogos items={logos} />
      </div>
      <Heading>
        <strong className="font-bold">RAID Z2:</strong>{" "}
        <span className={secondary}>
          Каждый блок в RAID-Z2 защищён контрольной суммой (Checksum)
        </span>
      </Heading>
      <div className="pt-8 md:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75 xl:text-[28px] xl:leading-[33.2px]"
          leftClassName="flex min-w-0 items-center"
          rightClassName="min-w-0 xl:pr-5"
          left={
            <div className={`min-w-0 font-normal ${secondary}`}>
              <Lines
                joinWithoutSpaceAfter={[4]}
                lines={[
                  <span key="native">
                    <span className={primary}>RAID-Z2 в Native ZFS</span>{" "}
                    предлагает уровень избыточности с двумя
                  </span>,
                  "независимыми блоками чётности (P и Q), выдерживающий",
                  "отказ любых двух дисков в VDEV без потери данных.",
                  "Функционально это аналог RAID 6, но с ключевыми",
                  "преимуществами Native ZFS: переменная ширина страйпа, full-",
                  "stripe writes и отсутствие write hole.",
                ]}
              />
            </div>
          }
          right={
            <div className="flex h-full flex-col gap-7.5">
              <div className="text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px]">
                <div className="dark:hidden">
                  <Text>{`RAID-Z2 превосходит RAID-Z1 по уровню защиты
и рекомендован для больших объёмов данных и ёмких дисков,
где риск каскадного отказа или URE при восстановлении
особенно высок.`}</Text>
                </div>
                <div className="hidden dark:block">
                  <Text>{`RAID-Z в ISCRA STORAGE является частью файловой системы,
который работает вместе с ней.`}</Text>
                </div>
              </div>
              <Link
                href="/technology/raid-z/"
                className="mt-auto inline-flex min-h-11 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#1f1f1f] bg-[#ededed] px-4 py-2 text-base font-light text-black dark:border-[#a1a1a1]"
              >
                RAID-Z
                <Image
                  src="/raid-z2/button-light.svg"
                  width={19}
                  height={19}
                  alt=""
                  className="dark:hidden"
                />
                <Image
                  src="/raid-z2/button-dark.svg"
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
      <Heading>
        <strong className="font-bold">RAID-Z:</strong>{" "}
        <span className={`font-light ${secondary}`}>
          Равномерное распределение нагрузки между накопителями
        </span>
      </Heading>
      <Cards items={architecture} />
      <RaidZFaq items={faq} level={2} />
      <ZfsConfigurator />
    </main>
  );
}
