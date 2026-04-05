"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/utils";
import { DesktopMenu, MobileMenu } from "@/components";
import { Button, Logo } from "@/ui";
import ThemeToggle from "@/ui/theme-toggle";

const navItems = [
  { label: "Хранение", href: "/storage" },
  // { label: "О компании", href: "/about" },
  // { label: "Партнеры", href: "/partners" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll(); // инициализация
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start"});
    }
  };

  return (
    <header className={cn(
      "bg-white dark:bg-black text-black dark:text-zinc-50 sticky top-0 z-50 h-20 w-full",
      scrolled
      ? "border-b border-b-solid border-b-black/8 dark:border-b-white/14"
      : "border-b-0 shadow-none"
    )}>
      <div className="flex max-w-7xl h-full mx-auto px-4 gap-10 items-center">
        <Link href={'/'}>
          <Logo />
        </Link>
        <DesktopMenu items={navItems} />
        {/* <span className="hidden md:inline-block text-color font-sans text-sm">Меню находится в разработке...</span> */}
        <div className="flex items-center justify-between gap-2 ml-auto">
          <Button
            variant="secondary"
            className="hidden md:flex"
            onClick={() => scrollToElement("footer")}
          >
            Контакты
          </Button>
          <Button
            variant="secondary"
            className="py-2 px-3 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </Button>
          <ThemeToggle />
        </div>
      </div>

      <MobileMenu items={navItems} open={open} onClick={() => setOpen(!open)} />
    </header>
  );
}
