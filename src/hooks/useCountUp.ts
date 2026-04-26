import { useEffect, useState } from "react";

export function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(target * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration, target]);

  return count;
}
