import { getBlogPosts } from "@/lib/mdx";

export const dynamic = "force-static";

const BASE_URL = "https://argo.tech";

const sections = [
  {
    title: "Продукты и решения",
    links: [
      ["/storage/", "СХД АРГО: российские системы хранения данных, реестр Минцифры №5850"],
      ["/storage/iscrastorage/", "ISCRA STORAGE: программное обеспечение СХД на основе Native ZFS"],
      ["/storage/iscrastorage/nfs/", "NFS в ISCRA STORAGE: сетевая файловая система"],
      ["/storage/iscrastorage/dittoblocks/", "Ditto blocks и Copies=N: защита от bit rot"],
      ["/storage/iscrastorage/fma/", "FMA (Fault Management Architecture): самодиагностика и реакция на сбои"],
      ["/storage/iscrastorage/crow/", "C/ROW и write hole: атомарность Native ZFS и redirect-on-write"],
      ["/storage/iscrastorage/certification/", "Сертификаты и реестровые записи ISCRA STORAGE"],
    ],
  },
  {
    title: "Партнёры",
    links: [
      ["/partners/", "Партнёры и технологические интеграции ARGO.TECH"],
      ["/partners/graviton/", "Гравитон: серверные платформы для СХД"],
      ["/partners/norsitrans/", "Норси Транс: серверные платформы для СХД"],
    ],
  },
  {
    title: "Компания и материалы",
    links: [
      ["/about/", "О компании ARGO.TECH"],
      ["/docs/", "Документы: сертификаты, руководства, спецификации"],
      ["/blog/", "Блог: статьи о хранении данных, ZFS и импортозамещении"],
    ],
  },
];

export async function GET() {
  const posts = await getBlogPosts();

  const lines = [
    "# ARGO.TECH",
    "",
    "> Российский разработчик и производитель систем хранения данных (СХД АРГО, ПО ISCRA STORAGE). Решения включены в реестры Минцифры и Минпромторга и предназначены для импортозамещения. Сайт на русском языке.",
    "",
  ];

  for (const { title, links } of sections) {
    lines.push(`## ${title}`, "");
    for (const [href, text] of links) {
      const [name, ...rest] = text.split(": ");
      lines.push(`- [${name}](${BASE_URL}${href})${rest.length ? `: ${rest.join(": ")}` : ""}`);
    }
    lines.push("");
  }

  if (posts.length) {
    lines.push("## Статьи блога", "");
    for (const post of posts) {
      lines.push(`- [${post.title}](${BASE_URL}/blog/${post.slug}/)`);
    }
    lines.push("");
  }

  lines.push(
    "## Контакты",
    "",
    "- Компания: ООО «АРГО ТЕХНОЛОДЖИ ИСТ», ИНН 5010052504",
    "- E-mail: info@argo.tech",
    "- Телефон: 8 (499) 430-00-54",
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
