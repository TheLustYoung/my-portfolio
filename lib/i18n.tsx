"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { ru } from "@/locales/ru";
import { en } from "@/locales/en";

const dictionaries = {
  ru,
  en,
} as const;

type Locale = keyof typeof dictionaries;
// ВАЖНО: union, а не только typeof ru
type Messages = (typeof dictionaries)[Locale];

type I18nContextValue = {
  locale: Locale;
  messages: Messages;
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");
  const messages = dictionaries[locale];

  const t = useCallback(
    (key: string): string => {
      const parts = key.split(".");
      let current: any = messages;

      for (const part of parts) {
        if (current && typeof current === "object" && part in current) {
          current = current[part];
        } else {
          return key; // если ключ не найден — возвращаем сам ключ
        }
      }

      return typeof current === "string" ? current : key;
    },
    [messages]
  );

  return (
    <I18nContext.Provider value={{ locale, messages, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
