// components/projects/ProjectCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { useI18n } from "@/lib/i18n";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const { t } = useI18n();

  const typeLabel =
    project.type === "commercial"
      ? t("projects.type.commercial") ?? "Коммерческий"
      : project.type === "pet"
      ? t("projects.type.pet") ?? "Pet-проект"
      : t("projects.type.experiment") ?? "Эксперимент";

  const href = `/projects/${project.slug}`;

  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition overflow-hidden block h-full"
    >
      <article className="flex flex-col h-full">
        {/* Обложка */}
        <div className="relative h-40 w-full">
          <Image
            src={project.image}
            alt={t(`${project.i18nKey}.title`)}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>

        {/* Контент */}
        <div className="p-4 flex flex-col gap-2 flex-1">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="uppercase tracking-[0.16em]">{typeLabel}</span>
            <span className="text-slate-500">
              {project.stack.slice(0, 2).join(" · ")}
            </span>
          </div>

          <h3 className="text-sm md:text-base font-semibold">
            {t(`${project.i18nKey}.title`)}
          </h3>

          <p className="text-xs md:text-sm text-slate-400 line-clamp-3">
            {t(`${project.i18nKey}.short`)}
          </p>

          <div className="mt-auto flex items-center justify-between pt-2 text-[11px] text-slate-400">
            <span>{t("projects.moreStack") ?? "Подробнее о стеке"}</span>
            <span className="inline-flex items-center gap-1 group-hover:text-slate-50 transition">
              {t("projects.viewMore") ?? "Подробнее"}
              <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
