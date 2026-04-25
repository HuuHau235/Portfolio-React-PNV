import { useKonami } from "../../hooks/useKonami";

export default function Toast() {
  useKonami(() => {
    document.body.style.filter = "hue-rotate(180deg)";
    window.alert("Portfolio accent mode activated.");
  });

  return <div id="toast" aria-hidden="true" />;
}
