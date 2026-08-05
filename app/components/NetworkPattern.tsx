import styles from "../styles/networkPattern.module.scss";

type NetworkPatternProps = {
  className?: string;
};

// #c9455f/#591421 mirror $maroon-bright/$maroon from app/styles/_index.scss —
// SVG attributes can't reference Sass variables, so the hex values are
// duplicated here.

const nodes = [
  { x: 90, y: 80, r: 3.5, delay: 0 },
  { x: 230, y: 40, r: 2.5, delay: 0.6 },
  { x: 340, y: 150, r: 4, delay: 1.2 },
  { x: 180, y: 190, r: 2.5, delay: 1.8 },
  { x: 460, y: 70, r: 3, delay: 0.3 },
  { x: 520, y: 200, r: 2.5, delay: 2.1 },
  { x: 410, y: 260, r: 3.5, delay: 0.9 },
  { x: 60, y: 220, r: 2.5, delay: 1.5 },
  { x: 300, y: 30, r: 2, delay: 2.4 },
  { x: 570, y: 110, r: 3, delay: 1.8 },
];

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [2, 4],
  [4, 5],
  [5, 6],
  [6, 2],
  [0, 7],
  [7, 3],
  [1, 8],
  [4, 9],
  [9, 5],
];

const NetworkPattern = ({ className = "" }: NetworkPatternProps) => {
  return (
    <svg
      className={`${styles.pattern} ${className}`}
      viewBox="0 0 620 300"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {links.map(([a, b], index) => (
        <line
          key={`${a}-${b}`}
          className={styles.link}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#c9455f"
          style={{ animationDelay: `${index * 0.35}s` }}
        />
      ))}
      {nodes.map((node, index) => (
        <circle
          key={index}
          className={styles.node}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill="#591421"
          style={{ animationDelay: `${node.delay}s` }}
        />
      ))}
    </svg>
  );
};

export default NetworkPattern;
