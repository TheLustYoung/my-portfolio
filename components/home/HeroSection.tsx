// components/home/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/common/Button";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-72 w-72 bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-0 right-0 h-72 w-72 bg-violet-500/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">
            {t("common.role")}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-sm md:text-base text-slate-300 mb-8">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href="#projects">
              {t("common.ctaViewProjects")}
            </Button>
            <Button as="a" href="/contact" variant="ghost">
              {t("common.ctaContact")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
