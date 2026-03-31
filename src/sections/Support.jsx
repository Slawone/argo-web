import { ArgoChat, ArgoForm, ArgoStorage } from "@/ui";

export const Support = () => {
  return (
    <section className="relative section-border font-sans main-text text-color">
      <h3 className=" mx-4 text-center mt-5 text-base md:text-xl lg:text-[28px] md:absolute md:w-150 lg:w-200 md:left-1/2 md:-translate-x-1/2 md:mt-7">
        <span className="title-color">
          Расширенная поддержка без лишних затрат.
        </span>{" "}
        Управление через контроль состояния и аналитику инфраструктуры в едином
        интерфейсе.
      </h3>
      <div className="grid md:grid-cols-3 text-center">
        <div className="px-4 py-5 flex flex-col items-center md:pt-30 lg:pt-40">
          <ArgoStorage className="w-3/4 h-auto mb-5 md:w-full md:hover:scale-105 transition-all" />
          <p>Визуализация состояния оборудования и нагрузки</p>
        </div>
        <div className="border-black/8 dark:border-white/14 md:border-r md:border-l px-4 flex flex-col items-center md:pt-30 lg:pt-40">
          <ArgoForm className="w-3/4 h-auto mb-5 md:w-full md:hover:scale-105 transition-all" />
          <p>Управление через личные кабинеты</p>
        </div>
        <div className="px-4 py-5 flex flex-col items-center md:pt-30 lg:pt-40">
          <ArgoChat className="w-3/4 h-auto mb-5 md:w-full md:hover:scale-105 transition-all" />
          <p>
            Поддержка в режиме реального времени{" "}
            <span className="title-color">реальными</span> инженерами
          </p>
        </div>
      </div>
    </section>
  );
};
