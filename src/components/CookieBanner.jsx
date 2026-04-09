"use client";

import { useEffect, useState } from "react";
import { Button } from "@/ui";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
      <div className="max-w-xl w-full bg-white dark:bg-black rounded-xl shadow-lg p-4 border border-black/8 dark:border-white/14 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="title-color font-light font-sans main-text">
          Мы используем cookie, чтобы улучшить работу сайта.
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