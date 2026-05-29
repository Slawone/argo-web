import Image from "next/image";
import { ExternalLink } from "lucide-react";

const images = [
  {
    source: "/partnersList/basealt.svg",
    alt: "basealt",
  },
  {
    source: "/partnersList/rosa.svg",
    alt: "rosa",
  },
  {
    source: "/partnersList/gorizont.svg",
    alt: "gorizont",
  }, 
  {
    source: "/partnersList/arena.svg",
    alt: "arena",
  },
  {
    source: "/partnersList/zu1rt.svg",
    alt: "zu1rt",
  },
  {
    source: "/partnersList/redos.svg",
    alt: "redos",
  },
  {
    source: "/partnersList/space.svg",
    alt: "space",
  },
  {
    source: "/partnersList/orion.svg",
    alt: "orion",
  },
  {
    source: "/partnersList/loading.svg",
    alt: "loading",
  },
];

export const PartnersDigital = () => {
  return (
    <section className="page-container">
      <div className="section-border grid md:grid-cols-[8fr_4fr]">
        <div className="section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14 flex flex-col items-start gap-5">
          <div className="text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase">
            Кейсы
          </div>
          <p className="text-color font-light">
            Производитель систем хранения данных{" "}
            <span className="title-color">ARGO.TECH</span> и разработчик
            операционных систем «НТЦ ИТ РОСА» провели тестирование совместимости
            своих решений. Платформа виртуализации была подключена к системе
            хранения данных <span className="title-color">ARGO.TECH</span> и
            успешно прошла проверку корректной совместной работы с российским
            оборудованием и программным обеспечением. 
            <a href="https://rosa.ru/argo-tech/?ysclid=mpnp7srifo120393484" className="" target="_blank">
              <ExternalLink width={18} height={18} className="inline ml-1 -mt-1 text-black dark:text-white" />
            </a>
          </p>
        </div>
        <div className="section-py px-4 md:flex md:justify-center">
          <Image
          src="/partners/stats.svg"
          alt=""
          width={342}
          height={174}
        />
        </div>
      </div>
      <div className="section-border section-py font-sans font-light text-base md:text-[28px] flex justify-center gap-3">
        <Image
          src="/partnersList/square.svg"
          alt="union logo"
          width={30}
          height={30}
        />
        <p className="text-color">
          <span className="title-color">Цифровые</span> партнерства
        </p>
      </div>
      <div className="section-border grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-black/8 dark:divide-white/14 md:[&>*:nth-child(3n)]:border-r-0">
        {images.map((item, index) => (
          <div key={index} className="flex justify-center py-10">
            <Image
              src={item.source}
              alt={item.alt}
              width={item.source === "/partnersList/rosa.svg" || item.source === "/partnersList/loading.svg" ? 60 : 100}
              height={50}
              className="border"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
