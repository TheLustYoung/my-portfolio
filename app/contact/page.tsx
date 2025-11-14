// app/contact/page.tsx
"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-lg md:text-xl font-semibold mb-4">
        {t("contact.pageTitle")}
      </h1>

      <div className="grid md:grid-cols-[minmax(0,2fr),minmax(0,1.5fr)] gap-6">
        {/* Левая колонка — форма */}
        <ContactForm />

        {/* Правая колонка — прямые контакты + QR */}
        <div className="space-y-4 text-xs md:text-sm">
          {/* Блок с текстовыми контактами */}
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
            <h2 className="text-sm font-medium mb-2">
              {t("contact.direct.title")}
            </h2>
            <p className="text-xs text-slate-400 mb-3">
              {t("contact.direct.subtitle")}
            </p>

            <div className="space-y-1">
              <a
                href="https://t.me/DevShock000"
                target="_blank"
                rel="noreferrer"
                className="block underline underline-offset-2 hover:text-slate-100"
              >
                {t("contact.direct.telegram")}: @DevShock000
              </a>
              <a
                href="mailto:eae061@gmail.com"
                className="block underline underline-offset-2 hover:text-slate-100"
              >
                {t("contact.direct.email")}: eae061@gmail.com
              </a>
            </div>
          </div>

          {/* Блок с QR-кодами */}
          <div className="grid grid-cols-2 gap-4">
            {/* QR Telegram */}
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4 flex flex-col items-center gap-3">
              <div className="text-xs font-medium text-center">
                {t("contact.direct.telegram")}
              </div>
              <div className="relative h-32 w-32 p-2 bg-black/30 rounded-xl">
                <Image
                  src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https%3A%2F%2Ft.me%2FDevShock000"
                  alt="QR Telegram"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </div>

            {/* QR Email */}
            <div className="rounded-2xl border border-white/5 bg-white/5 p-4 flex flex-col items-center gap-3">
              <div className="text-xs font-medium text-center">
                {t("contact.direct.email")}
              </div>
              <div className="relative h-32 w-32 p-2 bg-black/30 rounded-xl">
                <Image
                  src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=mailto%3Aeae061%40gmail.com"
                  alt="QR Email"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
