import styles from "../styles/cityNetworkMap.module.scss";

// A procedurally generated top-down city map — GTA-minimap style streets and
// rooftops — overlaid with DataSoft's own fiber network: house-to-house
// links snapped onto real rooftops, with one home's interior floor plan
// zoomed in to show the network actually reaching inside a room. Stands in
// for the hero photo on desktop. Colors are plain hex (SVG attributes can't
// reference Sass variables); they mirror $cobalt/$cobalt-bright,
// $sapphire-raised/$sapphire-line, $brass/$brass-bright/$brass-dim, $bone
// and $maroon-bright (the HQ node + its radar sweep) from app/styles/_index.scss.

type House = { x: number; y: number; w: number; h: number; cx: number; cy: number; opacity: number; chimney: boolean; connected: boolean };
type NodeSeed = { x: number; y: number };

const WIDTH = 960;
const HEIGHT = 600;

const streetsX = [90, 206, 322, 437, 553, 669, 784, 900];
const streetsY = [60, 160, 260, 360, 460, 560];

// Deterministic PRNG (mulberry32) — fixed seed so the layout is identical on
// every render, server and client alike. No Math.random: that would produce
// a different city on each hydration pass and desync the SSR/CSR markup.
function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(1337);

// Each street cell holds a 2x2 cluster of individual house plots — small
// rooftops rather than office blocks, so the map reads as a residential
// grid the fiber network can run house to house across.
const houses: House[] = [];
for (let r = 0; r < streetsY.length - 1; r++) {
  for (let c = 0; c < streetsX.length - 1; c++) {
    const cellX0 = streetsX[c];
    const cellX1 = streetsX[c + 1];
    const cellY0 = streetsY[r];
    const cellY1 = streetsY[r + 1];
    const subW = (cellX1 - cellX0) / 2;
    const subH = (cellY1 - cellY0) / 2;

    for (let sr = 0; sr < 2; sr++) {
      for (let sc = 0; sc < 2; sc++) {
        if (rand() < 0.26) continue; // an open lot — keeps the grid from feeling airless

        const plotX0 = cellX0 + sc * subW;
        const plotY0 = cellY0 + sr * subH;
        const pad = 5 + rand() * 5;
        const x = plotX0 + pad;
        const y = plotY0 + pad;
        const w = subW - pad * 2;
        const h = subH - pad * 2;

        houses.push({
          x,
          y,
          w,
          h,
          cx: x + w / 2,
          cy: y + h / 2,
          opacity: 0.2 + rand() * 0.26,
          chimney: w > 16 && h > 16 && rand() < 0.35,
          connected: false,
        });
      }
    }
  }
}

// DataSoft's own fiber graph, seeded at street intersections then snapped
// onto the nearest rooftop below so every glowing node sits on an actual
// house — a literal "house to house" network, not a floating overlay.
// Index 3 is the HQ hub — bigger node, gold pin, radar sweep, and the
// featured interior floor plan.
const nodeSeeds: NodeSeed[] = [
  { x: 206, y: 160 },
  { x: 322, y: 60 },
  { x: 669, y: 160 },
  { x: 553, y: 260 }, // HQ
  { x: 784, y: 260 },
  { x: 206, y: 360 },
  { x: 437, y: 360 },
  { x: 669, y: 360 },
  { x: 784, y: 360 },
  { x: 322, y: 460 },
  { x: 553, y: 460 },
  { x: 784, y: 460 },
  { x: 90, y: 260 },
];
const HQ_INDEX = 3;

const nodes: NodeSeed[] = nodeSeeds.map((seed) => {
  let nearest = -1;
  let nearestDist = Infinity;
  houses.forEach((house, i) => {
    const d = (house.cx - seed.x) ** 2 + (house.cy - seed.y) ** 2;
    if (d < nearestDist) {
      nearestDist = d;
      nearest = i;
    }
  });
  if (nearest === -1 || nearestDist > 90 * 90) return seed;
  houses[nearest].connected = true;
  return { x: houses[nearest].cx, y: houses[nearest].cy };
});

const links: [number, number][] = [
  [3, 0], [3, 1], [3, 2], [3, 4], [3, 6], [3, 10],
  [2, 4], [4, 8], [8, 11],
  [6, 5], [5, 12],
  [6, 9], [9, 10], [10, 11],
  [1, 2],
];

const corners: [number, number][] = [
  [26, 26],
  [WIDTH - 26, 26],
  [26, HEIGHT - 26],
  [WIDTH - 26, HEIGHT - 26],
];

// Featured interior floor plan — HQ's own home network, zoomed in and
// leader-lined back down to its rooftop pin on the map. Kept close to the
// viewBox's x-center (960 wide → center 480) since `preserveAspectRatio=
// "xMidYMid slice"` crops symmetrically around that center on every screen
// size, from ultra-wide desktop down to a narrow phone — an off-center
// placement would survive desktop but get cropped off on phones. Nudged
// right of dead-center so it clears the text card, which occupies roughly
// the left half of the canvas on desktop.
const PLAN = { x: 480, y: 78, w: 150, h: 112 };
const planWallX = PLAN.x + PLAN.w * 0.42;
const planWallY = PLAN.y + PLAN.h * 0.52;
const planRouter = { x: PLAN.x + PLAN.w * 0.22, y: PLAN.y + PLAN.h * 0.5 };

type CityNetworkMapProps = {
  className?: string;
};

const CityNetworkMap = ({ className = "" }: CityNetworkMapProps) => {
  const hq = nodes[HQ_INDEX];

  return (
    <svg
      className={`${styles.map} ${className}`}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="citymap-grid" width="18" height="18" patternUnits="userSpaceOnUse">
          <path d="M18 0 L0 0 0 18" fill="none" stroke="#e9dfc4" strokeWidth="0.5" />
        </pattern>
        <radialGradient id="citymap-radar" cx="0%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#c9455f" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#c9455f" stopOpacity="0" />
        </radialGradient>
        <filter id="citymap-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x={0} y={0} width={WIDTH} height={HEIGHT} fill="url(#citymap-grid)" opacity={0.5} />

      <path
        className={styles.ocean}
        d="M960,600 L500,600 C560,560 540,500 600,470 C680,430 660,360 740,340 C820,320 840,260 900,250 C930,245 945,230 960,210 Z"
      />
      <path
        className={styles.shoreline}
        d="M500,600 C560,560 540,500 600,470 C680,430 660,360 740,340 C820,320 840,260 900,250 C930,245 945,230 960,210"
      />

      {streetsX.map((x) => (
        <line key={`v${x}`} className={styles.street} x1={x} y1={0} x2={x} y2={HEIGHT} />
      ))}
      {streetsY.map((y) => (
        <line key={`h${y}`} className={styles.street} x1={0} y1={y} x2={WIDTH} y2={y} />
      ))}

      <line className={styles.boulevard} x1={70} y1={520} x2={920} y2={50} />

      {houses.map((house, i) => (
        <g key={i}>
          <rect
            className={house.connected ? styles.houseConnected : styles.house}
            x={house.x}
            y={house.y}
            width={Math.max(house.w, 2)}
            height={Math.max(house.h, 2)}
            style={{ opacity: house.connected ? house.opacity + 0.22 : house.opacity }}
          />
          <line
            className={styles.roofRidge}
            x1={house.w >= house.h ? house.x : house.cx}
            y1={house.w >= house.h ? house.cy : house.y}
            x2={house.w >= house.h ? house.x + house.w : house.cx}
            y2={house.w >= house.h ? house.cy : house.y + house.h}
          />
          {house.chimney && (
            <rect className={styles.chimney} x={house.x + house.w - 6} y={house.y + 2} width={3} height={3} />
          )}
        </g>
      ))}

      {links.map(([a, b], i) => (
        <line
          key={`link-${a}-${b}`}
          className={styles.link}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}

      <path
        className={styles.radar}
        d={`M${hq.x},${hq.y} L${hq.x + 170},${hq.y - 55} A170,170 0 0 1 ${hq.x + 170},${hq.y + 55} Z`}
        fill="url(#citymap-radar)"
        style={{ transformOrigin: `${hq.x}px ${hq.y}px` }}
      />

      {nodes.map((n, i) =>
        i === HQ_INDEX ? null : (
          <circle
            key={i}
            className={styles.node}
            cx={n.x}
            cy={n.y}
            r={3.2}
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        )
      )}

      <g filter="url(#citymap-glow)">
        <circle className={styles.hqNode} cx={hq.x} cy={hq.y} r={6} />
        <path className={styles.hqPin} d={`M${hq.x},${hq.y - 34} l7,12 h-14 z`} />
      </g>

      {/* Leader line from the HQ rooftop up to its zoomed interior floor plan */}
      <path
        className={styles.leader}
        d={`M${hq.x},${hq.y} C${hq.x - 30},${hq.y - 70} ${planRouter.x - 20},${planRouter.y + 60} ${planRouter.x},${planRouter.y}`}
      />

      <g>
        <rect x={PLAN.x} y={PLAN.y} width={PLAN.w} height={PLAN.h} rx={4} className={styles.planFill} />
        <rect x={PLAN.x} y={PLAN.y} width={PLAN.w} height={PLAN.h} rx={4} className={styles.planOutline} />

        {/* dividing wall with a doorway gap */}
        <line className={styles.planWall} x1={planWallX} y1={PLAN.y} x2={planWallX} y2={PLAN.y + PLAN.h * 0.32} />
        <line className={styles.planWall} x1={planWallX} y1={PLAN.y + PLAN.h * 0.62} x2={planWallX} y2={PLAN.y + PLAN.h} />
        <line className={styles.planWall} x1={planWallX} y1={planWallY} x2={PLAN.x + PLAN.w} y2={planWallY} />

        {[
          [PLAN.x, PLAN.y],
          [PLAN.x + PLAN.w, PLAN.y],
          [PLAN.x, PLAN.y + PLAN.h],
          [PLAN.x + PLAN.w, PLAN.y + PLAN.h],
        ].map(([x, y], i) => (
          <g key={`plan-corner-${i}`} className={styles.corner}>
            <line x1={x - 7} y1={y} x2={x + 7} y2={y} />
            <line x1={x} y1={y - 7} x2={x} y2={y + 7} />
          </g>
        ))}

        <circle className={styles.routerDot} cx={planRouter.x} cy={planRouter.y} r={2.6} />
        <circle className={styles.routerRing} cx={planRouter.x} cy={planRouter.y} r={9} />
        <circle className={styles.routerRing} cx={planRouter.x} cy={planRouter.y} r={16} style={{ animationDelay: "0.6s" }} />
      </g>

      {corners.map(([x, y], i) => (
        <g key={`corner-${i}`} className={styles.corner}>
          <line x1={x - 10} y1={y} x2={x + 10} y2={y} />
          <line x1={x} y1={y - 10} x2={x} y2={y + 10} />
        </g>
      ))}
    </svg>
  );
};

export default CityNetworkMap;
