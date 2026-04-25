import { featuredProjects } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  useReveal();

  return (
    <section id="projects" className="page-section projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Page 4</span>
          <h2>Selected Projects</h2>
          <p>
            Featured work spanning internship delivery, full-stack product
            implementation and AI-assisted browser experiences.
          </p>
        </div>

        <div className="project-stack">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
