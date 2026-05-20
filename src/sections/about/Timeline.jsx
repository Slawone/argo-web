import Image from "next/image";

export const Timeline = () => {
  return (
    <section className="section-border page-container section-py relative">
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500" />
      <div className="flex flex-col gap-10 px-4">
        <div className="text-color mb-5 md:grid grid-cols-2">
          <div className="mb-5 text-center">
            <h3 className="">Начало пути <span className="title-color">Первые шаги</span></h3>
          </div>
          <div className="flex flex-col gap-5">
            <p className="">
              <span className="title-color">2009</span> – Начало разработки собственной архитектуры хранения данныхучастникамми OpenSolaris Community и формирование коммерческой версии.
            </p>
            <p>
              <span className="title-color">2011</span> – (MVP) Создание первой версии продукта, на базе решения Illumos.
            </p>
          </div>
        </div>
        <div className="text-color mb-5 md:grid grid-cols-2">
          <div className="mb-5 text-center">
            <h3 className="">Проект <span className="title-color">"Плантон"</span></h3>
          </div>
          <div className="flex flex-col gap-5">
            <p className="">
              <span className="title-color">2015</span> – Инсталляция первого импортонезависимого решения хранения на 20PB в России, проект «Платон».
            </p>
            <p>
              <span className="title-color">2016</span> – Внедрение блочного и объектного доступа, к файловой системе Zfs.
            </p>
            <p>
              <span className="title-color">2017</span> – Оптимизация системы мониторинга для систем хранения больших видео потоков.
            </p>
          </div>
        </div>
        <div className="text-color mb-5 md:grid grid-cols-2">
          <div className="mb-5 text-center">
            <h3 className="">Опыт <span className="title-color">инсталляций</span></h3>
          </div>
          <div className="flex flex-col gap-5">
            <p className="">
              <span className="title-color">2018</span> – Создание платформы хранения для работы с ИИ-кластерами.
            </p>
            <p>
              <span className="title-color">2019</span> - Внесение платформы хранения в Реестр Минцифры (Система хранения данных АРГО) Реестровая запись №5850 от 20.09.2019 (1165007052583).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
