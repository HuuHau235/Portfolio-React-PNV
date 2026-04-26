import { useCountUp } from "../../hooks/useCountUp";

type ImpactCounterProps = {
  value: number;
  suffix: string;
  label: string;
};

export default function ImpactCounter({
  value,
  suffix,
  label,
}: ImpactCounterProps) {
  const count = useCountUp(value);

  return (
    <div className="impact-counter reveal-card">
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}
