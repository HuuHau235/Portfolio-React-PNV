import { useTyping } from "../../hooks/useTyping";

export default function TypingText() {
  const text = useTyping([
    "React Developer",
    "Laravel Developer",
    "Full-Stack Engineer",
    "AI Enthusiast",
  ]);
  return <h2 className="typing">{text}</h2>;
}
