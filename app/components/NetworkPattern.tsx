"use client";

import { useEffect, useId, useRef } from "react";
import styles from "../styles/networkPattern.module.scss";

type NetworkPatternProps = {
  className?: string;
};

// #4a90d9/#2e6fb8/#bfe0ff mirror $cobalt-bright/$cobalt/a near-white cobalt
// tint from app/styles/_index.scss — SVG attributes can't reference Sass
// variables, so the hex values are duplicated here. Nodes get the brighter
// cobalt (they need the most contrast as the pulsing focal points); links
// use the dimmer cobalt since they're already thinned out by dashing + 0.6
// opacity; traveling pulses get the near-white tint so they read as the
// "hottest" point on the network.
//
// Depth is simulated with three named layers (far/mid/near) rather than a
// real 3D engine: each layer gets its own parallax drift (driven by
// --px/--py, updated from pointer position), plus a blur/opacity/glow ramp
// so near nodes read sharp and lit, far nodes read soft and dim — the
// classic two-cue depth trick (defocus + parallax) without any WebGL.

type Layer = "far" | "mid" | "near";

type NetNode = { x: number; y: number; r: number; delay: number; layer: Layer };

const nodes: NetNode[] = [
  { x: 90, y: 80, r: 3.5, delay: 0, layer: "near" },
  { x: 230, y: 40, r: 2.6, delay: 0.6, layer: "mid" },
  { x: 340, y: 150, r: 4, delay: 1.2, layer: "near" },
  { x: 180, y: 190, r: 2.6, delay: 1.8, layer: "mid" },
  { x: 460, y: 70, r: 3, delay: 0.3, layer: "mid" },
  { x: 520, y: 200, r: 1.8, delay: 2.1, layer: "far" },
  { x: 410, y: 260, r: 3.5, delay: 0.9, layer: "near" },
  { x: 60, y: 220, r: 1.8, delay: 1.5, layer: "far" },
  { x: 300, y: 30, r: 1.6, delay: 2.4, layer: "far" },
  { x: 570, y: 110, r: 3, delay: 1.8, layer: "mid" },
  { x: 130, y: 260, r: 1.6, delay: 0.4, layer: "far" },
  { x: 400, y: 15, r: 1.5, delay: 1.1, layer: "far" },
  { x: 250, y: 125, r: 1.7, delay: 2, layer: "far" },
  { x: 555, y: 25, r: 1.5, delay: 0.7, layer: "far" },
];

type NetLink = { a: number; b: number; layer: Layer };

const links: NetLink[] = [
  { a: 0, b: 1, layer: "mid" },
  { a: 1, b: 2, layer: "mid" },
  { a: 2, b: 3, layer: "mid" },
  { a: 3, b: 0, layer: "near" },
  { a: 2, b: 4, layer: "mid" },
  { a: 4, b: 5, layer: "far" },
  { a: 5, b: 6, layer: "far" },
  { a: 6, b: 2, layer: "near" },
  { a: 0, b: 7, layer: "far" },
  { a: 7, b: 3, layer: "far" },
  { a: 1, b: 8, layer: "far" },
  { a: 4, b: 9, layer: "mid" },
  { a: 9, b: 5, layer: "far" },
  { a: 7, b: 10, layer: "far" },
  { a: 8, b: 11, layer: "far" },
  { a: 1, b: 12, layer: "far" },
  { a: 9, b: 13, layer: "far" },
];

const layerOrder: Layer[] = ["far", "mid", "near"];

const NetworkPattern = ({ className = "" }: NetworkPatternProps) => {
  const uid = useId().replace(/[:]/g, "");
  const svgRef = useRef<SVGSVGElement>(null);

  const layerClass: Record<Layer, string> = {
    far: styles.layerFar,
    mid: styles.layerMid,
    near: styles.layerNear,
  };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        svg.style.setProperty("--px", ((event.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        svg.style.setProperty("--py", ((event.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`${styles.pattern} ${className}`}
      viewBox="0 0 620 300"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`np-scan-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a90d9" stopOpacity="0" />
          <stop offset="50%" stopColor="#bfe0ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4a90d9" stopOpacity="0" />
        </linearGradient>
      </defs>

      {layerOrder.map((layer) => (
        <g key={layer} className={layerClass[layer]}>
          {links
            .filter((link) => link.layer === layer)
            .map((link, index) => {
              const a = nodes[link.a];
              const b = nodes[link.b];
              const pathId = `np-path-${uid}-${link.a}-${link.b}`;
              return (
                <g key={pathId}>
                  <line
                    className={styles.link}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="#2e6fb8"
                    style={{ animationDelay: `${index * 0.35}s` }}
                  />
                  <path id={pathId} d={`M${a.x},${a.y} L${b.x},${b.y}`} fill="none" />
                  <circle r={1.4} className={styles.pulse} fill="#bfe0ff">
                    <animateMotion
                      dur={`${4 + (index % 3)}s`}
                      begin={`${index * 0.5}s`}
                      repeatCount="indefinite"
                    >
                      <mpath href={`#${pathId}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}
          {nodes
            .filter((node) => node.layer === layer)
            .map((node) => (
              <circle
                key={`${node.x}-${node.y}`}
                className={styles.node}
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="#4a90d9"
                style={{ animationDelay: `${node.delay}s` }}
              />
            ))}
        </g>
      ))}

      <rect
        className={styles.scan}
        x="-40"
        y="-90"
        width="700"
        height="90"
        fill={`url(#np-scan-${uid})`}
      />
    </svg>
  );
};

export default NetworkPattern;
