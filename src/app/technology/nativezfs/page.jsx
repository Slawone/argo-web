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

const title = "Native ZFS в ISCRA STORAGE: файловая система | ARGO.TECH";
const description =
  "Архитектура Native ZFS в ISCRA STORAGE: контрольные суммы, RAID-Z, снимки, ARC, SLOG, сжатие и управление хранением данных.";
export const metadata = {
  title,
  description,
  alternates: { canonical: "/technology/nativezfs/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/technology/nativezfs/",
    title,
    description,
    images: [ogImage("nativezfs")],
  },
};

const sections = [
  {
    label: "History of ZFS",
    left: (
      <>
        <p>
          {" "}
          <span className="text-[#1f1f1f] dark:text-white font-medium">{`Кто создал ZFS? `}</span>{" "}
          <span>{`ZFS разрабатывалась в Sun Microsystems командой под руководством Джеффа Бонвика (Jeff Bonwick) и Мэтью Аренса (Matthew Ahrens). Именно они считаются создателями ZFS — файловой системы, которая позже легла `}</span>{" "}
        </p>{" "}
        <p>
          в основу OpenZFS. Ключевой вехой в истории ZFS стал нативный порт
          (Native ZFS). В отличие от первых экспериментальных реализаций через
          FUSE.
        </p>
      </>
    ),
    right: (
      <>
        Разработка стартовала в 2001 году силами всего двух инженеров.
        Официальный анонс состоялся в 2004 году, а первая интеграция в основную
        ветку Solaris в 2005-м.
      </>
    ),
  },
  {
    label: "Uberblock",
    href: "/technology/uberblock/",
    left: (
      <>
        <p>
          {" "}
          <span className="text-[#1f1f1f] dark:text-white font-medium">
            ZFS
          </span>{" "}
          <span>{` объединяет файловую систему и менеджер томов. `}</span>{" "}
        </p>{" "}
        <p>{`В классической схеме диски, RAID-контроллер, LVM и файловая система работают как отдельные слои, и каждый видит только свой кусок задачи. ZFS управляет всем стеком сразу: размещением блоков, избыточностью, контрольными суммами, снимками `}</p>{" "}
        <p>и кэшами. Почти все её преимущества вытекают из этого устройства.</p>
      </>
    ),
    right: (
      <>
        Корневой блок метаданных пула Native ZFS, который служит единственной
        точкой входа ко всем данным и обеспечивает атомарность файловой системы.
        Uberblock это основа Native ZFS, потому что вся архитектура этой
        файловой системы строится вокруг него
      </>
    ),
  },
  {
    label: "Copy-on-Write (C/ROW)",
    href: "/technology/crow/",
    left: (
      <>
        <span className="text-[#1f1f1f] dark:text-white font-medium">ZFS</span>{" "}
        <span>{` никогда не перезаписывает используемые блоки. Новые данные и метаданные пишутся в свободное место, и только после этого новое состояние фиксируется одной записью в корне дерева `}</span>{" "}
        <span className="text-[#1f1f1f] dark:text-white font-medium">
          (uberblock)
        </span>{" "}
        <span>
          . При сбое остаётся либо полностью старое, либо полностью новое
          состояние. Промежуточного состояния нет, поэтому не нужна проверка
          файловой системы (fsck) после аварии.
        </span>
      </>
    ),
    right: (
      <>
        Это же решает проблему write hole в RAID 5/6. Там запись данных и
        обновление чётности идут раздельно, и сбой между ними оставляет массив с
        несогласованной чётностью. В RAID-Z каждая запись формируется как полная
        полоса с чётностью, поэтому такого состояния не возникает.
      </>
    ),
  },
  {
    label: "RAID Z (ISCRA)",
    left: (
      <>
        <span className="text-[#1f1f1f] dark:text-white font-medium">
          RAID-Z
        </span>{" "}
        <span>{` это программный RAID в файловой системе ZFS, который защищает данные от отказа дисков с помощью чётности. Уровни `}</span>{" "}
        <span className="text-[#1f1f1f] dark:text-white font-medium">
          RAID-Z1, RAID-Z2
        </span>{" "}
        <span>{` и `}</span>{" "}
        <span className="text-[#1f1f1f] dark:text-white font-medium">
          RAID-Z3
        </span>{" "}
        <span>{` выдерживают отказ одного, двух и трёх дисков в группе соответственно. В отличие от аппаратного RAID, RAID-Z не требует отдельного контроллера и проверяет целостность данных контрольными суммами.`}</span>
      </>
    ),
    right: (
      <>
        В классическом RAID 5 и RAID 6 массивом управляет отдельный аппаратный
        контроллер или программный слой, который ничего не знает о файловой
        системе.
      </>
    ),
  },
  {
    label: "Atomic Snapshot",
    href: "/technology/atomicsnapshot/",
    left: (
      <>
        <p>
          {" "}
          <span>{`Благодаря `}</span>{" "}
          <span className="text-[#1f1f1f] dark:text-white font-medium">{`Copy-on-Write `}</span>{" "}
          <span>{`снимок это просто сохранённый корень дерева блоков. Он создаётся практически мгновенно, в момент создания не занимает места и растёт только по мере изменения данных. Для работы не нужен заранее зарезервированный объём `}</span>{" "}
        </p>{" "}
        <p>
          {" "}
          <span>{`и не возникает штрафа на первую запись, как в классических схемах `}</span>{" "}
          <span className="text-[#1f1f1f] dark:text-white font-medium">
            Copy-on-Write
          </span>{" "}
          <span>.</span>{" "}
        </p>
      </>
    ),
    right: (
      <>
        Защита от случайного удаления и шифровальщиков: снимок неизменяем, и из
        него можно восстановить файлы.
      </>
    ),
  },
  {
    label: "Adaptive Replacement Cache",
    href: "/technology/arc/",
    left: (
      <>
        <p>
          {" "}
          <span className="text-[#1f1f1f] dark:text-white font-medium">{`ARC `}</span>{" "}
          <span>{`основной кэш чтения, он всегда присутствует в системе `}</span>{" "}
        </p>{" "}
        <p>
          и живёт в RAM. Он делит кэшируемые данные на два списка: MRU (недавно
          использованные) и MFU (часто используемые). ARC сам решает, сколько
          памяти отдать каждому списку, поэтому одинаково хорошо работает и с
          повторяющимися обращениями (базы данных, виртуализация), и с потоковым
          чтением.
        </p>
      </>
    ),
    right: (
      <>В ISCRA STORAGE платформы поддерживают ECC-память от 64Gb до 8Tb ECC</>
    ),
  },
  {
    label: "SLOG (Separate Log)",
    href: "/technology/slog/",
    left: (
      <>
        <span className="text-[#1f1f1f] dark:text-white font-medium">SLOG</span>{" "}
        <span>{` Когда приложение требует гарантии записи, ZFS обязана подтвердить операцию только после сохранения данных в стабильном хранилище. Такие записи сначала попадают в журнал ZIL. SLOG выносит ZIL на отдельный низколатентный носитель (SSD или NVMe), поэтому подтверждение приходит быстрее. Позже данные записываются в основной пул обычным путём.`}</span>
      </>
    ),
    right: (
      <>
        В ISCRA STORAGE SLOG (Separate Log) радикально снижает задержку
        синхронной записи на HDD-пулах; ускоряет базы данных, NFS-хранилища и
        приложения, которые не умеют работать с асинхронной записью; добавляется
        к пулу без замены основных дисков.
      </>
    ),
  },
  {
    label: "Special VDEV",
    href: "/technology/vdev/",
    left: (
      <>
        <span>{`Метаданные (структура каталогов, деревья блоков, косвенные блоки) обслуживаются при каждой операции с файлами. На HDD-пуле они конкурируют с основными данными и тормозят всю систему. `}</span>{" "}
        <span className="text-[#1f1f1f] dark:text-white font-medium">{`Special VDEV `}</span>{" "}
        <span>{`выделяет им быстрый носитель. `}</span>
      </>
    ),
    right: (
      <>
        В ISCRA STORAGE Special VDEV дает: ускорение создания и удаления
        большого числа мелких файлов; ускорение работы с множеством снимков;
        ускорение таблицы дедупликации.
      </>
    ),
  },
  {
    label: "Mirror VDEV",
    left: (
      <>
        <p>
          {" "}
          <span>{`В зеркальной группе `}</span>{" "}
          <span className="text-[#1f1f1f] dark:text-white font-medium">{`Mirror VDEV `}</span>{" "}
          <span>{`одинаковые блоки пишутся `}</span>{" "}
        </p>{" "}
        <p>{`на все диски. В ISCRA поддерживается зеркалирование на 2, 3, 4 `}</p>{" "}
        <p>{`и 5 дисков. Читать можно с любого диска зеркала, поэтому чтение выполняется параллельно, а отказ диска не прерывает работу, пока в группе остаётся хотя бы один исправный диск. `}</p>
      </>
    ),
    right: (
      <>
        <p>{`Зеркальная группа для максимальных IOPS и надёжности `}</p>{" "}
        <p>в ISCRA STORAGE.</p>
      </>
    ),
  },
  {
    label: "Inline Compression",
    left: (
      <>
        <span className="text-[#1f1f1f] dark:text-white font-medium">{`LZ4, ZSTD `}</span>{" "}
        <span>
          два разных алгоритма сжатия данных без потерь, которые Native ZFS
          ISCRA STORAGE использует для Inline-сжатия. Они решают одну задачу, но
          с разным акцентом: LZ4 делает ставку на максимальную скорость, а ZSTD
          на лучший баланс между скоростью и степенью сжатия.
        </span>
      </>
    ),
    right: (
      <>
        В ISCRA STORAGE оба алгоритма доступны на уровне датасета. Вы можете
        выбрать LZ4 для максимальной производительности или ZSTD для
        максимальной экономии ёмкости — в зависимости от профиля нагрузки.
      </>
    ),
  },
  {
    label: "Thin provisioning",
    left: (
      <>
        <span className="text-[#1f1f1f] dark:text-white font-medium">
          Thin provisioning
        </span>{" "}
        <span>{` или Тонкое выделение в Native ZFS ISCRA STORAGE это технология, которая позволяет выделять дисковое пространство “виртуально”, не резервируя его физически на дисках сразу. Проще говоря, вы можете создать том (zvol) на 1 ТБ, но на дисках он будет занимать лишь столько места, сколько реально данных в него записано.`}</span>
      </>
    ),
    right: (
      <>{`ISCRA STORAGE это экономия и эффективность: вы не платите за место, которое не используете. `}</>
    ),
  },
  {
    label: "Deduplication",
    left: (
      <>
        <span className="text-[#1f1f1f] dark:text-white font-medium">{`Deduplication `}</span>{" "}
        <span>
          или Дедупликация: это механизм Native ZFS ISCRA STORAGE, который
          устраняет повторное хранение одинаковых блоков данных. Если один и тот
          же блок встречается в нескольких файлах, датасетах или томах, Native
          ZFS ISCRA STORAGE сохраняет его физически один раз, а все остальные
          ссылки направляет на уже существующий блок.
        </span>
      </>
    ),
    right: (
      <>
        В ISCRA STORAGE дедупликация выполняется синхронно, в процессе записи.
        Это не фоновая задача.
      </>
    ),
  },
  {
    label: "UNMAP",
    left: (
      <>
        <span className="text-[#1f1f1f] dark:text-white font-medium">
          UNMAP
        </span>{" "}
        <span>{` дает возможность возврата освобождённого пространства в пул, SCSI-команда, которая сообщает системе хранения, что определённые блоки данных больше не используются и их физическое пространство можно освободить. В ISCRA STORAGE UNMAP работает на уровне Native ZFS и возвращает освобождённые блоки обратно в пул, не дожидаясь, пока том будет удалён.`}</span>
      </>
    ),
    right: <>В ISCRA STORAGE поддержка UNMAP объявляется через SCSI VPD.</>,
  },
];
const integrity = [
  {
    title: "Исправление дефектов",
    label: (
      <>
        Диск может вернуть данные без ошибки, хотя они уже искажены: из-за
        дефекта носителя, сбоя прошивки, кабеля или контроллера. Классический
        RAID этого не замечает, потому что проверяет только доступность блоков.
      </>
    ),
  },
  {
    title: "Фоновые проверки",
    label: (
      <>
        <p>{`Scrub (скраб, скраббинг) или фоновая проверка целостности данных и контрольных сумм в ZFS. Система читает все занятые блоки пула, сверяет их с контрольными суммами и при обнаружении повреждения автоматически восстанавливает данные `}</p>{" "}
        <p>
          из избыточной копии. Выполняется на работающей системе, без остановки
          сервисов.
        </p>
      </>
    ),
  },
  {
    title: "Контрольные суммы",
    label: (
      <>
        <p>
          В ZFS каждый блок защищён контрольной суммой. Она хранится не рядом с
          блоком, а в родительском указателе, поэтому проверяется весь путь
          данных, а не только сам диск. Если сумма не сошлась, а в пуле есть
          избыточность (mirror или RAID-Z), ZFS:
        </p>{" "}
        <p>​</p> <p>Обнаруживает несоответствие при чтении;</p>{" "}
        <p>Берёт корректную копию из избыточности;</p>{" "}
        <p>Возвращает приложению правильные данные;</p>{" "}
        <p>Исправляет повреждённый блок на диске.</p>
      </>
    ),
  },
  {
    title: "Автоматические механизмы",
    label: (
      <>
        <p>{`Self-healing при чтении (read repair). Если приложение читает блок и его контрольная сумма не сходится, ZFS сразу берёт корректную копию `}</p>{" "}
        <p>
          из избыточности, возвращает её приложению и перезаписывает
          повреждённый блок. Это не отдельный процесс, а встроенное поведение
          каждого чтения, но для читателя страницы это ещё один уровень защиты.
          Scrub нужен именно для данных, которые давно никто не читал.
        </p>{" "}
        <p>​</p>
      </>
    ),
  },
];
const management = [
  {
    title: "Единый пул",
    label: (
      <>
        Ёмкость нескольких vdev доступна всем файловым системам и томам;
        добавление vdev расширяет пул без остановки сервисов.
      </>
    ),
  },
  {
    title: "Файлы и блоки в одном пуле",
    label: (
      <>
        NFS/SMB и блочные тома (iSCSI/FC) обслуживаются одной системой хранения.
      </>
    ),
  },
  {
    title: "Датасеты со свойствами",
    label: (
      <>
        Сжатие, квоты, размер блока, кэширование и доступ задаются индивидуально
        и наследуются вниз по иерархии, что упрощает администрирование крупных
        систем.
      </>
    ),
  },
  {
    title: "Масштаб",
    label: (
      <>
        <p>
          Благодаря 128-битной адресации архитектурные пределы по ёмкости и
          числу объектов практически недостижимы.
        </p>{" "}
        <p>​</p>
      </>
    ),
  },
];

const Heading = ({ children }) => (
  <PartnerInfo className="py-8 md:py-12.75" textClassName="max-w-none">
    <span className="text-[#1f1f1f] dark:text-white font-medium xl:text-2xl">
      {children}
    </span>
  </PartnerInfo>
);
const Split = ({ index }) => {
  const section = sections[index];
  const Action = section.href ? Link : "button";
  return (
    <div className="[&+div]:mt-8 md:[&+div]:mt-12.75">
      <PartnerSplit
        hidePlus
        gridClassName="md:grid-cols-[747fr_523fr] xl:min-h-76.75 xl:text-[28px] xl:leading-[33.2px]"
        cellClassName="xl:pt-7.25 xl:pb-9.5 xl:px-9.25"
        rightClassName="xl:pr-5"
        left={<div className="font-light">{section.left}</div>}
        right={
          <div className="flex h-full flex-col gap-8 xl:gap-7.75">
            <div className="text-base md:text-lg xl:min-h-41.25 xl:text-xl xl:leading-[33.2px]">
              {section.right}
            </div>
            <Action
              href={section.href}
              type={section.href ? undefined : "button"}
              className="inline-flex min-h-10 w-full max-w-62.5 items-center justify-center gap-2.5 self-start rounded-lg border border-[#a1a1a1] bg-[#ededed] px-4 py-2 text-base font-light text-black"
            >
              {section.label}
              <Image src="/native/button.svg" width={19} height={19} alt="" />
            </Action>
          </div>
        }
      />
    </div>
  );
};
const Grid = ({ items }) => (
  <PartnerTextGrid
    items={items}
    titleClassName="text-[#1f1f1f] dark:text-white xl:mb-[10.4px]"
    labelClassName="xl:whitespace-normal xl:text-[20.5px] xl:leading-6"
    cellClassName="xl:pb-8"
  />
);

export default function NativePage() {
  return (
    <main className="page-iscra bg-white font-sans dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="NATIVE"
        title={
          <>
            Zettabyte File System
            <br />
            Native ZFS ISCRA
          </>
        }
        className="xl:min-h-125.5 xl:pb-7"
        nameClassName="text-center text-[88px] sm:text-[140px] md:text-[clamp(100px,13vw,140px)] lg:text-[175px] xl:text-[200px] leading-normal bg-[linear-gradient(180deg,#20ec73_0%,#ff9000_100%)] bg-clip-text text-transparent xl:pl-0"
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-9"
        titleClassName="text-[#1f1f1f] dark:text-white md:text-3xl lg:text-5xl xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="text-[#a1a1a1] font-light xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        как устроена файловая система,
        <br />
        которая защищает данные сама
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <PartnerInfo className="py-8 md:py-12.75" textClassName="max-w-260">
        <span className="text-color xl:text-[30px]">
          <strong className="font-bold text-[#1f1f1f] dark:text-white">
            ISCRA STORAGE:
          </strong>{" "}
          Преимущества ZFS в системах хранения данных
        </span>
      </PartnerInfo>
      <Split index={0} />
      <Split index={1} />
      <Heading>Защита от скрытого повреждения данных (bit rot)</Heading>
      <Grid items={integrity} />
      <Heading>Согласованность после сбоя питания (Copy-on-Write)</Heading>
      <Split index={2} />
      <Heading>Программный RAID-Z</Heading>
      <Split index={3} />
      <Heading>Мгновенные снимки и клоны</Heading>
      <Split index={4} />
      <Heading>Многоуровневое кэширование и ускорение под нагрузку</Heading>
      {[5, 6, 7, 8].map((index) => (
        <Split key={index} index={index} />
      ))}
      <Heading>Экономия места: сжатие, тонкое выделение, дедупликация</Heading>
      {[9, 10, 11, 12].map((index) => (
        <Split key={index} index={index} />
      ))}
      <Heading>Гибкое управление и масштабирование</Heading>
      <Grid items={management} />
      <div className="pt-10 xl:pt-20" />
      <Contact source="ISCRA STORAGE Native ZFS" />
    </main>
  );
}
