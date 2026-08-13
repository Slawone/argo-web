"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/sections/blog/BlogCard";
import { Pagination } from "@/sections/blog/Pagination";
import { getTagColorClass } from "@/config";

const POSTS_PER_PAGE = 9;

export const BlogList = ({ posts }) => {
  const [activeTag, setActiveTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const tags = useMemo(() => {
    const unique = new Set();
    posts.forEach((post) => post.tags?.forEach((tag) => unique.add(tag)));
    return Array.from(unique).sort();
  }, [posts]);

  const filteredPosts = useMemo(
    () =>
      activeTag
        ? posts.filter((post) => post.tags?.includes(activeTag))
        : posts,
    [posts, activeTag],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTagChange = (tag) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  return (
    <div className="grid gap-4 md:grid-cols-[120px_1fr]">
      <aside>
        <ul className="flex flex-col gap-2">
          <li>
            <button
              type="button"
              onClick={() => handleTagChange(null)}
              className={`cursor-pointer text-sm font-light uppercase transition-colors title-color`}
            >
              Все статьи
            </button>
          </li>
          {tags.map((tag) => (
            <li key={tag}>
              <button
                type="button"
                onClick={() => handleTagChange(tag)}
                className={`cursor-pointer text-sm uppercase transition-colors ${getTagColorClass(tag)} ${
                  activeTag === tag
                    ? "font-medium underline underline-offset-4"
                    : "font-light"
                }`}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div>
        {paginatedPosts.length === 0 ? (
          <p className="text-color font-light">
            По этому тегу пока нет публикаций.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
