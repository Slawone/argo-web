import Image from "next/image";
import Link from "next/link";

export const GravitonLogos = ({ count = 5 }) => {
  return (
    <section className="page-container px-4 py-8 md:py-12">
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-x-8 lg:gap-x-12.75 gap-y-6">
        {Array.from({ length: count }, (_, index) => (
          <li
            key={index}
            className="flex items-center justify-center max-md:nth-[n+3]:hidden"
          >
            <Link
              href="/partners/graviton"
              aria-label="Гравитон"
              className="w-full md:hover:scale-105 transition-transform"
            >
              <Image
                src="/graviton/logo.svg"
                width={368}
                height={68}
                alt=""
                className="w-full h-auto invert dark:invert-0"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
