import Image from "next/image";
import Link from "next/link";

export const PartnerLogos = ({ items }) => {
  return (
    <section className="page-container px-4 py-8 md:py-12">
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-x-8 lg:gap-x-12.75 gap-y-6">
        {items.map((item, index) => {
          const alt = item.href ? "" : (item.label ?? "");
          const imageClassName = `h-auto ${item.className ?? ""}`;
          const image = item.srcLight ? (
            <>
              <Image
                src={item.srcLight}
                width={item.width}
                height={item.height}
                alt={alt}
                className={`dark:hidden ${imageClassName}`}
              />
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={alt}
                className={`hidden dark:block ${imageClassName}`}
              />
            </>
          ) : (
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt={alt}
              className={imageClassName}
            />
          );

          return (
            <li
              key={index}
              className="flex items-center justify-center max-md:nth-[n+3]:hidden"
            >
              {item.href && item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-full flex justify-center md:hover:scale-105 transition-transform"
                >
                  {image}
                </a>
              ) : item.href ? (
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className="w-full flex justify-center md:hover:scale-105 transition-transform"
                >
                  {image}
                </Link>
              ) : (
                image
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
