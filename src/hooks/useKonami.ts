import { useEffect } from "react";

export function useKonami(cb: () => void) {
  useEffect(() => {
    const keys: string[] = [];
    const code = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];

    const handler = (event: KeyboardEvent) => {
      keys.push(event.key);
      keys.splice(-code.length - 1, keys.length - code.length);
      if (code.every((value, index) => value === keys[index])) {
        cb();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [cb]);
}
