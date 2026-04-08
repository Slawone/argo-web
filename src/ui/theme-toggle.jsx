"use client";

import { cn } from "@/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only compute theme after mount
  const effectiveTheme =
    mounted && theme === "system" && resolvedTheme
      ? resolvedTheme
      : mounted
        ? theme
        : null;

  const nextTheme = effectiveTheme === "dark" ? "light" : "dark";

  const label = effectiveTheme ? `Switch to ${nextTheme} mode` : "Toggle theme";

  const toggleTheme = () => {
    if (!mounted || !nextTheme) return;
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={effectiveTheme === "dark"}
      disabled={!mounted}
      onClick={toggleTheme}
      className={cn(
        "shrink-0 flex items-center justify-center p-3 rounded-full border-solid transition-colors",
        "border-black/8 dark:border-white/14",
        mounted
          ? "cursor-pointer hover:border-transparent hover:bg-black/4 dark:hover:bg-[#1a1a1a]"
          : "cursor-default pointer-events-none",
      )}
    >
      {/* Sun Icon */}
      <svg
        viewBox="0 0 16 16"
        width="20"
        height="20"
        className="w-5 h-5 dark:hidden"
      >
        <g clipPath="url(#clip0_53_17725)">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.75.75V0h-1.5v2h1.5V.75M3.26 4.32l-.53-.53-.35-.35-.53-.53L2.9 1.85l.53.53.35.35.53.53zm8.42-1.06.53-.53.35-.35.53-.53 1.06 1.06-.53.53-.35.35-.53.53zM8 11.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5m0 1.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5m6-5.5h2v1.5h-2zm-13.25 0H0v1.5h2v-1.5H.75m1.62 5.32-.53.53 1.06 1.06.53-.53.35-.35.53-.53-1.06-1.06-.53.53zm10.2 1.06.53.53 1.06-1.06-.53-.53-.35-.35-.53-.53-1.06 1.06.53.53zM8.75 14v2h-1.5v-2z"
            clipRule="evenodd"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_53_17725">
            <rect width="16" height="16" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>

      {/* Moon Icon */}
      <svg
        viewBox="0 0 16 16"
        width="20"
        height="20"
        className="hidden w-5 h-5 dark:block"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1.5 8a6 6 0 0 1 3.62-5.51 7 7 0 0 0 7.08 9.25A5.99 5.99 0 0 1 1.5 8M6.42.58a7.5 7.5 0 1 0 7.96 10.41l-.92-1.01a5.5 5.5 0 0 1-6.3-8.25zm6.83.42v1.75H15v1.5h-1.75V6h-1.5V4.25H10v-1.5h1.75V1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}
