// components/home/SkillsSection.tsx
"use client";

import { Section } from "@/components/common/Section";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useI18n } from "@/lib/i18n";

const coreStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "REST / GraphQL API",
];

const interestStack = [
  "Express.js",
  "Redux",
  "RabbitMQ",
  "PostgreSQL",
  "Swift",
  "Chart.js",
  "Axios",
];

export function SkillsSection() {
  const { t } = useI18n();

  return (
    <Section id="skills" title={t("skills.title")}>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-sm font-medium mb-3">
            {t("skills.coreTitle")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-200 border border-cyan-400/30"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-sm font-medium mb-3">
            {t("skills.interestTitle")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {interestStack.map((item) => (
              <span
                key={item}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
