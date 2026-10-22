"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/ui";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const PartnerCompound = ({ children, tabs, reestrHref, accent }) => {
  const { containerVariants, textVariants } = motionVariants;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const { lines } = tabs.find((tab) => tab.id === activeTab);
  const reestrContent = (
    <>
      <Image
        src="/reestr.svg"
        width={20}
        height={20}
        alt=""
        className="invert dark:invert-0"
      />
      Реестр программного обеспечения
    </>
  );

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-container border main-border font-sans font-light"
    >
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col items-start gap-8 section-py px-4 border-b lg:border-b-0 lg:border-r main-border">
          <motion.h2
            variants={textVariants}
            className="text-base md:text-xl lg:text-[28px] uppercase leading-none title-color font-semibold"
          >
            Состав
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-color text-base md:text-xl lg:text-[28px] lg:leading-normal"
          >
            {children}
          </motion.p>
          {reestrHref ? (
            <a
              href={reestrHref}
              target="_blank"
              className="button button-secondary flex-center"
            >
              {reestrContent}
            </a>
          ) : (
            <Button variant="secondary" className="flex-center" disabled>
              {reestrContent}
            </Button>
          )}
        </div>

        <div className="section-py px-4 flex justify-center">
          <div className="w-full max-w-150 self-start rounded-xl border main-border overflow-hidden">
            <div className="grid grid-cols-3 border-b main-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={cn(
                    "cursor-pointer px-2 sm:px-5 py-4 text-[11px] sm:text-base border-r last-of-type:border-r-0 main-border transition-colors",
                    activeTab === tab.id ? accent.tab : "text-color hover:title-color",
                  )}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-5 min-h-60"
              >
                {lines.length ? (
                  <ol className="flex flex-col gap-1 text-sm md:text-base font-normal">
                    {lines.map((line, index) => (
                      <li
                        key={line.label}
                        className={cn(
                          "flex gap-4 md:gap-6 px-1",
                          line.highlight && accent.row,
                        )}
                      >
                        <span className="w-2 shrink-0 text-color">{index + 1}</span>
                        <span>
                          <span className={line.highlight ? accent.text : "title-color"}>
                            {line.label}
                          </span>
                          {line.value && (
                            <span className={line.highlight ? accent.rowValue : accent.text}>
                              {line.value}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-color text-sm md:text-base">
                    Информация появится позже
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
