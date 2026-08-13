// Reusable DataSoft Tanzania email system.
// One branded shell (header / hero / footer) shared by every outbound email —
// admin notifications, client updates, receipts, etc. — so every message
// looks like it came from the same company as datasoft.co.tz.
// Tokens mirror DESIGN.md exactly; keep them in sync if the site palette changes.

import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "../constants/contact";

export const brand = {
  sapphireDeep: "#0D2C4E",
  sapphireRaised: "#163F6D",
  sapphireLine: "#2C5A8C",
  brass: "#D4A017",
  brassBright: "#F0C550",
  brassDim: "#8A6B12",
  cobalt: "#2E6FB8",
  navyDeep: "#071427",
  navyRaised: "#0F2340",
  navyLine: "#1F3F66",
  ivory: "#FBF6E7",
  ivoryCard: "#FFFFFF",
  bone: "#E9DFC4",
  ink: "#17201A",
  inkSoft: "#59645C",
} as const;

const FONT_BODY = "'Montserrat',Arial,sans-serif";
const FONT_DISPLAY = "Georgia,'Times New Roman',serif";

export function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Centered gold pill CTA — the site's one interactive accent, never used elsewhere in an email. */
export function emailButton(label: string, url: string) {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px auto 8px;">
    <tr>
      <td style="background-color:${brand.brass};border-radius:999px;" align="center">
        <a href="${escapeHtml(url)}" target="_blank" style="display:inline-block;padding:16px 38px;font-family:${FONT_BODY};font-size:14px;font-weight:700;letter-spacing:0.4px;color:${brand.sapphireDeep};text-decoration:none;">
          ${escapeHtml(label)}
        </a>
      </td>
    </tr>
  </table>`;
}

/** Label/value row for structured detail blocks (order recaps, brief summaries, invoices, ...). */
export function emailDetailRow(label: string, value: string) {
  return `
      <tr>
        <td style="padding:10px 0;width:38%;font-family:${FONT_BODY};font-size:13px;color:${brand.inkSoft};vertical-align:top;">
          ${escapeHtml(label)}
        </td>
        <td style="padding:10px 0;font-family:${FONT_BODY};font-size:15px;color:${brand.ink};font-weight:600;vertical-align:top;">
          ${value}
        </td>
      </tr>`;
}

/** Stacked label-over-value row for longer selected values (brief answers, dropdown choices, ...). */
export function emailStackedRow(label: string, value: string) {
  return `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid ${brand.bone};">
          <p style="margin:0 0 4px;font-family:${FONT_BODY};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${brand.brassDim};font-weight:700;">
            ${escapeHtml(label)}
          </p>
          <p style="margin:0;font-family:${FONT_BODY};font-size:15px;color:${brand.ink};font-weight:600;">
            ${value}
          </p>
        </td>
      </tr>`;
}

/** Uppercase kicker label used above section headings ("CLIENT DETAILS", "PROJECT BRIEF", ...). */
export function emailEyebrow(text: string, color: string = brand.brassDim) {
  return `<p style="margin:0 0 14px;font-family:${FONT_BODY};font-size:11px;letter-spacing:1.8px;text-transform:uppercase;color:${color};font-weight:700;">${escapeHtml(text)}</p>`;
}

export interface EmailShellOptions {
  /** Hidden preview text shown in the inbox list (Gmail/Apple Mail); keep under ~100 chars. */
  previewText: string;
  /** Small uppercase kicker inside the hero band, e.g. "TAARIFA YA MRADI". */
  eyebrow?: string;
  /** Primary hero line, set in white. */
  heading: string;
  /** Optional second hero line, set in gold italic — mirrors the site's display-type accent line. */
  headingAccent?: string;
  /** Optional supporting sentence under the heading, muted ivory. */
  heroNote?: string;
  /** Pre-built HTML for the message body (paragraphs, detail tables, highlight cards, ...). */
  bodyHtml: string;
  /** Optional single call to action, rendered as the one gold pill button in the email. */
  cta?: { label: string; url: string };
  /** Small line under the footer contact block, e.g. an auto-send disclaimer or timestamp. */
  footerNote?: string;
}

/**
 * The shared DataSoft shell: sapphire header/hero, ivory body, navy closing
 * register — the same three registers the live site uses (shell / content
 * room / Contact-Footer register). Every DataSoft email should render through
 * this function rather than hand-rolling its own header and footer.
 */
export function renderEmailShell(opts: EmailShellOptions) {
  const { previewText, eyebrow, heading, headingAccent, heroNote, bodyHtml, cta, footerNote } = opts;

  return `<!doctype html>
<html lang="sw">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <title>DataSoft Tanzania</title>
  </head>
  <body style="margin:0;padding:0;background-color:${brand.bone};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:${brand.bone};">
      ${escapeHtml(previewText)}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${brand.bone};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:${brand.ivoryCard};border-radius:12px;overflow:hidden;box-shadow:0 20px 50px rgba(13,44,78,0.18);">

            <!-- Brand bar -->
            <tr>
              <td style="background-color:${brand.sapphireDeep};padding:22px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="40" style="padding-right:12px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="40" height="40" style="background-color:${brand.sapphireRaised};border:1px solid ${brand.sapphireLine};border-radius:8px;">
                        <tr>
                          <td align="center" valign="middle" style="font-family:${FONT_DISPLAY};font-size:19px;color:${brand.brass};font-style:italic;">D</td>
                        </tr>
                      </table>
                    </td>
                    <td valign="middle">
                      <span style="font-family:${FONT_BODY};font-size:18px;font-weight:700;color:${brand.ivory};letter-spacing:-0.2px;">DataSoft <span style="color:${brand.brass};">Tanzania</span></span><br />
                      <span style="font-family:${FONT_BODY};font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1.6px;color:${brand.sapphireLine};">Suluhisho za Teknolojia</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Hero band -->
            <tr>
              <td style="background:linear-gradient(135deg,${brand.sapphireRaised} 0%,${brand.sapphireDeep} 65%);padding:34px 40px 30px;border-bottom:3px solid ${brand.brass};">
                ${eyebrow ? emailEyebrow(eyebrow, brand.brassBright) : ""}
                <h1 style="margin:0;font-family:${FONT_DISPLAY};font-weight:400;font-size:25px;line-height:1.32;color:${brand.ivory};">
                  ${escapeHtml(heading)}${headingAccent ? `<br /><em style="color:${brand.brass};font-style:italic;">${escapeHtml(headingAccent)}</em>` : ""}
                </h1>
                ${heroNote ? `<p style="margin:14px 0 0;font-family:${FONT_BODY};font-size:14px;line-height:1.6;color:${brand.sapphireLine};max-width:440px;">${escapeHtml(heroNote)}</p>` : ""}
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:38px 40px 8px;font-family:${FONT_BODY};font-size:15px;line-height:1.7;color:${brand.ink};">
                ${bodyHtml}
                ${cta ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">${emailButton(cta.label, cta.url)}</td></tr></table>` : ""}
              </td>
            </tr>

            <tr>
              <td style="padding:26px 40px 0;">
                <div style="height:1px;background-color:${brand.bone};"></div>
              </td>
            </tr>

            <!-- Closing register (navy) -->
            <tr>
              <td style="background:linear-gradient(165deg,${brand.navyRaised} 0%,${brand.navyDeep} 70%);padding:32px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-family:${FONT_BODY};font-size:13px;line-height:1.8;color:#9FB4CC;">
                      <strong style="color:${brand.ivory};font-size:14px;">DataSoft Tanzania</strong><br />
                      Nyumba Na. 640, Barabara ya Medical Research,<br />
                      Kitangiri, Ilemela, Mwanza, Tanzania.<br />
                      <a href="${CONTACT_PHONE_HREF}" style="color:${brand.brass};text-decoration:none;">${CONTACT_PHONE_DISPLAY}</a>
                      &nbsp;&middot;&nbsp;
                      <a href="mailto:info@datasoft.co.tz" style="color:${brand.brass};text-decoration:none;">info@datasoft.co.tz</a>
                      &nbsp;&middot;&nbsp;
                      <a href="https://www.datasoft.co.tz" style="color:${brand.brass};text-decoration:none;">datasoft.co.tz</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top:20px;border-top:1px solid ${brand.navyLine};margin-top:20px;">
                      <p style="margin:16px 0 0;font-family:${FONT_DISPLAY};font-style:italic;font-size:12.5px;color:#7C93AE;text-align:center;letter-spacing:0.2px;">
                        &ldquo;Tunageuza Mawazo Kuwa Uhalisia wa Kidijitali.&rdquo;
                      </p>
                      ${footerNote ? `<p style="margin:14px 0 0;font-family:${FONT_BODY};font-size:11px;color:#5D7896;text-align:center;">${escapeHtml(footerNote)}</p>` : ""}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export interface ProjectUpdateEmailOptions {
  clientName: string;
  /** Optional project/system name to personalize the hero note, e.g. "tovuti yako". */
  projectLabel?: string;
  /** Free-form update message; falls back to a sensible default. */
  message?: string;
  ctaUrl: string;
  ctaLabel?: string;
  signatureName?: string;
  signatureTitle?: string;
}

/**
 * Concrete example of shell reuse: a client-facing "your project has moved
 * forward" notification — the redesign of the legacy orange/navy template.
 */
export function renderProjectUpdateEmail(opts: ProjectUpdateEmailOptions) {
  const {
    clientName,
    projectLabel = "mradi wako",
    message,
    ctaUrl,
    ctaLabel = "Angalia Mfumo",
    signatureName = "Lucas John",
    signatureTitle = "Mkurugenzi wa Teknolojia",
  } = opts;

  const bodyHtml = `
    <p style="margin:0 0 18px;font-weight:600;font-size:16px;color:${brand.sapphireDeep};">Habari ${escapeHtml(clientName)},</p>

    <p style="margin:0 0 16px;">Tunashukuru kwa kuchagua kufanya kazi na <strong>DataSoft Tanzania</strong>. Sisi ni nyumba ya kiteknolojia inayogeuza mawazo ya biashara yako kuwa programu, tovuti, mitandao na miundo yanayofanya kazi kwa ustadi wa hali ya juu, popote ulipo Tanzania.</p>

    <p style="margin:0 0 16px;">${escapeHtml(
      message ??
        `Hatua mpya za ${projectLabel} zimekamilika na sasa zinapatikana kwa mapitio yako. Bofya kitufe hapa chini kuona maendeleo ya sasa.`,
    )}</p>

    <p style="margin:24px 0 0;">Una swali la kiufundi au unahitaji marekebisho ya ziada? Wasiliana nasi moja kwa moja kupitia barua pepe hii au namba zetu za simu.</p>

    <p style="margin:28px 0 0;padding-top:22px;border-top:1px solid ${brand.bone};">
      Wako wa dhati,<br />
      <strong style="color:${brand.sapphireDeep};font-size:16px;">${escapeHtml(signatureName)}</strong><br />
      <span style="color:${brand.inkSoft};font-size:13px;">${escapeHtml(signatureTitle)}</span>
    </p>`;

  return renderEmailShell({
    previewText: `Taarifa mpya ya ${projectLabel}, DataSoft Tanzania`,
    eyebrow: "Taarifa ya Mradi",
    heading: "Kuna Maendeleo Mapya",
    headingAccent: "Kwenye Mradi Wako",
    heroNote: "Pitia hatua za sasa na uthibitishe kabla hatujaendelea.",
    bodyHtml,
    cta: { label: ctaLabel, url: ctaUrl },
    footerNote: "Barua pepe hii imetumwa na DataSoft Tanzania kuhusiana na mradi wako.",
  });
}
