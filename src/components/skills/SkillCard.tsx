type SkillCardProps = {
  title: string;
  caption: string;
  items: string[];
};

export default function SkillCard({ title, caption, items }: SkillCardProps) {
  return (
    <article className="skill-card reveal-card">
      <h3>{title}</h3>
      <p>{caption}</p>
      <ul className="bullet-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
