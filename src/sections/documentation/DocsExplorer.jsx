"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { cn } from "@/utils";

export const DocsExplorer = ({ articles }) => {
  const [query, setQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState(articles[0]?.slug ?? null);
  const articleRefs = useRef({});

  const fuse = useMemo(
    () =>
      new Fuse(articles, {
        keys: ["title", "excerpt", "tags"],
        threshold: 0.35,
      }),
    [articles],
  );

  const matchedSlugs = useMemo(() => {
    if (!query.trim()) return null;
    return new Set(fuse.search(query).map((result) => result.item.slug));
  }, [query, fuse]);

  const visibleArticles = matchedSlugs
    ? articles.filter((article) => matchedSlugs.has(article.slug))
    : articles;

  const sections = useMemo(() => {
    const map = new Map();
    for (const article of visibleArticles) {
      if (!map.has(article.section)) map.set(article.section, []);
      map.get(article.section).push(article);
    }
    return Array.from(map.entries());
  }, [visibleArticles]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSlug(visible.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px" },
    );

    Object.values(articleRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [visibleArticles]);

  return (
    <div className="grid gap-8 md:grid-cols-[260px_1fr]">
      <aside className="md:sticky md:top-24 md:self-start">
        <div className="relative mb-5">
          <Search
            width={18}
            height={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-color"
          />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск по статьям"
            className="w-full rounded-xl border border-black/8 bg-transparent py-2 pl-9 pr-3 text-sm font-light title-color outline-none focus:ring-2 focus:ring-[#00B6CC]/40 dark:border-white/14"
          />
        </div>

        {sections.length === 0 ? (
          <p className="text-sm font-light text-color">Ничего не найдено</p>
        ) : (
          <nav className="flex flex-col gap-5">
            {sections.map(([section, items]) => (
              <div key={section}>
                <div className="mb-2 text-xs font-light uppercase tracking-wide text-color">
                  {section}
                </div>
                <ul className="flex flex-col gap-1">
                  {items.map((article) => (
                    <li key={article.slug}>
                      <a
                        href={`#${article.slug}`}
                        className={cn(
                          "block rounded-lg px-3 py-1.5 text-sm font-light transition-colors",
                          activeSlug === article.slug
                            ? "bg-black/5 title-color dark:bg-white/10"
                            : "text-color hover:title-color",
                        )}
                      >
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        )}
      </aside>

      <div className="flex min-w-0 flex-col gap-10">
        {visibleArticles.length === 0 ? (
          <p className="font-light text-color">
            Ничего не найдено по запросу «{query}»
          </p>
        ) : (
          visibleArticles.map((article) => (
            <article
              key={article.slug}
              id={article.slug}
              ref={(el) => {
                articleRefs.current[article.slug] = el;
              }}
              className="scroll-mt-24 border-b border-black/8 pb-10 last:border-b-0 dark:border-white/14"
            >
              <h2 className="title-color mb-4 text-xl font-medium md:text-2xl">
                {article.title}
              </h2>
              <div className="docs-prose prose">{article.content}</div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};
