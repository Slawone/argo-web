import Image from "next/image";

export const PartnersWork = () => {
  return (
    <section className="relative page-container section-border font-sans main-text text-color">
      <h3 className="mx-4 text-center mt-5 text-base md:text-xl lg:text-[28px] md:absolute md:w-150 lg:w-250 md:left-1/2 md:-translate-x-1/2 md:mt-7">
        <span className="title-color">Мы работаем</span> с технологическими
        партнёрами по прозрачной лицензионной модели, обеспечивая доступность
        наших решений через каналы широкой дистрибуции.
      </h3>
      <div className="grid md:grid-cols-3 text-center">
        <div className="px-4 py-5 flex flex-col items-center gap-10 md:pt-30 lg:pt-40">
          <div className="h-[239px]">
            <Image src="/partnersWork/ai.svg" width={297} height={207} alt="" />
          </div>
          <p className="text-left">
            <span className="title-color">Открыты к взаимодействию </span>с
            партнёрами и заказчиками, помогаем в подборе технологического
            партнёра и выборе решения.
          </p>
        </div>
        <div className="border-black/8 dark:border-white/14 md:border-r md:border-l px-4 flex flex-col items-center gap-10 md:pt-30 lg:pt-40">
          <div className="h-[239px]">
            <Image
              src="/partnersWork/chat.svg"
              width={352}
              height={239}
              alt=""
            />
          </div>
          <p className="text-left">
            <span className="title-color">Поддержка</span> при подборе решения
            от направления до архитектуры, от выбора до инсталляции.
          </p>
        </div>
        <div className="px-4 py-5 flex flex-col items-center gap-10 md:pt-30 lg:pt-40">
          <div className="h-[239px]">
            <Image
              src="/partnersWork/schema.svg"
              width={292}
              height={230}
              alt=""
            />
          </div>
          <p className="text-left">
            Мы стремимся сделать наши продукты <span className="title-color">максимально доступными</span> для бизнеса любого масштаба и локации. Для этого сформирована многоступенчатая сеть партнёров и дистрибьюторов.
          </p>
        </div>
      </div>
    </section>
  );
};
