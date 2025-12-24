import { useEffect } from "react";

export function useKonami(cb: () => void) {
  useEffect(() => {
    let keys: string[] = [];
    const code = [
      "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
      "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"
    ];

    const handler = (e: KeyboardEvent) => {
      keys.push(e.key);
      keys.splice(-code.length - 1, keys.length - code.length);
      if (code.every((v, i) => v === keys[i])) cb();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
}
