import Link from "next/link";
import Image from "next/image";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const BlogCard = ({ post }) => (
  <Link
    href={`/blog/${post.slug}`}
    className="group flex flex-col overflow-hidden rounded-2xl border border-black/8 transition-colors hover:border-black/20 dark:border-white/14 dark:hover:border-white/30"
  >
    {post.cover && (
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={post.cover}
          alt=""
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
    )}
    <div className="flex flex-1 flex-col gap-2 p-5">
      <span className="text-color text-xs font-light uppercase tracking-wide">
        {formatDate(post.date)}
      </span>
      <h2 className="title-color text-lg font-medium md:text-xl">
        {post.title}
      </h2>
      {post.excerpt && (
        <p className="text-color text-sm font-light md:text-base">
          {post.excerpt}
        </p>
      )}
      {post.tags?.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
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
  </Link>
);
