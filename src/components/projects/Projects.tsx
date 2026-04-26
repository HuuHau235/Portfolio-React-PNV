import { startTransition, useDeferredValue, useMemo, useState } from "react";
import { featuredProjects } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";
import ProjectCard from "./ProjectCard";
import ProjectSpotlightModal from "./ProjectSpotlightModal";

export default function Projects() {
  useReveal();

  const allTech = useMemo(
    () =>
      ["All", ...new Set(featuredProjects.flatMap((project) => project.stack))],
    []
  );
  const [activeTech, setActiveTech] = useState("All");
  const [search, setSearch] = useState("");
  const [spotlightTitle, setSpotlightTitle] = useState<string | null>(null);
  const deferredSearch = useDeferredValue(search);

  const filteredProjects = useMemo(() => {
    return featuredProjects.filter((project) => {
      const matchesTech =
        activeTech === "All" || project.stack.includes(activeTech);
      const matchesSearch =
        !deferredSearch.trim() ||
        `${project.title} ${project.summary} ${project.stack.join(" ")}`
          .toLowerCase()
          .includes(deferredSearch.toLowerCase());

      return matchesTech && matchesSearch;
    });
  }, [activeTech, deferredSearch]);

  const spotlightProject =
    featuredProjects.find((project) => project.title === spotlightTitle) ?? null;

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

        <div className="explorer-toolbar reveal-card">
          <input
            className="explorer-search"
            placeholder="Search project name, stack, or focus..."
            value={search}
            onChange={(event) => {
              const value = event.target.value;
              startTransition(() => setSearch(value));
            }}
          />

          <div className="filter-row">
            {allTech.map((tech) => (
              <button
                key={tech}
                type="button"
                className={`filter-pill ${activeTech === tech ? "is-active" : ""}`}
                onClick={() => setActiveTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="explorer-summary">
          <span>
            Showing {filteredProjects.length} / {featuredProjects.length} featured
            projects
          </span>
          <span>Filter: {activeTech}</span>
        </div>

        <div className="project-stack">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              onSpotlight={() => setSpotlightTitle(project.title)}
            />
          ))}
        </div>
      </div>

      <ProjectSpotlightModal
        open={Boolean(spotlightProject)}
        project={spotlightProject}
        onClose={() => setSpotlightTitle(null)}
      />
    </section>
  );
}
