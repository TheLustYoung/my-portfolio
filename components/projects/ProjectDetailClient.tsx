// components/projects/ProjectDetailClient.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectDetailClient({ project }: Props) {
  const { t } = useI18n();

  const title = t(`${project.i18nKey}.title`);
  const short = t(`${project.i18nKey}.short`);
  const long = t(`${project.i18nKey}.long`);
  const why = t(`${project.i18nKey}.why`);

  const typeLabel =
    project.type === "commercial"
      ? t("projects.type.commercial") ?? "Коммерческий проект"
      : project.type === "pet"
      ? t("projects.type.pet") ?? "Pet-проект"
      : t("projects.type.experiment") ?? "Эксперимент";

  const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;

  // 👉 индекс текущего фото в лайтбоксе
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    if (!hasGallery) return;
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    if (!hasGallery || lightboxIndex === null) return;
    const total = project.gallery!.length;
    setLightboxIndex((lightboxIndex - 1 + total) % total);
  };

  const showNext = () => {
    if (!hasGallery || lightboxIndex === null) return;
    const total = project.gallery!.length;
    setLightboxIndex((lightboxIndex + 1) % total);
  };

  // ← → и Esc
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, hasGallery]);

  const currentLightboxImage =
    lightboxIndex !== null && hasGallery
      ? project.gallery![lightboxIndex]
      : null;

  // 🔢 Лимит превью в сетке
  const previewGallery =
    hasGallery && project.gallery!.length > 0
      ? project.gallery!.slice(0, 4)
      : [];

  const hasMoreThanPreview =
    hasGallery && project.gallery!.length > previewGallery.length;

  return (
    <>
      <div className="space-y-6">
        {/* Заголовок */}
        <header className="space-y-2">
          <h1 className="text-lg md:text-2xl font-semibold">{title}</h1>

          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 uppercase tracking-[0.16em]">
              {typeLabel}
            </span>
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Hero: картинка + короткое описание */}
        <section className="grid gap-4 md:grid-cols-2 items-start">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Image
              src={project.image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-3 text-xs md:text-sm text-slate-300">
            <p className="whitespace-pre-line">{short}</p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 md:p-4 text-[11px] md:text-xs text-slate-300">
              <p className="font-medium mb-1">🛠 Стек & роль</p>
              <p>
                {t("projects.roles.default") ??
                  "Я отвечал за фронтенд-часть: архитектуру, верстку, анимации и интеграцию с API / мок-данными."}
              </p>
            </div>
          </div>
        </section>

        {/* Основной текст + галерея */}
        <section className="grid gap-6 md:grid-cols-2 items-start">
          <div className="space-y-5">
            {/* Основное описание */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 text-xs md:text-sm text-slate-200 whitespace-pre-line">
              {long}
            </article>

            {/* Почему сделал проект */}
            {why && (
              <article className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 text-xs md:text-sm text-slate-200 whitespace-pre-line">
                <h2 className="font-semibold mb-2 text-slate-100">
                  💡 Почему я сделал этот проект
                </h2>
                {why}
              </article>
            )}
          </div>

          {/* Галерея скринов — превью (до 4 фото) */}
          {hasGallery && (
            <div className="space-y-3">
              <h2 className="text-sm font-medium text-slate-100">
                {t("projects.screenshots") ?? "Скриншоты проекта"}
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {previewGallery.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => openLightbox(index)} // индекс относительно всей галереи, т.к. это первые 4
                    className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                  >
                    <Image
                      src={src}
                      alt="Скриншот проекта"
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-100">
                      Открыть
                    </span>
                  </button>
                ))}
              </div>

              {/* Кнопка "Показать все фото", если их больше 4 */}
              {hasMoreThanPreview && (
                <button
                  type="button"
                  onClick={() => openLightbox(0)}
                  className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[11px] md:text-xs text-slate-100 hover:bg-white/10 transition"
                >
                  📸 {t("projects.showAllPhotos") ?? "Показать все фото"}
                </button>
              )}
            </div>
          )}
        </section>

        {/* Ссылки */}
        {(project.demo || project.github) && (
          <section className="flex flex-wrap gap-3 pt-2">
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                className="inline-flex items-center rounded-full bg-white text-black text-xs md:text-sm px-4 py-2 font-medium hover:bg-slate-200 transition"
              >
                🔗 {t("projects.openDemo") ?? "Открыть демо"}
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="inline-flex items-center rounded-full border border-white/20 text-xs md:text-sm px-4 py-2 text-slate-100 hover:bg-white/10 transition"
              >
                💻 {t("projects.openCode") ?? "Код на GitHub"}
              </Link>
            )}
          </section>
        )}
      </div>

      {/* 🔍 Лайтбокс со слайдером — ВСЕ ФОТО */}
      {hasGallery && lightboxIndex !== null && currentLightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Закрыть */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 z-20 rounded-full bg-white text-black w-8 h-8 flex items-center justify-center text-lg shadow-lg hover:bg-slate-100 transition"
              aria-label="Закрыть"
            >
              ×
            </button>

            {/* Левая стрелка */}
            {project.gallery!.length > 1 && (
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-2 md:left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white text-xl hover:bg-black/80 transition"
                aria-label="Предыдущее фото"
              >
                ‹
              </button>
            )}

            {/* Правая стрелка */}
            {project.gallery!.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 md:right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white text-xl hover:bg-black/80 transition"
                aria-label="Следующее фото"
              >
                ›
              </button>
            )}

            {/* Картинка */}
            <div className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden border border-white/20 bg-black">
              <Image
                src={currentLightboxImage}
                alt="Просмотр скриншота"
                fill
                className="object-contain"
              />
            </div>

            {/* Индикатор */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/70 px-3 py-1 text-[11px] text-slate-100">
              <span>
                {lightboxIndex + 1} / {project.gallery!.length}
              </span>
              <span className="opacity-60 hidden sm:inline">
                ← → или Esc для управления
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
