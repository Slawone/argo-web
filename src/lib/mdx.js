import fs from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { mdxComponents } from "@/components/mdx/MDXComponents";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
  parseFrontmatter: true,
};

const STRAPI_URL = process.env.STRAPI_URL || "https://cms.myfullweb.ru";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

async function strapiFetch(query) {
  const res = await fetch(`${STRAPI_URL}${query}`, {
    headers: { Authorization: `Bearer ${STRAPI_API_TOKEN}` },
  });
  if (!res.ok) {
    throw new Error(`Strapi request failed: ${res.status} ${query}`);
  }
  return res.json();
}

function normalizeCoverUrl(cover) {
  if (!cover?.url) return null;
  return cover.url.startsWith("http") ? cover.url : `${STRAPI_URL}${cover.url}`;
}

const parseFilename = (filename) => {
  const match = filename.match(/^(\d+)-(.+)\.mdx$/);
  if (!match) {
    return { order: 0, slug: filename.replace(/\.mdx$/, "") };
  }
  return { order: Number(match[1]), slug: match[2] };
};

const MAX_EXCERPT_LENGTH = 155;

const stripMarkdown = (text) => {
  return text
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*_`~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const deriveExcerpt = (body) => {
  const plain = stripMarkdown(body);
  if (plain.length <= MAX_EXCERPT_LENGTH) return plain;
  const truncated = plain.slice(0, MAX_EXCERPT_LENGTH);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace)}…`;
};

export async function getDocsArticles(productSlug) {
  const dir = path.join(DOCS_DIR, productSlug);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));

  const articles = await Promise.all(
    files.map(async (filename) => {
      const { order, slug } = parseFilename(filename);
      const source = fs.readFileSync(path.join(dir, filename), "utf8");
      const { content, frontmatter } = await compileMDX({
        source,
        components: mdxComponents,
        options: mdxOptions,
      });

      return {
        slug,
        order,
        title: frontmatter.title,
        section: frontmatter.section || "Общее",
        excerpt: frontmatter.excerpt || "",
        tags: frontmatter.tags || [],
        content,
      };
    }),
  );

  return articles.sort((a, b) => a.order - b.order);
}

function mapBlogPost(entry) {
  return {
    slug: entry.slug,
    title: entry.title,
    date: entry.date,
    excerpt: entry.excerpt || deriveExcerpt(entry.content || ""),
    cover: normalizeCoverUrl(entry.cover),
    tags: entry.tags?.map((tag) => tag.name) || [],
  };
}

export async function getBlogSlugs() {
  const json = await strapiFetch("/api/blog-posts?fields[0]=slug&pagination[pageSize]=100");
  return json.data.map((entry) => entry.slug);
}

export async function getBlogPosts() {
  const json = await strapiFetch(
    "/api/blog-posts?populate=*&sort=date:desc&pagination[pageSize]=100",
  );
  return json.data.map(mapBlogPost);
}

export async function getRelatedPosts(post, limit = 3) {
  const others = (await getBlogPosts()).filter((item) => item.slug !== post.slug);

  const tagged = others.filter((item) =>
    item.tags?.some((tag) => post.tags?.includes(tag)),
  );
  const rest = others.filter((item) => !tagged.includes(item));

  return [...tagged, ...rest].slice(0, limit);
}

export async function getBlogPost(slug) {
  const json = await strapiFetch(
    `/api/blog-posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );
  const entry = json.data[0];
  if (!entry) return null;

  const { content } = await compileMDX({
    source: entry.content || "",
    components: mdxComponents,
    options: mdxOptions,
  });

  return { ...mapBlogPost(entry), content };
}
