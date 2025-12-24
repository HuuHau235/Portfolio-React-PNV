export default function SkillCard({ title, items }: any) {
  return (
    <div className="skill-card">
      <h4>{title}</h4>
      <ul>
        {items.map((s: any) => (
          <li key={s.name}>{s.name} {s.level}%</li>
        ))}
      </ul>
    </div>
  );
}
