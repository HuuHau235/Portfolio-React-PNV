import { useTyping } from "../../hooks/useTyping";

const typingWords = [
  "Full-Stack Developer Intern",
  "Information Technology Student",
  "ReactJS and Laravel Builder",
  "AI-Driven Product Explorer",
];

export default function TypingText() {
  const text = useTyping(typingWords);
  return <h2 className="typing">{text}</h2>;
}
