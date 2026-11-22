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
  PartnerTable,
} from "@/sections";
import { ZfsConfigurator } from "@/sections/iscra/ZfsConfigurator";
import { iscraVariants, ogImage } from "@/config";

const title = "RAID-Z в Native ZFS: защита данных | ARGO.TECH";
const description =
  "RAID-Z в ISCRA STORAGE: RAID-Z1, RAID-Z2 и RAID-Z3, переменная ширина страйпа, защита от write hole, контроль целостности и самовосстановление данных.";
export const metadata = {
  title,
  description,
  alternates: { canonical: "/technology/raid-z/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/raid-z/",
    title,
    description,
    images: [ogImage("raid-z")],
  },
};

const primary = "text-[#1f1f1f] dark:text-[#fffff1]";
const secondary = "text-[#1f1f1f] dark:text-[#a1a1a1]";

// Inline emphasis and desktop line endings follow the design; mobile text wraps freely.
const Text = ({ children }) => (
  <Lines
    lines={children.split("\n").map((line, index) => (
      <span key={index}>
        {line.split(/(\*\*.*?\*\*)/g).map((part, partIndex) =>
          part.startsWith("**") ? (
            <strong key={partIndex} className="font-medium">
              {part.slice(2, -2)}
            </strong>
          ) : (
            part
          ),
        )}
      </span>
    ))}
  />
);
const Paragraphs = ({ items }) => (
  <div className="space-y-6">
    {items.map((text, index) => (
      <p key={index}>
        <Text>{text}</Text>
      </p>
    ))}
  </div>
);

const architecture = [
  {
    title: "Баланс",
    label: (
      <Text>{`**RAID-Z в ISCRA STORAGE**:программная реализация избыточности на базе
Native ZFS, которая использует чётность для защиты данных от сбоев
дисков. В отличие от аппаратного RAID 5/6, RAID-Z управляется самой
файловой системой: переменная ширина страйпа и full-stripe writes
исключают write hole и RMW. Это обеспечивает баланс между ёмкостью,
производительностью и надёжностью. Доступны уровни RAID-Z1, Z2 и Z3
для защиты от одного, двух или трёх одновременных отказов.`}</Text>
    ),
  },
  {
    title: "Без Write Hole",
    label: (
      <Text>{`В Native ZFS ISCRA STORAGE: RAID-Z работает с полосами переменной
ширины и всегда выполняет **full-stripe write**. Это принципиальное отличие
от RAID-5/6: не требуется перезаписывать часть полосы и отдельно
обновлять старую parity. Именно такая последовательность в классическом
RAID создаёт write hole состояние, когда данные и чётность рассогласованы.
RAID-Z ISCRA STORAGE исключает это на уровне архитектуры.`}</Text>
    ),
  },
  {
    title: "Архитектура",
    label: (
      <Text>{`Контрольные суммы (checksums) в Native ZFS ISCRA STORAGE дополняют
механизм **Copy-on-Write (CoW)**: checksum хранится не рядом с самим
блоком, а в родительском block pointer. Благодаря этому ZFS может
определить, какая копия блока соответствует ожидаемому содержимому,
а при наличии mirror или RAID-Z восстановить повреждённый блок
из избыточности и автоматически исправить ошибку (self-healing).
Контрольные суммы и CoW работают вместе, обеспечивая целостность
данных на уровне архитектуры.`}</Text>
    ),
  },
  {
    title: "Транзакционная модель",
    label: (
      <Text>{`В RAID-Z ISCRA STORAGE невозможна ситуация, когда новые данные
остаются со старой parity: транзакционная модель Native ZFS применяет
принцип “операция либо полностью зафиксирована, либо полностью
проигнорирована”. **Pool (Пул)** не может зафиксироваться в состоянии с
рассогласованными данными и чётностью, это исключено архитектурно.`}</Text>
    ),
  },
];
const benefits = [
  {
    title: "Эффективная защита",
    label: (
      <Paragraphs
        items={[
          `RAID-Z в Native ZFS ISCRA STORAGE объединяет механизмы распределённой
чётности, сквозного контроля целостности и автоматического
восстановления данных.`,
          `RAID-Z2 выдерживает отказ любых двух дисков в пределах одного vdev, а
RAID-Z3 — любых трёх. Эти уровни особенно актуальны для массивов
большой ёмкости, где восстановление после отказа накопителя может
занимать продолжительное время.`,
        ]}
      />
    ),
  },
  {
    title: "Устойчивость",
    label: (
      <Paragraphs
        items={[
          `После отказа накопителя массив продолжает работать в деградированном
состоянии. В этот период дополнительные отказы и неисправимые ошибки
чтения представляют повышенную опасность.`,
          `RAID-Z2 после первого отказа сохраняет возможность выдержать ещё один
отказ диска, а RAID-Z3 — ещё два в пределах того же vdev.`,
          `При замене накопителя ZFS восстанавливает размещённые данные, а не
обязательно весь физический объём диска. Время resilver зависит от объёма
данных, производительности накопителей и текущей нагрузки.`,
        ]}
      />
    ),
  },
  {
    title: "Самовосстановление (Self-Healing)",
    label: (
      <Paragraphs
        items={[
          `Native ZFS проверяет целостность данных с помощью контрольных сумм.`,
          `При обнаружении повреждения система использует доступную избыточность
Mirror или RAID-Z для реконструкции корректных данных. Если
восстановление возможно, ZFS возвращает приложению исправный блок и
предпринимает действия по устранению повреждения.`,
          `Это позволяет обнаруживать и исправлять скрытые повреждения данных (bit
rot), которые традиционный RAID без дополнительных механизмов контроля
целостности может не обнаружить.`,
        ]}
      />
    ),
  },
  {
    title: "Эффективность использования ёмкости",
    label: (
      <Paragraphs
        items={[
          `В RAID-Z1, RAID-Z2 и RAID-Z3 под распределённую чётность используется
пространство, приблизительно эквивалентное ёмкости одного, двух или трёх
дисков соответственно.`,
          `В отличие от двухстороннего зеркалирования, требующего 50% суммарной
ёмкости для хранения копий, широкие RAID-Z vdev могут обеспечивать более
высокую эффективность использования дискового пространства.`,
          `Фактическая полезная ёмкость зависит от количества дисков, размеров
записываемых блоков, выравнивания и служебных накладных расходов ZFS.`,
        ]}
      />
    ),
  },
];
const comparison = [
  ["RAID 0", "Single", "При отказе диска теряются все данные"],
  ["MIRROR", "RAID 1", "Возможно зеркалирование на 2 / 3 / 4 / 5 дисков"],
  [
    <Link key="raid-z1" href="/technology/raid-z1/">RAIDZ1</Link>,
    "RAID 5",
    <span key="description" className="xl:min-h-[67px]">
      Допускает отказ одного диска без потери данных
    </span>,
  ],
  [
    "RAIDZ2",
    "RAID 6",
    "Допускает одновременный отказ двух дисков без потери данных",
  ],
  [
    "RAIDZ3",
    "RAID 7",
    "Допускает одновременный отказ трёх дисков без потери данных",
  ],
  [
    "NESTED RAID",
    "RAID 10/50/60",
    <Text key="description">{`Допускает отказ одного / двух / трех дисков в каждой группе
(Отказоустойчивость зависит от отказоустойчивости каждого VDEV)`}</Text>,
  ],
];
const Heading = ({ children, className = "" }) => (
  <PartnerInfo
    className={`py-8 md:py-12.75 xl:py-12.75 ${className}`}
    textClassName="max-w-none"
  >
    <span className={`${primary} xl:text-[30px]`}>{children}</span>
  </PartnerInfo>
);
const Cards = ({ items }) => (
  <PartnerTextGrid
    items={items}
    titleClassName={primary}
    labelClassName="xl:whitespace-normal xl:text-[20.5px] xl:leading-6"
    cellClassName="min-w-0 border-[#d4d4d4] dark:border-[#1d2332] [&>svg]:hidden"
  />
);
const Action = ({ children, href, purple = false }) => {
  const Component = href ? Link : "button";
  return (
    <Component
      href={href}
      type={href ? undefined : "button"}
      className="inline-flex min-h-11 w-full max-w-62.5 items-center justify-center gap-2.5 rounded-lg border border-[#1f1f1f] bg-[#ededed] px-4 py-2 text-base font-light text-black dark:border-[#fffff1]"
    >
      {children}
      <Image
        src={purple ? "/pool/button.svg" : "/raid-z/button.svg"}
        width={19}
        height={19}
        alt=""
      />
    </Component>
  );
};
const Topic = ({ left, right, children }) => (
  <PartnerSplit
    hidePlus
    gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75 xl:text-[28px] xl:leading-[33.2px]"
    leftClassName="flex min-w-0 items-center"
    rightClassName="min-w-0 xl:pr-5"
    left={<div className="min-w-0 font-normal">{left}</div>}
    right={
      <div className="flex h-full flex-col gap-7.5">
        <div
          className={`text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px] ${secondary}`}
        >
          {right}
        </div>
        <div className="mt-auto">{children}</div>
      </div>
    }
  />
);

const Diagram = ({ type, alt }) => (
  <div className="min-w-0 border-b main-border px-4 py-8 md:px-9.25 xl:py-10.5 xl:min-h-171">
    <Image
      src={`/raid-z/${type}-light.png`}
      width={561}
      height={600}
      alt={alt}
      className="mx-auto h-auto max-w-full dark:hidden xl:mx-0 xl:max-w-none"
    />
    <Image
      src={`/raid-z/${type}-dark.png`}
      width={561}
      height={600}
      alt={alt}
      className="mx-auto hidden h-auto max-w-full dark:block xl:mx-0 xl:max-w-none"
    />
  </div>
);

export default function RaidZPage() {
  const logos = [0, 1, 3, 2, 4].map((index) => iscraVariants.logos[index]);
  return (
    <main className="page-iscra flow-root bg-white font-sans dark:bg-black [&_.main-border]:border-[#d4d4d4] [&_.section-border]:border-[#d4d4d4] dark:[&_.main-border]:border-[#1d2332] dark:[&_.section-border]:border-[#1d2332]">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="RAID Z"
        title={
          <>
            Redundant Array
            <br />
            of Independent Disks
          </>
        }
        className="xl:min-h-121.25 xl:pb-7"
        nameClassName="text-center text-[90px] sm:text-[130px] md:text-[clamp(100px,13vw,150px)] lg:text-[150px] xl:text-[200px] leading-normal bg-[linear-gradient(0deg,#ff9000_33.654%,#f50e0e_79.808%)] bg-clip-text text-transparent xl:pl-0 xl:mt-30.75"
        textClassName="min-w-0 items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-[#fffff1] md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#1f1f1f] dark:text-[#fffff1] font-extralight xl:max-w-127.5 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        <Lines
          lines={[
            "Технология объединения нескольких физических дисков",
            "в один логический массив для повышения надёжности",
          ]}
        />
      </IscraProtocolHero>
      <div className="md:[&_section]:py-12.75 md:[&_li]:min-h-22.25">
        <PartnerLogos items={logos} />
      </div>
      <Heading>
        <strong className="font-bold">RAID Z:</strong>{" "}
        <span className={secondary}>
          Может использовать переменную ширину Страйпа (Stripe)
        </span>
      </Heading>
      <div className="pt-8 md:pt-12.75">
        <Topic
          left={
            <div className={primary}>
              <Text>{`RAID-Z в ISCRA STORAGE это программная реализация
избыточности в составе файловой системы Native ZFS, которая
предлагает альтернативный подход к традиционному RAID 5/6,
а также решила его главные архитектурные проблемы.
В отличие от аппаратного RAID, здесь вся логика размещения
данных и четности управляется самой файловой системой,
а не сторонним контроллером.`}</Text>
            </div>
          }
          right={
            <Text>{`RAID-Z в ISCRA STORAGE является частью файловой системы,
который работает вместе с ней.`}</Text>
          }
        >
          <Action href="/storage/iscrastorage/">ISCRA STORAGE</Action>
        </Topic>
      </div>
      <Heading>
        <strong className="font-bold">
          RAID-Z полностью реализован в программном обеспечении ISCRA
        </strong>
      </Heading>
      <Cards items={architecture} />
      <Heading>
        <strong className="font-medium">RAID Z vs RAID</strong>
      </Heading>
      <PartnerTable
        head={["RAID Z", "RAID", "Описание"]}
        rows={comparison}
        gridClassName="grid-cols-[300fr_336fr_634fr]"
        minWidthClassName="min-w-160 md:min-w-0"
        cellClassName="min-w-0 px-4 py-5 text-sm leading-6 md:text-lg xl:min-h-29.75 xl:px-9.25 xl:pt-7.25 xl:pb-9.25 xl:text-2xl xl:leading-[33.2px]"
        headColumnClassNames={Array(3).fill(`${primary} font-bold`)}
        columnClassNames={[
          `${primary} font-medium`,
          `${primary} font-light`,
          `${primary} font-light xl:whitespace-nowrap`,
        ]}
      />
      <Cards items={benefits} />
      <div className="pt-8 md:pt-12.75">
        <Topic
          left={
            <Lines
              lines={[
                <span key="raid">
                  Если одна из составляющих{" "}
                  <span className={primary}>RAIDZ</span> повреждена, ISCRA
                  STORAGE
                </span>,
                "может: обнаружить несовпадение контрольной суммы;",
                "восстановить правильные данные с использованием",
                "избыточности; вернуть приложению корректный блок; записать",
                "исправленную версию на диск.Таким образом, Native ZFS",
                "в ISCRA STORAGE защищает не только от полного отказа",
                "накопителя, но и от тихого повреждения данных.",
              ]}
            />
          }
          right={
            <Text>{`Каждый блок данных в Native ZFS защищён контрольной
суммой. При чтении система проверяет не только успешность
операции со стороны диска, но и фактическую целостность
полученных данных.`}</Text>
          }
        >
          <Action href="/technology/nativezfs/" purple>
            Native ZFS
          </Action>
        </Topic>
      </div>
      <Heading>
        <strong className="invisible font-bold dark:visible">
          RAID-Z полностью реализован в программном обеспечении ISCRA
        </strong>
      </Heading>
      <section className="page-container grid border main-border md:grid-cols-2">
        <div className="min-w-0 border-b main-border md:border-b-0 md:border-r">
          <Diagram
            type="blocks"
            alt="Распределение блоков A, B, C, D и F и их чётности в RAID-Z при переменной ширине страйпа"
          />
          <div
            className={`px-4 py-7.25 text-base font-light md:text-xl xl:px-9.25 xl:text-[28px] xl:leading-[33.2px] ${secondary}`}
          >
            <h2 className={`mb-8 font-normal xl:mb-[33.2px] ${primary}`}>
              <Text>Как работает переменная ширина страйпа</Text>
            </h2>
            <div className="space-y-8 xl:space-y-[33.2px]">
              <p>
                <Text>{`RAID-Z в Native ZFS не требует заполнения страйпа
на всю ширину VDEV.`}</Text>
              </p>
              <p>
                <Text>{`Ширина страйпа определяется размером записываемого
блока данных, что позволяет размещать блоки
различного размера вместе с соответствующей
чётностью без обязательного использования всех
дисков vdev при каждой записи.`}</Text>
              </p>
              <p>
                <Text>{`В отличие от классического RAID 5 с фиксированной
шириной страйпа, RAID-Z формирует размещение
данных индивидуально для каждого записываемого
блока.`}</Text>
              </p>
              <p>
                <Text>{`Такой подход обеспечивает согласованную запись
данных и чётности, однако фактическая эффективность
использования пространства зависит от размера блоков
и дополнительных расходов на избыточность
и выравнивание.`}</Text>
              </p>
            </div>
          </div>
        </div>
        <div className="min-w-0">
          <Diagram
            type="stripe"
            alt="Страйпы RAID-Z занимают разное число дисков в зависимости от размера блока данных"
          />
          <div
            className={`px-4 py-7.25 text-base font-light md:text-xl xl:px-9.25 xl:text-[28px] xl:leading-[33.2px] ${secondary}`}
          >
            <h2 className={`mb-8 font-normal xl:mb-[33.2px] ${primary}`}>
              <Text>{`RAID-Z в Native ZFS (ISCRA STORAGE): динамическая
ширина страйпа вместо фиксированной,
как в RAID 5.`}</Text>
            </h2>
            <p>
              <Text>{`Страйп RAID-Z: логическая группа блоков, записываемая
на подмножество дисков VDEV'а за одну транзакцию. В
отличие от классического RAID 5, где ширина страйпа
жёстко задана, RAID-Z определяет её индивидуально
для каждого блока данных.`}</Text>
            </p>
          </div>
        </div>
      </section>
      <Heading className="xl:pt-25">
        <strong className="font-bold">RAID Z:</strong>{" "}
        <span className="font-light">
          Архитектура защиты данных, где избыточность встроена в файловую
          систему
        </span>
      </Heading>
      <div className="pt-8 md:pt-12.75">
        <Topic
          left={
            <div className={primary}>
              <Text>{`Native ZFS использует сквозные контрольные суммы для
обнаружения таких повреждений. Проверяется не только
успешность операции чтения, но и соответствие полученного
содержимого ожидаемым данным. При наличии достаточной
избыточности ZFS автоматически восстанавливает
повреждённые блоки.`}</Text>
            </div>
          }
          right={
            <div className={primary}>
              <Text>{`Bit rot: самопроизвольное изменение одного или нескольких
битов в блоке данных на носителе (HDD, SSD), которое
не сопровождается аппаратной ошибкой.`}</Text>
            </div>
          }
        >
          <Action>BIT ROT</Action>
        </Topic>
      </div>
      <div className="flow-root xl:min-h-120.75">
        <ZfsConfigurator />
      </div>
    </main>
  );
}
