import Image from "next/image";
import { Faq } from "../Faq";

const themes = {
  1: {
    accent: "text-[#004ede]",
    border: "border-[#b8b8b8]",
    divider: "md:border-r-[#b8b8b8]",
    question: "dark:text-[#a1a1a1]",
    icon: "/raid-z1/chevron-dark.svg",
  },
  2: {
    accent: "text-[#f005e5]",
    border: "border-[#d4d4d4]",
    divider: "md:border-r-[#d4d4d4]",
    question: "dark:text-white",
    icon: "/raid-z2/chevron-dark.svg",
  },
};

export const RaidZFaq = ({ items, level = 1 }) => {
  const theme = themes[level];
  const variants = items.map((item) => ({
    ...item,
    answer: (
      <div className="pt-4 pb-3">
        {item.answer
          .split(/(write hole)/g)
          .map((part, index) =>
            part === "write hole" ? <em key={index}>{part}</em> : part,
          )}
      </div>
    ),
  }));
  return (
    <div className="py-8 md:py-12.75">
      <Faq
        variants={variants}
        className={`${theme.border} dark:border-[#1d2332]`}
        titleClassName={`${theme.accent} font-light xl:text-[243px] xl:-translate-y-[31.5px]`}
        titleCellClassName={`${theme.border} ${theme.divider} dark:border-[#1d2332] md:dark:border-[#1d2332]`}
        accordionProps={{
          className: "space-y-0",
          itemClassName: `${theme.border} first:border-t-0 dark:border-[#1d2332] px-5 pt-6.25 pb-8.9 xl:min-h-[90.6px] xl:pr-7.5`,
          questionClassName: `mb-0 min-w-0 text-[#1f1f1f] ${theme.question} text-lg md:text-xl xl:text-[22px] leading-7.5 tracking-[0.66px]`,
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
                src={theme.icon}
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
};
