import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const STRAPI_URL = process.env.STRAPI_URL || "https://cms.myfullweb.ru";
const STRAPI_API_TOKEN = process.env.STRAPI_MIGRATION_TOKEN;

if (!STRAPI_API_TOKEN) {
  throw new Error("Set STRAPI_MIGRATION_TOKEN env var before running this script.");
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

async function strapiFetch(pathAndQuery, options = {}) {
  const res = await fetch(`${STRAPI_URL}${pathAndQuery}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Strapi request failed: ${res.status} ${pathAndQuery}\n${body}`);
  }
  return res.json();
}

async function getTagIdMap() {
  const json = await strapiFetch("/api/tags?pagination[pageSize]=100");
  console.log("Найдено тегов в Strapi:", json.data.map((t) => `${t.name}(${t.id})`).join(", "));
  const map = new Map();
  json.data.forEach((tag) => map.set(tag.name, tag.id));
  return map;
}

async function getPostBySlug(slug) {
  const json = await strapiFetch(`/api/blog-posts?filters[slug][$eq]=${encodeURIComponent(slug)}`);
  return json.data[0];
}

async function main() {
  const tagIdMap = await getTagIdMap();
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data } = matter(source);

    const tagIds = (data.tags || []).map((name) => tagIdMap.get(name)).filter(Boolean);

    if (tagIds.length === 0) {
      console.log(`Пропуск (нет совпавших тегов): ${slug} — теги в файле: ${data.tags}`);
      continue;
    }

    const post = await getPostBySlug(slug);
    if (!post) {
      console.log(`Не найден в Strapi: ${slug}`);
      continue;
    }

    await strapiFetch(`/api/blog-posts/${post.documentId}`, {
      method: "PUT",
      body: JSON.stringify({ data: { tags: { connect: tagIds } } }),
    });

    console.log(`Теги проставлены: ${slug} -> ${data.tags}`);
  }

  console.log("Готово.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});