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
  Contact,
} from "@/sections";
import { iscraVariants, ogImage } from "@/config";

const title = "URE: невосстановимая ошибка чтения в Native ZFS | ARGO.TECH";
const description =
  "Причины Unrecoverable Read Error (URE), риски при восстановлении RAID и защита данных в ISCRA STORAGE: RAID-Z2, RAID-Z3, контрольные суммы, self-healing, resilver и scrub.";
export const metadata = {
  title,
  description,
  alternates: { canonical: "/technology/error/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/error/",
    title,
    description,
    images: [ogImage("error")],
  },
};

const primary = "text-[#1f1f1f] dark:text-[#fffff1]";
const secondary = "text-[#1f1f1f] dark:text-[#a1a1a1]";
const cardContent = [
  {
    title: "Основные причины URE",
    text: "Деградация магнитного покрытия или поверхности пластин HDD.\nПовреждение секторов (bad sectors).\nИзнос ячеек памяти NAND Flash в SSD.\nНеисправности электроники и внутреннего контроллера накопителя.\nОшибки микропрограммного обеспечения.\nВоздействие неблагоприятных условий эксплуатации, включая перегрев\nи вибрации.",
  },
  {
    title: "Увеличение ёмкости?",
    text: "С увеличением ёмкости HDD и продолжительности восстановления возрастает значение дополнительной избыточности. Поэтому для массивов большой ёмкости обычно предпочтительнее RAID с двойной или тройной чётностью.",
  },
  {
    title: "Почему URE критична для RAID?",
    text: "При отказе диска RAID-массив переходит в деградированное состояние.\nДля восстановления данных на новом накопителе используются сохранившиеся блоки данных и информация чётности.\n\nВ классических блочных RAID-массивах восстановление (rebuild) обычно требует чтения всей соответствующей области оставшихся накопителей.\nЧем больше объём считываемых данных, тем выше вероятность обнаружения ранее незамеченных ошибок чтения.\n\nЕсли во время восстановления RAID 5 возникает URE на одном из оставшихся дисков, доступной избыточности может оказаться недостаточно\nдля восстановления затронутого страйпа. В зависимости от реализации RAID это может привести к потере части данных или прерыванию восстановления.\nRAID 6 благодаря двойной чётности способен компенсировать одну дополнительную ошибку чтения на другом диске после отказа первого накопителя.",
  },
  {
    title: "Избыточность RAID-Z2 и RAID-Z3",
    text: "Двойная и тройная чётность RAID-Z2 и RAID-Z3\nNative ZFS ISCRA STORAGE поддерживает уровни RAID-Z2 и RAID-Z3\nс двойной и тройной распределённой чётностью.\n\nRAID-Z2 допускает недоступность данных на любых двух дисках в пределах одного vdev. После отказа одного диска сохраняется возможность компенсировать дополнительную ошибку чтения на другом диске того же страйпа.\nRAID-Z3 допускает недоступность данных на любых трёх дисках в пределах одного vdev. Даже после отказа одного диска система сохраняет возможность компенсировать ошибки чтения на двух других дисках того же страйпа.\nЭто снижает риск потери данных при длительном восстановлении массивов на HDD большой ёмкости.",
  },
  {
    title: "Контрольные суммы и self-healing",
    text: "Native ZFS использует сквозные контрольные суммы для контроля целостности данных и метаданных. Контрольная сумма каждого блока хранится в родительском указателе (block pointer), отдельно от содержимого блока.\n\nПри чтении Native ZFS проверяет полученные данные. Если накопитель возвращает повреждённое содержимое, несовпадение контрольной суммы позволяет обнаружить ошибку, даже если сам диск не сообщил о проблеме.\nПри возникновении URE накопитель сообщает о невозможности прочитать данные. При наличии достаточной избыточности Native ZFS может реконструировать недостающую информацию с использованием сохранившихся данных и чётности RAID-Z.\nМеханизм Self-Healing позволяет возвращать приложениям корректные данные и, при наличии возможности, автоматически исправлять повреждения на накопителях.",
  },
  {
    title: "Восстановление только необходимых данных (Resilver)",
    text: "В отличие от традиционного поблочного rebuild, Native ZFS восстанавливает только необходимые размещённые данные, а не обязательно весь физический объём накопителя.\n\nЭто сокращает количество операций чтения и записи при невысокой заполненности пула и может уменьшать продолжительность восстановления.\nФактическое время resilver зависит от объёма данных, производительности накопителей, фрагментации и текущей нагрузки на СХД. Проверка целостности данных (Scrub) Процедура scrub позволяет проверять целостность размещённых данных, включая блоки, к которым приложения длительное время не обращались.\n\nПри обнаружении ошибок Native ZFS использует доступную избыточность для восстановления повреждённых блоков.\n\nРегулярное выполнение scrub помогает выявлять скрытые повреждения\nдо возникновения отказа накопителя, снижая риск обнаружения таких ошибок непосредственно во время resilver.",
  },
  {
    title: "Оптимальная конфигурация vdev",
    text: "Для массивов на HDD большой ёмкости рекомендуется использовать RAID-Z2 или RAID-Z3 с учётом требований к отказоустойчивости, производительности и времени восстановления.\n\nИспользование нескольких vdev умеренной ширины вместо одного чрезмерно широкого позволяет ограничить количество дисков в отдельной группе отказоустойчивости и может улучшить характеристики восстановления\nи производительности.",
  },
];
const Text = ({ children }) => <TechnologyLines lines={children.split("\n")} />;
const Heading = ({ children }) => (
  <PartnerInfo
    className="py-8 md:py-12.75 xl:py-12.75"
    textClassName="max-w-none"
  >
    <span className={`${primary} xl:text-[30px]`}>{children}</span>
  </PartnerInfo>
);
const Split = ({ left, right, equal = false, tall = false, ...props }) => (
  <PartnerSplit
    hidePlus
    gridClassName={`${equal ? "md:grid-cols-2" : "md:grid-cols-[747fr_523fr]"} ${tall ? "xl:min-h-76.75" : "xl:min-h-68.5"} xl:text-[28px] xl:leading-[33.2px]`}
    leftClassName="flex min-w-0 items-center"
    rightClassName="min-w-0 xl:pr-5"
    left={left}
    right={right}
    {...props}
  />
);
const Cards = ({ items, offWhite = false }) => (
  <PartnerTextGrid
    items={items.map(({ title, text }) => ({
      title,
      label: <div className="whitespace-pre-line">{text}</div>,
    }))}
    fillEmpty
    titleClassName={`xl:whitespace-nowrap text-[#1f1f1f] ${offWhite ? "dark:text-[#fffff1]" : "dark:text-white"}`}
    labelClassName="xl:w-[561px] xl:whitespace-normal xl:text-[20.5px] xl:leading-6"
    cellClassName="min-w-0 border-[#ededed] dark:border-[#1d2332] [&>svg]:hidden"
  />
);

export default function ReadErrorPage() {
  const logos = [0, 1, 3, 2, 4].map((index) => iscraVariants.logos[index]);
  return (
    <main className="page-iscra flow-root bg-white font-sans dark:bg-black [&_.main-border]:border-[#ededed] [&_.section-border]:border-[#ededed] dark:[&_.main-border]:border-[#1d2332] dark:[&_.section-border]:border-[#1d2332]">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="ERROR"
        title={
          <>
            Unrecoverable
            <br />
            Read Error
          </>
        }
        className="xl:min-h-121.25 xl:pb-7"
        nameClassName="min-w-0 text-center uppercase whitespace-nowrap text-[80px] sm:text-[120px] md:text-[clamp(88px,12vw,140px)] lg:text-[140px] xl:text-[200px] leading-normal xl:leading-none bg-[linear-gradient(180deg,#2c0a07_0%,#ff1500_71.635%,#ffc518_100%)] bg-clip-text text-transparent xl:pl-0 xl:mt-34.25 xl:translate-x-27.5"
        textClassName="min-w-0 items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-[#fffff1] md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#1f1f1f] dark:text-[#fffff1] font-extralight xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        <Text>{`Ошибка чтения, при которой накопитель не может
прочитать данные с носителя`}</Text>
      </IscraProtocolHero>
      <div className="md:[&_section]:py-12.75 md:[&_li]:min-h-22.25">
        <PartnerLogos items={logos} />
      </div>
      <Heading>
        <strong className="font-bold">ISCRA STORAGE:</strong>{" "}
        <span className={secondary}>
          Хранение на уровне ядра. Контроль на уровне байта.
        </span>
      </Heading>
      <div className="pt-8 pb-8 md:pt-12.75 md:pb-11">
        <Split
          left={
            <p className={`font-normal ${secondary}`}>
              <Text>{`Unrecoverable Read Error (URE) или невосстановимая ошибка
чтения, при которой накопитель (HDD или SSD) не может
прочитать определённый сектор или блок данных. Диск
предпринимает многократные попытки чтения и применяет
встроенные алгоритмы коррекции ошибок (ECC), но не может
восстановить данные.`}</Text>
            </p>
          }
          right={
            <p className={`font-normal ${primary}`}>
              <Text>{`URE свидетельствует о физической
или логической неисправности носителя
и особенно опасен при восстановлении
RAID-массивов, где ошибка чтения
на одном диске может привести к потере
данных.`}</Text>
            </p>
          }
        />
      </div>
      <Heading>
        <span className="font-medium">
          URE (Unrecoverable Read Error) невосстановимая ошибка чтения.
        </span>
      </Heading>
      <div className="pt-8 md:pt-12.75">
        <Split
          left={
            <div>
              <h2 className={`font-normal ${primary}`}>Причины URE:</h2>
              <ul className={`list-none font-light ${secondary}`}>
                {[
                  "Деградация магнитного слоя (для HDD).",
                  "Повреждение сектора (bad block).",
                  "Проблемы с прошивкой или контроллером диска.",
                  "Износ ячеек (для SSD).",
                  "Внешние факторы (вибрация, перегрев).",
                ].map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
          }
          right={
            <p className={`font-normal ${primary}`}>
              <Text>{`Для больших HDD риск URE
при восстановлении становится настолько
высоким, что RAID 5 перестает быть
надёжным выбором.`}</Text>
            </p>
          }
        />
      </div>
      <div className="pt-8 md:pt-12.75">
        <Split
          equal
          gridClassName="md:grid-cols-2 xl:min-h-124.5 xl:text-[28px] xl:leading-[33.2px]"
          rightClassName="min-w-0 xl:px-9.25"
          left={
            <div className={`font-light ${secondary}`}>
              <h2 className={`mb-8.25 font-normal ${primary}`}>
                Критична для RAID
              </h2>
              <Text>{`Проблема проявляется в самый неподходящий
момент при восстановлении (rebuild/resilver) после
отказа диска.`}</Text>
            </div>
          }
          right={
            <div className={`space-y-8.25 font-normal ${secondary}`}>
              <p>
                <Text>{`Процесс восстановления требует прочитать
все оставшиеся диски целиком, чтобы восстановить
данные на новом диске.`}</Text>
              </p>
              <p>
                <Text>{`Если на одном из “здоровых” дисков
встречается URE, массив не может получить часть
данных, необходимых для реконструкции.`}</Text>
              </p>
              <p>
                <Text>{`В классическом RAID 5 это приводит к сбою
восстановления и потере данных. RAID 6 (два блока
чётности) позволяет пережить один URE при
восстановлении, но риск остаётся.`}</Text>
              </p>
            </div>
          }
        />
      </div>
      <div className="py-8 md:py-12.75">
        <Split
          left={
            <p className={`font-normal ${secondary}`}>
              <Text>{`URE возникает на уровне накопителя, и никакая файловая
система не может гарантированно предотвратить её появление.
Сильная сторона Native ZFS ISCRA STORAGE возможность
обнаружить повреждение, реконструировать данные
и сократить объём работы при восстановлении.`}</Text>
            </p>
          }
          right={<div aria-hidden="true" />}
        />
      </div>
      <Cards items={cardContent.slice(0, 3)} />
      <Heading>
        <strong className="font-bold">ISCRA STORAGE:</strong>{" "}
        <span className={secondary}>Функционал защиты от URE</span>
      </Heading>
      <Cards items={cardContent.slice(3)} offWhite />
      <div className="py-8 md:py-12.75">
        <Split
          left={
            <p className={`font-normal ${secondary}`}>
              <TechnologyLines
                lines={[
                  <span key="iscra">
                    Комплексная защита данных в{" "}
                    <span className="text-[#1f1f1f]/80 dark:text-[#fffff1]/80">
                      ISCRA STORAGE:
                    </span>{" "}
                    объединяет
                  </span>,
                  "распределённую чётность RAID-Z, сквозные контрольные",
                  "суммы, автоматическое исправление повреждений",
                  "и механизмы проверки целостности Native ZFS.",
                ]}
              />
            </p>
          }
          right={
            <p className="font-normal text-[#1f1f1f]/80 dark:text-[#fffff1]/80">
              <Text>{`Совместное использование этих технологий
позволяет снизить риск потери данных
вследствие невосстановимых ошибок
чтения, скрытых повреждений
и дополнительных отказов накопителей
во время восстановления массива.`}</Text>
            </p>
          }
        />
      </div>
      <div className="pt-8 pb-2.5 md:pt-12.75">
        <Split
          tall
          rightClassName="min-w-0 xl:pl-11.25 xl:pr-5"
          left={
            <p className={`font-normal ${primary}`}>
              <Text>{`URE (Unrecoverable Read Error) Накопитель не может вернуть
запрошенные данные и сообщает об ошибке чтения.`}</Text>
            </p>
          }
          right={
            <div className="flex h-full flex-col gap-8 xl:gap-23.75">
              <p
                className={`text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px] ${secondary}`}
              >
                <Text>{`Накопитель может вернуть повреждённые данные
без сообщения об ошибке. Native ZFS обнаруживает
несовпадение контрольной суммы (CKSUM).`}</Text>
              </p>
              <Link
                href="/technology/dittoblocks/"
                className="inline-flex min-h-11 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#1f1f1f] bg-[#ededed] px-4 py-2 text-base font-light text-[#1f1f1f] dark:border-white dark:text-black"
              >
                Bit Rot
                <Image
                  src="/raid-z/button.svg"
                  width={18.7}
                  height={18.699}
                  alt=""
                />
              </Link>
            </div>
          }
        />
      </div>
      <Contact source="ISCRA STORAGE Unrecoverable Read Error" />
    </main>
  );
}
