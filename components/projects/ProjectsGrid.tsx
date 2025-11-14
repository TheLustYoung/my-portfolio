// components/projects/ProjectsGrid.tsx
"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export function ProjectsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
