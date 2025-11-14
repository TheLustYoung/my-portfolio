// app/not-found.tsx
"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function NotFoundPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan-400">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold mb-3">
          {t("notFound.title")}
        </h1>
        <p className="text-sm text-slate-400 mb-6">
          Похоже, вы попали в пустой маршрут.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2 rounded-full text-sm bg-white text-black hover:bg-slate-200 transition"
        >
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  );
}
