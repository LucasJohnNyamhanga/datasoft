import styles from "../styles/networkTopology.module.scss";

// A packet-tracer style LAN map — the Networking page's answer to the
// Hero's CodeEditor window: same dark glass "device" chrome (title bar,
// traffic lights, status bar), but instead of typing code it plays a
// looping simulation of small "packets" travelling along the wires between
// a router, a switch, a WiFi access point, and a handful of office
// endpoints — router/switch/PC/printer/server/AP/laptop — so the panel
// reads as a live view of how the network actually moves data.

type NodeKind = "cloud" | "router" | "switch" | "pc" | "printer" | "server" | "ap" | "laptop";

type NetNode = {
  id: string;
  kind: NodeKind;
  x: number;
  y: number;
  label: string;
};

const nodes: NetNode[] = [
  { id: "cloud", kind: "cloud", x: 240, y: 24, label: "INTERNET" },
  { id: "router", kind: "router", x: 240, y: 92, label: "ROUTER" },
  { id: "switch", kind: "switch", x: 190, y: 168, label: "SWITCH" },
  { id: "ap", kind: "ap", x: 400, y: 150, label: "WIFI-AP" },
  { id: "pc1", kind: "pc", x: 60, y: 252, label: "PC-01" },
  { id: "pc2", kind: "pc", x: 150, y: 252, label: "PC-02" },
  { id: "printer", kind: "printer", x: 240, y: 252, label: "PRINTER" },
  { id: "server", kind: "server", x: 330, y: 252, label: "SERVER" },
  { id: "laptop", kind: "laptop", x: 420, y: 252, label: "LAPTOP" },
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

type Link = { from: string; to: string; wireless?: boolean };

const links: Link[] = [
  { from: "cloud", to: "router" },
  { from: "router", to: "switch" },
  { from: "router", to: "ap" },
  { from: "switch", to: "pc1" },
  { from: "switch", to: "pc2" },
  { from: "switch", to: "printer" },
  { from: "switch", to: "server" },
  { from: "ap", to: "laptop", wireless: true },
];

const elbow = (x1: number, y1: number, x2: number, y2: number) => {
  if (x1 === x2 || y1 === y2) return `M${x1},${y1} L${x2},${y2}`;
  const midY = y1 + (y2 - y1) * 0.55;
  return `M${x1},${y1} L${x1},${midY} L${x2},${midY} L${x2},${y2}`;
};

// Deterministic per-link timing so packets stay in sync across renders —
// no Math.random, matching CodeEditor's approach to a looping mockup.
const linkTimings = links.map((link, i) => ({
  downDur: 2.4 + (i % 3) * 0.3,
  downDelay: i * 0.35,
  upDur: 2.8 + (i % 4) * 0.25,
  upDelay: 0.9 + i * 0.4,
}));

const NodeIcon = ({ kind }: { kind: NodeKind }) => {
  switch (kind) {
    case "cloud":
      return (
        <path
          d="M-9,3 a5,5 0 0 1 1.2,-9.8 a6.5,6.5 0 0 1 12.4,-1.4 a5,5 0 0 1 1.4,9.9 Z"
          fill="none"
          strokeWidth="1.6"
        />
      );
    case "router":
      return (
        <>
          <rect x="-11" y="-6" width="22" height="12" rx="2.5" fill="none" strokeWidth="1.6" />
          <path d="M-5,-6 v-4 M0,-6 v-4 M5,-6 v-4" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="7" cy="0" r="1.1" fill="currentColor" stroke="none" />
        </>
      );
    case "switch":
      return (
        <>
          <rect x="-12" y="-5.5" width="24" height="11" rx="2" fill="none" strokeWidth="1.6" />
          {[-8, -3.5, 1, 5.5, 10].map((x) => (
            <rect key={x} x={x - 0.9} y="1" width="1.8" height="2.4" fill="currentColor" stroke="none" />
          ))}
        </>
      );
    case "pc":
      return (
        <>
          <rect x="-9" y="-7" width="18" height="12" rx="1.5" fill="none" strokeWidth="1.6" />
          <path d="M-5,8 h10 M0,5 v3" strokeWidth="1.4" strokeLinecap="round" />
        </>
      );
    case "printer":
      return (
        <>
          <rect x="-9" y="-3" width="18" height="9" rx="1.5" fill="none" strokeWidth="1.6" />
          <path d="M-6,-3 v-5 h12 v5" fill="none" strokeWidth="1.6" strokeLinejoin="round" />
          <rect x="-5" y="6" width="10" height="4" fill="none" strokeWidth="1.4" />
        </>
      );
    case "server":
      return (
        <>
          <rect x="-8" y="-9" width="16" height="18" rx="1.5" fill="none" strokeWidth="1.6" />
          <path d="M-8,-3 h16 M-8,3 h16" strokeWidth="1.2" />
          <circle cx="4" cy="-6" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="4" cy="0" r="0.9" fill="currentColor" stroke="none" />
        </>
      );
    case "ap":
      return (
        <>
          <path d="M-7,3 a10,10 0 0 1 14,0" fill="none" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M-4,5.5 a6,6 0 0 1 8,0" fill="none" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="0" cy="8" r="1.3" fill="currentColor" stroke="none" />
        </>
      );
    case "laptop":
      return (
        <>
          <rect x="-8" y="-7" width="16" height="10" rx="1.2" fill="none" strokeWidth="1.6" />
          <path d="M-11,7 h22 l-2.5,-2.5 h-17 Z" fill="none" strokeWidth="1.4" strokeLinejoin="round" />
        </>
      );
    default:
      return null;
  }
};

type NetworkTopologyProps = {
  className?: string;
  title: string;
  statusNetwork: string;
  statusDevices: string;
  statusLink: string;
};

const NetworkTopology = ({ className = "", title, statusNetwork, statusDevices, statusLink }: NetworkTopologyProps) => {
  return (
    <div className={`${styles.window} ${className}`} aria-hidden="true">
      <div className={styles.titleBar}>
        <div className={styles.trafficLights}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.titleText}>{title}</div>
        <div className={styles.titleSpacer} />
      </div>

      <div className={styles.body}>
        <svg className={styles.canvas} viewBox="0 0 480 300" fill="none" preserveAspectRatio="xMidYMid meet">
          {links.map((link, i) => {
            const a = nodeMap[link.from];
            const b = nodeMap[link.to];
            const d = elbow(a.x, a.y, b.x, b.y);
            const dReverse = elbow(b.x, b.y, a.x, a.y);
            const timing = linkTimings[i];

            return (
              <g key={`${link.from}-${link.to}`}>
                <path
                  d={d}
                  className={link.wireless ? styles.wireLinkWireless : styles.wireLink}
                  fill="none"
                />
                <circle r="2.6" className={styles.packetDown}>
                  <animateMotion
                    path={d}
                    dur={`${timing.downDur}s`}
                    begin={`${timing.downDelay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="2.2" className={styles.packetUp}>
                  <animateMotion
                    path={dReverse}
                    dur={`${timing.upDur}s`}
                    begin={`${timing.upDelay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {nodes.map((node) => (
            <g key={node.id} className={styles.node} transform={`translate(${node.x}, ${node.y})`}>
              <circle r="15" className={styles.nodeRing} />
              <g className={styles.nodeGlyph}>
                <NodeIcon kind={node.kind} />
              </g>
              <text y="27" className={styles.nodeLabel} textAnchor="middle">
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span className={styles.statusItem}>
            <span className={styles.liveDot} />
            {statusNetwork}
          </span>
          <span className={styles.statusItem}>{statusDevices}</span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.statusItem}>{statusLink}</span>
          <span className={styles.statusItem}>
            <span className={`${styles.legendDot} ${styles.legendDown}`} /> in
          </span>
          <span className={styles.statusItem}>
            <span className={`${styles.legendDot} ${styles.legendUp}`} /> out
          </span>
        </div>
      </div>
    </div>
  );
};

export default NetworkTopology;
