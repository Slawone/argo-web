import { TextGrid } from "../TextGrid";
import { cn } from "@/utils";

// Блок 2×2 с карточками «заголовок + текст» по макету страниц Гравитона.
// Переносы строк задаются в тексте через \n и работают с ширины xl.
export const GravitonTextGrid = ({ items, titleClassName = "title-color" }) => (
  <TextGrid
    items={items}
    titleClassName={cn(titleClassName, "xl:mb-2.5 xl:leading-5.5")}
    cellClassName="xl:px-9.25 xl:pt-7.25 xl:pb-8"
    labelClassName="xl:text-[20.5px] xl:leading-6 xl:whitespace-pre"
    className="border-b!"
  />
);
