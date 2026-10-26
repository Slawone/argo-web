"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils";

const linkClassName =
  "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition font-sans";
const activeClassName = "text-black dark:text-white";

const isActive = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`);

const Dropdown = ({ item }) => {
  const pathname = usePathname();
  const [closed, setClosed] = useState(false);

  const close = (event) => {
    setClosed(true);
    event.currentTarget.blur();
  };

  return (
    <div className="group relative" onMouseLeave={() => setClosed(false)}>
      <Link
        href={item.href}
        onClick={close}
        className={cn(
          linkClassName,
          "flex items-center gap-1",
          isActive(pathname, item.href) && activeClassName,
        )}
      >
        {item.label}
        <ChevronDown
          width={16}
          height={16}
          className={cn(
            "transition-transform",
            !closed && "group-hover:rotate-180 group-focus-within:rotate-180",
          )}
        />
      </Link>
      <div
        className={cn(
          "absolute left-0 top-full pt-4 transition-opacity",
          closed
            ? "invisible opacity-0"
            : "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
        )}
      >
        <ul className="min-w-44 rounded-xl border main-border bg-white dark:bg-black p-2 shadow-lg">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                onClick={close}
                className={cn(
                  linkClassName,
                  "block rounded-lg px-3 py-2 hover:bg-black/4 dark:hover:bg-white/8",
                  isActive(pathname, child.href) && activeClassName,
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const DesktopMenu = ({ items }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6 transition-colors">
      {items.map((item) =>
        item.children ? (
          <Dropdown key={item.label} item={item} />
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              linkClassName,
              isActive(pathname, item.href) && activeClassName,
            )}
          >
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
};
