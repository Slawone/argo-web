import { Breadcrumbs } from "@/components";
import { getBlogPosts } from "@/lib/mdx";
import { BlogList } from "@/sections/blog/BlogList";

export const metadata = {
  title: "Блог ARGO.TECH — статьи о хранении данных и цифровом суверенитете",
  description:
    "НБлог ARGO.TECH: статьи о системах хранения данных, импортозамещении и цифровой независимости. Технические разборы, кейсы, тренды российского рынка СХД.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/blog/",
    title: "Блог ARGO.TECH — статьи о хранении данных и цифровом суверенитете",
    description:
      "Блог ARGO.TECH: статьи о системах хранения данных, импортозамещении и цифровой независимости. Технические разборы, кейсы, тренды российского рынка СХД.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
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
          <BlogList posts={posts} />
        )}
      </div>
    </section>
  );
}
