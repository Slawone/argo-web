"use client";

import { useState } from "react"
import { Plus, Minus } from "lucide-react";
import { cn } from "@/utils";

export const Accordian = ({ items, className }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  }

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <div key={index} className="p-4 border-b border-black/8 dark:border-white/14 last:border-b-0 first:border-t md:first:border-t-0">
          <button onClick={() => toggleAccordion(index)} className="flex justify-between items-center w-full">
            <div className="font-light title-color text-lg md:text-xl mb-2">{item.title}</div>
            {open === index ? <Minus width={20} height={20} className="title-color" /> : <Plus width={20} height={20} className="title-color" />}
          </button>
          <div className={`grid overflow-hidden transition-all duration-300 ${open === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className="overflow-hidden text-color font-light">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
