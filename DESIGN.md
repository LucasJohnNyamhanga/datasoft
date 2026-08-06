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

Direction contract — THESIS: this is a palette pivot within an existing refinement, not a wholesale replacement. DataSoft keeps its gold accent, its deep maroon "brief us" register, and the distinctive V-notch seam into the contact section — but the former forest-green shell and logotype are retired in favor of a professional sapphire blue (user decision, 2026-08-06: no green in the DataSoft palette; blue reads more corporate/trustworthy for a technology house pitching Tanzanian SMEs and institutions). The `datasoftsoftware.gif` hero photo was later retired on desktop (user decision, 2026-08-06) in favor of an original city-map illustration — see FIRST VIEWPORT below. OWN-WORLD: three brand hues (sapphire blue, gold, maroon) carried by disciplined typography (Fraunces display serif + Montserrat body), flat hairline-driven depth, and a bespoke network-city illustration — with the incumbent site's glitch-text, rainbow card chips, and default green/maroon SVG icon retired as execution debt, not as brand debt. STORY: a returning visitor recognizes DataSoft instantly (the maroon brief-us dip, the gold accent, the network motif) and now reads the shell as noticeably more composed, senior, and "we know what we're doing" than the old green scheme. FIRST VIEWPORT: a deep sapphire hero shell with a cobalt spotlight-glow gradient, gold eyebrow + serif Kiswahili headline in a card, and an SVG top-down city map (streets, rooftops, coastline) carrying DataSoft's own fiber network graph house to house, a maroon HQ pin with a rotating radar sweep, and one home's interior floor plan zoomed in around a pulsing router; one gold call-to-action. The map runs at every screen size — full-bleed behind the card on desktop, as its own illustration band above the card on mobile/tablet — not just on desktop. FORM: Persuade mode, brief-pinned (user confirmed 2026-08-06: replace green with blue everywhere except the WhatsApp affordance, which keeps WhatsApp's own brand green for recognizability; keep maroon confined to Contact/Footer; hero must read as a deliberate, professional gradient, not a flat fill).

**Key Characteristics:**
- Three brand hues, each with one clear job: **sapphire blue** is the shell and the logotype/success color; **gold** is the one interactive accent (every CTA, link, active state); **maroon** is the "closing" register reserved for the Contact and Footer section, exactly as before.
- Editorial serif (Fraunces) for headlines; Montserrat for everything functional — including the "DataSoft" logotype itself, which stays bold sans and brand-blue, never converted to the display serif.
- The hero's right side (desktop only) is a bespoke SVG illustration — a blueprint-style city map carrying DataSoft's own network graph — rather than the former brand photo, which is retired.
- The maroon Contact section keeps its signature V-notch top seam (via `clip-path`) — a distinctive, recognizable shape, not a generic straight section boundary.
- Flat, hairline-driven depth everywhere except the hero, whose one deliberate radial "spotlight" gradient is the site's single richest surface — used nowhere else so it stays a first-viewport signature, not a repeated effect.

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
- All screen sizes carry `CityNetworkMap` (`app/components/CityNetworkMap.tsx`) — a procedurally generated, deterministic (seeded, not `Math.random`) top-down city map: streets and rooftops in cobalt/bone blueprint tones, a coastline nodding to Dar es Salaam, DataSoft's own network graph running house to house with pulsing gold nodes on connected rooftops, a maroon HQ pin with a rotating maroon radar sweep, and one home's interior floor plan zoomed in around a pulsing router. The illustration's key elements are kept near the viewBox's horizontal center (clear of the text card on desktop) since `preserveAspectRatio="xMidYMid slice"` crops symmetrically around that center at every aspect ratio.
- Desktop: two-column — Kiswahili serif headline + gold CTA in a bordered card on the left; the map fills full-bleed behind the card and across the right side, with a left-fading scrim for text contrast.
- Mobile/tablet (≤900px): the map runs as its own full-width illustration band in normal flow above the card (echoing how the old hero photo used to stack above the copy), rather than as a backdrop behind a near-full-bleed card — a card that size would leave almost none of the map visible either way. The card below is solid, on the flat gradient shell.
- Background is the site's one radial "spotlight" gradient (`$gradient-hero`): a cobalt-bright glow at ~26%/18% fading through cobalt into sapphire-deep, darkening slightly at the far edge — evokes studio lighting on the headline rather than a flat panel. Used only in the hero so it reads as a deliberate first-viewport moment, not a repeated background.

### Contact / "Brief Us" (signature)
- Maroon background with the signature V-notch top seam via `clip-path: polygon(0 56px, 50% 0, 100% 56px, 100% 100%, 0 100%)`. Gold eyebrow, ivory heading, gold-bright italic pull-quote — the Footer continues the same maroon register with no hard seam between them.

## Do's and Don'ts

### Do:
- **Do** keep the DataSoft wordmark bold, blue, and non-italic.
- **Do** keep the hero's city-map network illustration, its radial spotlight gradient, and the Contact V-notch seam — they're the site's signature moments.
- **Do** keep maroon confined to Contact + Footer.
- **Do** keep WhatsApp green confined to the WhatsApp affordance only.
- **Do** use hairlines and register changes for hierarchy before reaching for a shadow.

### Don't:
- **Don't** bring back the incumbent letter-by-letter glitch-text hero effect — retired as dated execution.
- **Don't** use the old 8-color rainbow card-chip set (`$cardColor1`–`8`) — collapsed into the three-hue brand system.
- **Don't** let maroon leak into sections other than Contact/Footer, or let gold appear as a second logotype color.
- **Don't** reintroduce green anywhere in the DataSoft palette outside the WhatsApp affordance.
- **Don't** fabricate portfolio stats, client names, or testimonials — genericize illustrative examples per PRODUCT.md instead.
