import styles from "../styles/capabilityShowcase.module.scss";

// A bespoke, per-capability mockup window — reusing the same dark sapphire
// glass "device" chrome as the Hero's CodeEditor (title bar, traffic lights,
// frosted glass) rather than an icon-in-a-card, so the four "Uwezo Wetu"
// items read as four real product artifacts instead of a services grid.

type Kind = "system" | "app" | "website" | "brand";

const statTiles = [
  { label: "Mauzo Leo", value: "TZS 4.2M" },
  { label: "Wateja Wapya", value: "128" },
  { label: "Bidhaa", value: "342" },
];

const tableRows: { client: string; item: string; status: string; live?: boolean }[] = [
  { client: "J. Mushi", item: "Kiti cha Ofisi", status: "Imelipwa" },
  { client: "A. Kway", item: "Meza ya Mkutano", status: "Inasindika", live: true },
  { client: "F. Ndosi", item: "Kabati la Faili", status: "Imekamilika" },
];

const barHeights = [32, 58, 40, 72, 50, 86, 62];

const products = [
  { name: "Kiatu cha Ngozi", price: "45,000" },
  { name: "Mkoba wa Kazi", price: "72,000" },
  { name: "Saa ya Mkono", price: "128,000" },
];

const swatches = ["#D4A017", "#2E6FB8", "#591421", "#F0C550"];

// A miniature VS Code–style editor filling the whole screen behind the
// phone in the "app" mock — rendered fully formed (no typing animation,
// unlike the Hero's CodeEditor) since it's a backdrop detail rather than
// the focal element, and this row sits far enough down the page that a
// slow per-character reveal would still be mid-type when scrolled into view.
type GhostToken = { t: string; c?: "kw" | "type" | "str" };
type GhostLine = { indent: number; toks: GhostToken[] };

const ghostCodeLines: GhostLine[] = [
  {
    indent: 0,
    toks: [
      { t: "import", c: "kw" },
      { t: " { " },
      { t: "Duka", c: "type" },
      { t: " } " },
      { t: "from", c: "kw" },
      { t: " " },
      { t: '"@datasoft/duka"', c: "str" },
      { t: ";" },
    ],
  },
  {
    indent: 0,
    toks: [
      { t: "import", c: "kw" },
      { t: " { " },
      { t: "useSepeti", c: "type" },
      { t: " } " },
      { t: "from", c: "kw" },
      { t: " " },
      { t: '"./sepeti"', c: "str" },
      { t: ";" },
    ],
  },
  { indent: 0, toks: [] },
  {
    indent: 0,
    toks: [
      { t: "export", c: "kw" },
      { t: " " },
      { t: "function", c: "kw" },
      { t: " DukaLangu() {" },
    ],
  },
  { indent: 1, toks: [{ t: "const", c: "kw" }, { t: " bidhaa = duka.orodha();" }] },
  {
    indent: 1,
    toks: [
      { t: "const", c: "kw" },
      { t: " { sepeti, ongeza } = " },
      { t: "useSepeti", c: "type" },
      { t: "();" },
    ],
  },
  { indent: 1, toks: [] },
  { indent: 1, toks: [{ t: "return", c: "kw" }, { t: " (" }] },
  { indent: 2, toks: [{ t: "<Orodha", c: "type" }, { t: ">" }] },
  { indent: 3, toks: [{ t: "{bidhaa.map((b) => (" }] },
  {
    indent: 4,
    toks: [{ t: "<Bidhaa", c: "type" }, { t: " key={b.id} data={b} onOngeza={ongeza} />" }],
  },
  { indent: 3, toks: [{ t: "))}" }] },
  { indent: 2, toks: [{ t: "</Orodha>", c: "type" }] },
  { indent: 2, toks: [{ t: "<LipaSasa", c: "type" }, { t: " jumla={sepeti.jumla} />" }] },
  { indent: 1, toks: [{ t: ");" }] },
  { indent: 0, toks: [{ t: "}" }] },
];

const CodeGhost = () => (
  <div className={styles.codeGhost} aria-hidden="true">
    <div className={styles.codeGhostBar}>
      <span className={styles.ghostDot} />
      <span className={styles.ghostDot} />
      <span className={styles.ghostDot} />
    </div>
    <div className={styles.codeGhostBody}>
      {ghostCodeLines.map((line, i) => (
        <div className={styles.codeGhostLine} key={i}>
          <span className={styles.codeGhostLineNumber}>{i + 1}</span>
          <span className={styles.codeGhostText}>
            {"  ".repeat(line.indent)}
            {line.toks.map((tok, j) => (
              <span key={j} className={tok.c ? styles[tok.c] : undefined}>
                {tok.t}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const SystemMock = () => (
  <div className={styles.sysBody}>
    <div className={styles.statRow}>
      {statTiles.map((s) => (
        <div className={styles.statTile} key={s.label}>
          <span className={styles.statValue}>{s.value}</span>
          <span className={styles.statLabel}>{s.label}</span>
        </div>
      ))}
    </div>
    <div className={styles.sysTable}>
      <div className={styles.sysRowHead}>
        <span>Mteja</span>
        <span>Bidhaa</span>
        <span>Hali</span>
      </div>
      {tableRows.map((r) => (
        <div className={styles.sysRow} key={r.client}>
          <span>{r.client}</span>
          <span>{r.item}</span>
          <span className={styles.sysStatus}>
            {r.live && <span className={styles.liveDot} />}
            {r.status}
          </span>
        </div>
      ))}
    </div>
    <div className={styles.sparkline}>
      {barHeights.map((h, i) => (
        <span key={i} className={styles.sparkBar} style={{ height: `${h}%` }} />
      ))}
    </div>
  </div>
);

const AppMock = () => (
  <div className={styles.appBody}>
    <CodeGhost />
    <div className={styles.phone}>
      <span className={styles.phoneButton} />
      <div className={styles.phoneScreen}>
        <span className={styles.phoneNotch} />
        <div className={styles.phoneHeader}>Duka Langu</div>
        <div className={styles.phoneList}>
          {products.map((p) => (
            <div className={styles.phoneRow} key={p.name}>
              <span className={styles.phoneDot} />
              <span className={styles.phoneName}>{p.name}</span>
              <span className={styles.phonePrice}>{p.price}</span>
            </div>
          ))}
        </div>
        <div className={styles.phoneCta}>Lipa Sasa</div>
      </div>
    </div>
  </div>
);

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

const titles: Record<Kind, string> = {
  system: "mfumo.biashara — dashibodi",
  app: "duka-langu.app",
  website: "biasharayako.co.tz",
  brand: "datasoft-logo.psd",
};

const bodies: Record<Kind, React.ReactNode> = {
  system: <SystemMock />,
  app: <AppMock />,
  website: <WebsiteMock />,
  brand: <BrandMock />,
};

type CapabilityShowcaseProps = {
  kind: Kind;
};

const CapabilityShowcase = ({ kind }: CapabilityShowcaseProps) => {
  return (
    <div className={styles.window} aria-hidden="true">
      <div className={styles.titleBar}>
        <div className={styles.trafficLights}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.titleText}>{titles[kind]}</div>
        <div className={styles.titleSpacer} />
      </div>
      <div className={styles.body}>{bodies[kind]}</div>
    </div>
  );
};

export default CapabilityShowcase;
