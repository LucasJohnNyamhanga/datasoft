"use client";
import { useEffect, useRef, useState } from "react";

type StatValueProps = {
  value: string;
  duration?: number;
};

// Animates the numeric portion of a stat string (e.g. "Masaa 48", "100%")
// from 0 up to its target once scrolled into view, leaving surrounding
// text untouched. Falls back to the static value when there's no number
// to animate or the visitor prefers reduced motion.

const NUMBER_PATTERN = /\d+(\.\d+)?/;

const StatValue = ({ value, duration = 1000 }: StatValueProps) => {
  const match = value.match(NUMBER_PATTERN);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || match.index == null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const node = ref.current;
    if (!node) return;

    const target = parseFloat(match[0]);
    const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + match[0].length);

    setDisplay(`${prefix}${(0).toFixed(decimals)}${suffix}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
};

export default StatValue;
