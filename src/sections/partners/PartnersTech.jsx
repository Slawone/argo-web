import Image from "next/image";
import { ExternalLink } from "lucide-react";

const images = [
  {
    source: "/partnersList/graviton.svg",
    alt: "graviton",
    link: "https://graviton.ru/catalog/servery-i-khranenie-dannykh/skhd/skhd-graviton-skh424i24bm-ar/",
  },
  {
    source: "/partnersList/norsi.svg",
    alt: "norsi",
    link: "https://servers.nt.ru/catalog/shd/argo-tech-/dvukhkontrollernaya-sistema-khraneniya-dannykh-tiara-a4/?ysclid=mpnp5ueewy708705695",
  },
  {
    source: "/partnersList/depop.svg",
    alt: "depop",
    link: "https://www.depo.ru/catalog/sistemy-khraneniya-dannykh/",
  },
  {
    source: "/partnersList/sutinet.svg",
    alt: "sutinet",
    link: "https://utinet.ru/?ysclid=mpnp6iafom625954926",
  },
  {
    source: "/partnersList/loading.svg",
    alt: "loading",
  },
  {
    source: "/partnersList/loading.svg",
    alt: "loading",
  },
];

export const PartnersTech = () => {
  return (
    <section className="page-container">
      <div className="section-border grid md:grid-cols-[8fr_4fr]">
        <div className="section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14 flex items-center">
          <p className="text-color font-light">
            Мы понимаем: ваше оборудование уникально как и задачи, которые оно решает. <span className="title-color">Наши партнеры</span> используют собственные технические архитектуры со специфическими возможностями, и мы создаем для них пространство индивидуализированных решений. <span className="title-color">Гарантируем сохранность инвестиций:</span> ваши системы будут эффективно работать сегодня и масштабироваться завтра. <a href="https://companies.rbc.ru/news/SKdBJAIQa1/5-pravil-strategicheskogo-partnerstva-s-liderami-tehnologicheskih-izmenenij/" className="" target="_blank">
              <ExternalLink width={18} height={18} className="inline -mt-1 text-black dark:text-white" />
            </a>
          </p>
        </div>
        <div className="section-py px-4 md:flex md:justify-center">
          <Image src={'/partners/emulex.svg'} width={274} height={174} alt="" />
        </div>
      </div>
      <div className="section-border section-py font-sans font-light text-base md:text-[28px] flex justify-center gap-3">
        <Image
          src="/partnersList/union.svg"
          alt="union logo"
          width={30}
          height={30}
        />
        <p className="text-color">
          <span className="title-color">Технологические</span> партнерства
        </p>
      </div>
      <div className="section-border grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-black/8 dark:divide-white/14 md:[&>*:nth-child(3n)]:border-r-0">
        {images.map((item, index) => (
          <div key={index} className="flex justify-center py-10">
            <a href={item.link} className="flex items-center" target="_blank">
              <Image
                src={item.source}
                alt={item.alt}
                width={item.source === "/partnersList/loading.svg" ? 40 : 110}
                height={50}
              />
            </a>
          </div>
        ))}
      </div>
      <div className="section-border grid md:grid-cols-2">
        <div className="text-color font-light px-4 py-5 border-black/8 dark:border-white/14 md:border-r">
          <div className="md:flex justify-center mb-5 h-[176px]">
            <Image src={"/partners/software.svg"} width={374} height={135} alt="" />
          </div>

          <p className="">
            Гарантийная и сервисная поддержка производится инженерами <span className="title-color">ARGO.TECH</span> и сервисными службами партнёров. Срок предлагаемых пакетов гарантийной поддержки может равняться 1, 3, 5, 10 лет и может быть расширен или продлен при активной сервисной поддержке.
          </p>
        </div>

        <div className="text-color font-light px-4 py-5">
          <div className="md:flex justify-center mb-10 md:mb-5 h-[176px]">
            <Image src={"/partners/support.svg"} width={359} height={176} alt="" />
          </div>

          <p className="">
            <span className="title-color">Наши продукты</span> разработаны в России и имеют возможность поставки и в страны ОПЕК+.  Выбирая наши решения, клиенты из дружественных стран получают не просто продукт, а комплексную систему поддержки на всех этапах - от внедрения до эксплуатации с учетом: международных стандартов качества и безопасности. 
          </p>
        </div>
      </div>
    </section>
  );
};
