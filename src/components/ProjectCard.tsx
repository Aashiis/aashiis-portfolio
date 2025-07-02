import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../app/data/projects";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-slate-900 rounded-lg p-6 flex flex-col justify-between border border-slate-800 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 text-balance">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-slate-800 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-auto pt-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;