const logos = [
  { src: "/norsitrans/intel.png", width: 781, height: 512, label: "Intel", className: "w-24 lg:w-34" },
  { src: "/norsitrans/amd.png", width: 521, height: 512, label: "AMD", className: "w-14 lg:w-19" },
  { src: "/norsitrans/loongson.png", width: 512, height: 56, label: "Loongson", className: "w-36 lg:w-53" },
  { src: "/norsitrans/intel.png", width: 781, height: 512, label: "Intel", className: "w-24 lg:w-34" },
  { src: "/norsitrans/amd.png", width: 521, height: 512, label: "AMD", className: "w-14 lg:w-19" },
].map((logo) => ({
  ...logo,
  className: `${logo.className} dark:invert-60`,
}));

const brandLogos = Array(5).fill({
  src: "/norsitrans/logo.svg",
  width: 369,
  height: 75,
  href: "/partners/norsitrans",
  label: "Норси Транс",
  className: "w-full max-w-41.5 invert dark:invert-0",
});

const image = (name) => ({
  light: `/norsitrans/${name}-light.png`,
  dark: `/norsitrans/${name}.png`,
});

const minprom = { light: "/norsitrans/minprom.svg", dark: "/norsitrans/minprom.svg" };

const soonImage = { light: "/norsitrans/soon.png", dark: "/norsitrans/soon.png" };

const products = [
  {
    title: "Двухконтроллерная Система Хранения\nДанных ТИАРА-А4",
    minprom: true,
    href: "/partners/norsitrans/tiara-a4",
    image: image("tiara"),
  },
  {
    title: "Контроллер Системы Хранения Данных\nНорси Транс: ПАЛАДИН-212\nНИКА.469555.001",
    minprom: true,
    image: image("paladin"),
  },
  {
    title: "Контроллер Системы Хранения Данных\nНорси Транс: ПАЛАДИН-14\nНИКА.469555.001",
    minprom: true,
    image: image("paladin"),
  },
  {
    title: "Контроллер Системы Хранения Данных\nНорси Транс: ПАНТЕРА-128",
    minprom: true,
    image: image("pantera"),
  },
  { soon: true, minprom: true, image: soonImage },
  { soon: true, minprom: true, image: soonImage },
];

const useCases = [
  {
    title: "Архивы и долговременное хранение",
    label:
      "Решение обеспечивает соответствие требованиям compliance,\nрегуляторов и внутренних политик, а дедупликация и сжатие снижают\nзатраты на длительное хранение больших объёмов.",
  },
  {
    title: "Документооборот и СЭД",
    label:
      "Файловый доступ по протоколам NFS и CIFS/SMB, интеграцию с AD/LDAP\nи контроль прав на уровне пользователей и групп.",
  },
  {
    title: "Катастрофоустойчивость",
    label:
      "Обеспечивает сохранность данных и непрерывность работы даже\nпри аварии на основной площадке. Асинхронная репликация, позволяет\nпереключиться на резервный узел за минуты.",
  },
  {
    title: "Государственные задачи и объекты КИИ",
    label:
      "Государственные инфраструктуры, НИИ, объекты критической\nинформационной инфраструктуры, задачи высшей категории.",
  },
];

export const norsiVariants = {
  logos,
  brandLogos,
  minprom,
  products,
  useCases,
};
