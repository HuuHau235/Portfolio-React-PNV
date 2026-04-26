import ImpactCounter from "../common/ImpactCounter";
import { achievements, community, quickFacts } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";

export default function Achievements() {
  useReveal();

  return (
    <section id="achievements" className="page-section achievements">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Page 7</span>
          <h2>Achievements & Community</h2>
          <p>
            A snapshot of delivery experience, collaboration habits and the kind
            of environments I want to contribute to next.
          </p>
        </div>

        <div className="impact-grid">
          {quickFacts.map((item) => (
            <ImpactCounter key={item.label} {...item} />
          ))}
        </div>

        <div className="achievement-grid">
          <div className="panel-card">
            <h3>Achievements</h3>
            <ul className="bullet-list">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel-card">
            <h3>Community & Collaboration</h3>
            <ul className="bullet-list">
              {community.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
