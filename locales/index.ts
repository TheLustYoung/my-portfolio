// locales/index.ts
import { ru } from "./ru";
import { en } from "./en";

export const locales = {
  ru,
  en,
};

export type Locale = keyof typeof locales;
export type Messages = typeof ru;
