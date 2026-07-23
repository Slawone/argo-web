import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components";
import { getBlogPost, getBlogSlugs } from "@/lib/mdx";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Блог ARGO.TECH`,
    description: post.excerpt,
  };
}

const formatDate = (date) =>
  new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <section className="font-sans section-py bg-white dark:bg-black">
      <div className="page-container">
        <Breadcrumbs className="mb-5 font-light text-color" />

        {post.cover && (
          <div className="relative mb-7.5 aspect-video w-[50%] overflow-hidden rounded-2xl">
            <Image src={post.cover} alt="" fill className="object-cover" />
          </div>
        )}

        <span className="text-color text-xs font-light uppercase tracking-wide">
          {formatDate(post.date)}
        </span>
        <h1 className="text-[20px] md:text-[45px] uppercase title-color font-medium mt-2 mb-7.5">
          {post.title}
        </h1>

        <div className="docs-prose prose">{post.content}</div>

        {post.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-black/8 pt-5 dark:border-white/14">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="accent-color accent-border rounded-full border px-2 py-0.5 text-xs uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
