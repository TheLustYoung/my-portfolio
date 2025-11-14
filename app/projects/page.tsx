// app/projects/page.tsx
"use client";

import { Section } from "@/components/common/Section";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { useI18n } from "@/lib/i18n";

export default function ProjectsPage() {
  const { t } = useI18n();

  return (
    <div className="pt-6">
      <div className="max-w-6xl mx-auto px-4 mb-2">
        <h1 className="text-lg md:text-xl font-semibold">Проекты</h1>
      </div>
      <Section title={t("projects.title")} eyebrow={t("common.brand")}>
        <p className="text-sm text-slate-400 mb-6">{t("projects.subtitle")}</p>
        <ProjectsGrid />
      </Section>
    </div>
  );
}
