import { navigation, personal } from "../../data/portfolio";

export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="container nav-inner">
        <a href="#cover" className="brand-mark">
          <span className="brand-dot" />
          <span>{personal.name}</span>
        </a>

        <div className="nav-links">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
