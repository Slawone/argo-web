import Image from "next/image";

export const PartnersWork = () => {
  return (
    <section className="relative page-container section-border font-sans font-light text-color">
      <h3 className="mx-4 text-center mt-5 text-base md:text-xl md:absolute md:w-150 lg:w-250 md:left-1/2 md:-translate-x-1/2 md:mt-7">
        <span className="title-color">Мы работаем</span> с технологическими
        партнёрами <br /> по прозрачной лицензионной модели, обеспечивая доступность
        наших решений через каналы широкой дистрибуции.
      </h3>
      <div className="grid md:grid-cols-2 text-center">
        <div className="px-4 py-15 flex flex-col md:items-center gap-2 md:gap-5 md:pt-30 lg:pt-40">
          <div className="h-[239px]">
            <Image src="/partnersWork/ai.svg" width={297} height={207} alt="" />
          </div>
          <p className="text-left">
            Мы открыты к взаимодействию с партнерами и заказчиками и предлагаем <span className="title-color">полный цикл услуг</span> по подбору технологического партнера и выбору оптимального решения - от анализа потребностей до запуска системы. 
          </p>
        </div>
        <div className="border-black/8 dark:border-white/14 md:border-r md:border-l px-4 flex flex-col md:items-center gap-2 md:gap-5 md:pt-30 lg:pt-40">
          <div className="h-[239px]">
            <Image
              src="/partnersWork/chat.svg"
              width={352}
              height={239}
              alt=""
            />
          </div>
          <p className="text-left mb-5">
            <span className="title-color">Поддержка</span> при подборе решения  от направления до архитектуры, от выбора до инсталляции. Мы не просто продаем решения, наша команда сопровождает вас на каждом этапе, наша цель - обеспечить идеальное соответствие решения вашим бизнес задачам и технической инфраструктуре. 
          </p>
        </div>
      </div>
    </section>
  );
};
