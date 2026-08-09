import type { CSSProperties } from "react";
import styles from "../styles/codeEditor.module.scss";

// A VS Code–style IDE mockup — title bar, activity bar, file explorer,
// tab strip, minimap and status bar — with the editor "typing" a small
// React/JSX snippet on load. Rather than reading like generic sample
// code, the snippet is written to look like DataSoft literally coding a
// client's business into existence — building the site, the network and
// the design, then launching it — named in Kiswahili for the business it
// represents rather than generic filenames. Timings are computed once at
// module scope from the fixed snippet text (no `Math.random`), so the
// sequence is identical on every render — server and client alike.

type Token = { t: string; c?: "kw" | "type" | "fn" | "str" | "comment" };
type Line = { indent: number; toks: Token[] };

const INDENT = "  ";

const codeLines: Line[] = [
  {
    indent: 0,
    toks: [
      { t: "import", c: "kw" },
      { t: " { " },
      { t: "Biashara", c: "type" },
      { t: " } " },
      { t: "from", c: "kw" },
      { t: " " },
      { t: '"@datasoft/mfumo"', c: "str" },
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
      { t: " " },
      { t: "BiasharaYako", c: "fn" },
      { t: "({ jina }: { jina: " },
      { t: "string", c: "type" },
      { t: " }) {" },
    ],
  },
  {
    indent: 1,
    toks: [
      { t: "const", c: "kw" },
      { t: " biashara = " },
      { t: "new", c: "kw" },
      { t: " " },
      { t: "Biashara", c: "type" },
      { t: "(jina);" },
    ],
  },
  {
    indent: 1,
    toks: [
      { t: "biashara.jenga(" },
      { t: '"wavuti"', c: "str" },
      { t: ", " },
      { t: '"mtandao"', c: "str" },
      { t: ", " },
      { t: '"muundo"', c: "str" },
      { t: ");" },
    ],
  },
  { indent: 1, toks: [{ t: "biashara.zindua();" }] },
  { indent: 1, toks: [] },
  { indent: 1, toks: [{ t: "return", c: "kw" }, { t: " (" }] },
  { indent: 2, toks: [{ t: "<Matokeo>", c: "type" }] },
  { indent: 3, toks: [{ t: "<Mauzo", c: "type" }, { t: " faida={biashara.faida} />" }] },
  { indent: 2, toks: [{ t: "</Matokeo>", c: "type" }] },
  { indent: 1, toks: [{ t: ");" }] },
  { indent: 0, toks: [{ t: "}" }] },
  { indent: 0, toks: [] },
  { indent: 0, toks: [{ t: "// wateja 500+ wamekuza biashara zao na DataSoft", c: "comment" }] },
  {
    indent: 0,
    toks: [
      { t: "<BiasharaYako", c: "type" },
      { t: ' jina="Duka la Amani" />' },
    ],
  },
];

const CHAR_MS = 26;
const LINE_GAP_MS = 90;
const START_DELAY_MS = 500;

const lineTimings = (() => {
  let cursor = START_DELAY_MS;
  return codeLines.map((line) => {
    const chars = line.indent * INDENT.length + line.toks.reduce((n, tok) => n + tok.t.length, 0);
    const duration = Math.max(chars, 1) * CHAR_MS;
    const delay = cursor;
    cursor += duration + LINE_GAP_MS;
    return { chars: Math.max(chars, 1), delay, duration };
  });
})();

const totalTypingMs = lineTimings.length
  ? lineTimings[lineTimings.length - 1].delay + lineTimings[lineTimings.length - 1].duration
  : START_DELAY_MS;

// Deterministic minimap bar widths — a fixed pattern standing in for
// scrolled-off code density, not derived from the visible snippet.
const minimapBars = [40, 65, 30, 80, 55, 20, 70, 45, 60, 35, 75, 50, 25, 68, 42, 58, 30, 72];

const explorerTree = [
  { depth: 0, kind: "folder" as const, name: "src" },
  { depth: 1, kind: "folder" as const, name: "components" },
  { depth: 2, kind: "file" as const, name: "faida.tsx", lang: "tsx" as const, dirty: true },
  { depth: 2, kind: "file" as const, name: "mauzo.tsx", lang: "tsx" as const },
  { depth: 1, kind: "folder" as const, name: "core" },
  { depth: 2, kind: "file" as const, name: "biashara-yako.tsx", lang: "tsx" as const, active: true },
  { depth: 0, kind: "file" as const, name: "app.config.ts", lang: "ts" as const },
  { depth: 0, kind: "file" as const, name: "package.json", lang: "json" as const },
];

const tabs = [
  { name: "biashara-yako.tsx", active: true },
  { name: "faida.tsx", dirty: true },
  { name: "package.json" },
];

type CodeEditorProps = {
  className?: string;
};

const CodeEditor = ({ className = "" }: CodeEditorProps) => {
  return (
    <div className={`${styles.window} ${className}`} aria-hidden="true">
      <div className={styles.titleBar}>
        <div className={styles.trafficLights}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.titleText}>biashara-yako.tsx — datasoft</div>
        <div className={styles.titleSpacer} />
      </div>

      <div className={styles.body}>
        <div className={styles.activityBar}>
          <span className={`${styles.activityIcon} ${styles.activityActive}`}>
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="4.4" rx="1" stroke="currentColor" strokeWidth="1.6" />
              <rect x="4" y="10.8" width="16" height="4.4" rx="1" stroke="currentColor" strokeWidth="1.6" />
              <rect x="4" y="17.6" width="10" height="2.4" rx="1" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <span className={styles.activityIcon}>
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.6" />
              <line x1="15.2" y1="15.2" x2="20" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className={styles.activityIcon}>
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M7 8v8M8.6 7L15.4 11M8.6 17L15.4 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span className={styles.activityBadge}>3</span>
          </span>
          <span className={styles.activityIcon}>
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M13.6 4.4a1.8 1.8 0 0 0-3.2 0l-.3.9a1.8 1.8 0 0 1-2.3 1.1l-.9-.3a1.8 1.8 0 0 0-2.2 2.5l.5.8a1.8 1.8 0 0 1-1 2.6l-.9.3a1.8 1.8 0 0 0 0 3.4l.9.3a1.8 1.8 0 0 1 1 2.6l-.5.8a1.8 1.8 0 0 0 2.2 2.5l.9-.3a1.8 1.8 0 0 1 2.3 1.1l.3.9a1.8 1.8 0 0 0 3.2 0"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <span className={styles.activitySpacer} />
          <span className={styles.activityIcon}>
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.6" />
              <path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>Explorer</div>
          <div className={styles.sidebarRoot}>
            <span className={styles.chevron} />
            DATASOFT
          </div>
          <div className={styles.tree}>
            {explorerTree.map((entry) => (
              <div
                key={entry.name}
                className={`${styles.treeRow} ${entry.kind === "file" && "active" in entry && entry.active ? styles.treeRowActive : ""}`}
                style={{ paddingLeft: `${0.9 + entry.depth * 0.85}rem` }}
              >
                {entry.kind === "folder" ? (
                  <>
                    <span className={styles.chevron} />
                    <span className={styles.folderIcon} />
                  </>
                ) : (
                  <span className={`${styles.fileDot} ${styles[`lang-${entry.lang}`]}`} />
                )}
                <span className={styles.treeLabel}>{entry.name}</span>
                {entry.kind === "file" && "dirty" in entry && entry.dirty && <span className={styles.dirtyDot} />}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.editorGroup}>
          <div className={styles.tabBar}>
            {tabs.map((tab) => (
              <div key={tab.name} className={`${styles.tab} ${tab.active ? styles.tabActive : ""}`}>
                <span className={styles.tabLabel}>{tab.name}</span>
                {tab.dirty ? <span className={styles.dirtyDot} /> : <span className={styles.tabClose}>×</span>}
              </div>
            ))}
          </div>

          <div className={styles.editorArea}>
            <div className={styles.code}>
              {codeLines.map((line, i) => {
                const { chars, delay, duration } = lineTimings[i];
                const indent = INDENT.repeat(line.indent);
                const style = {
                  "--chars": chars,
                  "--delay": `${delay}ms`,
                  "--duration": `${duration}ms`,
                } as CSSProperties;

                return (
                  <div className={styles.line} key={i}>
                    <span className={styles.lineNumber}>{i + 1}</span>
                    <span className={styles.reveal} style={style}>
                      {indent}
                      {line.toks.map((tok, j) => (
                        <span key={j} className={tok.c ? styles[tok.c] : undefined}>
                          {tok.t}
                        </span>
                      ))}
                    </span>
                  </div>
                );
              })}
              <span className={styles.finalCursor} style={{ "--total": `${totalTypingMs}ms` } as CSSProperties} />
            </div>

            <div className={styles.minimap}>
              {minimapBars.map((w, i) => (
                <span key={i} className={styles.minimapBar} style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span className={styles.statusItem}>
            <svg viewBox="0 0 16 16" fill="none" width="13" height="13">
              <circle cx="4.5" cy="4" r="1.6" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="4.5" cy="12" r="1.6" stroke="currentColor" strokeWidth="1.2" />
              <path d="M4.5 5.6V12M4.5 5.6c0 3 2.2 3 4 3.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            main
          </span>
          <span className={styles.statusItem}>0 ⚠ 0 ⓧ</span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.statusItem}>Ln 16, Col 38</span>
          <span className={styles.statusItem}>UTF-8</span>
          <span className={styles.statusItem}>TypeScript JSX</span>
          <span className={styles.statusItem}>Prettier ✓</span>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
