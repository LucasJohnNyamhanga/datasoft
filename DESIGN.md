---
name: DataSoft Tanzania
description: Full-service Tanzanian technology house — a professional sapphire-blue/gold/maroon system, refined into a premium, editorial system in Kiswahili.
colors:
  sapphire-deep: "#0D2C4E"
  sapphire-raised: "#163F6D"
  sapphire-line: "#2C5A8C"
  brass: "#D4A017"
  brass-bright: "#F0C550"
  brass-dim: "#8A6B12"
  cobalt: "#2E6FB8"
  cobalt-bright: "#4A90D9"
  whatsapp-green: "#25D366"
  maroon: "#591421"
  maroon-line: "#7C2635"
  ivory: "#FBF6E7"
  ivory-card: "#FFFFFF"
  bone: "#E9DFC4"
  ink: "#17201A"
  ink-soft: "#59645C"
  coffee: "#6B4226"
  rust: "#C1432B"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 380
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)"
    fontWeight: 420
    lineHeight: 1.1
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.16em"
  logotype:
    fontFamily: "Montserrat, sans-serif"
    fontWeight: 700
rounded:
  sm: "4px"
  md: "8px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
  xl: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.sapphire-deep}"
    rounded: "{rounded.sm}"
    padding: "1rem 2.25rem"
  button-primary-hover:
    backgroundColor: "{colors.brass-bright}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.sm}"
    padding: "1rem 2.25rem"
---

# Design System: DataSoft Tanzania

## Overview

**Creative North Star: "DataSoft, Elevated"**

Direction contract — THESIS: this is a palette pivot within an existing refinement, not a wholesale replacement. DataSoft keeps its gold accent, its deep maroon "brief us" register, and the distinctive V-notch seam into the contact section — but the former forest-green shell and logotype are retired in favor of a professional sapphire blue (user decision, 2026-08-06: no green in the DataSoft palette; blue reads more corporate/trustworthy for a technology house pitching Tanzanian SMEs and institutions). The `datasoftsoftware.gif` hero photo was retired on desktop (user decision, 2026-08-06) in favor of an original city-map illustration, and the hero itself was later repositioned from a dark full-bleed shell to a light, typography-led register (user decision, 2026-08-09, taking laravel.com/cloud as the reference point) — see FIRST VIEWPORT below. OWN-WORLD: three brand hues (sapphire blue, gold, maroon) carried by disciplined typography (Fraunces display serif + Montserrat body), flat hairline-driven depth, and a bespoke network-city illustration — with the incumbent site's glitch-text, rainbow card chips, and default green/maroon SVG icon retired as execution debt, not as brand debt. STORY: a returning visitor recognizes DataSoft instantly (the maroon brief-us dip, the gold accent, the network motif) and now reads the shell as noticeably more composed, senior, and "we know what we're doing" than the old green scheme. FIRST VIEWPORT: an ivory hero on the content-room register, not the sapphire shell — a bordered gold-dot eyebrow pill, a centered serif Kiswahili headline (its second line italic gold), one tightened supporting sentence, a solid-gold pill CTA paired with an ink-outline pill CTA, and — below the fold, not behind the text — the same SVG top-down city map (streets, rooftops, DataSoft's fiber network house to house, the maroon HQ pin and its radar sweep, one interior floor plan zoomed around a pulsing router) recolored for a white card and contained inside a rounded, shadowed panel. The sapphire shell with the cobalt spotlight-glow gradient remains the site's dark register (nav bar, the 404 page, service-page heroes) — it is no longer the homepage hero's background. FORM: Persuade mode, brief-pinned (user confirmed 2026-08-06: replace green with blue everywhere except the WhatsApp affordance, which keeps WhatsApp's own brand green for recognizability; keep maroon confined to Contact/Footer). The homepage hero specifically now favors Laravel Cloud's clarity — one-sentence copy, a solid/outline pill CTA pair, a roomy quiet canvas — over the earlier dark spotlight treatment.

**Key Characteristics:**
- Three brand hues, each with one clear job: **sapphire blue** is the shell and the logotype/success color; **gold** is the one interactive accent (every CTA, link, active state); **maroon** is the "closing" register reserved for the Contact and Footer section, exactly as before.
- Editorial serif (Fraunces) for headlines; Montserrat for everything functional — including the "DataSoft" logotype itself, which stays bold sans and brand-blue, never converted to the display serif.
- The hero's supporting visual is a bespoke SVG illustration — a blueprint-style city map carrying DataSoft's own network graph — now a contained panel below the hero copy rather than a full-bleed background or the former brand photo, both retired.
- The maroon Contact section keeps its signature V-notch top seam (via `clip-path`) — a distinctive, recognizable shape, not a generic straight section boundary.
- Flat, hairline-driven depth everywhere on the ivory/cream registers; the radial "spotlight" gradient remains the one deliberate rich surface, now confined to the sapphire shell's other appearances (nav, 404 page, service heroes) rather than the homepage hero.

## Colors

Three brand hues, each confined to a register, plus a warm cream content room.

### Primary accent
- **Gold** (`#D4A017`): the one interactive accent. Every primary CTA, active nav state, link underline, icon stroke. Used on the dark shell; used sparingly (never as a body-text color) inside cream rooms.
- **Gold Bright** (`#F0C550`): hover/active state of Gold only. Never a resting color.

### Brand blue
- **Cobalt** (`#2E6FB8`) / **Cobalt Bright** (`#4A90D9`): the DataSoft logotype color and the form success state — the signature brand blue, deliberately brighter/more saturated than the Sapphire shell tones so it still pops as an accent against the shell rather than blending flat. Also the core of the hero's spotlight-glow gradient.
- **WhatsApp Green** (`#25D366`): a deliberate, singular exception — the WhatsApp floating affordance keeps WhatsApp's own brand green so it stays instantly recognizable as "chat on WhatsApp." It is not part of the DataSoft palette and must never be reused elsewhere.

### Shell (dark)
- **Sapphire Deep** (`#0D2C4E`): the shell background — nav, "How We Work" process section, service-page heroes; the dark base of the hero gradient.
- **Sapphire Raised** (`#163F6D`): raised surfaces on the shell.
- **Sapphire Line** (`#2C5A8C`): hairline borders on the shell.

### Closing register (maroon)
- **Maroon** (`#591421`): reserved for the Contact ("Brief Us") section and the Footer only — never used elsewhere.
- **Maroon Line** (`#7C2635`): hairlines and hover borders on the maroon register.

### Content room (cream)
- **Ivory** (`#FBF6E7`): the content-room background (service detail sections, portfolio, reading areas).
- **Ivory Card** (`#FFFFFF`): cards/inputs sitting on Ivory.
- **Bone** (`#E9DFC4`): hairline borders/dividers on Ivory.
- **Ink** (`#17201A`): body text on Ivory.
- **Ink Soft** (`#59645C`): secondary/caption text on Ivory.

### Tertiary
- **Coffee** (`#6B4226`): rare — small tags/badges only.
- **Rust** (`#C1432B`): form error state only.

### Named Rules
**The One Accent Rule.** Gold is the only saturated color permitted for interactive emphasis outside the logotype. Cobalt blue is reserved for the logotype and success states — it is brand identity, not a second free accent.
**The Register Rule.** Maroon appears only in Contact and Footer. If maroon starts appearing elsewhere, that's drift, not a new "pop" color.
**The One Exception Rule.** WhatsApp green exists in exactly one place (the WhatsApp affordance) and must never leak into any other component — it's a third-party brand color borrowed for recognizability, not a DataSoft hue.
**The No-Shadow Rule.** Depth comes from hairlines and register changes, never `box-shadow` blur, with two exceptions: a soft warm ambient glow on dark-surface hover states, and the hero's radial spotlight gradient.

## Typography

**Display Font:** Fraunces (variable, optical sizing on), fallback Georgia, serif. Headlines only.
**Body Font:** Montserrat (self-hosted local `.woff2`, weights 300–800), fallback system sans. Everything functional, including the logotype.

### Hierarchy
- **Display** (weight 380, `clamp(2.5rem, 5vw, 4.5rem)`, line-height 1.04): hero headline only, one per page.
- **Headline** (weight 420, `clamp(1.75rem, 3.2vw, 2.75rem)`): section titles ("Huduma Zetu", "Jinsi Tunavyofanya Kazi", etc.).
- **Title** (Montserrat 600, 1.25rem): card titles, service names.
- **Body** (Montserrat 400, 1.0625rem, line-height 1.65, max 68ch): paragraph copy.
- **Label** (Montserrat 600, 0.75rem, letter-spacing 0.16em, uppercase): nav links, button text, eyebrow tags, form field labels.
- **Logotype** (Montserrat 700, cobalt-bright): the "DataSoft" wordmark specifically — never italic, never the display serif, always brand blue.

### Named Rules
**The Serif-Once Rule.** Fraunces never appears below headline size and never on the logotype.

## Layout

Single-column scroll, max content width 1280px, with generous outer gutters (`clamp(1.25rem, 5vw, 6rem)`). Section vertical rhythm uses the `xl` spacing token (7rem) between major registers and `lg` (4rem) inside a section. Mobile collapses to a single column at 768px with reduced vertical rhythm.

## Elevation & Depth

Flat by default. Depth reads through register changes (shell vs. cream room vs. maroon closing register) and 1px hairlines, not shadows. The permitted exceptions are the warm ambient glow on dark-surface hover and the hero's radial spotlight gradient.

## Shapes

Corners use `rounded.sm`–`rounded.md` (4–8px) — buttons, cards, inputs. The Contact section keeps its signature V-notch top seam via `clip-path: polygon(...)`.

## Components

### Buttons
- **Primary:** gold fill, sapphire-deep text, uppercase label tracking (0.12em), padding `1rem 2.25rem`. Hover: gold-bright fill plus a 1px lift.
- **Ghost (on dark):** transparent fill, ivory text, 1px gold-dim border. Hover: border brightens to gold.
- **On ivory rooms:** ink text, no fill, a gold underline that grows from 0 to full width on hover/focus (via `transform: scaleX()`, not `width`, to stay off the main thread).

### Cards / Containers
- **Background:** `sapphire-raised` on the dark shell, `ivory-card` on ivory rooms.
- **Border:** 1px hairline always present.
- **Internal Padding:** `lg` token (4rem desktop, 2rem mobile).

### Inputs / Fields
- **Style:** transparent background, bottom-only 1px border, no box. Label sits above as a Label-style eyebrow.
- **Focus:** border-bottom brightens to full gold and thickens to 2px.
- **Error:** border-bottom becomes rust.

### Navigation
- Fixed top bar on `sapphire-deep`. Logo mark (gold brain SVG) + "DataSoft" wordmark (bold Montserrat, cobalt-bright blue — never the display serif) on the left, Label-style nav links right, active/hover state is a gold underline. Language toggle (SW/EN) as a small gold-outlined pill. Mobile: same shell collapses to logo + gold hamburger opening a full-height drawer.

### Hero (signature)
- Ivory background (the content-room register, not the sapphire shell), single centered column, max content width ~46rem: a bordered gold-dot eyebrow pill, a two-line serif headline (second line italic, brass-dim), one tightened supporting sentence, a solid-gold pill CTA next to an ink-outline pill CTA — then, below the fold, a contained panel carrying `CodeEditor` (`app/components/CodeEditor.tsx`).
- `CodeEditor` is a VS Code–style IDE mockup — title bar with macOS traffic lights, activity bar, file explorer tree, tab strip, minimap, and status bar — rendered as real JSX/CSS chrome, not a screenshot. It "types" itself in on load via CSS `steps()` width reveals computed once from the fixed snippet text (deterministic, no `Math.random`, so the sequence matches on server and client), with a moving per-line caret and a blinking cursor once typing finishes. The snippet itself is written to read as DataSoft literally coding a client's business into being — a `BiasharaYako` ("your business") component that builds the site, network, and design (`biashara.jenga(...)`), launches it (`biashara.zindua()`), then renders `Mauzo`/`faida` ("sales"/"profit") — and the explorer tree, tabs, and title bar all use matching Kiswahili filenames (`biashara-yako.tsx`, `faida.tsx`, `mauzo.tsx`) rather than generic ones. Colors are drawn from the brand palette — sapphire backgrounds, cobalt-bright keywords/status bar, brass-bright types/functions/cursor — plus two minimal additions (a soft green for strings, a muted blue-grey for comments) needed for legible syntax highlighting. All of it is disabled under `prefers-reduced-motion`, showing the finished snippet immediately.
- The outer window (`.window` in `codeEditor.module.scss`) is styled as dark sapphire **glass**: a translucent background over `backdrop-filter: blur()`, a soft top highlight sheen, a faint light border, and a lifted shadow — so the whole card reads as frosted glass floating above the ivory hero rather than a flat opaque panel. The hero's `.panel` wrapper is now just a sizing frame (`position: relative; aspect-ratio: 8/5`); the window supplies its own border-radius, border, and shadow, positioned `absolute; inset: 0` to fill it. It sits in normal document flow at every screen size — the same panel, scaled by its container — with the sidebar, activity bar, and minimap dropped below `640px` to keep the mockup legible on phones.
- The sapphire shell's radial "spotlight" gradient (`$gradient-hero`) is unchanged as a token but no longer backs the homepage hero; it still appears on the 404 page and other dark-shell surfaces.

### Portfolio / "Uwezo Wetu" (signature)
- The four "Uwezo Wetu" capability items (`app/components/WhatWeHaveDone.tsx`) render as stacked, alternating full-width rows — not an icon-card grid (user decision, 2026-08-09, taking laravel.com/cloud's feature-row layout as the reference point, retiring the old `CardProject` icon-medallion grid). Each row pairs a large `CapabilityShowcase` mockup on one side with a numeral (`01`–`04`, Fraunces display serif, brass-dim, headline-size so it stays within the Serif-Once Rule), a Montserrat title, description, and inline tag pills (no bordered box, no card background) on the other. Rows alternate left/right at desktop widths and are separated by a single hairline (`$bone`), never a card border or shadow — consistent with the Elevation & Depth rule. On mobile, each row stacks copy first and the visual mockup last (`flex-direction: column-reverse`, overridden back to `row`/`row-reverse` at the 900px breakpoint) so a phone-width visitor reads the claim before seeing the illustration.
- `CapabilityShowcase` (`app/components/CapabilityShowcase.tsx`) reuses the Hero's `CodeEditor` glass-window chrome (title bar, macOS traffic lights, dark sapphire glass with backdrop blur) as the site's one recurring "signature device" for showing product artifacts, rather than inventing a new visual language per section. Each of the four windows renders a distinct, bespoke, static mockup body matching its capability rather than a shared icon: a live-updating business dashboard (stat tiles, a data table with one pulsing "live" row, a sparkline) for business systems; a smartphone frame (dark device bezel with a notch and a visible side-button nub, distinct from the sapphire glass around it, so it unmistakably reads as a physical phone) with a peeking browser window behind it for mobile + web platforms; a browser-chrome window with a wireframed nav/hero and a floating performance badge ("98 · Kasi ya Juu · SEO Imara") for business websites; and a design-tool artboard with a toolbar rail, an abstract logo mark, a wordmark bar, palette swatches, and a tilted business-card preview for branding/marketing materials. All content is static (no per-line typing animation, unlike `CodeEditor`) and `aria-hidden`, since the row's real copy carries the accessible content.

### Contact / "Brief Us" (signature)
- Maroon background with the signature V-notch top seam via `clip-path: polygon(0 56px, 50% 0, 100% 56px, 100% 100%, 0 100%)`. Gold eyebrow, ivory heading, gold-bright italic pull-quote — the Footer continues the same maroon register with no hard seam between them.

## Do's and Don'ts

### Do:
- **Do** keep the DataSoft wordmark bold, blue, and non-italic.
- **Do** reuse the sapphire-glass window chrome (`CodeEditor`, `CapabilityShowcase`) as the site's one recurring device for showing product/work — don't invent a new mockup style per section.
- **Do** keep the hero's city-map network illustration (now a light contained panel, see Hero below) and the Contact V-notch seam — they're the site's signature moments. The radial spotlight gradient remains a signature too, just relocated to the sapphire shell's other appearances (nav, 404, service heroes) rather than the homepage hero.
- **Do** keep maroon confined to Contact + Footer.
- **Do** keep WhatsApp green confined to the WhatsApp affordance only.
- **Do** use hairlines and register changes for hierarchy before reaching for a shadow.

### Don't:
- **Don't** bring back the incumbent letter-by-letter glitch-text hero effect — retired as dated execution.
- **Don't** use the old 8-color rainbow card-chip set (`$cardColor1`–`8`) — collapsed into the three-hue brand system.
- **Don't** put the "Uwezo Wetu" portfolio items back into an icon-card grid (the retired `CardProject` pattern) — it stays a stacked, alternating, non-card row layout.
- **Don't** let maroon leak into sections other than Contact/Footer, or let gold appear as a second logotype color.
- **Don't** reintroduce green anywhere in the DataSoft palette outside the WhatsApp affordance.
- **Don't** fabricate portfolio stats, client names, or testimonials — genericize illustrative examples per PRODUCT.md instead.
