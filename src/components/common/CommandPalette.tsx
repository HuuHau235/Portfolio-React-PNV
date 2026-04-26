import { useEffect, useMemo, useState } from "react";
import { navigation, personal } from "../../data/portfolio";
import { downloadCv } from "../../utils/cvBuilder";

type CommandItem = {
  id: string;
  label: string;
  hint: string;
  run: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const openPalette = () => setOpen(true);

    const onKeyDown = (event: KeyboardEvent) => {
      const isQuickCommand =
        (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (isQuickCommand) {
        event.preventDefault();
        setOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("portfolio:open-palette", openPalette);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("portfolio:open-palette", openPalette);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const commands = useMemo<CommandItem[]>(() => {
    const sectionCommands = navigation.map((item) => ({
      id: item.id,
      label: `Go to ${item.label}`,
      hint: `#${item.id}`,
      run: () => {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    }));

    return [
      ...sectionCommands,
      {
        id: "copy-email",
        label: "Copy email",
        hint: personal.email,
        run: () => {
          navigator.clipboard.writeText(personal.email);
          setOpen(false);
        },
      },
      {
        id: "open-github",
        label: "Open GitHub",
        hint: personal.github,
        run: () => {
          window.open(`https://${personal.github}`, "_blank", "noopener,noreferrer");
          setOpen(false);
        },
      },
      {
        id: "open-linkedin",
        label: "Open LinkedIn",
        hint: personal.linkedin,
        run: () => {
          window.open(
            `https://${personal.linkedin}`,
            "_blank",
            "noopener,noreferrer"
          );
          setOpen(false);
        },
      },
      {
        id: "toggle-theme",
        label: "Toggle theme",
        hint: "Light / Dark",
        run: () => {
          window.dispatchEvent(new Event("portfolio:toggle-theme"));
          setOpen(false);
        },
      },
      {
        id: "print",
        label: "Print portfolio",
        hint: "Save as PDF",
        run: () => {
          window.print();
          setOpen(false);
        },
      },
      {
        id: "download-cv",
        label: "Download CV",
        hint: "HTML resume export",
        run: () => {
          downloadCv();
          setOpen(false);
        },
      },
    ];
  }, []);

  const filteredCommands = commands.filter((item) => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return true;
    }

    return `${item.label} ${item.hint}`.toLowerCase().includes(normalizedQuery);
  });

  if (!open) {
    return null;
  }

  return (
    <div className="command-palette-shell" onClick={() => setOpen(false)}>
      <div className="command-palette" onClick={(event) => event.stopPropagation()}>
        <div className="command-topline">
          <strong>Quick Actions</strong>
          <span>Ctrl/Cmd + K</span>
        </div>

        <input
          autoFocus
          className="command-input"
          placeholder="Search sections, links, actions..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <div className="command-results">
          {filteredCommands.map((item) => (
            <button
              key={item.id}
              type="button"
              className="command-item"
              onClick={item.run}
            >
              <span>{item.label}</span>
              <small>{item.hint}</small>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
