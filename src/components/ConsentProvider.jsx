"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const CONSENT_EVENT = "argo-cookie-consent-accepted";

const ConsentContext = createContext({ consent: false, acceptCookies: () => {} });

export const ConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setConsent(localStorage.getItem("cookie_consent") === "true");
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setConsent(true);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  return (
    <ConsentContext.Provider value={{ consent, acceptCookies }}>
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => useContext(ConsentContext);
