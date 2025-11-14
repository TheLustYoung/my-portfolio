// components/home/ServicesSection.tsx
"use client";

import { Section } from "@/components/common/Section";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useI18n } from "@/lib/i18n";

const services = [
  {
    title: "Лендинги и промо-страницы",
    text: "Футуристичный, но понятный дизайн, быстрый рендер, адаптив.",
  },
  {
    title: "Кастомные фронтенд-интерфейсы",
    text: "UI для продуктов и внутренних панелей с упором на UX.",
  },
  {
    title: "Прототипы и MVP",
    text: "Быстрая проверка гипотез с упором на скорость и качество кода.",
  },
  {
    title: "Интеграция с API",
    text: "Чистая работа с API, удобная для backend-команд.",
  },
];

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <Section id="services" title={t("services.title")}>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-2xl border border-white/5 bg-white/5 p-4"
          >
            <h3 className="text-sm font-medium mb-1">{service.title}</h3>
            <p className="text-xs text-slate-400">{service.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
