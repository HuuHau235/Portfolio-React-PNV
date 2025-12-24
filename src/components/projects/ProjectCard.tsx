export default function ProjectCard({ title, desc, tech, tasks }: any) {
  return (
    <div className="project-card">
      <h4>{title}</h4>
      <p className="project-desc">{desc}</p>

      <div className="project-details">
        <div>
          <h5>Technologies</h5>
          <ul>{tech.map((t: string) => <li key={t}>{t}</li>)}</ul>
        </div>
        <div>
          <h5>Responsibilities</h5>
          <ul>{tasks.map((t: string) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
