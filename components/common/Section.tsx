// components/common/Section.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        {(title || eyebrow) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="mb-6"
          >
            {eyebrow && (
              <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 mb-1.5">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
