import Image from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components";
import {
  StorageSlogan,
  PartnerLogos,
  PartnerInfo,
  PartnerSplit,
  Contact,
} from "@/sections";
import { iscraVariants, ogImage } from "@/config";
import { cn } from "@/utils";

export const metadata = {
  title: "СХД АРГО — реестр №5850, для госзаказчиков и импортозамещения",
  description:
    "Блочная СХД с возможностью объединения до 4 кластеров (8 контроллеров) под единым управлением. Кэширование L2ARC, снимки, репликация, дедупликация. В реестрах Минцифры и Минпромторга.",
  alternates: {
    canonical: "/storage/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/storage/",
    title: "СХД АРГО — реестр №5850, для госзаказчиков и импортозамещения",
    description:
      "Блочная СХД с возможностью объединения до 4 кластеров (8 контроллеров) под единым управлением. Кэширование L2ARC, снимки, репликация, дедупликация. В реестрах Минцифры и Минпромторга.",
    images: [ogImage("storage")],
  },
};

const links = {
  engineering: {
    href: "https://tadviser.com/index.php/Project:United_Shipbuilding_Corporation_%28USC%29_%28Argo.Tech_Storage_Software_Storage_Complex%29?ysclid=mvs3k6vj1g665177612",
    external: true,
  },
  iscra: {
    href: "https://www.tadviser.ru/index.php/Проект:Объединенная_судостроительная_корпорация_%28ОСК%29_%28Argo.Tech_Storage_Программный_комплекс_хранения_данных%29?ysclid=mvs3kzybel396231950",
    external: true,
  },
  partners: { href: "/storage/iscrastorage/" },
  s3: { href: "/storage/s3storage/" },
};

const splitClassName = "md:grid-cols-[747fr_523fr] xl:text-[26.5px] xl:min-h-68.75";
const textClassName = "font-light leading-8.25";
const linkedCellClassName = "relative xl:pr-18";

const cardLinkClassName =
  "absolute right-4 top-4 xl:right-6.5 xl:top-11.5 title-color transition-opacity hover:opacity-70";

const CardLink = ({ link, label }) =>
  link.external ? (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cardLinkClassName}
    >
      <SquareArrowOutUpRight width={20} height={20} />
    </a>
  ) : (
    <Link href={link.href} aria-label={label} className={cardLinkClassName}>
      <SquareArrowOutUpRight width={20} height={20} />
    </Link>
  );

const Diagram = ({ name, width, height, alt, className }) => (
  <>
    <Image
      src={`/storage/${name}-light.svg`}
      width={width}
      height={height}
      alt={alt}
      className={cn("dark:hidden h-auto max-w-full", className)}
    />
    <Image
      src={`/storage/${name}-dark.svg`}
      width={width}
      height={height}
      alt={alt}
      className={cn("hidden dark:block h-auto max-w-full", className)}
    />
  </>
);

export default function Storage() {
  const { logos } = iscraVariants;

  return (
    <main className="page-iscra font-sans bg-white dark:bg-black">
      <Breadcrumbs className="page-container pt-2 mb-5 font-light text-color" />
      <StorageSlogan
        left={{ title: "Сохраняй своё", text: "это не просто слоган. Это позиция." }}
        right={{
          title: (
            <>
              Российская
              <br className="hidden lg:inline" /> инженерия
            </>
          ),
          text: "Ваши данные должны принадлежать вам, находиться под вашим контролем и работать на вашей инфраструктуре.",
        }}
      />
      <PartnerLogos items={logos} />
      <PartnerSplit
        hidePlus
        gridClassName={splitClassName}
        rightClassName={linkedCellClassName}
        left={
          <p className={textClassName}>
            <span className="title-color font-normal">ARGO.TECH</span> разрабатывает не просто
            решение для хранения данных. Наша команда создает среду, встроенную в файловую
            систему, которая позволяет управлять хранением на уровне ядра: с полным контролем над
            каждым механизмом и каждым свойством. Это не надстройка. Это архитектура.
          </p>
        }
        right={
          <>
            <p className={textClassName}>
              Мы — первая инженерная организация, которая поставила цель не просто разработать
              систему хранения, <br className="hidden xl:inline" /> а изменить рынок хранения
              <br className="hidden xl:inline" /> в России.
            </p>
            <CardLink link={links.engineering} label="Подробнее об инженерной организации" />
          </>
        }
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-medium uppercase">Многоконтроллерность:</span>{" "}
          Повышает отказоустойчивость
        </span>
      </PartnerInfo>
      <PartnerSplit
        hidePlus
        gridClassName={splitClassName}
        rightClassName={linkedCellClassName}
        left={
          <p className={textClassName}>
            Широкая и гарантированная совместимость. Наша команда и технологические партнёры постоянно тестируют и проверяют совместимость как с международными программными продуктами, так и с решениями из реестра Минцифры. Мы гарантируем работу со всем спектром программного обеспечения.
          </p>
        }
        right={
          <>
            <p className={textClassName}>
              <span className="title-color font-normal">ISCRA</span> благодаря архитектурному
              подходу опережает по производительности не только российские аналоги, но и
              зарубежные решения. Это не магия — это технологии, которые применяются в каждом
              решении.
            </p>
            <CardLink link={links.iscra} label="Подробнее об ISCRA" />
          </>
        }
      />
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-medium">Вся разработка в России.</span> Нет
          зависимости, нет риска отзыва поддержки, нет риска «отключения» продукта.
        </span>
      </PartnerInfo>
      <PartnerSplit
        hidePlus
        gridClassName="md:grid-cols-[424fr_846fr] xl:min-h-70.25"
        cellClassName="flex items-center justify-center xl:p-0"
        left={
          <Diagram
            name="management"
            width={350}
            height={218}
            alt="Схема защищённого управления: пользователь и ARGO-поддержка"
          />
        }
        right={
          <Diagram
            name="iops"
            width={647}
            height={197}
            alt="Схема Active/Active: Storage с миллионом IOPS"
          />
        }
      />
      <div className="-mt-px">
        <PartnerSplit
          hidePlus
          gridClassName="md:grid-cols-[424fr_846fr] xl:text-[26.5px] xl:min-h-64.5"
          left={
            <p className={textClassName}>
              Защищённый интерфейс управления — это основа.
              <br className="hidden xl:inline" /> Мы делаем его интуитивным
              <br className="hidden xl:inline" /> и понятным, сохраняя безопасность даже в
              сложных enterprise-решениях.
            </p>
          }
          right={
            <p className={textClassName}>
              Управление на уровне файловой системы и низового программного слоя
              <br className="hidden xl:inline" /> (low-level layer) позволяет кастомизировать
              конфигурацию под каждого партнёра с индивидуальной маршрутизацией и синхронизацией
              компонентов. Результат: независимость от производителя, предсказуемое поведение
              системы и защита данных при сложных отказах.
            </p>
          }
        />
      </div>
      <PartnerInfo textClassName="max-w-260">
        <span className="xl:text-[30px]">
          <span className="title-color font-medium uppercase">Многоконтроллерность:</span>{" "}
          Повышает отказоустойчивость
        </span>
      </PartnerInfo>
      <PartnerSplit
        hidePlus
        gridClassName={splitClassName}
        rightClassName={linkedCellClassName}
        left={
          <p className={textClassName}>
            <span className="title-color font-normal">ARGO.TECH</span> ведёт прямые переговоры со
            всеми российскими производителями, участвует в разработке чипов и микропроцессоров,
            консультирует ведущие университеты и сотрудничает с R&amp;D-подразделениями для
            создания национальной платформы хранения данных.
          </p>
        }
        right={
          <>
            <p className="title-color font-light leading-8.25">
              Программный комплекс хранения данных (СХД АРГО) с гибкой архитектурой (Node
              Appliance), совместимый с оборудованием российских производителей ISCRA STORAGE
              (Intellectual Scalable Clusterised Reliable Appliance)
            </p>
            <CardLink link={links.partners} label="Подробнее об ISCRA STORAGE" />
          </>
        }
      />
      <div className="pt-10 xl:pt-12.75">
        <PartnerSplit
          hidePlus
          gridClassName={splitClassName}
          rightClassName={linkedCellClassName}
          left={
            <p className={textClassName}>
              Программное решение для тех, кто устал от навязанных облачных рамок. S3 ARGO STORAGE
              даёт широкий спектр функций без обязательного ежемесячного платежа. Объектное
              хранение без облачной зависимости, на высокоскоростных серверах из реестра
              Минпромторга.
            </p>
          }
          right={
            <>
              <p className="title-color font-light leading-8.25">
                Программный комплекс объектного хранения, совместимый с оборудованием российских
                производителей ARGO SIII (Secure. Immutable. Intelligent. Infrastructure.)
              </p>
              <CardLink link={links.s3} label="Подробнее об ARGO SIII" />
            </>
          }
        />
      </div>
      <div className="pt-10 xl:pt-20" />
      <Contact source="СХД АРГО" />
    </main>
  );
}
