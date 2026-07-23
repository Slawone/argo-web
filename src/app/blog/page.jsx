import { Breadcrumbs } from "@/components";
import { getBlogPosts } from "@/lib/mdx";
import { BlogCard } from "@/sections/blog/BlogCard";

export const metadata = {
  title: "Блог | ARGO.TECH",
  description:
    "Новости ARGO.TECH: статьи о компании, продуктах и оборудовании.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className="font-sans section-py bg-white dark:bg-black">
      <div className="page-container">
        <Breadcrumbs className="mb-5 font-light text-color" />
        <h1 className="text-[20px] md:text-[45px] uppercase title-color font-medium mb-7.5">
          Блог
        </h1>

        <p className="font-light text-[16px] md:text-[18px] text-color mb-7.5">
          Новости компании, статьи о продуктах и оборудовании ARGO.TECH.
        </p>

        {posts.length === 0 ? (
          <p className="font-light text-color">Публикаций пока нет.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
