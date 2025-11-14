// components/layout/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navItems = [
  { href: "/", key: "common.nav.home" },
  { href: "/projects", key: "common.nav.projects" },
  { href: "/contact", key: "common.nav.contact" },
];

export function Header() {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 bg-[#05060a]/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/40" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium tracking-tight">
              {t("common.brand")}
            </span>
            <span className="text-[11px] text-slate-400">
              {t("common.role")}
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? "text-slate-50"
                  : "text-slate-400 hover:text-slate-100"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
          <a
            href="https://github.com/TheLustYoung"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-100 transition-colors text-sm"
          >
            GitHub
          </a>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
