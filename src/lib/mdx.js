import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { mdxComponents } from "@/components/mdx/MDXComponents";

const DOCS_DIR = path.join(process.cwd(), "src/content/docs");
const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
  parseFrontmatter: true,
};

const parseFilename = (filename) => {
  const match = filename.match(/^(\d+)-(.+)\.mdx$/);
  if (!match) {
    return { order: 0, slug: filename.replace(/\.mdx$/, "") };
  }
  return { order: Number(match[1]), slug: match[2] };
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

export function getBlogSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPosts() {
  return getBlogSlugs()
    .map((slug) => {
      const source = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
      const { data } = matter(source);
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || "",
        cover: data.cover || null,
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getBlogPost(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { content, frontmatter } = await compileMDX({
    source,
    components: mdxComponents,
    options: mdxOptions,
  });

  return {
    slug,
    title: frontmatter.title,
    date: frontmatter.date,
    excerpt: frontmatter.excerpt || "",
    cover: frontmatter.cover || null,
    tags: frontmatter.tags || [],
    content,
  };
}
