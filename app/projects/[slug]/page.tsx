// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-6 text-xs uppercase tracking-[0.2em] text-cyan-400">
        {project.type}
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">
        {project.title}
      </h1>
      <p className="text-sm text-slate-300 mb-6 whitespace-pre-line">
        {project.longDescription}
      </p>
      <div className="mb-6">
        <h2 className="text-xs font-medium text-slate-400 mb-2">
          Технологический стек
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 text-xs text-slate-300">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-slate-50"
          >
            Открыть демо
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-slate-50"
          >
            Открыть GitHub
          </a>
        )}
      </div>
    </div>
  );
}
