import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

export default function AmbientBackdrop() {
  const [position, setPosition] = useState({ x: 50, y: 18 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      className="ambient-backdrop"
      aria-hidden="true"
      style={
        {
          "--cursor-x": `${position.x}%`,
          "--cursor-y": `${position.y}%`,
        } as CSSProperties
      }
    />
  );
}
