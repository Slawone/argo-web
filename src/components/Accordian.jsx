"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/utils";

export const Accordian = ({
  items,
  className,
  itemClassName,
  questionClassName = "title-color",
  answerClassName,
  icon,
}) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "p-4 border-b border-black/8 dark:border-white/14 last:border-b-0 first:border-t md:first:border-t-0",
            itemClassName,
          )}
        >
          <button
            type="button"
            id={`${id}-question-${index}`}
            aria-expanded={open === index}
            aria-controls={`${id}-answer-${index}`}
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full cursor-pointer"
          >
            <div
              className={cn(
                "font-light text-lg md:text-xl mb-2 text-left",
                questionClassName,
              )}
            >
              {item.title}
            </div>
            {icon ? (
              <span
                aria-hidden="true"
                className={cn(
                  "ml-3 shrink-0 transition-transform duration-200 motion-reduce:transition-none",
                  open === index && "rotate-90",
                )}
              >
                {icon}
              </span>
            ) : open === index ? (
              <Minus width={20} height={20} className="title-color" />
            ) : (
              <Plus width={20} height={20} className="title-color" />
            )}
          </button>
          <div
            id={`${id}-answer-${index}`}
            role="region"
            aria-labelledby={`${id}-question-${index}`}
            aria-hidden={open !== index}
            className={`grid overflow-hidden transition-all duration-300 ${open === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div
              className={cn(
                "overflow-hidden text-color font-light",
                answerClassName,
              )}
            >
              {/<\/?[a-z][\s\S]*>/i.test(item.answer) ? (
                <div dangerouslySetInnerHTML={{ __html: item.answer }} />
              ) : (
                <div className="whitespace-pre-line">{item.answer}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
