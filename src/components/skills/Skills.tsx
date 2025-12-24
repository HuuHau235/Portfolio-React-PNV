import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h3>Skills</h3>
        <div className="skill-grid">
          {skills.map(s => <SkillCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}
