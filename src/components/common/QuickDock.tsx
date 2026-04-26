import { quickActions } from "../../data/portfolio";

export default function QuickDock() {
  return (
    <div className="quick-dock">
      {quickActions.map((action) => (
        <a key={action.label} href={action.target} className="quick-dock-item">
          {action.label}
        </a>
      ))}
      <button
        type="button"
        className="quick-dock-item"
        onClick={() => window.dispatchEvent(new Event("portfolio:open-palette"))}
      >
        Command
      </button>
    </div>
  );
}
