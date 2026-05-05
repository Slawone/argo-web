import { Scaling } from "@/ui/svg";

export const Scale = () => {
  return (
    <section className="page-container section-border">
      <div className="grid md:grid-cols-[4fr_8fr]">
        {/* Левая колонка */}
        <div className="font-light section-py px-4 md:border-r md:border-r-black/8 md:dark:border-white/14">
          <h2
            className="text-base md:text-xl lg:text-[28px] font-light uppercase leading-none title-color sticky top-30 flex flex-col gap-12.5"
          >
            <span>Масштабируй</span>
            <span className="leading-10 text-[#00FF66]">От террабайта <br /> до зеттабайта</span>
          </h2>
        </div>
        {/* Правая колонка */}
        <div className="">
          <p className="px-4 mb-10 leading-7.5 font-light text-sm md:text-lg lg:text-xl text-color border-b border-black/8 md:border-white/14 section-py">
            <span className="title-color">Горизонтальное масштабирование</span> позволяет добавлять узлы хранения по
            мере роста данных, без зависимости от аппаратного производителя
          </p>
          <Scaling className={'w-full'} />
        </div>
      </div>
    </section>
  );
};
