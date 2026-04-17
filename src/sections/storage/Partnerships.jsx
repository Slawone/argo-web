import Image from "next/image";
import { Logo } from "@/ui";
import { Partners } from "@/ui/svg";

const images = [
  {
    source: "/partners/rosa.svg",
    alt: "rosa",
  },
  {
    source: "/partners/gorizont.svg",
    alt: "gorizont",
  },
  {
    source: "/partners/arenadata.svg",
    alt: "arenadata",
  },
  {
    source: "/partners/rubackup.svg",
    alt: "rubackup",
  },
  {
    source: "/partners/beresta.svg",
    alt: "beresta",
  },
  {
    source: "/partners/orion.svg",
    alt: "orion",
  },
];

export const Partnerships = () => {
  return (
    <section className="page-container section-border">
      <div className="grid md:grid-cols-2">
        {/* left */}
        <div className="md:border-r md:border-r-black/8 md:dark:border-white/14">
          <div className="">
            <h2 className="text-base md:text-xl lg:text-[28px] font-light uppercase leading-none title-color pt-10 pl-4 pb-5 border-b md:border-b-black/8 md:dark:border-b-white/14">
              Партнерства
            </h2>
          </div>
          <div className="grid grid-cols-2">
            {images.map((item, index) => (
              <div
                key={index}
                className="flex justify-center py-10 border-b odd:border-r border-black/8 dark:border-white/14"
              >
                <Image
                  src={item.source}
                  alt={item.alt}
                  width={110}
                  height={50}
                  className="max-w-full"
                />
              </div>
            ))}
          </div>
          <div className="border-b border-black/8 dark:border-white/14 md:border-0 pl-4 pt-7.5 pb-15">
            <button>Стать партнером</button>
            <button>
              <Logo />
            </button>
          </div>
        </div>
        {/* right */}
        <div className="">
          <div className="">
            Развивая экосистему STORAGE, мы решаем ключевые проблемы конечных
            заказчиков, помогая сделать правильный выбор
          </div>
          <Partners />
        </div>
      </div>
    </section>
  );
};
