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
          <li className="flex items-center justify-between text-color font-light pl-4 border-b border-b-black/8 dark:border-b-white/14">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} />
              Коды видов деятельности по приказу Минцифры от 11.05.2023 № 449
            </span>
            <a
              className="py-5 px-5"
              href="/example.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>

          <li className="flex items-center justify-between text-color font-light pl-4 border-b border-b-black/8 dark:border-b-white/14">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} />
              Информация о реализуемых продуктах, оказываемых услугах или
              работах
            </span>
            <a
              className="py-5 px-5"
              href="/example.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>

          <li className="flex items-center justify-between text-color font-light pl-4 border-b border-b-black/8 dark:border-b-white/14">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} />
              Достоверная информация о стоимости товаров, работ, услуг с учётом
              соблюдения требований законодательства РФ
            </span>
            <a
              className="py-5 px-5"
              href="/example.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChevronRight />
            </a>
          </li>

          <li className="flex items-center justify-between text-color font-light pl-4">
            <span className="flex items-center gap-2.5">
              <FileText width={20} height={20} />
              Описание технологического стека: используемые языки
              программирования, фреймворки, ПО
            </span>
            <a
              className="py-5 px-5"
              href="/example.pdf"
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
