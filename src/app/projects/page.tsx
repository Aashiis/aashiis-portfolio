import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/app/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Prakash BK (Aashis)",
    description: "A collection of projects by Prakash BK, including Flutter apps, full-stack web platforms with Next.js and Django, and more.",
};

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold text-center text-white mb-4">My Work & Projects</h1>
      <p className="text-lg text-slate-400 text-center mb-12 max-w-2xl mx-auto text-balance">
        Here is a selection of my projects, showcasing my skills in mobile and web development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}