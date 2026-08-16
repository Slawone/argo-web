export const dynamic = "force-static";

import { getBlogPosts } from "@/lib/mdx";

const BASE_URL = "https://argo.tech";

const staticRoutes = ["", "/about", "/storage", "/partners", "/docs", "/blog"];

export default function sitemap() {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}/`,
  }));

  const blogEntries = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: post.date,
  }));

  return [...staticEntries, ...blogEntries];
}