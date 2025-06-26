// src/components/ProjectsSection.jsx
import { projects } from "../data/projects";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-xl shadow-lg border border-border hover:border-primary transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold  text-gray-300">
                  {project.title}
                </h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
