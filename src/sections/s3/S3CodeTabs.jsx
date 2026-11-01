"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils";

const toneClassName = {
  normal: "text-[#1f1f1f] dark:text-[#ededed]",
  dim: "text-[#1f1f1f] dark:text-[#707070]",
  accent: "text-[#7315f6]",
};

export const S3CodeTabs = ({
  tabs,
  rowClassName = "h-6.75",
  bodyClassName,
  selectedClassName = "bg-[#955fff]",
  className,
}) => {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div
      className={cn(
        "w-full max-w-140 rounded-xl border main-border overflow-hidden font-sans",
        className,
      )}
    >
      <div role="tablist" className="grid grid-cols-3 border-b main-border">
        {tabs.map((item, index) => (
          <button
            key={item.label}
            type="button"
            role="tab"
            aria-selected={index === active}
            onClick={() => setActive(index)}
            className={cn(
              "cursor-pointer px-2 sm:px-5 py-4.5 text-[11px] sm:text-base border-r last-of-type:border-r-0 main-border transition-colors",
              index === active ? "bg-[#7129ff] text-white" : "title-color",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className={cn("px-5 pt-6.25 pb-4", bodyClassName)}
        >
          <ol>
            {tab.items.map((item, index) => (
              <li
                key={item.name}
                className={cn(
                  "flex items-center px-1.25 text-sm xl:text-base font-medium",
                  rowClassName,
                )}
              >
                <span className="w-5.5 shrink-0 text-[#a1a1a1]">{index + 1}</span>
                <span
                  className={cn(
                    "mr-4 min-w-0 flex-1 pl-3 leading-6.75 [overflow-wrap:anywhere]",
                    item.tone === "selected"
                      ? cn("text-white", selectedClassName)
                      : toneClassName[item.tone ?? "normal"],
                  )}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
