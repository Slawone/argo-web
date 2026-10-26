import { Breadcrumbs } from "@/components";
import {
  IscraProtocolHero,
  PartnerLogos,
  PartnerInfo,
  PartnerSplit,
  PartnerTextGrid,
  PartnerTable,
  Contact,
} from "@/sections";
import { iscraVariants, ogImage } from "@/config";
import { cn } from "@/utils";

const title = "FMA (Fault Management Architecture) в ISCRA STORAGE — самодиагностика и реакция на сбои | ARGO.TECH";
const description =
  "FMA в ISCRA STORAGE — подсистема управления отказами, которая автоматически обнаруживает, диагностирует и изолирует неисправности оборудования и программного обеспечения. Детекторы ошибок, модуль диагностики, агенты реагирования и интеграция с Native ZFS.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/storage/iscrastorage/fma/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/storage/iscrastorage/fma/",
    title,
    description,
    images: [ogImage("fma")],
  },
};

const accentClassName = "text-[#00a650] dark:text-[#20ec73]";
const gridLabelClassName = "xl:whitespace-normal xl:text-[20.5px] xl:leading-6";
const gridCellClassName = "xl:pb-9";
const splitClassName = "xl:text-[26.5px]";
const textClassName = "font-normal leading-8.25";
const tableCellClassName = "min-h-16 items-center py-1.25 text-sm xl:text-[18px] xl:leading-[27px]";

const Gap = ({ className }) => <div className={cn("h-8 xl:h-12.75", className)} />;

const Lines = ({ lines }) =>
  lines.map((line) => (
    <span key={line} className="block">
      {line}
    </span>
  ));

const detectionItems = [
  {
    title: "Детекторы ошибок",
    label:
      "Детекторы ошибок обнаруживают ошибки в системе и немедленно выполняют необходимые действия. Детектор ошибок выдаёт чётко определённый отчёт об ошибке (ereport) или информационный отчёт (ireport) в диагностическую систему",
  },
  {
    title: "Модуль диагностики",
    label:
      "Модуль диагностики интерпретирует отчеты ereport и ireport и определяет, следует ли диагностировать неисправность, дефект или предупреждение. После принятия такого решения модуль диагностики выдает список подозреваемых, описывающий ресурс или набор ресурсов, которые могут быть причиной проблемы или состояния.",
  },
  {
    title: "Детекторы наблюдения",
    label:
      "Детекторы наблюдения сообщают о состояниях в системе, которые не являются симптомами неисправностей или дефектов. Детектор наблюдения выдаёт чётко определённый информационный отчёт (ireport), который может быть передан в диагностическую систему или просто зарегистрирован.",
  },
  {
    title: "Агенты реагирования",
    label:
      "Агенты реагирования предпринимают действия на основе списка подозрительных проблем. Реакции включают в себя регистрацию сообщений в журнале, отключение потоков ЦП, освобождение страниц памяти и освобождение устройств ввода-вывода.",
  },
  {
    title: "Список подозреваемых",
    label:
      "Если список подозреваемых включает несколько подозреваемых (например, если модуль диагностики не может изолировать одного подозреваемого), каждому подозреваемому присваивается вероятность того, что он является ключевым подозреваемым. Сумма вероятностей в этом списке составляет 100%. Списки подозреваемых интерпретируются агентами реагирования.",
  },
];

const eventItems = [
  {
    title: "Структурированные события",
    label: (
      <Lines
        lines={[
          "Драйверов накопителей и HBA;",
          "SCSI/SAS/NVMe transport;",
          "PCIe и аппаратной платформы;",
          "Native ZFS ISCRA STORAGE ошибки чтения, записи и контрольных сумм;",
          "других компонентов ISCRA STORAGE",
        ]}
      />
    ),
  },
  {
    title: "Агент реагирования",
    label:
      "Может не только отправить сообщение, но и вывести ресурс из эксплуатации, перевести vdev в DEGRADED или FAULTED, инициировать использование hot spare и сформировать понятную рекомендацию оператору",
  },
  {
    title: "Двигатель диагностики",
    label: (
      <>
        Накапливает и определяет события; отличает единичный сбой от устойчивой неисправности.
        Определяет подозреваемый ресурс, а при наличии корректной топологии FRU/ASRU; передаёт
        диагноз response agent;
        <br /> сохраняет постоянную историю неисправности.
      </>
    ),
  },
];

const lifecycleItems = [
  {
    title: "Диагностировано (Diagnose)",
    label:
      "Диспетчером неисправностей был поставлен новый диагноз. Диагностика включает в себя список из одного или нескольких подозрительных ресурсов. Публикуется событие list.suspect. Каждый диагноз идентифицируется по универсальному уникальному идентификатору (UUID) в полезной нагрузке события, и дальнейшие события, описывающие жизненный цикл разрешения этого диагноза, ссылаются на соответствующий UUID.",
  },
  {
    title: "Исправлено (Repair)",
    label: (
      <>
        Все подозрительные ресурсы в диагностике были исправлены, устранены или &quot;сняты с
        охраны&quot; Публикуется событие list.repaired. Некоторые или все ресурсы могут быть
        по-прежнему изолированы.
      </>
    ),
  },
  {
    title: "Обновлено (Update)",
    label:
      "Один или несколько подозрительных ресурсов в диагностике проблемы были отремонтированы, заменены или исправлены, или ресурс снова вышел из строя. Публикуется событие list.updated. Список подозрительных ресурсов всё ещё содержит как минимум один неисправный ресурс. Возможно, исправление было выполнено командой fmadm, или система автоматически обнаружила исправление, например, изменение серийного номера детали.",
  },
  {
    title: "Устранено (Resolve)",
    label: (
      <div className="flex flex-col gap-4">
        <p>
          Все подозрительные ресурсы в диагностике были исправлены, устранены или сняты с охраны
          и больше не являются изолированными. Публикуется событие list.resolved. Например,
          процессор, который был подозрительным и был отключен, теперь снова подключен. Перевод
          ресурсов в режим ожидания и подключения обычно происходит автоматически.
        </p>
        <p>
          Демон Fault Manager — это служба Service Management Facility (SMF). Служба
          svc:/system/fmd включена по умолчанию.
        </p>
      </div>
    ),
  },
];

const comparisonHead = [
  "Возможность",
  "SMART / SMART TD",
  <span key="fma" className={cn(accentClassName, "font-medium")}>
    FMA
  </span>,
];

const comparisonRows = [
  [
    "Объект наблюдения",
    "Отдельный накопитель",
    <span key="1" className="font-medium">
      Вся аппаратно-программная система
    </span>,
  ],
  ["Источник данных", "Прошивка накопителя", "Драйверы, HBA, transport, Native ZFS, платформа"],
  ["Проверка содержимого данных", "Нет", "ZFS checksum events"],
  ["Состояние пула и избыточности", "Неизвестно", "Учитывается"],
  ["Ошибки кабеля, backplane, HBA", "Обычно не видит", "Может учитывать события всего I/O path"],
  ["Диагностика", "Порог атрибута или статус диска", "Корреляция событий и fault case"],
  [
    "Идентификация компонента",
    "Device name/serial",
    "Ресурс, FRU/ASRU и физическая топология",
  ],
  [
    "Реакция",
    "Уведомление или скрипт",
    <span key="2" className={cn(accentClassName, "font-medium")}>
      Диагноз, изоляция, fault/degrade, hot spare, уведомление
    </span>,
  ],
  ["История", "SMART log и журнал smartd", "Постоянная база fault cases"],
  [
    "Зависимость от производителя",
    "Высокая для атрибутов",
    "События нормализуются в классы FMA",
  ],
];

const comparisonColumnClassNames = ["text-color", "text-color", "title-color"];
const comparisonHeadColumnClassNames = ["title-color", "title-color", ""];

const advantageItems = [
  {
    title: "Преимущество FMA ISCRA STORAGE",
    label:
      "Преимущество Native FMA ISCRA STORAGE заключается не просто в наличии другого монитора, а в переходе от контроля показателей к управлению отказом.",
  },
  {
    title: "Пример",
    label: (
      <div className="flex flex-col gap-4">
        <p>
          <Lines
            lines={[
              "SMART сообщает:",
              "Накопитель зафиксировал изменение внутреннего показателя.",
            ]}
          />
        </p>
        <p>
          <Lines
            lines={[
              "FMA отвечает на более важные для СХД вопросы:",
              "Какой ресурс неисправен, какие данные и сервисы затронуты, можно ли продолжать работу и какое действие необходимо выполнить.",
            ]}
          />
        </p>
      </div>
    ),
  },
  {
    title: "Интеграция с файловой системой",
    label:
      "Особенно важна интеграция с ZFS. Накопитель может сообщать SMART PASSED, но ZFS уже наблюдать повторяющиеся checksum errors. Возможна и обратная ситуация: SMART-атрибут изменился, но накопитель продолжает корректно обслуживать I/O. FMA позволяет принимать решение исходя из фактического поведения всей системы, а не одного счётчика.",
  },
  {
    title: "Контроль состояния",
    label:
      "В ISCRA STORAGE контроль состояния накопителей выполняется на уровне Fault Management Architecture. В отличие от изолированного SMART-мониторинга, FMA анализирует события всей цепочки хранения данных: накопителя, интерфейса, HBA, драйверов и Native ZFS. Система учитывает ошибки чтения и записи, нарушения контрольных сумм, состояние vdev и доступную избыточность, после чего формирует диагноз и может автоматически изолировать неисправный ресурс или задействовать резервный накопитель, известив об этом Администратора системы посредством стандартных каналов сообщений. (e-mail, snmptrap, внешний syslog сервер)",
  },
];

const eventClasses = [
  [
    "EC_PLATFORM",
    "События, специфичные для конкретной аппаратной платформы ( x86, конкретная материнская плата).",
  ],
  ["Dynamic Reconfiguration", "События динамической реконфигурации"],
  ["Environmental Monitor", "События мониторинга окружающей среды"],
  ["Domain Events", "События доменов"],
  ["IP Multipathing", "События IP Multipathing"],
  ["Device Add", "События добавления устройства"],
  ["Device Remove", "События удаления устройства"],
  ["Device Status", "События изменения статуса устройства"],
  ["Fault Management", "События FMA (Fault Management Architecture)"],
  ["Datalink Events", "События канального уровня (Data Link)"],
  ["VRRP Events", "События VRRP (Virtual RouterRedundancy Protocol)"],
  ["PCIe Events", "События PCIe"],
  ["EC_dev_status", "Специфичный подкласс"],
  ["EC_Cluster", "События Cluster"],
];

const classCellClassName =
  "items-start px-3 py-5 xl:px-9.25 xl:py-8.25 text-sm sm:text-base md:text-xl xl:text-[24px] xl:leading-[33.6px] break-words";
const classColumnClassNames = [
  "text-color font-light",
  "text-[#1f1f1f] dark:text-[#ededed] font-normal",
];

const sysevent = [
  {
    title: "Мгновенное обнаружение проблем",
    label:
      "События приходят в реальном времени. Система узнаёт о деградации диска или ошибке PCIe в ту же секунду, а не при следующем плановом опросе. Это сокращает время реакции с часов до секунд.",
  },
  {
    title: "Автоматизация реакций через FMA",
    label:
      "Sysevent основа для FMA (Fault Management Architecture). FMA автоматически анализирует события, изолирует неисправные компоненты и инициирует восстановление.",
  },
  {
    title: "Снижение нагрузки на систему",
    label:
      "Нет постоянного опроса устройств. Это экономит ресурсы CPU и I/O, которые можно использовать для основных задач.",
  },
  {
    title: "Проактивный мониторинг и предиктивная диагностика",
    label:
      "Интеграция с Prometheus, Grafana, Zabbix позволяет строить дашборды и алерты на основе событий. Вы не просто видите текущее состояние — вы видите тренды и предвестники отказов.",
  },
];

export default function IscraFma() {
  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <IscraProtocolHero
        name="F.M.A."
        title={
          <>
            Fault Management
            <br className="hidden xl:inline" /> Architecture
          </>
        }
        className="xl:pb-7 xl:min-h-125.5"
        nameClassName={cn(
          "whitespace-nowrap text-center leading-none md:text-[120px] lg:text-[160px] xl:text-[200px] xl:pl-0 xl:mt-30.25 xl:w-144 xl:-ml-1.5",
          accentClassName,
        )}
        textClassName="items-end text-right xl:gap-0 xl:pt-30.75 xl:pr-2.5"
        titleClassName="xl:text-[55px] xl:leading-[1.5]"
        subtitleClassName="dark:text-[#a1a1a1] font-extralight xl:max-w-124 xl:pl-0 xl:text-[20.5px] xl:leading-[1.5]"
      >
        подсистема управления отказами, которая автоматически обнаруживает, диагностирует и
        изолирует неисправности оборудования и программного обеспечения.
      </IscraProtocolHero>
      <PartnerLogos items={iscraVariants.logos} />
      <PartnerInfo className="xl:pt-17.25" textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-bold">ISCRA STORAGE:</span> Хранение на уровне
          ядра. Контроль на уровне байта.
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName={cn(splitClassName, "xl:min-h-68.5")}
        left={
          <p className={textClassName}>
            <span className="title-color font-medium">В ISCRA STORAGE</span> реализована
            полноценная система управления авариями, сбоями и оповещениями. На верхнем уровне
            стек управления неисправностями включает в себя детекторы ошибок и наблюдений,
            механизм диагностики и агенты реагирования.
          </p>
        }
        right={
          <p className={textClassName}>
            FMA предсказывает сбои, а не только реагирует. Изолирует неисправные компоненты без
            участия администратора.
          </p>
        }
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-bold">ISCRA STORAGE:</span> FMA как нервная система.
          Чувствует всё. Реагирует мгновенно.
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={detectionItems}
        fillEmpty
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="title-color font-bold xl:text-[30px]">
          FMA получает структурированные события от разных уровней системы
        </span>
      </PartnerInfo>
      <PartnerTextGrid
        items={eventItems}
        fillEmpty
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <Gap />
      <PartnerSplit
        gridClassName={cn(splitClassName, "xl:min-h-68.5")}
        left={
          <p className={textClassName}>
            <span className="title-color">
              Жизненный цикл проблемы или состояния, управляемый менеджером по неисправностям:
            </span>{" "}
            Может включать следующие этапы. Каждое из этих изменений состояния жизненного цикла
            связано с публикацией уникального списка событий.
          </p>
        }
        right={
          <p className={textClassName}>
            Преимущество Native FMA ISCRA STORAGE заключается не просто в наличии другого
            монитора, а в переходе от контроля показателей к управлению отказом.
          </p>
        }
      />
      <Gap />
      <PartnerTextGrid
        items={lifecycleItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="title-color font-bold xl:text-[30px]">
          S.M.A.R.T. / FMA (Fault Management Architecture)
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName={cn(splitClassName, "xl:min-h-74.5")}
        left={
          <p className={textClassName}>
            <span className="title-color">SMART: </span>Это один источник телеметрии о состоянии
            накопителя. FMA архитектура диагностики и автоматической реакции всей системы
            хранения. Кроме того, многие SMART-атрибуты и их raw values зависят от
            производителя. Даже статус PASSED не гарантирует отсутствия unreadable/pending
            sectors или ошибок self-test, что прямо отмечается в документации smartmontools.
          </p>
        }
        right={
          <p className={textClassName}>
            <span className="title-color">SMART не знает: </span>исправны ли данные; возникла
            ошибка внутри диска или на пути HBA–кабель–экспандер–backplane; можно ли безопасно
            продолжать работу; требуется ли активировать hot spare; какое влияние проблема
            оказывает на пул и сервисы.
          </p>
        }
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="text-[#1f1f1f] dark:text-[#20ec73] xl:text-[30px]">
          Преимущество Native FMA ISCRA STORAGE:
        </span>
      </PartnerInfo>
      <PartnerTable
        head={comparisonHead}
        rows={comparisonRows}
        gridClassName="grid-cols-3"
        cellClassName={tableCellClassName}
        columnClassNames={comparisonColumnClassNames}
        headColumnClassNames={comparisonHeadColumnClassNames}
        className="px-4 xl:px-8.75"
      />
      <Gap className="xl:h-31.5" />
      <PartnerTextGrid
        items={advantageItems}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="title-color font-bold xl:text-[30px]">Мгновенное обнаружение проблем</span>
      </PartnerInfo>
      <PartnerTable
        head={["Класс", "Назначение"]}
        rows={eventClasses}
        gridClassName="grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:grid-cols-[minmax(0,300fr)_minmax(0,970fr)]"
        minWidthClassName="min-w-0"
        cellClassName={classCellClassName}
        columnClassNames={classColumnClassNames}
        headColumnClassNames={classColumnClassNames}
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-bold">ISCRA STORAGE:</span> FMA как нервная система.
          Чувствует всё. Реагирует мгновенно.
        </span>
      </PartnerInfo>
      <PartnerSplit
        gridClassName={cn(splitClassName, "xl:min-h-68.5")}
        left={
          <p className={textClassName}>
            <span className="title-color">
              Механизм уведомления о событиях в операционной системе ISCRA STORAGE
            </span>
            , позволяющий подсистемам ядра публиковать события определённого класса и подкласса,
            а пользовательским процессам — подписываться на них и реагировать в реальном времени
            без опроса устройств или состояния системы.
          </p>
        }
        right={
          <p className={textClassName}>
            <span className="title-color">Sysevent</span> это подсистема ISCRA STORAGE,
            предназначенная для синхронной публикации и доставки системных событий от ядра,
            драйверов и подсистем пользовательским процессам и демонам.
          </p>
        }
      />
      <Gap />
      <PartnerTextGrid
        items={sysevent}
        titleClassName="title-color xl:mb-3"
        labelClassName={gridLabelClassName}
        cellClassName={gridCellClassName}
      />
      <div className="pt-10 xl:pt-20" />
      <Contact source="ISCRA STORAGE FMA" />
    </main>
  );
}
