// components/layout/LanguageSwitcher.tsx
"use client";

import { useI18n } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex gap-1 text-xs border border-white/10 rounded-full px-2 py-1 bg-white/5">
      <button
        onClick={() => setLocale("ru")}
        className={`px-2 py-0.5 rounded-full transition ${
          locale === "ru" ? "bg-white text-black" : "text-slate-300"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-0.5 rounded-full transition ${
          locale === "en" ? "bg-white text-black" : "text-slate-300"
        }`}
      >
        EN
      </button>
    </div>
  );
}
