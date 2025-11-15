// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectDetailClient } from "@/components/projects/ProjectDetailClient";
import { BackButton } from "@/components/common/BackButton";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-10">
        <BackButton />
        <ProjectDetailClient project={project} />
      </div>
    </div>
  );
}
