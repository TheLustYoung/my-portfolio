// components/common/Section.tsx
import React from "react";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  title,
  eyebrow,
  align = "left",
  className,
  children,
}: SectionProps) {
  const base =
    "max-w-6xl mx-auto px-4 py-8 md:py-10"; // базовая ширина и отступы секций
  const mergedClassName = className ? `${base} ${className}` : base;
  const isCenter = align === "center";

  return (
    <section id={id} className={mergedClassName}>
      {(title || eyebrow) && (
        <header
          className={
            "mb-4 md:mb-6 space-y-1" +
            (isCenter ? " text-center max-w-2xl mx-auto" : "")
          }
        >
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-lg md:text-xl font-semibold text-slate-50">
              {title}
            </h2>
          )}
        </header>
      )}

      {children}
    </section>
  );
}
