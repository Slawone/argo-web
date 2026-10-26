"use client";

import { useEffect, useRef, useState } from "react";
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
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [closed, setClosed] = useState(false);
  const visible = !closed && (open || hovered);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event) => {
      if (!ref.current?.contains(event.target)) setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const close = (event) => {
    setClosed(true);
    setOpen(false);
    event.currentTarget.blur();
  };

  const toggle = () => {
    if (visible) {
      setClosed(true);
      setOpen(false);
    } else {
      setClosed(false);
      setOpen(true);
    }
  };

  return (
    <div
      ref={ref}
      className="group relative"
      onPointerEnter={(event) =>
        event.pointerType === "mouse" && setHovered(true)
      }
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse") return;
        setHovered(false);
        setClosed(false);
      }}
    >
      <div className="flex items-center gap-1">
        <Link
          href={item.href}
          onClick={close}
          className={cn(
            linkClassName,
            isActive(pathname, item.href) && activeClassName,
          )}
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={toggle}
          aria-expanded={visible}
          aria-label={`Подменю: ${item.label}`}
          className={cn(linkClassName, "-m-2 p-2 cursor-pointer")}
        >
          <ChevronDown
            width={16}
            height={16}
            className={cn("transition-transform", visible && "rotate-180")}
          />
        </button>
      </div>
      <div
        className={cn(
          "absolute left-0 top-full pt-4 transition-opacity",
          visible
            ? "visible opacity-100"
            : "invisible opacity-0 group-has-focus-visible:visible group-has-focus-visible:opacity-100",
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
