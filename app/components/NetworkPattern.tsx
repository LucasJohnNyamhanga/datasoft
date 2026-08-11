"use client";

import { useEffect, useId, useRef, useState } from "react";
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
type NetLink = { a: number; b: number; layer: Layer };
type Vec3 = { x: number; y: number; z: number };

// Nodes are points on a tilted sphere's surface (a Fibonacci sphere —
// equal-area spiral placement, no polar clustering) projected to 2D, so the
// pattern reads as a globe rather than a flat ring. Depth comes straight
// from each point's rotated z: nodes facing the viewer land in the "near"
// layer (biggest, brightest, most parallax drift) and nodes wrapping toward
// the back fade into "far" — the sphere itself, not an arbitrary index.
const NODE_COUNT = 32;
const SPHERE_CENTER = { x: 471, y: 127 };
const SPHERE_RADIUS = 210;
const TILT_DEG = 25; // classic three-quarter globe viewing angle
const NEIGHBOR_COUNT = 3; // nearest-neighbor edges per node on the sphere surface

// SMIL animateMotion runs on the main thread, not the compositor, so it's the
// single most expensive primitive in this component — capped at a fixed
// count instead of "every near-layer edge" so cost doesn't scale with
// NODE_COUNT and stays predictable on low-end hardware.
const MAX_PULSES = 8;

// Devices that report few cores, little memory, or an explicit "save data"
// preference get the same pulse budget the reduced-motion path already
// uses for the rest of the site — animateMotion is main-thread SMIL, so
// it's the first thing to trim for lower-end hardware.
const LOW_POWER_MAX_PULSES = 2;

const detectLowPower = () => {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean };
  };
  if (nav.connection?.saveData) return true;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4) return true;
  if (typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4) return true;
  return false;
};

const radiusByLayer: Record<Layer, number> = { near: 3.6, mid: 2.6, far: 1.7 };
const layerPriority: Record<Layer, number> = { near: 2, mid: 1, far: 0 };
const strongerLayer = (a: Layer, b: Layer): Layer =>
  layerPriority[a] >= layerPriority[b] ? a : b;
const layerForZ = (z: number): Layer => (z > 0.3 ? "near" : z > -0.3 ? "mid" : "far");

const goldenAngle = Math.PI * (3 - Math.sqrt(5));
const spherePoints: Vec3[] = Array.from({ length: NODE_COUNT }, (_, i) => {
  const y = 1 - (i / (NODE_COUNT - 1)) * 2;
  const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = goldenAngle * i;
  return { x: Math.cos(theta) * radiusAtY, y, z: Math.sin(theta) * radiusAtY };
});

const tilt = (TILT_DEG * Math.PI) / 180;
const rotatedPoints: Vec3[] = spherePoints.map(({ x, y, z }) => ({
  x,
  y: y * Math.cos(tilt) - z * Math.sin(tilt),
  z: y * Math.sin(tilt) + z * Math.cos(tilt),
}));

// Rounded to 2dp so the SSR-rendered attribute string and the client's
// post-hydration recomputation always match byte-for-byte — Math.cos/sin
// can differ from the server's V8 by a single ULP, which is invisible at
// this coordinate scale but produces a different shortest-round-trip
// toString() and trips React's hydration mismatch check.
const round2 = (n: number) => Math.round(n * 100) / 100;

const nodes: NetNode[] = rotatedPoints.map(({ x, y, z }, i) => {
  const layer = layerForZ(z);
  return {
    x: round2(SPHERE_CENTER.x + SPHERE_RADIUS * x),
    y: round2(SPHERE_CENTER.y + SPHERE_RADIUS * y),
    r: radiusByLayer[layer],
    delay: (i / (NODE_COUNT - 1)) * 2.4,
    layer,
  };
});

// Edges join each node to its NEIGHBOR_COUNT closest points on the sphere's
// surface (3D distance, not screen distance) — a proper geodesic-ish mesh
// instead of lines that happen to look right after projection.
const sqDist = (a: Vec3, b: Vec3) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2;

const links: NetLink[] = (() => {
  const seen = new Set<string>();
  const result: NetLink[] = [];
  spherePoints.forEach((point, i) => {
    spherePoints
      .map((other, j) => ({ j, d: sqDist(point, other) }))
      .filter(({ j }) => j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, NEIGHBOR_COUNT)
      .forEach(({ j }) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (seen.has(key)) return;
        seen.add(key);
        result.push({ a: i, b: j, layer: strongerLayer(nodes[i].layer, nodes[j].layer) });
      });
  });
  return result;
})();

const layerOrder: Layer[] = ["far", "mid", "near"];

const NetworkPattern = ({ className = "" }: NetworkPatternProps) => {
  const uid = useId().replace(/[:]/g, "");
  const svgRef = useRef<SVGSVGElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const [pulseLimit, setPulseLimit] = useState(MAX_PULSES);

  const layerClass: Record<Layer, string> = {
    far: styles.layerFar,
    mid: styles.layerMid,
    near: styles.layerNear,
  };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Lower-end hardware (few cores, little RAM, or an explicit
    // save-data request) keeps the pattern but drops the two costliest
    // main-thread bits: the drop-shadow/blur filter stack (recomputed on
    // every paint the scale-pulse keyframe drives) and most of the
    // animateMotion pulses. Read once — device tier doesn't change mid-session.
    if (detectLowPower()) {
      svg.dataset.lowPower = "true";
      if (glassRef.current) glassRef.current.dataset.lowPower = "true";
      setPulseLimit(LOW_POWER_MAX_PULSES);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Hover parallax is a desktop-only flourish — skip subscribing at all on
    // coarse/touch pointers, which is disproportionately the "lower-end
    // hardware" this is meant to go easy on.
    const canHover = window.matchMedia("(pointer: fine)").matches;

    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        svg.style.setProperty("--px", ((event.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        svg.style.setProperty("--py", ((event.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    };

    // The pattern is often scrolled far out of view (this component is used
    // in up to 8 sections across the site, several of which can share a
    // page). Fully pausing both the SMIL pulses (native pauseAnimations, the
    // only way to stop main-thread SMIL work) and the CSS keyframe
    // animations (via the data-paused attribute) while off-screen means only
    // whatever's actually visible ever costs anything to render.
    // Starts as null (not false) so the very first IntersectionObserver
    // callback always applies — an initial "not intersecting" report is the
    // common case (most instances start off-screen) and must still set
    // data-paused, not get swallowed by the no-op guard below.
    let active: boolean | null = null;
    const setActive = (next: boolean) => {
      if (next === active) return;
      active = next;
      svg.dataset.paused = active ? "false" : "true";
      if (active) {
        svg.unpauseAnimations();
        if (canHover) window.addEventListener("pointermove", handlePointerMove);
      } else {
        svg.pauseAnimations();
        window.removeEventListener("pointermove", handlePointerMove);
        cancelAnimationFrame(frame);
      }
    };

    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      rootMargin: "150px 0px",
    });
    observer.observe(svg);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <svg
        ref={svgRef}
        className={`${styles.pattern} ${className}`}
        viewBox="-418 -230.4 1478 714.8"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
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
                    {/* Pulses (SMIL animateMotion) only run on the first pulseLimit
                        near-layer edges — the busiest/most visible layer — instead of
                        every edge, since node count growth made an animateMotion-per-edge
                        budget too pricey. pulseLimit drops further on low-power devices. */}
                    {layer === "near" && index < pulseLimit && (
                      <>
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
                      </>
                    )}
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
      </svg>
      {/* Frosted pane sits above the animating SVG rather than blurring the SVG
          itself — backdrop-filter reads whatever renders behind it without
          forcing the constantly-animating node/line subtree to be
          re-rasterized as one filtered bitmap on every frame. */}
      <div ref={glassRef} className={styles.glass} aria-hidden="true" />
    </>
  );
};

export default NetworkPattern;
