import { useState } from "react";
import { navigation, personal } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCloseMenu = () => setMobileOpen(false);

  return (
    <nav className="site-nav">
      <div className={`container nav-inner ${mobileOpen ? "menu-open" : ""}`}>
        <a href="#cover" className="brand-mark" onClick={handleCloseMenu}>
          <span className="brand-dot" />
          <span>{personal.name}</span>
        </a>

        <button
          type="button"
          className={`nav-toggle ${mobileOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${mobileOpen ? "is-open" : ""}`}>
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              onClick={handleCloseMenu}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className={`nav-actions ${mobileOpen ? "is-open" : ""}`}>
          <span className="nav-status">Viewing {activeSection}</span>
          <button
            type="button"
            className="command-trigger"
            onClick={() => {
              window.dispatchEvent(new Event("portfolio:open-palette"));
              handleCloseMenu();
            }}
          >
            Quick Actions
          </button>
        </div>
      </div>
    </nav>
  );
}
