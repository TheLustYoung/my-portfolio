 // components/projects/ProjectCard.tsx
"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ translateY: -4 }}
      className="group rounded-2xl border border-white/5 bg-white/5 p-4 flex flex-col justify-between"
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-sm font-semibold">{project.title}</h3>
          <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400">
            {project.type}
          </span>
        </div>
        <p className="text-xs text-slate-400 line-clamp-3">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 text-xs">
        <Link
          href={`/projects/${project.slug}`}
          className="text-cyan-300 hover:text-cyan-200"
        >
          Подробнее →
        </Link>
        <div className="flex gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-100"
            >
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-100"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
