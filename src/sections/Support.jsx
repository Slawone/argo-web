import { ArgoChat, ArgoForm, ArgoStorage } from "@/ui";

export const Support = () => {
  return (
    <section className="relative section-border max-w-7xl mx-auto">
      {/* <h3 className="text-color absolute">
        <span className="title-color">
          Расширенная поддержка без лишних затрат.
        </span>{" "}
        Управление через контроль состояния и аналитику инфраструктуры в едином
        интерфейсе.
      </h3> */}
      <div className="grid md:grid-cols-3 place-items-center font-sans text-color">
        <div className="border-b border-black/8 dark:border-white/14 md:border-b-0 md:border-r px-4 py-5">
          <ArgoStorage />
          <p className="">Визуализация состояния оборудования и нагрузки</p>
        </div>
        <div className="border-b border-black/8 dark:border-white/14 md:border-b-0 md:border-r px-4 py-5">
          <ArgoForm />
          <p className="">Управление через личные кабинеты</p>
        </div>
        <div className="border-b border-black/8 dark:border-white/14 md:border-b-0 px-4 py-5">
          <ArgoChat />
          <p className="">
            Поддержка в режиме реального времени{" "}
            <span className="title-color">реальными</span> инженерами
          </p>
        </div>
      </div>
    </section>
  );
};
