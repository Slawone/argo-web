export const dynamic = "force-static";

import { getBlogPosts } from "@/lib/mdx";

const BASE_URL = "https://argo.tech";

const staticRoutes = [
  "",
  "/about",
  "/storage",
  "/partners",
  "/partners/graviton",
  "/partners/graviton/skh424a24bm",
  "/partners/graviton/skh424i24bm-ar",
  "/docs",
  "/blog",
];

export default async function sitemap() {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}/`,
  }));

  const posts = await getBlogPosts();

  const blogEntries = posts.map((post) => ({
     url: `${BASE_URL}/blog/${post.slug}/`,
     lastModified: post.date,
   }));

  return [...staticEntries, ...blogEntries];
}