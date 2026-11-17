import Image from "next/image";
import Link from "next/link";
import { ogImage } from "@/config";
import { Contact, PartnerSplit } from "@/sections";
import { cn } from "@/utils";

const title = "Контакты, реквизиты и поддержка | ARGO.TECH";
const description =
  "Телефон, email и адрес ARGO.TECH в Москве. Реквизиты компании, лицензии, центр технической поддержки и форма обратной связи.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/contacts/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech/contacts/",
    title,
    description,
    images: [ogImage("contacts")],
  },
};

const roles = [
  ["Admin/DBA", "7.6%", "66.3%"],
  ["Sysadmin", "20.5%", "42%"],
  ["Architect", "32%", "60%", "#ffd271"],
  ["User", "68.5%", "45%", "#31f1ff"],
  ["Engineer SAN", "67%", "68%"],
  ["DevOps/SRE", "80%", "52.6%"],
  ["Partner", "93%", "36%", "#d7a2ff"],
];

const borderColor = "border-[#d4d4d4] dark:border-[#1f1f1f]";
const heroImagePosition = "absolute left-1/2 top-[49.3%] -translate-1/2";
const statement =
  "py-[clamp(1.5rem,4vw,3.5rem)] text-center text-[length:clamp(1.25rem,2.1vw,1.875rem)] font-light leading-[1.15] xl:py-12.75 xl:leading-[33.2px]";
const detailsText = "text-[length:clamp(1rem,1.8vw,1.5rem)] leading-[1.38]";
const cellPadding =
  "px-4 md:px-[clamp(1rem,2.6vw,2.3125rem)] md:pt-[clamp(1rem,2.1vw,1.8125rem)] md:pb-[clamp(1rem,2.6vw,2.3125rem)]";

const details = [
  [
    "Полное наименование организации",
    "Общество с ограниченной ответственностью ”АРГО ТЕХНОЛОДЖИ ИСТ”",
  ],
  ["Сокращенное наименование организации", "ООО “АРГО ТЕХНОЛОДЖИ ИСТ”"],
  [
    "Почтовый адрес организации",
    "111250, г. Москва, ул. Красноказарменная, дом 9, а/я 45",
  ],
  [
    "Юридический адрес организации",
    "111250, город Москва, проезд Завода Серп и Молот, дом 6, корпус 1, эт. 7, комн. 709",
  ],
  ["Контактные телефоны организации", "Тел./факс. 8 (499) 430-00-54"],
  [
    <>
      Руководитель организации <br /> (должность, Ф.И.О.)
    </>,
    <>
      Генеральный директор
      <br />
      Кучинский Андрей Владимирович
    </>,
  ],
  ["Главный бухгалтер (Ф.И.О.)", "Иванова Людмила Николаевна"],
  ["ОГРН", "1165007052583"],
  ["ОКПО", "05460841"],
  ["ИНН", "5010052504"],
  ["КПП", "772201001"],
  ["ОКТМО", "46718000"],
  ["Расчетный счет №", "40702810302690001853"],
  ["Банк", "АО “АЛЬФА-БАНК”, г. Москва"],
  ["Кор/счет банка №", "30101810200000000593"],
  ["БИК", "044525593"],
  [
    "Основной код ОКВЭД",
    "62.01 “Разработка компьютерного программного обеспечения”",
  ],
];

export default function ContactsPage() {
  return (
    <main className="page-iscra bg-white font-sans text-[#1f1f1f] dark:bg-black dark:text-[#ededed]">
      <div className="page-container">
        <h1 className="sr-only">Контакты ARGO.TECH</h1>
        <div
          className={cn(
            "relative isolate aspect-[1.55] overflow-hidden border-y md:aspect-1270/718",
            borderColor,
          )}
          aria-hidden="true"
        >
          <div
            className={cn(
              heroImagePosition,
              "w-[88%] [&_img]:h-auto [&_img]:w-full",
            )}
          >
            <Image
              src="/contacts/orbit-light.svg"
              alt=""
              width={1117}
              height={1118}
              unoptimized
              className="dark:hidden"
            />
            <Image
              src="/contacts/orbit-dark.svg"
              alt=""
              width={1125}
              height={1118}
              unoptimized
              className="hidden dark:block"
            />
          </div>
          <div
            className={cn(
              heroImagePosition,
              "w-[7.1%] dark:w-[8%] [&_img]:h-auto [&_img]:w-full",
            )}
          >
            <Image
              src="/contacts/symbol-light.svg"
              alt=""
              width={90}
              height={90}
              unoptimized
              className="dark:hidden"
            />
            <Image
              src="/contacts/symbol-dark.svg"
              alt=""
              width={102}
              height={102}
              unoptimized
              className="hidden dark:block"
            />
          </div>
          {roles.map(([role, left, top, accent]) => (
            <span
              key={role}
              className={cn(
                "absolute left-[clamp(10%,var(--role-x),90%)] -translate-1/2 rounded-lg bg-white p-[clamp(.125rem,.7vw,.625rem)] text-[clamp(.5rem,1.3vw,1.125rem)] font-light whitespace-nowrap md:left-(--role-x) dark:bg-black",
                accent
                  ? "border-2 border-(--role-accent) shadow-[0_0_.65rem_color-mix(in_srgb,var(--role-accent)_45%,transparent)]"
                  : "border border-[#b8b8b8] dark:border-[#394050]",
              )}
              style={{ "--role-x": left, "--role-accent": accent, top }}
            >
              {role}
            </span>
          ))}
        </div>

        <p className={cn(statement, "text-color")}>
          <strong className="font-medium dark:text-[#ebedf0]">
            ARGO.TECH:
          </strong>{" "}
          на связи 24/7 с вами и вашими данными.
        </p>
        <PartnerSplit
          hidePlus
          className="mx-0! max-w-none!"
          gridClassName="md:grid-cols-2 xl:min-h-67.75 xl:text-xl xl:leading-6"
          cellClassName="text-color font-light xl:pb-8"
          left={
            <>
              <h2 className="mb-5 text-xl font-medium md:text-2xl dark:text-[#fffff1]">
                Экспертиза и вовлеченность
              </h2>
              <p>
                Мы ценим ваше время и доверие.
                <br />
                Оборудование не терпит простоев, а бизнес: задержек.
              </p>
              <p>
                Поэтому мы всегда на связи: проконсультируем по техническим
                нюансам, подберем решение под вашу задачу и останемся на связи,
                даже если вопрос выходит за рамки стандартного договора. Нам не
                важен ваш статус или уровень подготовки, мы говорим на одном
                языке с профессионалами <br className="hidden xl:block" /> и всегда рады помочь новичкам
                разобраться в деталях. Давайте работать вместе.
              </p>
            </>
          }
          right={
            <>
              <h2 className="mb-5 text-xl font-medium md:text-2xl dark:text-[#fffff1]">
                Технический аудит
              </h2>
              <p className="mb-5">
                Программное обеспечение обновляется постоянно и мы не
                исключение. Наш продукт регулярно получает новые версии,
                улучшения и доработки.
              </p>
              <p>
                Но мы понимаем, что иногда сложности могут быть связаны не с
                нами, <br className="hidden xl:block" /> а с внешним фактором. Если Вы столкнулись с ошибкой и не
                можете понять ее источник: оформите заявку. Мы проведем
                диагностику, найдем причину и поможем разобраться.
              </p>
            </>
          }
        />

        <section aria-labelledby="contacts-details">
          <h2
            id="contacts-details"
            className={cn(statement, "xl:mb-1.5 xl:text-[2rem]")}
          >
            НАШИ РЕКВИЗИТЫ
          </h2>
          <dl className={cn("border", borderColor, detailsText)}>
            {details.map(([label, value]) => (
              <div
                className={cn(
                  "not-first:border-t md:grid md:grid-cols-[minmax(180px,23.6%)_minmax(0,1fr)] xl:min-h-25",
                  borderColor,
                )}
                key={label}
              >
                <dt
                  className={cn(
                    "text-color pt-3 pb-1 font-light md:border-r",
                    cellPadding,
                    borderColor,
                  )}
                >
                  {label}
                </dt>
                <dd
                  className={cn("pb-3 font-normal wrap-anywhere", cellPadding)}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <div
            className={cn(
              "-mt-px border px-[clamp(1rem,2.6vw,2.3125rem)] py-[clamp(1rem,3.4vw,3rem)] font-light xl:min-h-57.25",
              borderColor,
              detailsText,
            )}
          >
            <h3 className="font-normal">Свидетельства и лицензии:</h3>
            <p className="text-color">
              Свидетельство о Государственной регистрации программы для ЭВМ
              №2017618991
            </p>
            <p className="text-color">
              Лицензия на ДЕЯТЕЛЬНОСТЬ ПО РАЗРАБОТКЕ И ПРОИЗВОДСТВУ СРЕДСТВ
              ЗАЩИТЫ КОНФИДЕНЦИАЛЬНОЙ ИНФОРМАЦИИ (179-л от 13 августа 2021
              г./Действует с 07.11.2016)
            </p>
          </div>
        </section>

        <p className={cn(statement, "text-color")}>
          <strong className="font-medium dark:text-[#ebedf0]">
            ARGO.TECH:
          </strong>{" "}
          от инженеров, для инженеров
        </p>
        <PartnerSplit
          hidePlus
          className="mx-0! max-w-none!"
          gridClassName="xl:min-h-76.75"
          leftClassName="content-center text-color font-normal xl:leading-8.25"
          rightClassName="flex flex-col justify-between gap-6 text-color text-base md:text-lg xl:text-xl xl:leading-7.5"
          left={
            <>
              <p>
                Не нашли нужной информации?{" "}
                <a className="hover:underline" href="#contact">
                  Напишите нам.
                </a>{" "}
                Расскажем о продуктах, покажем успешные кейсы, обсудим
                партнерство или инвестиции и ответим на любые другие вопросы.
              </p>
              <p className="title-color">Мы всегда открыты к диалогу.</p>
            </>
          }
          right={
            <>
              <p>
                Мы одна из первых команд в России, разработавшая классическую
                систему хранения данных. Наша цель: создать для России
                инструменты для уверенного роста.
              </p>
              <Link
                href="/storage/iscrastorage"
                className="button inline-flex w-full max-w-62.5 items-center justify-center self-start rounded-lg border-[#1f1f1f] bg-[#ededed] text-base text-[#1f1f1f] hover:bg-zinc-200 md:h-11 dark:border-white"
              >
                ISCRA STORAGE
                <Image
                  src="/contacts/product-light.svg"
                  alt=""
                  width={19}
                  height={19}
                  unoptimized
                />
              </Link>
            </>
          }
        />
      </div>
      <Contact
        source="Контакты"
        className="scroll-mt-20 xl:max-w-317.5! xl:pt-0 xl:pb-12"
        gridClassName="xl:grid-cols-[396px_1fr]"
        descriptionClassName="xl:pt-16.25"
      />
    </main>
  );
}
