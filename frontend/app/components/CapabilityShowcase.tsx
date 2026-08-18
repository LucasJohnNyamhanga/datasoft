import styles from "../styles/capabilityShowcase.module.scss";

// A bespoke, per-capability dashboard mockup — a real SaaS product shell
// (icon sidebar, app header with search/notifications/avatar, live-sync
// footer) reused across all four capabilities, so the "Uwezo Wetu" items
// read as four dashboards a client could actually be handed rather than a
// code-editor chrome or a flat services grid.

type Kind = "system" | "app" | "website" | "brand";

const statTiles: {
  label: string;
  value: string;
  trend: { value: string; direction: "up" | "down" };
  icon: "wallet" | "users";
}[] = [
  { label: "Mauzo Leo", value: "TZS 4.2M", trend: { value: "12%", direction: "up" }, icon: "wallet" },
  { label: "Wateja Wapya", value: "128", trend: { value: "8%", direction: "up" }, icon: "users" },
];

const monthlyTarget = 76;

const tableRows: { client: string; item: string; status: string }[] = [
  { client: "J. Mushi", item: "Kiti cha Ofisi", status: "Imelipwa" },
  { client: "A. Kway", item: "Meza ya Mkutano", status: "Inasindika" },
  { client: "F. Ndosi", item: "Kabati la Faili", status: "Imekamilika" },
];

const statusTone: Record<string, "done" | "active"> = {
  Imelipwa: "done",
  Inasindika: "active",
  Imekamilika: "done",
};

const getInitials = (name: string) =>
  name
    .replace(/\./g, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const trendValues = [32, 58, 40, 72, 50, 86, 62];

// Builds a lightly smoothed SVG line (cubic bezier through each segment's
// midpoint) rather than a jagged polyline, so the chart reads as a real
// analytics line instead of connected dots.
const buildLinePath = (values: number[], width = 100, height = 40, padTop = 5, padBottom = 3) => {
  const stepX = width / (values.length - 1);
  const points = values.map((v, i) => ({
    x: i * stepX,
    y: padTop + (1 - v / 100) * (height - padTop - padBottom),
  }));
  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midX = (p0.x + p1.x) / 2;
    d += ` C ${midX},${p0.y} ${midX},${p1.y} ${p1.x},${p1.y}`;
  }
  return { d, points, height };
};

const products = [
  { name: "Kiatu cha Ngozi", price: "45,000" },
  { name: "Mkoba wa Kazi", price: "72,000" },
  { name: "Saa ya Mkono", price: "128,000" },
];

const phoneTrendValues = [38, 52, 46, 68, 58, 84];

const rowIconClasses = ["phoneRowIcon0", "phoneRowIcon1", "phoneRowIcon2"] as const;

type TabKind = "home" | "grid" | "cart" | "profile";

const tabItems: { kind: TabKind; active?: boolean }[] = [
  { kind: "home", active: true },
  { kind: "grid" },
  { kind: "cart" },
  { kind: "profile" },
];

// Generic stroke-only glyphs (no borrowed icon set) so the tab bar reads as
// a real navigation row rather than four identical placeholder dots.
const TabIcon = ({ kind }: { kind: TabKind }) => {
  switch (kind) {
    case "home":
      return (
        <svg className={styles.tabIconSvg} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 11.5 12 4.5 20 11.5" />
          <path d="M6.5 10 V19 H17.5 V10" />
        </svg>
      );
    case "grid":
      return (
        <svg className={styles.tabIconSvg} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="6" height="6" rx="1.4" />
          <rect x="14" y="4" width="6" height="6" rx="1.4" />
          <rect x="4" y="14" width="6" height="6" rx="1.4" />
          <rect x="14" y="14" width="6" height="6" rx="1.4" />
        </svg>
      );
    case "cart":
      return (
        <svg className={styles.tabIconSvg} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 7 H19 L17.3 15.5 A2 2 0 0 1 15.3 17 H8.7 A2 2 0 0 1 6.7 15.5 Z" />
          <circle cx="9.5" cy="20" r="1.3" />
          <circle cx="15.5" cy="20" r="1.3" />
        </svg>
      );
    case "profile":
      return (
        <svg className={styles.tabIconSvg} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8.5" r="3.2" />
          <path d="M5 20c0-4 3.2-6.5 7-6.5S19 16 19 20" />
        </svg>
      );
  }
};

const swatches = ["#6AE4FF", "#34EDB3", "#00D1FF", "#CDD0D6"];

// A softly blurred, out-of-focus dashboard panel behind the phone in the
// "app" mock — reinforcing that every capability here is dashboard-shaped,
// rendered as a depth-of-field backdrop rather than a flat placeholder.
const DashboardGhost = () => {
  const { d, points, height } = buildLinePath(phoneTrendValues, 100, 34, 4, 3);
  const last = points[points.length - 1];
  const areaD = `${d} L ${last.x},${height} L 0,${height} Z`;

  return (
    <div className={styles.dashGhost} aria-hidden="true">
      <div className={styles.dashGhostStats}>
        <div className={styles.dashGhostStat}>
          <span className={styles.dashGhostStatValue}>TZS 2.1M</span>
          <span className={styles.dashGhostStatLabel}>Wiki Hii</span>
        </div>
        <div className={styles.dashGhostStat}>
          <span className={styles.dashGhostStatValue}>312</span>
          <span className={styles.dashGhostStatLabel}>Oda Mpya</span>
        </div>
      </div>
      <svg className={styles.dashGhostChart} viewBox={`0 0 100 ${height}`} preserveAspectRatio="none">
        <path className={styles.dashGhostArea} d={areaD} />
        <path className={styles.dashGhostLine} d={d} fill="none" />
      </svg>
    </div>
  );
};

const StatTrend = ({ value, direction }: { value: string; direction: "up" | "down" }) => (
  <span
    className={`${styles.statTrend} ${direction === "up" ? styles.statTrendUp : styles.statTrendDown}`}
  >
    <svg className={styles.statTrendIcon} viewBox="0 0 10 10" aria-hidden="true">
      {direction === "up" ? (
        <path d="M5 1.4 L9 7.6 L1 7.6 Z" />
      ) : (
        <path d="M5 8.6 L1 2.4 L9 2.4 Z" />
      )}
    </svg>
    {value}
  </span>
);

const RingTile = ({ percent, label }: { percent: number; label: string }) => {
  const r = 15.5;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - percent / 100);
  return (
    <div className={styles.ringTile}>
      <div className={styles.ringGraphic}>
        <svg className={styles.ringSvg} viewBox="0 0 36 36" aria-hidden="true">
          <circle className={styles.ringTrack} cx="18" cy="18" r={r} />
          <circle
            className={styles.ringProgress}
            cx="18"
            cy="18"
            r={r}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <span className={styles.ringValue}>{percent}%</span>
      </div>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

const ChartPanel = () => {
  const { d, points, height } = buildLinePath(trendValues);
  const last = points[points.length - 1];
  const areaD = `${d} L ${last.x},${height} L 0,${height} Z`;

  return (
    <div className={styles.chartPanel}>
      <div className={styles.chartHead}>
        <span className={styles.chartTitle}>Mwenendo wa Mauzo</span>
        <StatTrend value="24%" direction="up" />
      </div>
      <svg className={styles.chartSvg} viewBox={`0 0 100 ${height}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="capabilityAreaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--ide-accent-2)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="var(--ide-accent-2)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            className={styles.chartGrid}
            x1={0}
            x2={100}
            y1={height * f}
            y2={height * f}
          />
        ))}
        <path className={styles.chartArea} d={areaD} fill="url(#capabilityAreaFill)" />
        <path className={styles.chartLine} d={d} fill="none" />
        <circle className={styles.chartDot} cx={last.x} cy={last.y} r={2.6} />
      </svg>
    </div>
  );
};

// ---- Stat tile leading icons ----------------------------------------------

const WalletGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
    <path d="M15.5 12.2h2.3" />
    <path d="M4 8V6.6A1.6 1.6 0 0 1 5.6 5h9.9" />
  </svg>
);

const UsersGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3.5 19c.6-3.4 3-5.2 5.5-5.2s4.9 1.8 5.5 5.2" />
    <circle cx="17" cy="9.5" r="2.3" />
    <path d="M15.8 13.6c2 .1 3.7 1.7 4.2 4.4" />
  </svg>
);

const statIcons: Record<"wallet" | "users", () => React.ReactElement> = {
  wallet: WalletGlyph,
  users: UsersGlyph,
};

const SystemMock = () => (
  <div className={styles.sysBody}>
    <div className={styles.statRow}>
      {statTiles.map((s) => {
        const StatIcon = statIcons[s.icon];
        return (
          <div className={styles.statTile} key={s.label}>
            <span className={styles.statIconChip}>
              <StatIcon />
            </span>
            <div className={styles.statTileBody}>
              <span className={styles.statValue}>{s.value}</span>
              <StatTrend value={s.trend.value} direction={s.trend.direction} />
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          </div>
        );
      })}
      <RingTile percent={monthlyTarget} label="Lengo la Mwezi" />
    </div>
    <div className={styles.sysTable}>
      <div className={styles.sysRowHead}>
        <span>Mteja</span>
        <span>Bidhaa</span>
        <span>Hali</span>
      </div>
      {tableRows.map((r) => {
        const tone = statusTone[r.status];
        return (
          <div className={styles.sysRow} key={r.client}>
            <span className={styles.sysClient}>
              <span className={styles.avatarChip}>{getInitials(r.client)}</span>
              <span className={styles.sysClientName}>{r.client}</span>
            </span>
            <span>{r.item}</span>
            <span className={styles.sysStatus}>
              <span
                className={`${styles.statusPill} ${
                  tone === "active" ? styles.statusPillActive : styles.statusPillDone
                }`}
              >
                {tone === "active" && <span className={styles.liveDot} />}
                {r.status}
              </span>
            </span>
          </div>
        );
      })}
    </div>
    <ChartPanel />
  </div>
);

const AppMock = () => {
  const { d: sparkD, points: sparkPoints, height: sparkH } = buildLinePath(
    phoneTrendValues,
    52,
    20,
    2,
    2
  );
  const sparkLast = sparkPoints[sparkPoints.length - 1];
  const sparkAreaD = `${sparkD} L ${sparkLast.x},${sparkH} L 0,${sparkH} Z`;

  return (
    <div className={styles.appBody}>
      <DashboardGhost />
      <div className={styles.phone}>
        <span className={styles.phoneVolumeUp} />
        <span className={styles.phoneVolumeDown} />
        <span className={styles.phonePower} />
        <div className={styles.phoneScreen}>
          <span className={styles.phoneIsland} />
          <div className={styles.phoneStatusBar}>
            <span className={styles.phoneClock}>9:41</span>
            <div className={styles.phoneStatusIcons}>
              <svg className={styles.signalIcon} viewBox="0 0 16 12" aria-hidden="true">
                <rect x="0" y="7" width="2.6" height="5" rx="0.5" />
                <rect x="4.2" y="5" width="2.6" height="7" rx="0.5" />
                <rect x="8.4" y="3" width="2.6" height="9" rx="0.5" />
                <rect x="12.6" y="0" width="2.6" height="12" rx="0.5" />
              </svg>
              <svg className={styles.wifiIcon} viewBox="0 0 16 12" aria-hidden="true">
                <path d="M1.6 4.6a8.6 8.6 0 0 1 12.8 0" />
                <path d="M4 7.3a4.9 4.9 0 0 1 8 0" />
                <circle cx="8" cy="10.2" r="1.05" />
              </svg>
              <span className={styles.batteryIcon}>
                <span className={styles.batteryFill} />
              </span>
            </div>
          </div>

          <div className={styles.phoneAppHeader}>
            <span className={styles.phoneAppIcon}>D</span>
            <span className={styles.phoneAppTitle}>Duka Langu</span>
            <span className={styles.phoneBell}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 4.5a4.3 4.3 0 0 0-4.3 4.3v2.6c0 .8-.32 1.56-.9 2.13L5.6 14.7a1 1 0 0 0 .7 1.7h11.4a1 1 0 0 0 .7-1.7l-1.2-1.17a3 3 0 0 1-.9-2.13V8.8A4.3 4.3 0 0 0 12 4.5Z" />
                <path d="M10.2 18.2a1.9 1.9 0 0 0 3.6 0" />
              </svg>
              <span className={styles.bellDot} />
            </span>
          </div>

          <div className={styles.phoneStatCard}>
            <div className={styles.phoneStatCardText}>
              <span className={styles.phoneStatCardLabel}>Mauzo ya Wiki</span>
              <span className={styles.phoneStatCardValue}>TZS 842K</span>
              <StatTrend value="18%" direction="up" />
            </div>
            <svg
              className={styles.phoneSparkline}
              viewBox={`0 0 52 ${sparkH}`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="phoneSparkFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--ide-accent-2)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--ide-accent-2)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={sparkAreaD} fill="url(#phoneSparkFill)" />
              <path className={styles.phoneSparklineLine} d={sparkD} fill="none" />
              <circle
                className={styles.phoneSparklineDot}
                cx={sparkLast.x}
                cy={sparkLast.y}
                r="1.7"
              />
            </svg>
          </div>

          <div className={styles.phoneList}>
            {products.map((p, i) => (
              <div className={styles.phoneRow} key={p.name}>
                <span className={`${styles.phoneRowIcon} ${styles[rowIconClasses[i % rowIconClasses.length]]}`} />
                <span className={styles.phoneName}>{p.name}</span>
                <span className={styles.phonePrice}>{p.price}</span>
                <span className={styles.phoneAddBtn}>+</span>
              </div>
            ))}
          </div>

          <div className={styles.phoneCartBar}>
            <span className={styles.phoneCartIcon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 7 H19 L17.3 15.5 A2 2 0 0 1 15.3 17 H8.7 A2 2 0 0 1 6.7 15.5 Z" />
                <circle cx="9.5" cy="20" r="1.3" />
                <circle cx="15.5" cy="20" r="1.3" />
              </svg>
              <span className={styles.phoneCartBadge}>3</span>
            </span>
            <span className={styles.phoneCartText}>
              <span className={styles.phoneCartLabel}>Jumla ya Kikapu</span>
              <span className={styles.phoneCartValue}>TZS 245,000</span>
            </span>
            <span className={styles.phoneCartArrow}>&rarr;</span>
          </div>

          <div className={styles.phoneTabBar}>
            {tabItems.map((t) => (
              <span
                key={t.kind}
                className={`${styles.tabIcon} ${t.active ? styles.tabIconActive : ""}`}
              >
                <TabIcon kind={t.kind} />
              </span>
            ))}
          </div>

          <span className={styles.phoneHomeIndicator} />
        </div>
      </div>
    </div>
  );
};

const webNavLinks = ["Nyumbani", "Bidhaa", "Kuhusu"];

const WebsiteMock = () => (
  <div className={styles.webBody}>
    <div className={styles.webNav}>
      <span className={styles.webWordmark}>Biasharayako</span>
      <div className={styles.webNavLinks}>
        {webNavLinks.map((label) => (
          <span className={styles.webNavLink} key={label}>
            {label}
          </span>
        ))}
      </div>
      <span className={styles.webNavCta}>Agiza Sasa</span>
    </div>
    <div className={styles.webHero}>
      <div className={styles.webHeroCopy}>
        <span className={styles.webEyebrow}>Mkusanyiko Mpya</span>
        <h4 className={styles.webHeadline}>
          Ubora wa <em>Kifahari</em> Kila Wakati
        </h4>
        <span className={styles.webParagraph} />
        <span className={styles.webParagraph} style={{ width: "72%" }} />
        <span className={styles.webButton}>Gundua Zaidi</span>
      </div>
      <div className={styles.webHeroImage}>
        <span className={styles.webImageBadge}>Mpya</span>
      </div>
    </div>
    <div className={styles.webBadge}>
      <span className={styles.webScore}>98</span>
      <span className={styles.webBadgeLabel}>Kasi ya Juu</span>
      <span className={styles.webBadgeSub}>SEO Imara</span>
    </div>
  </div>
);

// DataSoft's own brain mark (public/brainer.svg — the unadorned line-art
// variant, no wordmark rectangle) traced inline so its two lobes can be
// recolored to the showcase's own gold/cobalt accent pair instead of the
// mark's default green/maroon, and so it can glow and float like a real
// artboard centerpiece rather than sitting as a flat placeholder blob.
const BrainMark = () => (
  <svg className={styles.brainMark} viewBox="0 0 56.95 56.95" aria-hidden="true">
    <g transform="translate(-3.73 -5.63)">
      <g className={styles.brainAccentGold} strokeWidth={3}>
        <path d="M43.19,35.82a5.58,5.58,0,0,0,4.14,1.71,5.79,5.79,0,0,0,4.15-1.71,5.61,5.61,0,0,0,1.71-4.15,5.86,5.86,0,0,0-10-4.15" />
        <path d="M47.33,25.93a5.05,5.05,0,0,0,.86-2.8,4.89,4.89,0,0,0-4.88-4.88,5.23,5.23,0,0,0-2.69.73" />
        <path d="M42.94,18.25A4.32,4.32,0,0,0,38.67,14a4.24,4.24,0,0,0-4.27,4.27V50.46a3.17,3.17,0,0,0,3.17,3.29,3.28,3.28,0,0,0,3.3-3.29,2.79,2.79,0,0,0-.49-1.71" />
        <path d="M44.53,45.58a5,5,0,0,0,2.32.49,5.42,5.42,0,0,0,5.37-5.37,5.48,5.48,0,0,0-1.83-4" />
        <path d="M40.5,50.34a4.91,4.91,0,0,0,2.69.73,5.21,5.21,0,0,0,5.24-5.25" />
        <path d="M37.7,34.23a4.63,4.63,0,0,1,4.63-4.63" />
        <path d="M39.89,45.94a4.63,4.63,0,0,0-4.63-4.63" />
        <path d="M32.21,60.59a26.48,26.48,0,0,1,0-53" strokeWidth={4} />
      </g>
      <g className={styles.brainAccentCobalt} strokeWidth={3}>
        <path d="M21.71,35.82a5.61,5.61,0,0,1-4.15,1.71,5.78,5.78,0,0,1-4.14-1.71,5.61,5.61,0,0,1-1.71-4.15,5.86,5.86,0,0,1,10-4.15" />
        <path d="M17.56,25.93a5.13,5.13,0,0,1-.85-2.8,4.89,4.89,0,0,1,4.88-4.88,5.17,5.17,0,0,1,2.68.73" />
        <path d="M22,18.25a4.27,4.27,0,0,1,8.54,0V50.46a3.17,3.17,0,0,1-3.17,3.29A3.28,3.28,0,0,1,24,50.46a2.79,2.79,0,0,1,.49-1.71" />
        <path d="M20.37,45.58a5,5,0,0,1-2.32.49,5.42,5.42,0,0,1-5.37-5.37,5.48,5.48,0,0,1,1.83-4" />
        <path d="M24.4,50.34a4.93,4.93,0,0,1-2.69.73,5.2,5.2,0,0,1-5.24-5.25" />
        <path d="M25.49,28.13a4.64,4.64,0,0,1,4.64-4.64" />
        <path d="M22.08,44.24a4.76,4.76,0,0,1,4.76-4.76" />
        <path d="M32.21,7.63a26.48,26.48,0,0,1,0,53" strokeWidth={4} strokeDasharray="2" />
      </g>
    </g>
  </svg>
);

const BrandMock = () => (
  <div className={styles.brandBody}>
    <div className={styles.toolRail}>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className={styles.toolIcon} />
      ))}
    </div>
    <div className={styles.artboard}>
      <span className={styles.logoMark}>
        <BrainMark />
      </span>
      <span className={styles.wordmark} />
      <div className={styles.swatchRow}>
        {swatches.map((c) => (
          <span key={c} className={styles.swatch} style={{ background: c }} />
        ))}
      </div>
    </div>
    <div className={styles.cardPreview}>
      <span className={styles.cardLine} />
      <span className={styles.cardLine} style={{ width: "55%" }} />
    </div>
  </div>
);

const appNames: Record<Kind, string> = {
  system: "Dashibodi ya Mauzo",
  app: "Duka Langu",
  website: "Biasharayako",
  brand: "Studio ya Chapa",
};

const avatarInitials: Record<Kind, string> = {
  system: "TM",
  app: "DL",
  website: "BY",
  brand: "DS",
};

const bodies: Record<Kind, React.ReactNode> = {
  system: <SystemMock />,
  app: <AppMock />,
  website: <WebsiteMock />,
  brand: <BrandMock />,
};

// ---- Header app-icon glyph per kind ---------------------------------------
// Small stroke-only glyphs (no borrowed icon set) so the header tile reads
// as a real product mark rather than a generic file-type icon.

const GaugeGlyph = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 15a8 8 0 1 1 16 0" />
    <path d="M12 15 16 9" />
    <path d="M12 15h.01" />
  </svg>
);

const PhoneGlyph = () => (
  <svg viewBox="0 0 24 24">
    <rect x="7" y="3" width="10" height="18" rx="2.2" />
    <path d="M11 18h2" />
  </svg>
);

const GlobeGlyph = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8.4" />
    <path d="M3.6 12h16.8" />
    <path d="M12 3.6a13 13 0 0 1 0 16.8" />
    <path d="M12 3.6a13 13 0 0 0 0 16.8" />
  </svg>
);

const BrushGlyph = () => (
  <svg viewBox="0 0 24 24">
    <path d="M15.5 4.5 19.5 8.5 10 18 5 19l1-5Z" />
    <path d="M14 6 18 10" />
  </svg>
);

const headerGlyphs: Record<Kind, () => React.ReactElement> = {
  system: GaugeGlyph,
  app: PhoneGlyph,
  website: GlobeGlyph,
  brand: BrushGlyph,
};

// ---- Sidebar (persistent icon rail, real dashboard nav) -------------------

const OverviewIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="4" width="7" height="7" rx="1.6" />
    <rect x="13" y="4" width="7" height="7" rx="1.6" />
    <rect x="4" y="13" width="7" height="7" rx="1.6" />
    <rect x="13" y="13" width="7" height="7" rx="1.6" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 20V10" />
    <path d="M11 20V4" />
    <path d="M18 20v-7" />
  </svg>
);

const ClientsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9" cy="8.3" r="3" />
    <path d="M3.4 19c.6-3.3 2.9-5 5.6-5s5 1.7 5.6 5" />
    <circle cx="17.3" cy="9.2" r="2.2" />
    <path d="M16.1 14.3c2 .2 3.5 1.8 3.9 4.3" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="2.7" />
    <path d="M12 4.2v2.1M12 17.7v2.1M4.2 12h2.1M17.7 12h2.1M6.7 6.7l1.5 1.5M15.8 15.8l1.5 1.5M17.3 6.7l-1.5 1.5M8.2 15.8l-1.5 1.5" />
  </svg>
);

const sidebarIcons = [OverviewIcon, AnalyticsIcon, ClientsIcon, SettingsIcon];

const Sidebar = () => (
  <div className={styles.sidebar}>
    {sidebarIcons.map((Icon, i) => (
      <span
        key={i}
        className={`${styles.sidebarIcon} ${i === 0 ? styles.sidebarIconActive : ""}`}
      >
        <Icon />
      </span>
    ))}
  </div>
);

const BellIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4.5a4.3 4.3 0 0 0-4.3 4.3v2.6c0 .8-.32 1.56-.9 2.13L5.6 14.7a1 1 0 0 0 .7 1.7h11.4a1 1 0 0 0 .7-1.7l-1.2-1.17a3 3 0 0 1-.9-2.13V8.8A4.3 4.3 0 0 0 12 4.5Z" />
    <path d="M10.2 18.2a1.9 1.9 0 0 0 3.6 0" />
  </svg>
);

// ---- Live-sync footer (replaces a code editor's lint/branch status bar) --

const syncLabels: Record<Kind, string> = {
  system: "Data imesasishwa sasa hivi",
  app: "Mauzo yanasasishwa papo hapo",
  website: "Trafiki ya tovuti, muda halisi",
  brand: "Imehifadhiwa kiotomatiki",
};

const SyncFooter = ({ kind }: { kind: Kind }) => (
  <div className={styles.syncBar}>
    <span className={styles.syncDot} />
    <span className={styles.syncText}>{syncLabels[kind]}</span>
  </div>
);

type CapabilityShowcaseProps = {
  kind: Kind;
};

const CapabilityShowcase = ({ kind }: CapabilityShowcaseProps) => {
  const HeaderGlyph = headerGlyphs[kind];
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.titleBar}>
        <span className={styles.appIconTile}>
          <HeaderGlyph />
        </span>
        <span className={styles.appName}>{appNames[kind]}</span>
        <div className={styles.titleSpacer} />
        <span className={styles.headerBell}>
          <BellIcon />
          <span className={styles.bellDot} />
        </span>
        <span className={styles.headerAvatar}>{avatarInitials[kind]}</span>
      </div>
      <div className={styles.body}>
        <Sidebar />
        <div className={styles.bodyContent}>{bodies[kind]}</div>
      </div>
      <SyncFooter kind={kind} />
    </div>
  );
};

export default CapabilityShowcase;
