import styles from "../styles/graphicsStudio.module.scss";

// A Photoshop-style IDE mockup — menu bar, toolbox, canvas and a real
// layers panel — built with the same dark glass "device" chrome as the
// Hero's CodeEditor, so the Graphics service reads as a working design
// studio rather than a stock photo. The canvas composes an actual poster
// (headline, price badge, product block, CTA) out of the same layers
// listed on the right, and everything is named in Kiswahili the way
// CodeEditor names its files — a poster DataSoft is visibly building for
// a client, not a generic mockup.

type ToolId = "move" | "marquee" | "lasso" | "text" | "brush" | "eyedropper" | "crop" | "hand";

const tools: { id: ToolId; active?: boolean; path: React.ReactNode }[] = [
  {
    id: "move",
    active: true,
    path: (
      <path
        d="M12 3v18M3 12h18M7 7l-4 5 4 5M17 7l4 5-4 5M7 17l-4-5 4-5M17 17l4-5-4-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "marquee",
    path: <rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2.4 2.2" />,
  },
  {
    id: "lasso",
    path: (
      <path
        d="M12 4c-4.5 0-8 2.6-8 6.1 0 3 2.7 5.4 6.4 5.9-.5.6-.8 1.2-.8 1.8 0 1.2 1.1 2.2 2.6 2.2 1.3 0 2.3-.8 2.3-1.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    id: "text",
    path: (
      <path
        d="M6 5h12M12 5v14M9 19h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    id: "brush",
    path: (
      <path
        d="M15.5 4.5 19 8l-7.4 7.4c-.6.6-1.4 1-2.3 1H6l.6-3.3c.1-.9.5-1.7 1-2.3L15.5 4.5Z M5 20c1.4 0 2.6-1 2.9-2.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    id: "eyedropper",
    path: (
      <path
        d="m5 19 3.4-1 8-8-2.4-2.4-8 8-1 3.4ZM14.8 6.6l2.6-2.6a1.7 1.7 0 0 1 2.4 2.4l-2.6 2.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    id: "crop",
    path: (
      <path
        d="M7 3v14a1 1 0 0 0 1 1h14M17 21V7a1 1 0 0 0-1-1H3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    id: "hand",
    path: (
      <path
        d="M8 12.5V6a1.4 1.4 0 1 1 2.8 0v5M10.8 11V4.6a1.4 1.4 0 1 1 2.8 0V11M13.6 11.2V6a1.4 1.4 0 1 1 2.8 0v7.6M16.4 12l1-1a1.5 1.5 0 0 1 2.4 1.8l-2.6 4.4A5 5 0 0 1 13 20h-1.6a5 5 0 0 1-4-2l-2.6-3.5a1.4 1.4 0 0 1 2.2-1.7l1 1.1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

type LayerRow = {
  name: string;
  thumb: "cta" | "price" | "headline" | "logo" | "photo";
  visible?: boolean;
  locked?: boolean;
  active?: boolean;
};

const layers: LayerRow[] = [
  { name: "Kitufe cha Wito", thumb: "cta", visible: true, active: true },
  { name: "Bei Maalum", thumb: "price", visible: true },
  { name: "Kichwa cha Habari", thumb: "headline", visible: true },
  { name: "Nembo", thumb: "logo", visible: true },
  { name: "Picha ya Bidhaa", thumb: "photo", visible: true, locked: true },
];

const swatches = ["#f0c550", "#d4a017", "#591421", "#0d2c4e", "#fbf6e7"];

const rulerTicksH = Array.from({ length: 20 }, (_, i) => i);
const rulerTicksV = Array.from({ length: 12 }, (_, i) => i);

const EyeIcon = ({ off }: { off?: boolean }) =>
  off ? (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M3 3l18 18M10.6 10.7a2.4 2.4 0 0 0 3.3 3.3M6.2 6.5C4 8 2.5 10 2 12c1.6 4.2 5.6 7 10 7 1.6 0 3.1-.4 4.5-1.1M9.9 4.2A10.6 10.6 0 0 1 12 4c4.4 0 8.4 2.8 10 7-.5 1.3-1.3 2.5-2.2 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M2 12c1.6-4.2 5.6-7 10-7s8.4 2.8 10 7c-1.6 4.2-5.6 7-10 7s-8.4-2.8-10-7Z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );

const LayerThumb = ({ kind }: { kind: LayerRow["thumb"] }) => (
  <span className={`${styles.layerThumb} ${styles[`thumb-${kind}`]}`} />
);

const GraphicsStudio = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${styles.window} ${className}`} aria-hidden="true">
      <div className={styles.titleBar}>
        <div className={styles.trafficLights}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.titleText}>kampeni-poster.psd — DataSoft Studio</div>
        <div className={styles.titleSpacer} />
      </div>

      <div className={styles.menuBar}>
        {["File", "Edit", "Image", "Layer", "Type", "Select", "Filter", "View"].map((m) => (
          <span key={m} className={styles.menuItem}>
            {m}
          </span>
        ))}
      </div>

      <div className={styles.body}>
        <div className={styles.toolbox}>
          {tools.map((tool) => (
            <span key={tool.id} className={`${styles.toolIcon} ${tool.active ? styles.toolActive : ""}`}>
              <svg viewBox="0 0 24 24" fill="none">
                {tool.path}
              </svg>
            </span>
          ))}
        </div>

        <div className={styles.canvasWrap}>
          <div className={styles.rulerH}>
            {rulerTicksH.map((i) => (
              <span key={i} className={styles.tickH} />
            ))}
          </div>
          <div className={styles.canvasRow}>
            <div className={styles.rulerV}>
              {rulerTicksV.map((i) => (
                <span key={i} className={styles.tickV} />
              ))}
            </div>

            <div className={styles.canvas}>
              <div className={styles.posterBg} />
              <div className={styles.posterPhoto} />

              <span className={styles.posterLogo}>DS</span>

              <div className={styles.posterHeadlineWrap}>
                <span className={styles.selectionBox}>
                  <span className={styles.posterEyebrow}>Mkusanyiko Mpya</span>
                  <span className={styles.posterHeadline}>OFA MAALUM</span>
                </span>
                <span className={styles.posterSub}>Punguzo kwa bidhaa zote wiki hii</span>
              </div>

              <span className={styles.posterPriceBadge}>
                <em>30%</em>
                punguzo
              </span>

              <span className={styles.posterCta}>Nunua Sasa</span>

              <span className={styles.cropHandle} data-pos="tl" />
              <span className={styles.cropHandle} data-pos="tr" />
              <span className={styles.cropHandle} data-pos="bl" />
              <span className={styles.cropHandle} data-pos="br" />
            </div>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.panelSection}>
            <div className={styles.panelHeader}>Rangi</div>
            <div className={styles.swatchRow}>
              {swatches.map((c) => (
                <span key={c} className={styles.swatch} style={{ background: c }} />
              ))}
            </div>
            <div className={styles.opacityRow}>
              <span>Opacity</span>
              <div className={styles.opacityTrack}>
                <span className={styles.opacityFill} />
              </div>
              <span>100%</span>
            </div>
          </div>

          <div className={styles.panelSection}>
            <div className={styles.panelHeader}>Tabaka (Layers)</div>
            <div className={styles.layerList}>
              {layers.map((layer) => (
                <div
                  key={layer.name}
                  className={`${styles.layerRow} ${layer.active ? styles.layerRowActive : ""}`}
                >
                  <span className={styles.eyeIcon}>
                    <EyeIcon off={!layer.visible} />
                  </span>
                  <LayerThumb kind={layer.thumb} />
                  <span className={styles.layerLabel}>{layer.name}</span>
                  {layer.locked && <span className={styles.lockIcon} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span className={styles.statusItem}>100%</span>
          <span className={styles.statusItem}>1080 × 1350 px</span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.statusItem}>RGB/8</span>
          <span className={styles.statusItem}>CC 2026</span>
        </div>
      </div>
    </div>
  );
};

export default GraphicsStudio;
