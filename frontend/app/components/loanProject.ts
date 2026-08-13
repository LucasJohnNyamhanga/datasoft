import { buildFile, type IDEProject, type Line } from "./CodeEditor";

// The Software service page swaps the Hero's own "Biashara" snippet for a
// second, concrete example of what DataSoft ships: a loan & microfinance
// system — application intake, credit scoring and a repayment engine —
// named in the same Kiswahili convention as the homepage's project so the
// two IDE windows read as two real client codebases, not a generic demo
// reused twice.

const ombiMkopoLines: Line[] = [
  {
    indent: 0,
    toks: [
      { t: "import", c: "kw" },
      { t: " { " },
      { t: "Mkopo", c: "type" },
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
      { t: "OmbiLaMkopo", c: "fn" },
      { t: "({ mkopaji }: { mkopaji: " },
      { t: "string", c: "type" },
      { t: " }) {" },
    ],
  },
  {
    indent: 1,
    toks: [
      { t: "const", c: "kw" },
      { t: " mkopo = " },
      { t: "new", c: "kw" },
      { t: " " },
      { t: "Mkopo", c: "type" },
      { t: "(mkopaji);" },
    ],
  },
  {
    indent: 1,
    toks: [
      { t: "mkopo.pima(" },
      { t: '"alama"', c: "str" },
      { t: ", " },
      { t: '"dhamana"', c: "str" },
      { t: ", " },
      { t: '"kipato"', c: "str" },
      { t: ");" },
    ],
  },
  { indent: 1, toks: [{ t: "mkopo.idhinisha();" }] },
  { indent: 1, toks: [] },
  { indent: 1, toks: [{ t: "return", c: "kw" }, { t: " (" }] },
  { indent: 2, toks: [{ t: "<Matokeo>", c: "type" }] },
  { indent: 3, toks: [{ t: "<Kiasi", c: "type" }, { t: " kilichoidhinishwa={mkopo.kiasi} />" }] },
  { indent: 2, toks: [{ t: "</Matokeo>", c: "type" }] },
  { indent: 1, toks: [{ t: ");" }] },
  { indent: 0, toks: [{ t: "}" }] },
  { indent: 0, toks: [] },
  { indent: 0, toks: [{ t: "// wakopaji 2,400+ wameidhinishwa ndani ya saa 24", c: "comment" }] },
  {
    indent: 0,
    toks: [
      { t: "<OmbiLaMkopo", c: "type" },
      { t: ' mkopaji="Neema SACCOS" />' },
    ],
  },
];

const alamaMkopoLines: Line[] = [
  {
    indent: 0,
    toks: [
      { t: "import", c: "kw" },
      { t: " { " },
      { t: "useMemo", c: "fn" },
      { t: " } " },
      { t: "from", c: "kw" },
      { t: " " },
      { t: '"react"', c: "str" },
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
      { t: "AlamaMkopo", c: "fn" },
      { t: "({ historia, kipato }: { historia: " },
      { t: "number", c: "type" },
      { t: "; kipato: " },
      { t: "number", c: "type" },
      { t: " }) {" },
    ],
  },
  {
    indent: 1,
    toks: [
      { t: "const", c: "kw" },
      { t: " alama = " },
      { t: "useMemo", c: "fn" },
      { t: "(() => historia * 0.6 + kipato * 0.4, [historia, kipato]);" },
    ],
  },
  { indent: 1, toks: [] },
  { indent: 1, toks: [{ t: "return", c: "kw" }, { t: " (" }] },
  { indent: 2, toks: [{ t: "<p", c: "type" }, { t: " className=" }, { t: '"alama"', c: "str" }, { t: ">" }] },
  { indent: 3, toks: [{ t: "Alama ya Mkopo: {alama.toFixed(0)} / 100" }] },
  { indent: 2, toks: [{ t: "</p>", c: "type" }] },
  { indent: 1, toks: [{ t: ");" }] },
  { indent: 0, toks: [{ t: "}" }] },
  { indent: 0, toks: [] },
  { indent: 0, toks: [{ t: "// alama zinahesabiwa papo hapo, bila karatasi", c: "comment" }] },
  { indent: 0, toks: [{ t: "export", c: "kw" }, { t: " " }, { t: "default", c: "kw" }, { t: " AlamaMkopo;" }] },
];

const ratibaMalipoLines: Line[] = [
  {
    indent: 0,
    toks: [
      { t: "import", c: "kw" },
      { t: " { " },
      { t: "AlamaMkopo", c: "type" },
      { t: " } " },
      { t: "from", c: "kw" },
      { t: " " },
      { t: '"./alama-mkopo"', c: "str" },
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
      { t: "RatibaMalipo", c: "fn" },
      { t: "({ kiasi }: { kiasi: " },
      { t: "number", c: "type" },
      { t: " }) {" },
    ],
  },
  { indent: 1, toks: [{ t: "const", c: "kw" }, { t: " riba = kiasi * 0.02;" }] },
  { indent: 1, toks: [] },
  { indent: 1, toks: [{ t: "return", c: "kw" }, { t: " (" }] },
  { indent: 2, toks: [{ t: "<section", c: "type" }, { t: " className=" }, { t: '"ratiba"', c: "str" }, { t: ">" }] },
  { indent: 3, toks: [{ t: "<h2>", c: "type" }, { t: "Ratiba ya Malipo" }, { t: "</h2>", c: "type" }] },
  { indent: 3, toks: [{ t: "<AlamaMkopo", c: "type" }, { t: " kiasi={kiasi} riba={riba} />" }] },
  { indent: 2, toks: [{ t: "</section>", c: "type" }] },
  { indent: 1, toks: [{ t: ");" }] },
  { indent: 0, toks: [{ t: "}" }] },
  { indent: 0, toks: [] },
  { indent: 0, toks: [{ t: "// malipo yanakumbushwa kwa SMS kabla ya tarehe", c: "comment" }] },
  { indent: 0, toks: [{ t: "export", c: "kw" }, { t: " " }, { t: "default", c: "kw" }, { t: " RatibaMalipo;" }] },
];

export const loanProject: IDEProject = {
  windowSuffix: "neema-mkopo",
  rootLabel: "NEEMA-MKOPO",
  files: {
    "ombi-mkopo.tsx": buildFile(ombiMkopoLines),
    "alama-mkopo.ts": buildFile(alamaMkopoLines, true),
    "ratiba-malipo.ts": buildFile(ratibaMalipoLines),
  },
  tabOrder: ["ombi-mkopo.tsx", "alama-mkopo.ts", "ratiba-malipo.ts"],
  explorerTree: [
    { depth: 0, kind: "folder", name: "src" },
    { depth: 1, kind: "folder", name: "components" },
    { depth: 2, kind: "file", name: "alama-mkopo.ts", lang: "ts" },
    { depth: 2, kind: "file", name: "ratiba-malipo.ts", lang: "ts" },
    { depth: 1, kind: "folder", name: "core" },
    { depth: 2, kind: "file", name: "ombi-mkopo.tsx", lang: "tsx" },
    { depth: 0, kind: "file", name: "app.config.ts", lang: "ts" },
    { depth: 0, kind: "file", name: "package.json", lang: "json" },
  ],
};
