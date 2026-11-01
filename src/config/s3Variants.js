const objectTabs = [
  {
    label: "Object",
    items: [
      { name: "PutObject", tone: "dim" },
      { name: "GetObject", tone: "accent" },
      { name: "HeadObject", tone: "selected" },
      { name: "CopyObject", tone: "dim" },
      { name: "DeleteObject", tone: "accent" },
      { name: "ListObjectsV2", tone: "dim" },
      { name: "ListObjectsV1", tone: "dim" },
      { name: "DeleteMultipleObjects", tone: "dim" },
      { name: "PostPolicy", tone: "dim" },
    ],
  },
  {
    label: "Object Lock & Retention",
    items: [
      { name: "GetObjectLockConfiguration", tone: "dim" },
      { name: "PutObjectLockConfiguration", tone: "dim" },
      { name: "GetObjectRetention", tone: "dim" },
      { name: "PutObjectRetention", tone: "accent" },
      { name: "GetObjectLegalHold", tone: "dim" },
      { name: "PutObjectLegalHold", tone: "selected" },
    ],
  },
  {
    label: "Object Versions",
    items: [
      { name: "PutBucketVersioning", tone: "dim" },
      { name: "GetBucketVersioning", tone: "accent" },
      { name: "ListObjectVersions", tone: "dim" },
      { name: "GetObject (с указанием version ID)", tone: "dim" },
      { name: "PutObject (с версионированием)", tone: "selected" },
      { name: "DeleteObject (с version ID)", tone: "dim" },
      { name: "CopyObject (с version ID)", tone: "dim" },
      { name: "RestoreObject (частично)", tone: "dim" },
    ],
  },
];

const multipartTabs = [
  {
    label: "Multipart",
    items: [
      { name: "NewMultipartUpload" },
      { name: "CompleteMultipartUpload", tone: "accent" },
      { name: "AbortMultipartUpload", tone: "selected" },
      { name: "ListMultipartUploads" },
      { name: "PutObjectPart" },
      { name: "CopyObjectPart" },
      { name: "ListObjectParts" },
    ],
  },
  {
    label: "Bucket",
    items: [
      { name: "PutBucket" },
      { name: "DeleteBucket" },
      { name: "HeadBucket" },
      { name: "ListBucket" },
      { name: "PutBucketLifecycleConfiguration" },
      { name: "GetBucketCors", tone: "accent" },
      { name: "PutBucketCors", tone: "selected" },
    ],
  },
  {
    label: "Tagging",
    items: [
      { name: "DeleteObjectTagging" },
      { name: "GetObjectTagging", tone: "accent" },
      { name: "PutObjectTagging", tone: "selected" },
    ],
  },
];

const compareHead = ["Функциональность", "ARGO SIII", "AMAZON S3"];

const compareRows = [
  ["Чтение диапазона (multi-byte ranges)", true, false],
  ["DeleteObject удаляет папку", true, false],
  ["Файл и папка с одинаковым путем", false, true],
  ["Разделители, кроме /", false, true],
  ["Версионирование объектов", true, true],
  ["Условные заголовки для всех операций", true, true],
];

const cluster = {
  types: {
    title: "Типы инсталляций",
    items: [
      { title: "1 узел:", lines: ["— совмещение всех ролей на одном узле."] },
      {
        title: "3 узла:",
        lines: ["— совмещение всех ролей;", "— обеспечение отказоустойчивости (RF= 2,3)."],
      },
      {
        title: "6+ узлов:",
        lines: [
          "— 3+ узла - роли обработки запросов и хранения метаданных;",
          "— 3+ узла - роли хранения данных;",
          "— при числе узлов хранения от 14, доступен EC(10+4).",
        ],
      },
    ],
  },
  nodes: {
    title: "Типовая конфигурация узлов",
    items: [
      {
        title: "Узел управления",
        lines: [
          "— CPU Xeon Scalable 2-го поколения и выше, 8+ ядер, 3 ГГц",
          "— RAM 64+ ГБ",
          "— NVMe/SAS SSD От 4-х шт, от 960 ГБ",
          "— NIC 10/25/100 Гбит/с",
        ],
      },
      {
        title: "Узел хранения данных",
        lines: [
          "— CPU Xeon Scalable 2-го поколения и выше, 8+ ядер, 2.8 ГГц",
          "— RAM 64+ ГБ",
          "— NVMe SSD, SAS/SATA SSD",
        ],
      },
    ],
  },
  status: [
    { name: "test1", sync: "cluster1 <-filer.sync--> cluster2", value: 95 },
    { name: "test2", sync: "cluster1 <-filer.sync --> cluster2", value: 75 },
    { name: "test3", sync: "cluster3 <- filer.sync --> cluster", value: 55 },
  ],
};

const features = [
  {
    title: "Надежность",
    label:
      "Сбои устраняются автоматически — без вашего участия;\nВы сами управляете степенью репликации под свои задачи;\nПри выходе из строя, данные мгновенно перемещаются на здоровые серверы;\nДаже в критической ситуации вы можете вручную достать данные из хранилища: формат для этого специально адаптирован.",
  },
  {
    title: "Эффективная работа",
    label: [
      "Запросы на узлы обработки запросов перенаправляются на узел-лидер;",
      "Разделение и изоляция пользовательских и системных нагрузок;",
      "Возможность настройки уровня репликации на уровне бакета;",
      "Время жизни объекта возможно задавать для каждого объекта;",
      { accent: "Версионирование объектов;" },
      "Гибкие политики хранения на каждый контейнер: настраивайте правила; размещения объектов под требования регуляторов.",
    ],
  },
  {
    title: "Производительность",
    label: [
      "Линейное масштабирование: от одного узла до геораспределенной сети;",
      "Высокая производительность каждого узла и параллельная обработка запросов;",
      "Отличная работа даже с потоком мелких операций.",
    ],
  },
  {
    title: "Совместимость",
    label: [
      "Полная поддержка HTPP — загрузка, работа с диапазонами байтов для потокового видео и прямая загрузка без промежуточной буферизации;",
      "Поддержка S3 с авторизацией и Bucket Policies (включая S3 Object Lock для WORM-совместимости);",
      "Встроенная поддержка S3 Tables API;",
      "Готовая интеграция с Prometheus: метрики через Push Geteway и HTTP- эндпоинты.",
    ],
  },
];

export const s3Variants = {
  objectTabs,
  multipartTabs,
  compareHead,
  compareRows,
  cluster,
  features,
};
