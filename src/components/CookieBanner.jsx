"use client";

import { useEffect, useState } from "react";
import { Button } from "@/ui";
import { useConsent } from "./ConsentProvider";

export const CookieBanner = () => {
  const { consent, acceptCookies } = useConsent();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || consent) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
      <div className="max-w-xl w-full bg-white dark:bg-black rounded-xl shadow-lg p-4 border border-black/8 dark:border-white/14 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="title-color font-light font-sans main-text">
          Мы используем cookie и Яндекс Метрику, чтобы улучшить работу сайта.
        </p>

        <Button
          onClick={acceptCookies}
        >
          Принять
        </Button>
      </div>
    </div>
  );
};