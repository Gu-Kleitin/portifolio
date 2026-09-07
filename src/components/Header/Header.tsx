import { useEffect, useState } from "react";
import "../../styles/header.css";

const NAV_ITEMS = [
  { id: "sobre", label: "sobre" },
  { id: "projetos", label: "projetos" },
  { id: "habilidades", label: "habilidades" },
  { id: "formacao", label: "formação" },
  { id: "contato", label: "contato" },
];

export default function Header() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");

    const setActive = () => {
      let current = "";
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) current = sec.id;
      });
      setActiveId(current);
    };

    document.addEventListener("scroll", setActive, { passive: true });
    setActive();

    return () => document.removeEventListener("scroll", setActive);
  }, []);

  return (
    <header>
      <nav className="nav">
        <a href="#inicio" className="brand">
          gustavo<span>.</span>oliveira
        </a>
        <ul className="navlinks">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeId === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}