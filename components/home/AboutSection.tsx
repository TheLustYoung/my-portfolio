// components/home/AboutSection.tsx
"use client";

import { Section } from "@/components/common/Section";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <Section id="about" title={t("about.title")}>
      <div className="grid md:grid-cols-[minmax(0,2fr),minmax(0,1.4fr)] gap-6">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-sm md:text-base text-slate-300 whitespace-pre-line"
        >
          {t("about.text")}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          <div className="flex justify-center md:justify-start">
           <div className="relative h-32 w-32 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.25)]">
              <Image
                src="/me.jpg"
                alt="Афонин Владислав"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-slate-300">
            <div className="font-medium text-slate-100 mb-2">
              Фокус на качестве
            </div>
            <ul className="space-y-1 list-disc list-inside">
              <li>Читаемая структура для backend-команд.</li>
              <li>Анимации без перегруза UX.</li>
              <li>Внимание к деталям и адаптиву.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
