import { startTransition, useDeferredValue, useMemo, useState } from "react";
import { supportingProjects } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";

export default function MoreProjects() {
  useReveal();

  const stacks = useMemo(
    () => ["All", ...new Set(supportingProjects.flatMap((project) => project.stack))],
    []
  );
  const [activeStack, setActiveStack] = useState("All");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const visibleProjects = useMemo(() => {
    return supportingProjects.filter((project) => {
      const matchesStack =
        activeStack === "All" || project.stack.includes(activeStack);
      const matchesQuery =
        !deferredQuery.trim() ||
        `${project.title} ${project.summary} ${project.items.join(" ")}`
          .toLowerCase()
          .includes(deferredQuery.toLowerCase());

      return matchesStack && matchesQuery;
    });
  }, [activeStack, deferredQuery]);

  return (
    <section id="more-projects" className="page-section more-projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Page 5</span>
          <h2>More Projects</h2>
          <p>
            Supporting modules and system parts that strengthened product depth,
            user flow and administrative operations.
          </p>
        </div>

        <div className="explorer-toolbar reveal-card">
          <input
            className="explorer-search"
            placeholder="Search modules, admin features, or outcomes..."
            value={query}
            onChange={(event) => {
              const value = event.target.value;
              startTransition(() => setQuery(value));
            }}
          />

          <div className="filter-row">
            {stacks.map((stack) => (
              <button
                key={stack}
                type="button"
                className={`filter-pill ${activeStack === stack ? "is-active" : ""}`}
                onClick={() => setActiveStack(stack)}
              >
                {stack}
              </button>
            ))}
          </div>
        </div>

        <div className="support-grid">
          {visibleProjects.map((project, index) => (
            <article key={project.title} className="support-card reveal-card">
              <span className="support-index">0{index + 3}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="chip-row">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <ul className="bullet-list">
                {project.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="support-focus">{project.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
