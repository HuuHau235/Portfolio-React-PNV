import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h3>Projects</h3>
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}
