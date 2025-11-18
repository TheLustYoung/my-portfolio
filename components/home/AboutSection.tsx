"use client";

import Image from "next/image";
import { Section } from "@/components/common/Section";
import { useI18n } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <Section id="about" className="mt-8">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr),minmax(0,1.1fr)] items-start">
        {/* Текст */}
        <div className="space-y-3 text-sm md:text-base">
          <h2 className="text-base md:text-lg font-semibold mb-1">
            {t("about.title")}
          </h2>
          <p className="text-slate-300 whitespace-pre-line">
            {t("about.text")}
          </p>
        </div>

        {/* Фото */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-xs md:max-w-sm aspect-[5/6] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            {/* me.jpg должен лежать в public/me.jpg */}
            <Image
              src="/me-2.jpg"
              alt="Афонин Владислав"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
