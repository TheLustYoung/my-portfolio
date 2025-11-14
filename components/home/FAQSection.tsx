// components/home/FAQSection.tsx
"use client";

import { Section } from "@/components/common/Section";
import { faqItems } from "@/data/faq";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" title={t("faq.title")}>
      <div className="space-y-2">
        {faqItems.map((item, idx) => {
          const open = openIndex === idx;
          return (
            <div
              key={item.question}
              className="rounded-xl border border-white/5 bg-white/5"
            >
              <button
                onClick={() => setOpenIndex(open ? null : idx)}
                className="w-full px-4 py-3 flex items-center justify-between text-left text-sm"
              >
                <span>{item.question}</span>
                <span className="text-xs text-slate-400">
                  {open ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-3 text-xs text-slate-300"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
