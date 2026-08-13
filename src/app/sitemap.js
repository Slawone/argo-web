export const dynamic = "force-static";

import { getBlogPosts } from "@/lib/mdx";
import { docsProducts } from "@/config";

const BASE_URL = "https://argo.tech";

const staticRoutes = ["", "/about", "/storage", "/partners", "/docs", "/blog", "/documentation"];

export default function sitemap() {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}/`,
  }));

  const blogEntries = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: post.date,
  }));

  const docsEntries = docsProducts.map((product) => ({
    url: `${BASE_URL}/documentation/${product.slug}/`,
  }));

  return [...staticEntries, ...blogEntries, ...docsEntries];
}