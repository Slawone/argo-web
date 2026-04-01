import { FileText, ChevronRight } from "lucide-react";

export default function DocumentsPage() {
  return (
    <section className="font-sans py-30 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-[20px] md:text-[45px] uppercase title-color font-medium mb-7.5">
          {"Документы ооо “арго технолоджи ист”"}
        </h1>

        <p className="font-light text-[16px] md:text-[20px] text-color border-b border-b-black/8 dark:border-b-white/14 pb-2 mb-7.5">
          Последнее обновление 12 января 2026
        </p>

        <p className="font-light text-[16px] md:text-[20px] text-color mb-7.5">
          Обращаем ваше внимание, что на данной странице размещены основные
          документы. В случае отсутствия требуемого документа в представленном
          перечне, вы можете направить официальный запрос по электронной почте:
          info@argo.tech. Мы обработаем ваш запрос и предоставим запрашиваемые
          материалы в кратчайшие сроки.
        </p>

        <ul className="border border-black/8 dark:border-white/14 rounded-2xl">
          <li className="flex items-center justify-between text-color font-light pl-4 border-b border-b-black/8 dark:border-b-white/14 py-1 md:py-0">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} className="shrink-0" />
              Реквизиты Арго Технолоджи Ист
            </span>
            <a
              className="py-5 px-5"
              href="/docs/Арго_Реквизиты__2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>
          <li className="flex items-center justify-between text-color font-light pl-4 border-b border-b-black/8 dark:border-b-white/14 py-1 md:py-0">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} className="shrink-0" />
              Карточка записи реестра Арго Технолоджи Ист (№5850 от 20.09.2019)
            </span>
            <a
              className="py-5 px-5"
              href="https://reestr.digital.gov.ru/reestr/307200/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>
          <li className="flex items-center justify-between text-color font-light pl-4 border-b border-b-black/8 dark:border-b-white/14 py-1 md:py-0">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} className="shrink-0" />
              Карточка записи реестра Арго Технолоджи Ист (№31727 от 26.01.2026)
            </span>
            <a
              className="py-5 px-5"
              href="https://reestr.digital.gov.ru/reestr/6130221/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>
          <li className="flex items-center justify-between text-color font-light pl-4 border-b border-b-black/8 dark:border-b-white/14 py-1 md:py-0">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} className="shrink-0" />
              Свидетельство о государственной регистрации программы для ЭВМ
              (2017618991)
            </span>
            <a
              className="py-5 px-5"
              href="/docs/Данные_о_наличии_исключительных_прав_на_программное_обеспечение.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>
          <li className="flex items-center justify-between text-color font-light pl-4 border-b border-b-black/8 dark:border-b-white/14 py-1 md:py-0">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} className="shrink-0" />
              Политика обработки персональных данных
            </span>
            <a
              className="py-5 px-5"
              href="/docs/Политика_о_защите,_хранении,_обработке_и_передаче_персональных_данных.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>
          <li className="flex items-center justify-between text-color font-light px-4 border-b border-b-black/8 dark:border-b-white/14 py-5">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} className="shrink-0" />
              Коды видов деятельности по приказу Минцифры от 11.05.2023 № 449:
              Основной ОКВЭД: 26.01
            </span>
          </li>
          <li className="flex items-center justify-between text-color font-light pl-4 border-b border-b-black/8 dark:border-b-white/14 py-1 md:py-0">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} className="shrink-0" />
              Информация о реализуемых продуктах, оказываемых услугах или
              работах
            </span>
            <a
              className="py-5 px-5"
              href="/docs/Информация_о_реализуемых_продуктах,_оказываемых_услугах_или_работах.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>

          <li className="flex items-center justify-between text-color font-light pl-4 border-b border-b-black/8 dark:border-b-white/14 py-1 md:py-0">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} className="shrink-0" />
              Достоверная информация о стоимости товаров, работ, услуг с учётом
              соблюдения требований законодательства РФ
            </span>
            <a
              className="py-5 px-5"
              href="/docs/Достоверная_информация_о_стоимости_Прайс_Лист_открытый_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>

          <li className="flex items-center justify-between text-color font-light pl-4 py-1 md:py-0">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} className="shrink-0" />
              Описание технологического стека: используемые языки
              программирования, фреймворки, ПО
            </span>
            <a
              className="py-5 px-5"
              href="/docs/Описание_технологического_стека_используемые_языки_программирования.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
