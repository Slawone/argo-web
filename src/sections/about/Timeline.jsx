import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { cn } from "@/utils";
import {
  Help,
  NewVersion,
  Separator_1,
  Separator_2,
  Separator_3,
  Version,
} from "@/ui/svg";

export const Timeline = () => {
  return (
    <section className="section-border page-container section-py relative">
      <div className="hidden md:block absolute left-75 top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-linear-to-b from-pink-500 via-purple-500 to-cyan-500" />
      <Image
        src="/about/start.svg"
        width={36}
        height={36}
        alt=""
        className="hidden md:block absolute left-75 top-0 -translate-x-1/2 invert dark:invert-0"
      />
      <Image
        src="/about/start.svg"
        width={36}
        height={36}
        alt=""
        className="hidden md:block absolute left-75 bottom-0 -translate-x-1/2 invert dark:invert-0"
      />
      <div className="flex flex-col gap-10 px-8">
        <div className="text-color mb-5 md:grid md:grid-cols-[300px_2fr]">
          <div className="mb-5 text-center md:text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Начало пути <br />{" "}
              <span className="title-color">Первые шаги</span>
            </h3>
          </div>
          <div className="flex flex-col gap-5 main-text">
            <p className="relative">
              <span className="title-color">2009</span> – Начало разработки
              собственной архитектуры хранения данныхучастникамми OpenSolaris
              Community и формирование коммерческой версии.
            </p>
            <Image
              src="/about/intel-supermict.svg"
              width={220}
              height={53}
              alt=""
              className="self-center md:mb-20"
            />
            <p className="relative md:mb-20">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2011</span> – (MVP) Создание первой
              версии продукта, на базе решения Illumos.
            </p>
          </div>
        </div>
        <div className="text-color mb-5 md:grid md:grid-cols-[300px_2fr]">
          <div className="mb-5 text-center md:text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Проект <span className="title-color">"Плантон"</span>
            </h3>
          </div>
          <div className="flex flex-col gap-5 main-text">
            <p className="relative md:mb-20">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2015</span> – Инсталляция первого
              импортонезависимого решения хранения на 20PB в России, проект
              «Платон».
            </p>
            <p className="relative md:mb-20">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2016</span> – Внедрение блочного и
              объектного доступа, к файловой системе Zfs.
            </p>
            <p className="relative md:mb-20">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2017</span> – Оптимизация системы
              мониторинга для систем хранения больших видео потоков.
            </p>
          </div>
        </div>
        <div className="text-color mb-5 md:grid md:grid-cols-[300px_2fr]">
          <div className="mb-5 text-center md:text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Опыт <span className="title-color">инсталляций</span>
            </h3>
          </div>
          <div className="flex flex-col gap-5 main-text">
            <p className=" relative">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2018</span> – Создание платформы
              хранения для работы с ИИ-кластерами.
            </p>
            <Image
              src="/about/nvidia.svg"
              width={190}
              height={50}
              alt=""
              className="self-center md:mb-20"
            />
            <p className="mb-5 relative">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2019</span> - Внесение платформы
              хранения в Реестр Минцифры (Система хранения данных АРГО)
              Реестровая запись №5850 от 20.09.2019 (1165007052583).
            </p>
            <div className="flex gap-5 mb-5 md:mb-10">
              <a
                className={cn("main-text button flex-center", "border-[#00B6CC]")}
                href="https://reestr.digital.gov.ru/reestr/307200/"
                target="_blank"
              >
                Реестр
                <ExternalLink width={18} height={18} />
              </a>
              <a
                className={cn("main-text button flex-center", "border-[#00B6CC]")}
                href="https://reestr.fstec.ru/regview2?guid=06d5b959-3bcf-420e-958c-1141ba1fc228"
                target="_blank"
              >
                Фстэк
                <ExternalLink width={18} height={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-color mb-5 md:grid md:grid-cols-[300px_2fr]">
          <div className="mb-5 text-center md:text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
              <span className="title-color">Инновации</span>
            </h3>
          </div>
          <div className="flex flex-col gap-5 main-text">
            <p className="relative md:mb-20">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2022</span> – Развёртывание ИИ-кластера с импортонезависимой системой хранения данных для обработки медицинских данных и исследований в период COVID-19.
            </p>
            <p className="relative">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              Где еще может помочь AI.ARGO
            </p>
            <Image
                src="/about/help.svg"
                width={755}
                height={499}
                alt=""
                className="w-full md:mb-20"
              />
            <p className="relative md:mb-20">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2021</span> – Создание прототипов
              государственных облачных платформ для стран-партнёров (ОПЕК+).
            </p>
            <p className="relative md:mb-20">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2022</span>– Новые партнерства и
              первые внедрения на оборудовании из списка Минпромторга.
            </p>
            <div className="flex items-center gap-5 justify-center flex-wrap mb-5 md:mb-10">
              <Image src="/about/norsi.svg" width={150} height={38} alt="" />
              <Image src="/about/ctt.svg" width={86} height={38} alt="" />
              <Image src="/about/openyard.svg" width={150} height={38} alt="" />
            </div>
            <p>
              Соглашение о сотрудничестве с ведущим Дистрибьютером России
              Treolan (входит в группу «Ланит»)
            </p>
            <div className="flex gap-5 md:mb-20">
              <a
                className={cn("main-text button flex-center", "border-[#00FF66]")}
                href="https://lanit.ru/press/archive/kompaniya-treolan-nachinaet-postavki-produktsii-kompanii-argo-tekhnolodzhi-ist-?ysclid=mpwbwgugs8210241567"
                target="_blank"
              >
                Новость
                <ExternalLink width={18} height={18} />
              </a>
            </div>
            <p className="relative">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2023</span> – Внесение в реестр как
              СХД/ПАК (с оборудованием «Гравитон»). Первые поставки в цифровые
              регионы.Создание ПАК Варя.
            </p>
            <div className="flex items-center gap-5 justify-center flex-wrap mb-5 md:mb-10">
              <Image src="/about/graviton.svg" width={215} height={38} alt="" />
              <Image src="/about/ipdevice.svg" width={215} height={38} alt="" />
            </div>
            <p className="">
              МТС предлагает корпоративным клиентам российские решения с
              хранением от ARGO.TECH в составе ПАК Варя
            </p>
            <div className="flex gap-5 md:mb-20">
              <a
                className={cn("main-text button flex-center", "border-[#00FF66]")}
                href="https://moskva.mts.ru/about/media-centr/soobshheniya-kompanii/novosti-mts-v-rossii-i-mire/2025-06-04/mts-predlozhit-korporativnym-klientam-rossijskie-resheniya-dlya-postroeniya-korporativnoj-it-infrastruktury?ysclid=mpwc2imdmr287522697"
                target="_blank"
              >
                Новость
                <ExternalLink width={18} height={18} />
              </a>
            </div>
            <p className="relative">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2024</span> – Расширение и
              переработка системы мониторинга. Улучшение механизмов
              отказоустойчивости. Внесение в реестр универсального ИИ-решения.
            </p>
            <div className="flex items-center gap-5 justify-center flex-wrap md:mb-20">
              <Image src="/about/loongson.svg" width={215} height={38} alt="" />
              <Image src="/about/amd.svg" width={88} height={88} alt="" />
            </div>
            <p className="relative">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              <span className="title-color">2025</span> – Выделение объектного
              доступа как самостоятельного решения. Альтернативные аппаратные
              платформы. Оптимизация производительности. Новая эра партнерств и
              технологий. Внедрение новых Framework. Создание РБК и Телеграм
              каналов.
            </p>
            <div className="flex items-center gap-5 justify-center flex-wrap">
              <Image src="/about/kraftway.svg" width={215} height={38} alt="" />
              <Image src="/about/bitblaze.svg" width={188} height={38} alt="" />
              <Image src="/about/mirea.svg" width={105} height={75} alt="" />
            </div>
            <p className="mb-5 md:mb-10">
              Содружество с ведущим производственным университетом страны МИРЭА
            </p>
            <div className="flex gap-5 md:mb-20">
              <a
                className={cn("main-text button flex-center", "border-[#00FF66]")}
                href="https://www.mirea.ru/mediapage/press-service/argo-tech-i-rtu-mirea-obyavili-o-sozdanii-sovmestnogo-proekta/?ysclid=mpwc6b0iee787832974"
                target="_blank"
              >
                Новость
                <ExternalLink width={18} height={18} />
              </a>
            </div>
            <div className="flex md:mb-20">
              <Separator_3 className="w-full md:w-3/4" />
            </div>
          </div>
        </div>
        <div className="text-color mb-5 md:grid md:grid-cols-[300px_2fr]">
          <div className="mb-5 text-center md:text-left">
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
              <span className="title-color">2026</span>
            </h3>
          </div>
          <div className="flex flex-col gap-5 main-text">
            <p className="mb-5 md:mb-20 relative">
              <Image
                src="/about/arrow-up.svg"
                width={36}
                height={36}
                alt=""
                className="hidden md:block absolute -left-12.5 -top-1 invert dark:invert-0"
              />
              Новая платформа хранения{" "}
              <span className="title-color">ISCRA</span>. Новая версия решения{" "}
              <span className="title-color">STORAGE</span>. Запуск решения на
              Альтернативных платформах. Новые ИИ-решения в Реестре. Запуск
              продукта <span className="title-color">РЕ:Сурс</span>.
            </p>
            <Image 
              src="/about/ver3.svg"
              width={850}
              height={638}
              alt=""
              className="w-full md:mb-20"
            />
            <p className="">
              Еще больше функциональных возможностей в новой версии{" "}
              <span className="title-color">STORAGE</span>, <br /> будут доступны для
              всех инсталированых систем
            </p>
            {/* <NewVersion className="lg:w-3/4" /> */}
            <Image 
              src="/about/newvers.svg"
              width={860}
              height={348}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
