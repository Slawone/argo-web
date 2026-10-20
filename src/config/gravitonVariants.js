const awards = [
  {
    image: "/graviton/award-priority.png",
    width: 84,
    height: 83,
    title: "Приоритет - 2025",
    text: "Лауреат национальной премии\nв области промышленных технологий",
  },
  {
    image: "/graviton/award-brand.png",
    width: 76,
    height: 95,
    title: "Бренд года в России 2025",
    accent: "Лауреат высшей лиги",
    text: "Приборы, аппаратура и инструменты:\nоборудование для обработки информации\nи компьютеры",
  },
  {
    image: "/graviton/award-design.png",
    width: 87,
    height: 76,
    title: "Лучший промышленный\nдизайн России",
    text: "Лауреат народного голосования\nв главном конкурсе страны",
  },
];

const storageImage = {
  light: "/graviton/storage-active-light.png",
  dark: "/graviton/storage-active.png",
};

const soonImage = {
  light: "/graviton/storage-soon.png",
  dark: "/graviton/storage-soon.png",
};

const minprom = {
  light: "/graviton/minprom-light.svg",
  dark: "/graviton/minprom.svg",
};

const logos = Array(5).fill({
  src: "/graviton/logo.svg",
  width: 368,
  height: 68,
  href: "/partners/graviton",
  label: "Гравитон",
  className: "w-full invert dark:invert-0",
});

const products = [
  {
    title: "Система хранения данных Гравитон",
    model: "СХ424А24БМ,ТСЦМ.466539.006-01",
    minprom: true,
    image: storageImage,
    href: "/partners/graviton/skh424a24bm",
  },
  {
    title: "Система хранения данных Гравитон",
    model: "СХ424И24БМ-АР ЕЦРТ.466539.012-05\n10578748",
    minprom: true,
    image: storageImage,
    href: "/partners/graviton/skh424i24bm-ar",
  },
  {
    title: "Система хранения данных Гравитон",
    model: "СХ412И36БМ16Т-АР ЕЦРТ.466539.015-04\n10578753",
    minprom: true,
    image: storageImage,
  },
  {
    title: "Система хранения данных Гравитон",
    model: "СХ424И24БМ-АР ЕЦРТ.466539.012\n10488620",
    minprom: true,
    image: storageImage,
  },
  { soon: true, image: soonImage },
  { soon: true, image: soonImage },
];

const useCases = [
  {
    title: "Видеонаблюдение и видеоаналитика",
    label:
      "Задачи с интенсивной последовательной записью: видеоархивы, потоковое\nвидео, видеоаналитика с ИИ",
  },
  {
    title: "Виртуализация и СУБД",
    label:
      "Задачи для виртуализации и баз данных. Поддерживает VMware (VAAI),\nKVM, Hyper-V, Proxmox VE, zVirt — все ключевые локальные\nи международные гипервизоры",
  },
  {
    title: "Резервное копирование и архивирование",
    label:
      "Централизованное резервное копирование инфраструктуры,\nдолговременные архивы, работа с Veeam и другими системами бэкапа.",
  },
  {
    title: "Государственные задачи и объекты КИИ",
    label:
      "Государственные инфраструктуры, НИИ, объекты критической\nинформационной инфраструктуры, задачи высшей категории.",
  },
];

export const gravitonVariants = {
  awards,
  logos,
  minprom,
  products,
  useCases,
};
