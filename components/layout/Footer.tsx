// components/layout/Footer.tsx
"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-top border-white/5 bg-[#05060a]">
      <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-[11px] text-slate-500">
          © {year} {t("common.brand")}. All rights reserved.
        </span>
        <div className="flex items-center gap-4 text-[11px] text-slate-400">
          <a
            href="https://github.com/TheLustYoung"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://t.me/DevShock000"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-100 transition-colors"
          >
            Telegram
          </a>
          <a
            href="mailto:eae061@gmail.com"
            className="hover:text-slate-100 transition-colors"
          >
            eae061@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
