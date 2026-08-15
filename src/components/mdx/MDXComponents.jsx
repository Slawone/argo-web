import { Children, isValidElement } from "react";
import {MdxFigure} from './MdxFigure';
import { MdxFile } from './MdxFile';

const MdxImage = ({ src, alt, ...props }) => (
  <figure className="my-6">
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      className="w-full rounded-2xl border border-black/8 dark:border-white/14"
      {...props}
    />
    {alt && (
      <figcaption className="text-color mt-2 text-center text-sm font-light">
        {alt}
      </figcaption>
    )}
  </figure>
);

export const mdxComponents = {
  MdxFigure,
  MdxFile,
  pre: (props) => (
    <pre
      {...props}
      className="overflow-x-auto rounded-xl border border-black/8 bg-[#171717] p-4 dark:border-white/14"
    />
  ),
  a: ({ href = "", children, ...props }) => {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
  img: MdxImage,
  // Markdown wraps a lone image in a <p>; unwrap it here since <figure> can't nest inside <p>.
  p: ({ children }) => {
    const childArray = Children.toArray(children);
    const isSoleImage =
      childArray.length === 1 &&
      isValidElement(childArray[0]) &&
      childArray[0].type === MdxImage;

    return isSoleImage ? children : <p>{children}</p>;
  },
};
