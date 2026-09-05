"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const BlogContent = ({ content }) => (
  <BlocksRenderer
    content={content}
    blocks={{
      paragraph: ({ children }) => <p className="font-light">{children}</p>,
      image: ({ image }) => (
        <figure className="my-6">
          <img
            src={image.url}
            alt={image.alternativeText || ""}
            className="w-full rounded-2xl border border-black/8 dark:border-white/14"
          />
        </figure>
      ),
      link: ({ children, url }) => {
        const isExternal = /^https?:\/\//.test(url);
        return (
          <a
            href={url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      },
    }}
    modifiers={{
      bold: ({ children }) => <strong className="font-medium">{children}</strong>,
      italic: ({ children }) => <em>{children}</em>,
    }}
  />
);