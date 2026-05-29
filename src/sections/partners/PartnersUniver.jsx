import Image from "next/image";
import { ExternalLink } from "lucide-react";

const images = [
  {
    source: "/partnersList/yagpt.svg",
    alt: "yagpt",
  },
  {
    source: "/partnersList/openai.svg",
    alt: "openai",
  },
  {
    source: "/partnersList/deepseek.svg",
    alt: "deepseek",
  },
  {
    source: "/partnersList/qwen.svg",
    alt: "qwen",
  },
  {
    source: "/partnersList/yogo.svg",
    alt: "yogo",
  },
  {
    source: "/partnersList/tencent.svg",
    alt: "tencent",
  },
  {
    source: "/partnersList/giga.svg",
    alt: "giga",
  },
  {
    source: "/partnersList/llama.svg",
    alt: "llama",
  },
  {
    source: "/partnersList/loading.svg",
    alt: "loading",
  },
];

export const PartnersUniver = () => {
  return (
    <section className="relative page-container section-border font-sans font-light text-color">
      <div className="section-border grid md:grid-cols-[8fr_4fr]">
        <div className="section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14 flex flex-col items-start gap-5">
          <div className="text-[12px] md:text-sm text-[#00B6CC] border rounded-full px-4 py-2 uppercase">
            Кейсы
          </div>
          <p className="text-color font-light max-w-150">
            <span className="title-color">Мощный канал дистрибуции</span>{" "}
            формирует необходимую инфраструктуру для масштабирования наших
            решений, обеспечивая бесшовную интеграцию на всех уровнях. Для нашей
            команды важно иметь открытость взаимодействия и чёткие правила
            работы в канале.
            <a
              href="https://companies.rbc.ru/news/TiiPfn6xFB/kak-ustroena-it-distributsiya-v-rossii/"
              className=""
              target="_blank"
            >
              <ExternalLink
                width={18}
                height={18}
                className="inline ml-1 -mt-1 text-black dark:text-white"
              />
            </a>
          </p>
        </div>
        <div className="section-py px-4 md:flex md:justify-center">
          <Image src="/partners/iser.svg" alt="" width={308} height={230} />
        </div>
      </div>
      <div className="section-border py-5 font-sans font-light text-base md:text-[28px] flex items-center justify-center gap-5">
        <p className="text-color">
          <span className="title-color">Технологии</span>
        </p>
        <Image
          src="/partners/aiargo.svg"
          alt=""
          width={120}
          height={50}
          className="mt-2"
        />
      </div>
      <div className="section-border grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-black/8 dark:divide-white/14 md:[&>*:nth-child(3n)]:border-r-0">
        {images.map((item, index) => (
          <div key={index} className="flex justify-center py-10">
            <Image
              src={item.source}
              alt={item.alt}
              width={
                item.source === "/partnersList/yogo.svg" ||
                item.source === "/partnersList/loading.svg"
                  ? 50
                  : 110
              }
              height={50}
              className=""
            />
          </div>
        ))}
      </div>
      <div className="section-border section-py font-sans font-light text-base md:text-[28px] flex justify-center gap-3">
        <p className="text-color">
          <span className="title-color">Работа</span> с университетами
        </p>
      </div>
      <div className="section-border font-sans font-light text-base grid md:grid-cols-[2fr_8fr] items-center">
        <div className="px-4 section-py md:border-r border-black/8 dark:border-white/14">
          <Image
            src={"/partners/mirea.svg"}
            alt="РТУ МИРЭА"
            width={147}
            height={95}
            className=""
          />
        </div>
        <div className="px-4 section-py">
          <p className="max-w-190">
            <span className="title-color">ARGO.TECH</span> — российская
            компания, которая создает программные комплексы хранения и решений
            на базе искусственного интеллекта.{" "}
            <a
              href="https://www.mirea.ru/mediapage/press-service/argo-tech-i-rtu-mirea-obyavili-o-sozdanii-sovmestnogo-proekta/?ysclid=mpnp8vpcje293691526"
              className="title-color"
              target="_blank"
            >
              РТУ МИРЭА
            </a>{" "}
            — технологический ВУЗ России. ARGO.TECH и МИРЭА запустили совместный
            проект <span className="title-color">ООО «ЦТТ МИРЭА»</span>,
            специализирующийся на разработке и производстве систем для хранения,
            обработки и передачи данных.
          </p>
        </div>
      </div>
      <div className="section-border relative font-sans font-light text-base grid md:grid-cols-2">
        <span className="title-color absolute">Совместная</span> разработка и тестирование программных продуктов.
        <Image
            src={"/partners/teamdev.svg"}
            alt="РТУ МИРЭА"
            width={147}
            height={95}
            className="absolute left-1/2 -translate-x-1/2 "
        />
        <div className="h-45"></div>
        <div className="h-45"></div>
      </div>
      <div className="section-border font-sans font-light text-base grid md:grid-cols-[2fr_8fr] items-center">
        <div className="px-4 section-py md:border-r border-black/8 dark:border-white/14">
          <Image
            src={"/partners/mei.svg"}
            alt="МЭИ"
            width={148}
            height={67}
            className=""
          />
        </div>
        <div className="px-4 section-py">
          <p className="max-w-190">
            <span className="title-color">НИУ МЭИ</span> — ведущий вуз России в области энергетики, электротехники,
            радиотехники, электроники и информационных технологий. Между НИУ МЭИ
            и ARGO.TECH налажена кооперация в области разработки прикладных
            решений на базе искусственного интеллекта в различных областях
            промышленности.
          </p>
        </div>
      </div>
    </section>
  );
};
