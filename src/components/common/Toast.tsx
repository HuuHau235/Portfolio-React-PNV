import { useKonami } from "../../hooks/useKonami";

export default function Toast() {
  useKonami(() => {
    document.body.style.filter = "hue-rotate(180deg)";
    alert("🎮 Konami Mode Activated!");
  });

  return <div id="toast"></div>;
}
