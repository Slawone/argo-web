import { TextGrid } from "../TextGrid";
import { cn } from "@/utils";

export const PartnerTextGrid = ({ items, titleClassName = "title-color", labelClassName, cellClassName }) => (
  <TextGrid
    items={items}
    titleClassName={cn(titleClassName, "xl:mb-2.5 xl:leading-5.5")}
    cellClassName={cn("xl:px-9.25 xl:pt-7.25 xl:pb-8", cellClassName)}
    labelClassName={cn("xl:text-[20.5px] xl:leading-6 xl:whitespace-pre", labelClassName)}
    className={items.length % 2 ? "max-md:border-b!" : "border-b!"}
  />
);
