"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/utils";
import { Button, Logo } from "@/ui";

export const MobileMenu = ({ items, open, onClick }) => {

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start"});
      onClick();
    }
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 dark:bg-black/80 transition-opacity md:hidden",
          open ? "backdrop-opacity-100 overflow-y-hidden" : "opacity-0 pointer-events-none"
        )}
        onClick={onClick}
      />
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-1/2 py-4 px-2 flex flex-col justify-between bg-white dark:bg-black shadow-xl md:hidden transform transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <Logo className="w-30" />
          <Button
            variant="secondary"
            onClick={onClick}
            className="border-none"
          >
            <X />
          </Button>
        </div>
        <nav className="flex flex-col items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-black dark:text-white font-sans"
              onClick={onClick}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="secondary"
          onClick={() => scrollToElement("footer")}
        >
          Контакты
        </Button>
      </div>
    </>
  )
}