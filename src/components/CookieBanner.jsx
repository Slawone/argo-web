"use client";

import { useEffect, useState } from "react";

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
      <div className="max-w-xl w-full bg-black text-white rounded-2xl shadow-lg p-4 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-gray-300">
          Мы используем cookie, чтобы улучшить работу сайта.
        </p>

        <button
          onClick={acceptCookies}
          className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition"
        >
          Принять
        </button>
      </div>
    </div>
  );
};