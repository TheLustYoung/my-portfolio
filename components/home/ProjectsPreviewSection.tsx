// components/home/ProjectsPreviewSection.tsx
"use client";

import { Section } from "@/components/common/Section";
import { useI18n } from "@/lib/i18n";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import Link from "next/link";

export function ProjectsPreviewSection() {
  const { t } = useI18n();

  return (
    <Section
      id="projects"
      title={t("projects.title")}
      eyebrow={t("common.brand")}
    >
      <p className="text-sm text-slate-400 mb-6">{t("projects.subtitle")}</p>
      <ProjectsGrid />
      <div className="mt-6 text-xs text-slate-400">
        <Link href="/projects" className="hover:text-slate-100">
          Смотреть все проекты →
        </Link>
      </div>
    </Section>
  );
}
