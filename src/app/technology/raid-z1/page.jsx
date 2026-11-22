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

const title = "RAID-Z1 в Native ZFS: однократная чётность | ARGO.TECH";
const description =
  "RAID-Z1 в ISCRA STORAGE: распределённая чётность, защита при отказе одного диска, переменная ширина страйпа, самовосстановление и экономия ёмкости.";
export const metadata = {
  title,
  description,
  alternates: { canonical: "/technology/raid-z1/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/raid-z1/",
    title,
    description,
    images: [ogImage("raid-z1")],
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
          `RAID-Z1 в Native ZFS ISCRA STORAGE использует распределённую чётность с
динамической шириной страйпа. При записи данные распределяются между
дисками vdev, а для каждого страйпа вычисляется один блок чётности,
позволяющий восстановить недостающие данные при отказе одного диска.`,
          `Блоки данных и чётности распределяются по накопителям без выделенного
диска чётности. При отказе одного из дисков недостающие данные
реконструируются на основе сохранившихся блоков данных и чётности.`,
          `Такая организация обеспечивает отказоустойчивость при выходе из строя
одного диска в пределах vdev и равномерное распределение нагрузки между
накопителями.`,
        ]}
      />
    ),
  },
  {
    title: "Переменная ширина страйпа (variable-width stripes)",
    label: (
      <Paragraphs
        blocks={[
          `В отличие от классического RAID 5, RAID-Z1 в Native ZFS ISCRA STORAGE
использует переменную ширину страйпа. При записи Native ZFS формирует
страйп в зависимости от размера записываемого блока данных, распределяя
его между необходимым количеством дисков VDEV и добавляя
соответствующую чётность.`,
          `Такой подход позволяет эффективно размещать блоки различного размера
без обязательного заполнения страйпа на всю ширину VDEV. Данные
и чётность записываются согласованно, что исключает характерную
для классического RAID 5 проблему write hole и устраняет необходимость
операций Read-Modify-Write для обновления чётности при неполных
страйпах.`,
        ]}
      />
    ),
  },
  {
    title: "Full-stripe write и Copy-on-Write",
    label: (
      <Paragraphs
        blocks={[
          `RAID-Z1 в Native ZFS ISCRA STORAGE использует механизм записи полных
страйпов (Full-Stripe Write) в сочетании с технологией Copy-on-Write (CoW).`,
          `При изменении данных Native ZFS ISCRA STORAGE не перезаписывает
существующие блоки на месте, а размещает новые версии данных
и соответствующую чётность в свободном пространстве пула. Благодаря
переменной ширине страйпа данные и чётность записываются совместно,
без необходимости выполнения характерных для классического RAID 5
операций Read-Modify-Write (RMW) для обновления чётности.`,
          `Механизм Copy-on-Write обеспечивает согласованное обновление данных
и метаданных Native ZFS ISCRA STORAGE. Изменения становятся частью
актуального состояния пула только после успешной фиксации
соответствующей транзакционной группы (Transaction Group, TXG).`,
          `Такая архитектура устраняет проблему write hole, при которой сбой питания
во время записи может привести к рассогласованию данных и чётности.
В RAID-Z1 частично записанные изменения не становятся частью
зафиксированного состояния пула, поэтому ситуация, когда новые данные
используются со старой чётностью, архитектурно исключается.`,
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
данных и метаданных с использованием контрольных сумм (checksum).`,
          `Контрольная сумма каждого блока хранится в родительском указателе (block
pointer), отдельно от самих данных.`,
          `При чтении Native ZFS проверяет целостность блока, сравнивая
вычисленную контрольную сумму с сохранённым значением. При
обнаружении повреждения и наличии достаточной избыточности RAID-Z1
позволяет восстановить корректные данные с использованием
сохранившихся блоков и чётности. Этот механизм автоматического
исправления повреждений называется self-healing.`,
          `Контрольные суммы позволяют обнаруживать не только ошибки, связанные
с отказами накопителей, но и скрытые повреждения данных (bit rot),
которые могут оставаться незамеченными традиционными RAID-массивами.
Дополнительно процедура scrub обеспечивает периодическую проверку
целостности сохранённых данных и исправление обнаруженных
повреждений при наличии достаточной избыточности.`,
        ]}
      />
    ),
  },
];
const economy = [
  {
    title: "Быстрое восстановление (resilver)",
    label: (
      <Paragraphs
        blocks={[
          `При замене диска Native ZFS ISCRA STORAGE восстанавливает
только реально занятые блоки, а не весь физический объём. Чем меньше
заполнен Pool (Пул), тем быстрее процесс.`,
          `Фактическое время resilver зависит от объёма данных, производительности
дисков и текущей нагрузки на систему.`,
        ]}
      />
    ),
  },
  {
    title: "Самовосстановление",
    label: (
      <Text>{`Контрольные суммы и избыточность позволяют Native ZFS ISCRA STORAGE
автоматически обнаруживать и исправлять повреждённые блоки при чтении.
Это защита от bit rot, которую традиционный RAID 5 без дополнительных
механизмов контроля целостности может не обнаружить.`}</Text>
    ),
  },
  {
    title: "Нет Read-Modify-Write",
    label: (
      <Paragraphs
        blocks={[
          `При частичной записи классический RAID 5 может выполнять операции Read-
Modify-Write (RMW), считывая существующие данные и чётность для
их последующего обновления.`,
          `RAID-Z1 использует переменную ширину страйпа и механизм Copy-on-Write
(CoW), записывая новые данные вместе с соответствующей чётностью
в свободное пространство. Это устраняет необходимость RMW для
обновления чётности и предотвращает проблему write hole.`,
        ]}
      />
    ),
  },
  {
    title: "Экономия ёмкости",
    label: (
      <Text>{`RAID-Z1 использует для избыточности ёмкость одного диска в VDEV.
Например, для 4 дисков по 4 ТБ полезная ёмкость составит 12 ТБ (75%).
Для сравнения: RAID 10 (зеркало) отдаёт под защиту половину ёмкости
(50%).`}</Text>
    ),
  },
];

const faq = [
  {
    title: "Что такое RAID-Z1?",
    answer:
      "RAID-Z1 в ISCRA STORAGE это уровень избыточности ZFS с однократной распределённой чётностью, обеспечивающий сохранность данных при отказе одного диска в пределах VDEV.",
  },
  {
    title: "Чем RAID-Z1 отличается от RAID 5?",
    answer:
      "RAID-Z1 использует динамическую ширину страйпа и механизм Copy-on-Write (CoW). Это позволяет избежать традиционной проблемы RAID 5 write hole (рассогласования данных и чётности при сбое записи), а также необходимости выполнять операции Read-Modify-Write (RMW) для обновления чётности при частичной записи страйпа.",
  },
  {
    title: "Сколько дисков нужно для RAID-Z1?",
    answer:
      "Минимум 2 диска. Для практического использования рекомендуется 3 и более дисков. При использовании двух дисков обычно предпочтительнее зеркальная конфигурация (mirror).",
  },
  {
    title: "Можно ли добавить диск в RAID-Z1 vdev?",
    answer:
      "В Native ZFS ISCRA STORAGE расширение существующего RAID-Z1 VDEV добавлением отдельного диска не поддерживается. Увеличить ёмкость можно последовательной заменой всех дисков на более вместительные либо добавлением нового vdev в пул.",
  },
  {
    title: "Когда лучше использовать RAID-Z2 вместо RAID-Z1?",
    answer:
      "RAID-Z2 рекомендуется для критически важных данных, массивов на HDD большой ёмкости и конфигураций с длительным временем восстановления. RAID-Z2 допускает одновременный отказ двух дисков в пределах одного vdev, снижая риск потери данных при восстановлении массива.",
  },
  {
    title: "Защищает ли RAID-Z1 от bit rot?",
    answer:
      "Да. ZFS использует сквозные контрольные суммы для обнаружения повреждений данных (bit rot). При наличии исправных избыточных данных механизм self-healing позволяет автоматически восстановить повреждённый блок. Однако возможности восстановления ограничены однократной избыточностью RAID-Z1.",
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

export default function RaidZ1Page() {
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
        name="RAID-Z1"
        title={
          <>
            Redundant Array of
            <br />
            Independent Disks Z1
          </>
        }
        className="xl:grid-cols-[53fr_47fr] xl:min-h-121.25 xl:pb-7"
        nameClassName="text-center whitespace-nowrap text-[80px] sm:text-[120px] md:text-[clamp(88px,12vw,140px)] lg:text-[140px] xl:text-[200px] leading-normal bg-[linear-gradient(0deg,#004ede_33.654%,#55319b_79.808%)] bg-clip-text text-transparent xl:pl-0 xl:mt-30.75"
        textClassName="min-w-0 items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-[#fffff1] md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5] xl:whitespace-nowrap"
        subtitleClassName="text-[#1f1f1f] dark:text-[#fffff1] font-extralight xl:max-w-127.5 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Уровень избыточности с одним блоком чётности
      </IscraProtocolHero>
      <div className="md:[&_section]:py-12.75 md:[&_li]:min-h-22.25">
        <PartnerLogos items={logos} />
      </div>
      <Heading>
        <strong className="font-bold">RAID Z1:</strong>{" "}
        <span className={secondary}>
          Экономичная избыточность без компромиссов
        </span>
      </Heading>
      <div className="pt-8 md:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75 xl:text-[28px] xl:leading-[33.2px]"
          leftClassName="flex min-w-0 items-center xl:py-5"
          rightClassName="min-w-0 xl:pr-5"
          left={
            <div className={`min-w-0 font-normal ${primary}`}>
              <Text>{`RAID-Z1 в Native ZFS представляет уровень избыточности
с одним блоком чётности, выдерживающий отказ одного диска
в VDEV. В отличие от RAID 5, RAID-Z1 устраняет write
hole и Read-Modify-Write за счёт переменной ширины страйпа
и full-stripe writes. В ISCRA STORAGE RAID-Z1 реализован
на уровне Native ZFS, а не как порт, что обеспечивает
предсказуемую защиту данных и эффективное использование
ёмкости.`}</Text>
            </div>
          }
          right={
            <div className="flex h-full flex-col gap-7.5">
              <div className="text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px]">
                <Text>{`RAID-Z в ISCRA STORAGE является частью файловой системы,
который работает вместе с ней.`}</Text>
              </div>
              <Link
                href="/technology/raid-z/"
                className="mt-auto inline-flex min-h-11 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#1f1f1f] bg-[#ededed] px-4 py-2 text-base font-light text-black dark:border-[#a1a1a1]"
              >
                RAID-Z
                <Image src="/raid-z/button.svg" width={19} height={19} alt="" />
              </Link>
            </div>
          }
        />
      </div>
      <Heading muted>
        <strong className="font-bold">
          RAID-Z1: первый уровень в семействе RAID-Z
        </strong>
      </Heading>
      <Cards items={architecture} />
      <Heading>
        <strong className="font-bold">RAID-Z1: Экономия ёмкости</strong>
      </Heading>
      <Cards items={economy} />
      <RaidZFaq items={faq} />
      <ZfsConfigurator />
    </main>
  );
}
