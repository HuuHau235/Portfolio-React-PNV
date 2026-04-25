import {
  developmentStrengths,
  skills,
  softSkills,
} from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";
import SkillCard from "./SkillCard";

export default function Skills() {
  useReveal();

  return (
    <section id="skills" className="page-section skills">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Page 3</span>
          <h2>Skills & Tools</h2>
          <p>
            Technical capability across frontend, backend, database design and
            product delivery workflow.
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>

        <div className="dual-panel">
          <div className="panel-card">
            <h3>Development Strengths</h3>
            <ul className="bullet-list">
              {developmentStrengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel-card">
            <h3>Soft Skills</h3>
            <ul className="bullet-list">
              {softSkills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
