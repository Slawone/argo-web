import Image from "next/image";
import { Faq } from "@/sections/Faq";

const Answer = ({ answer, emphasis = [] }) => {
  // Emphasis is editorial data; preserve plain text in the FAQ JSON-LD.
  const parts = emphasis.reduce(
    (parts, phrase) =>
      parts.flatMap((part) =>
        typeof part !== "string"
          ? [part]
          : part.split(phrase).flatMap((text, index) =>
              index
                ? [
                    <strong key={`${phrase}-${index}`} className="font-medium">
                      {phrase}
                    </strong>,
                    text,
                  ]
                : [text],
            ),
      ),
    [answer],
  );
  return <div className="pt-4 pb-3 whitespace-pre-line">{parts}</div>;
};

export const CalculatorFaq = ({ items }) => (
  <div className="py-8 md:py-12.75">
    <Faq
      variants={items.map((item) => ({
        ...item,
        answer: <Answer {...item} />,
      }))}
      className="border-[#ededed] dark:border-[#1d2332]"
      titleClassName="text-[#f005e5] font-light xl:text-[243px] xl:-translate-y-[31.5px]"
      titleCellClassName="border-[#ededed] md:border-r-[#ededed] dark:border-[#1d2332] md:dark:border-[#1d2332]"
      accordionProps={{
        className: "space-y-0",
        itemClassName:
          "border-[#ededed] first:border-t-0 dark:border-[#1d2332] px-5 pt-6.25 pb-8.9 xl:min-h-[90.6px] xl:pr-7.5",
        questionClassName:
          "mb-0 min-w-0 text-[#1f1f1f] dark:text-[#fffff1] text-lg md:text-xl xl:text-[22px] leading-7.5 tracking-[0.66px]",
        answerClassName:
          "text-base leading-6 md:text-lg xl:text-[20.5px] xl:leading-6",
        icon: (
          <span className="flex -rotate-90">
            <Image
              src="/raid-z1/chevron-light.svg"
              width={14}
              height={10}
              alt=""
              className="h-auto dark:hidden"
            />
            <Image
              src="/raid-z3/chevron-dark.svg"
              width={14}
              height={10}
              alt=""
              className="hidden h-auto dark:block"
            />
          </span>
        ),
      }}
    />
  </div>
);
