import Image from "next/image";
import Link from "next/link";

export const PartnerLogos = ({ items }) => {
  return (
    <section className="page-container px-4 py-8 md:py-12">
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-x-8 lg:gap-x-12.75 gap-y-6">
        {items.map((item, index) => {
          const image = (
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.href ? "" : (item.label ?? "")}
              className={`h-auto ${item.className ?? ""}`}
            />
          );

          return (
            <li
              key={index}
              className="flex items-center justify-center max-md:nth-[n+3]:hidden"
            >
              {item.href ? (
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
