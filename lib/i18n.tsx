// lib/i18n.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { locales, Locale, Messages } from "@/locales";

type I18nContextType = {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");

  const messages = locales[locale];

  const t = (path: string): string => {
    const parts = path.split(".");
    // @ts-ignore — простая, но рабочая реализация
    let current: any = messages;
    for (const p of parts) {
      if (!current[p]) return path;
      current = current[p];
    }
    return typeof current === "string" ? current : path;
  };

  return (
    <I18nContext.Provider value={{ locale, messages, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
