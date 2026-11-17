import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components";
import {
  IscraProtocolHero,
  PartnerLogos,
  PartnerInfo,
  PartnerSplit,
  PartnerTextGrid,
  Contact,
} from "@/sections";
import { iscraVariants, ogImage } from "@/config";

const title = "Uberblock в Native ZFS: атомарность данных | ARGO.TECH";
const description =
  "Uberblock в ISCRA STORAGE: корневой блок метаданных Native ZFS, фиксация транзакций, контрольные суммы и согласованность данных после сбоя.";
export const metadata = {
  title,
  description,
  alternates: { canonical: "/technology/uberblock/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/uberblock/",
    title,
    description,
    images: [ogImage("uberblock")],
  },
};

const commit = [
  {
    title: "Атомарность",
    label: (
      <>
        <p>
          {" "}
          <span>{`Атомарность (Atomicity) в `}</span> <span>ISCRA STORAGE</span>{" "}
          <span>
            {" "}
            {` это свойство операции `} <br />{" "}
            {`или транзакции выполняться как единое неделимое целое: либо все изменения применяются полностью и успешно, либо не применяются вовсе, `}{" "}
          </span>{" "}
        </p>{" "}
        <p>
          {" "}
          {`без промежуточных состояний. Внешний наблюдатель никогда не увидит операцию “наполовину выполненной”: при сбое система остаётся `}{" "}
          <br />{" "}
          {`в состоянии до операции, а не в повреждённом промежуточном состоянии. `}{" "}
        </p>
      </>
    ),
  },
  {
    title: "Write Hole",
    label: (
      <>
        <p>
          Атомарность Native ZFS в ISCRA STORAGE решает проблему write-hole:
        </p>{" "}
        <p>
          {" "}
          {`не перезаписывая используемые блоки на прежнем месте. Изменение выполняется как новая транзакция. Новые данные записываются `}{" "}
          <br />в свободное место.{" "}
        </p>
      </>
    ),
  },
  {
    title: "Сохранение контрольных сумм",
    label: (
      <>
        {`Сохранение контрольных сумм в родительских block pointer. В родительских block pointer сохраняются контрольные суммы дочерних блоков. `}{" "}
        <br /> Это обеспечивает целостность всей цепочки: при чтении ZFS может
        проверить каждый блок на любом уровне дерева.
      </>
    ),
  },
  {
    title: "Формирование новой полосы RAID-Z",
    label: (
      <>
        <p>
          Для RAID-Z одновременно создаётся новая полная полоса (stripe),
          содержащая как данные, так и соответствующую чётность (parity). Старые
          блоки не перезаписываются новые данные всегда размещаются в свободных
          областях.
        </p>{" "}
        <p>​</p>
      </>
    ),
  },
];
const metadataItems = [
  {
    title: "Создание новых блоков метаданных",
    label: (
      <>
        {`Native ZFS в ISCRA STORAGE формирует новые блоки метаданных `} <br />{" "}
        {`с указателями (block pointers) на только что записанные данные. `}{" "}
        <br /> Эти указатели содержат не только адреса, но и контрольные суммы
        дочерних блоков.
      </>
    ),
  },
  {
    title: "Распространение изменений вверх по дереву метаданных",
    label: (
      <>
        {`Изменения каскадно распространяются вверх по дереву метаданных Native ZFS в ISCRA STORAGE от листьев к корню. Каждый родительский блок обновляется, чтобы указать на новые дочерние блоки, и получает `}{" "}
        <br /> их контрольные суммы.
      </>
    ),
  },
  {
    title: "Атомарная фиксация в новом Uberblock",
    label: (
      <>
        {`После того как все блоки данных и метаданных полностью записаны `}{" "}
        <br />{" "}
        {`на диск, Native ZFS в ISCRA STORAGE фиксирует новый корень дерева `}{" "}
        <br />{" "}
        {`в новом Uberblock. Именно эта финальная запись Uberblock является атомарной операцией: она переключает пул на новое консистентное состояние. До этого момента действует старый Uberblock `}{" "}
        <br />{" "}
        {`и старое дерево, поэтому сбой на любом из предыдущих шагов не приведёт `}{" "}
        <br />к повреждению данных.
      </>
    ),
  },
  {
    title: "Четность",
    label: (
      <>
        <p>
          {" "}
          В Native ZFS в ISCRA STORAGE используется Parity (чётность) <br />{" "}
          {`это избыточная информация, вычисленная из блоков данных, которая позволяет восстановить потерянные данные при отказе одного `}{" "}
          <br /> или нескольких дисков.{" "}
        </p>{" "}
        <p>​</p>
      </>
    ),
  },
];
const atomicity = [
  {
    title: "Атомарность данных",
    label: (
      <>
        <p>
          {" "}
          {`Это гарантия того, что любая операция в Native ZFS ISCRA STORAGE `}{" "}
          <br />{" "}
          {`с данными выполняется как единое неделимое целое: либо все изменения применяются полностью и успешно, либо не применяются вовсе. Внешний наблюдатель никогда не увидит данные в “полуобновлённом” `}{" "}
          <br /> или повреждённом промежуточном состоянии.{" "}
        </p>{" "}
        <p>​</p>
      </>
    ),
  },
  {
    title: "Атомарность операции",
    label: (
      <>
        Это свойство операции выполняться как единое неделимое действие в Native
        ZFS ISCRA STORAGE: либо она завершается полностью и успешно, либо не
        выполняется вовсе.
      </>
    ),
  },
  {
    title: "Многоуровневая гарантия",
    label: (
      <>
        Атомарность в Native ZFS ISCRA STORAGE это не одна универсальная
        технология, а многоуровневая гарантия, которая обеспечивается на разных
        уровнях: от отдельного диска до всей распределённой системы. Её главная
        цель обеспечить crash-consistency(согласованность после сбоя), то есть
        способность системы восстановиться в корректное, целостное состояние
        после внезапного отключения питания или сбоя.
      </>
    ),
  },
  {
    title: "Транзакционные группы",
    label: (
      <>
        Транзакционные группы (TXG): Все изменения (запись данных, метаданных,
        создание снапшотов) группируются в транзакционные группы. Эти группы
        являются атомарной единицей, которую Native ZFS ISCRA STORAGE использует
        для обеспечения консистентности. Транзакционная группа либо фиксируется
        на диске целиком, либо не фиксируется вовсе.
      </>
    ),
  },
];

const Heading = ({ children, secondary = false }) => (
  <PartnerInfo className="py-8 md:py-12.75" textClassName="max-w-260">
    <span
      className={
        secondary
          ? "text-color xl:text-[30px]"
          : "text-[#1f1f1f] dark:text-[#fffff1] xl:text-[30px]"
      }
    >
      {children}
    </span>
  </PartnerInfo>
);
const Grid = ({ items }) => (
  <PartnerTextGrid
    items={items}
    titleClassName="text-[#1f1f1f] dark:text-[#fffff1] xl:mb-[10.4px]"
    labelClassName="xl:whitespace-normal xl:text-[20.5px] xl:leading-6"
    cellClassName="xl:pb-8"
  />
);

export default function UberblockPage() {
  return (
    <main className="page-iscra bg-white font-sans dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="UBERBLOCK"
        title={
          <>
            Корневой
            <br />
            блок
          </>
        }
        className="xl:min-h-125.5 xl:pb-7"
        nameClassName="text-center text-[60px] sm:text-[90px] md:text-[clamp(64px,8.5vw,100px)] lg:text-[105px] xl:text-[120px] xl:mt-30.75 xl:w-max xl:justify-self-center leading-normal bg-[linear-gradient(180deg,#007aff_27.885%,#ff00e5_100%)] bg-clip-text text-transparent xl:pl-0"
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-[#fffff1] md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#a1a1a1] font-light xl:max-w-127.5 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        Блок метаданных пула Native ZFS ISCRA STORAGE, который указывает на
        актуальное состояние всего дерева данных и обеспечивает атомарность
        файловой системы
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <Heading secondary>
        <strong className="font-bold text-[#1f1f1f] dark:text-[#fffff1]">
          ISCRA STORAGE:
        </strong>{" "}
        Атомарность как основное свойство ВСЕЙ системы
      </Heading>
      <PartnerSplit
        hidePlus
        gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-68.5 xl:text-[28px] xl:leading-[33.2px]"
        left={
          <div className="font-normal">
            <span className="text-[#1f1f1f] dark:text-[#fffff1] font-medium">
              Uberblock
            </span>{" "}
            <span>{` в Native ZFS ISCRA STORAGE это корневой блок метаданных пула, который содержит указатель на актуальное дерево данных и номер последней завершённой транзакционной группы. Он служит единственной точкой входа ко всем данным пула и обеспечивает атомарное переключение Native ZFS между старым и новым консистентным состоянием. `}</span>
          </div>
        }
        right={
          <div className="font-normal">
            <p>
              {" "}
              <span>{`Благодаря механизму `}</span>{" "}
              <span className="text-[#1f1f1f] dark:text-[#fffff1] font-medium">
                Copy-on-Write
              </span>{" "}
              <span className="text-[#1f1f1f] dark:text-[#fffff1]">
                , Uberblock
              </span>{" "}
              <span>{` гарантирует целостность данных при сбоях: без валидного Uberblock импорт пула Native ZFS невозможен.`}</span>{" "}
            </p>{" "}
            <p>​</p>
          </div>
        }
      />
      <Heading>
        <strong className="font-bold">Uberblock:</strong> является точкой
        фиксации транзакции
      </Heading>
      <Grid items={commit} />
      <section className="page-container my-8 border main-border md:my-12.75">
        <div className="grid md:grid-cols-[350fr_920fr]">
          <h2 className="text-[#1f1f1f] dark:text-[#fffff1] border-b main-border px-5 py-8 text-xl font-normal md:border-b-0 md:border-r xl:pl-12.5 xl:pt-12.5 xl:text-[28px]">
            UBERBLOCK
          </h2>
          <div className="px-4 pt-5 pb-10 md:px-9.25 md:pb-17.5">
            <Image
              src="/uberblock/diagram-light.png"
              width={745}
              height={698}
              alt="Атомарная фиксация транзакции Uberblock и выбор согласованного состояния после сбоя"
              className="mx-auto h-auto max-w-full dark:hidden"
            />
            <Image
              src="/uberblock/diagram-dark.png"
              width={745}
              height={698}
              alt="Атомарная фиксация транзакции Uberblock и выбор согласованного состояния после сбоя"
              className="mx-auto hidden h-auto max-w-full dark:block"
            />
          </div>
        </div>
      </section>
      <Heading>
        <strong className="font-bold">Uberblock</strong> “переключатель”,
        который атомарно переводит пул на новое состояние
      </Heading>
      <Grid items={metadataItems} />
      <Heading>
        <strong className="font-bold">
          Атомарность: это часть архитектуры ISCRA STORAGE
        </strong>
      </Heading>
      <Grid items={atomicity} />
      <div className="pt-8 md:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75 xl:text-[28px] xl:leading-[33.2px]"
          left={
            <div className="font-normal">
              <p>
                {" "}
                <span className="text-[#1f1f1f] dark:text-[#fffff1]">
                  ZVOL (ZFS Volume)
                </span>{" "}
                <span>
                  {" "}
                  {` это датасет Native ZFS, который экспортируется как блочное устройство, а не как файловая система. Если обычный датасет ZFS для системы выглядит `}{" "}
                  <br />{" "}
                  {`как каталог с файлами, то ZVOL предстаёт перед системой `}{" "}
                  <br /> как “сырой” виртуальный диск.{" "}
                </span>{" "}
              </p>{" "}
              <p>​</p>
            </div>
          }
          right={
            <div className="flex h-full flex-col justify-between gap-8">
              <p className="text-base font-light md:text-lg xl:text-xl xl:leading-[33.2px]">
                При этом ZVOL в Native ZFS ISCRA STORAGE сохраняет все
                преимущества ZFS: контрольные суммы, сжатие, снапшоты и клоны.
              </p>
              <Link
                href="/technology/dataset/"
                className="inline-flex min-h-10 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#a1a1a1] bg-[#ededed] px-4 py-2 text-base font-light text-black"
              >
                Dataset
                <Image
                  src="/uberblock/button.svg"
                  width={19}
                  height={19}
                  alt=""
                />
              </Link>
            </div>
          }
        />
      </div>
      <Contact source="ISCRA STORAGE Uberblock" />
    </main>
  );
}
