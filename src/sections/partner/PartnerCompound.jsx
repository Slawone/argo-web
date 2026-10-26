"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/ui";
import { motionVariants } from "@/config";
import { cn } from "@/utils";

export const PartnerCompound = ({
  children,
  tabs,
  reestrHref,
  accent,
  variant = "frame",
  actions,
  className,
}) => {
  const { containerVariants, textVariants } = motionVariants;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const { lines } = tabs.find((tab) => tab.id === activeTab);
  const card = variant === "card";
  const reestrClassName = "md:h-13! md:px-7.5! md:gap-2.5! md:text-lg";

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
  const reestr = reestrHref ? (
    <a
      href={reestrHref}
      target="_blank"
      className={cn("button button-secondary flex-center", reestrClassName)}
    >
      {reestrContent}
    </a>
  ) : (
    <Button
      variant="secondary"
      className={cn("flex-center", reestrClassName)}
      disabled
    >
      {reestrContent}
    </Button>
  );

  const panel = (
    <div
      className={cn(
        "w-full rounded-xl border main-border overflow-hidden",
        card ? "max-w-144 lg:self-end" : "max-w-150 self-start",
      )}
    >
      <div className="grid grid-cols-3 border-b main-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              "cursor-pointer px-2 sm:px-5 py-4.5 text-[11px] sm:text-base border-r last-of-type:border-r-0 main-border transition-colors",
              activeTab === tab.id
                ? accent.tab
                : (accent.tabIdle ?? "text-color hover:title-color"),
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
          className="p-5 pt-6.5 pb-6 min-h-60"
        >
          {lines.length ? (
            <ol className="flex flex-col gap-0.75 text-sm md:text-base font-normal">
              {lines.map((line, index) => {
                const barClassName = cn(
                  "flex-1 px-2 md:px-3",
                  line.highlight && accent.row,
                  line.href && "transition-opacity md:hover:opacity-80",
                );
                const body = (
                  <>
                    <span
                      className={
                        line.highlight
                          ? (accent.rowLabel ?? accent.text)
                          : line.accent
                            ? accent.text
                            : (accent.line ?? "title-color")
                      }
                    >
                      {line.label}
                    </span>
                    {line.value && (
                      <span
                        className={
                          line.highlight ? accent.rowValue : accent.text
                        }
                      >
                        {line.value}
                      </span>
                    )}
                  </>
                );

                return (
                  <li key={line.label} className="flex gap-2 md:gap-3 px-1">
                    <span
                      className={cn(
                        "w-2 shrink-0",
                        accent.number ?? "text-color",
                      )}
                    >
                      {index + 1}
                    </span>
                    {line.href ? (
                      <Link href={line.href} className={barClassName}>
                        {body}
                      </Link>
                    ) : (
                      <span className={barClassName}>{body}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          ) : (
            <p className="text-color text-sm md:text-base">
              Информация появится позже
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "page-container font-sans font-light",
        !card && "border main-border",
        className,
      )}
    >
      <div
        className={cn(
          "grid",
          card ? "lg:grid-cols-[1fr_576px]" : "lg:grid-cols-2",
        )}
      >
        {card ? (
          <div className="flex flex-col items-start gap-6 xl:gap-9.5 px-4 lg:pl-0 lg:pr-9.25 pt-8 lg:pt-0">
            <div className="w-full border main-border flex flex-col items-start gap-6 xl:gap-6.25 px-4 xl:px-9.25 py-6 xl:pt-9 xl:pb-8">
              <motion.h2
                variants={textVariants}
                className={cn(
                  "text-xl lg:text-[28px] xl:text-[30px] uppercase leading-none font-medium",
                  accent.title ?? "title-color",
                )}
              >
                Состав
              </motion.h2>
              <motion.div variants={textVariants} className="w-full">
                {children}
              </motion.div>
            </div>
            <div className="xl:px-9.25">{reestr}</div>
          </div>
        ) : (
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
            {reestr}
          </div>
        )}

        {card ? (
          <div className="flex justify-center lg:justify-end px-4 lg:px-0 py-8 lg:py-0 lg:pt-7.25">
            <div className="flex flex-col gap-8 w-full max-w-144">
              {panel}
              {actions && (
                <div className="flex flex-wrap justify-center gap-4 xl:gap-8">
                  {actions}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="section-py px-4 flex justify-center">{panel}</div>
        )}
      </div>
    </motion.section>
  );
};
