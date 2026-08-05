---
name: DataSoft Tanzania
description: Full-service Tanzanian technology house — DataSoft's own green/gold/maroon brand, refined into a premium, editorial system in Kiswahili.
colors:
  espresso-deep: "#0F2418"
  espresso-raised: "#17331F"
  espresso-line: "#294B34"
  brass: "#D4A017"
  brass-bright: "#F0C550"
  brass-dim: "#8A6B12"
  forest: "#2E9F5B"
  forest-bright: "#45C078"
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
    textColor: "{colors.espresso-deep}"
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

Direction contract — THESIS: this is a refinement, not a replacement. DataSoft already has a real brand — green logotype, gold accents, a deep maroon "brief us" register, the `datasoftsoftware.gif` hero photo, a distinctive V-notch seam into the contact section — and the job is to execute that identity with the craft and restraint of a premium studio, not to invent a new unrelated palette. OWN-WORLD: the same three brand hues (forest green, gold, maroon) carried by disciplined typography (Fraunces display serif + Montserrat body), flat hairline-driven depth, and the brand's own hero photo — with the incumbent site's glitch-text, rainbow card chips, and default green/maroon SVG icon retired as execution debt, not as brand debt. STORY: a returning visitor recognizes DataSoft instantly (the green wordmark, the photo, the maroon brief-us dip) but experiences it as noticeably more composed and confident than before. FIRST VIEWPORT: a deep forest-green hero shell, gold eyebrow + serif Kiswahili headline on the left, the brand photo framed in a cream card on the right, one gold call-to-action. FORM: Persuade mode, brief-pinned (user confirmed 2026-08-05: keep the real brand colors, the DataSoft wordmark and its color, the hero image, and the V-shaped contact seam; everything else is open to elevate).

**Key Characteristics:**
- Three brand hues, each with one clear job: **forest green** is the shell and the logotype/success color; **gold** is the one interactive accent (every CTA, link, active state); **maroon** is the "closing" register reserved for the Contact and Footer section, exactly as on the incumbent site.
- Editorial serif (Fraunces) for headlines; Montserrat for everything functional — including the "DataSoft" logotype itself, which stays bold sans and brand-green, never converted to the display serif.
- The `datasoftsoftware.gif` brand photo is kept and framed in a cream card rather than discarded — it's brand evidence, not a placeholder.
- The maroon Contact section keeps its signature V-notch top seam (via `clip-path`, not the incumbent's double-skewed-div hack) — a distinctive, recognizable shape, not a generic straight section boundary.
- Flat, hairline-driven depth. No drop shadows, no glassmorphism, no glitch-text (the incumbent's letter-by-letter glitch spans are retired as dated execution, not as brand color).

## Colors

Three brand hues, each confined to a register, plus a warm cream content room.

### Primary accent
- **Gold** (`#D4A017`): the one interactive accent. Every primary CTA, active nav state, link underline, icon stroke. Used on the dark shell; used sparingly (never as a body-text color) inside cream rooms.
- **Gold Bright** (`#F0C550`): hover/active state of Gold only. Never a resting color.

### Brand green
- **Forest** (`#2E9F5B`) / **Forest Bright** (`#45C078`): the DataSoft logotype color, the WhatsApp affordance, and the form success state — the signature brand green, used deliberately rather than scattered.

### Shell (dark)
- **Espresso Deep** (`#0F2418`): the shell background — nav, hero, "How We Work" process section, service-page heroes.
- **Espresso Raised** (`#17331F`): raised surfaces on the shell.
- **Espresso Line** (`#294B34`): hairline borders on the shell.

### Closing register (maroon)
- **Maroon** (`#591421`): reserved for the Contact ("Brief Us") section and the Footer only — never used elsewhere. This is DataSoft's own "closing" color from the incumbent site.
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
**The One Accent Rule.** Gold is the only saturated color permitted for interactive emphasis outside the logotype. Green is reserved for the logotype, WhatsApp, and success states — it is brand identity, not a second free accent.
**The Register Rule.** Maroon appears only in Contact and Footer. If maroon starts appearing elsewhere, that's drift, not a new "pop" color.
**The No-Shadow Rule.** Depth comes from hairlines and register changes, never `box-shadow` blur. The one exception is a soft warm ambient glow permitted only on dark-surface hover states.

## Typography

**Display Font:** Fraunces (variable, optical sizing on), fallback Georgia, serif. Headlines only.
**Body Font:** Montserrat (self-hosted local `.woff2`, weights 300–800), fallback system sans. Everything functional, including the logotype.

### Hierarchy
- **Display** (weight 380, `clamp(2.5rem, 5vw, 4.5rem)`, line-height 1.04): hero headline only, one per page.
- **Headline** (weight 420, `clamp(1.75rem, 3.2vw, 2.75rem)`): section titles ("Huduma Zetu", "Jinsi Tunavyofanya Kazi", etc.).
- **Title** (Montserrat 600, 1.25rem): card titles, service names.
- **Body** (Montserrat 400, 1.0625rem, line-height 1.65, max 68ch): paragraph copy.
- **Label** (Montserrat 600, 0.75rem, letter-spacing 0.16em, uppercase): nav links, button text, eyebrow tags, form field labels.
- **Logotype** (Montserrat 700, forest-bright): the "DataSoft" wordmark specifically — never italic, never the display serif, always brand green.

### Named Rules
**The Serif-Once Rule.** Fraunces never appears below headline size and never on the logotype.

## Layout

Single-column scroll, max content width 1280px, with generous outer gutters (`clamp(1.25rem, 5vw, 6rem)`). Section vertical rhythm uses the `xl` spacing token (7rem) between major registers and `lg` (4rem) inside a section. Mobile collapses to a single column at 768px with reduced vertical rhythm.

## Elevation & Depth

Flat by default. Depth reads through register changes (shell vs. cream room vs. maroon closing register) and 1px hairlines, not shadows. The single permitted shadow is the warm ambient glow on dark-surface hover.

## Shapes

Corners use `rounded.sm`–`rounded.md` (4–8px) — buttons, cards, inputs. The hero photo sits in a bordered cream card (a "frame," not a full-bleed background) so the incumbent image's white background reads as intentional rather than a clipping error. The Contact section keeps its signature V-notch top seam via `clip-path: polygon(...)`.

## Components

### Buttons
- **Primary:** gold fill, espresso-deep text, uppercase label tracking (0.12em), padding `1rem 2.25rem`. Hover: gold-bright fill plus a 1px lift.
- **Ghost (on dark):** transparent fill, ivory text, 1px gold-dim border. Hover: border brightens to gold.
- **On ivory rooms:** ink text, no fill, a gold underline that grows from 0 to full width on hover/focus (via `transform: scaleX()`, not `width`, to stay off the main thread).

### Cards / Containers
- **Background:** `espresso-raised` on the dark shell, `ivory-card` on ivory rooms.
- **Border:** 1px hairline always present.
- **Internal Padding:** `lg` token (4rem desktop, 2rem mobile).

### Inputs / Fields
- **Style:** transparent background, bottom-only 1px border, no box. Label sits above as a Label-style eyebrow.
- **Focus:** border-bottom brightens to full gold and thickens to 2px.
- **Error:** border-bottom becomes rust.

### Navigation
- Fixed top bar on `espresso-deep`. Logo mark (recolored brass/gold brain SVG) + "DataSoft" wordmark (bold Montserrat, forest-bright green — never the display serif) on the left, Label-style nav links right, active/hover state is a gold underline. Language toggle (SW/EN) as a small gold-outlined pill. Mobile: same shell collapses to logo + gold hamburger opening a full-height drawer.

### Hero
- Two-column: Kiswahili serif headline + gold CTA on the left, the brand's `datasoftsoftware.gif` photo framed in a bordered cream card on the right. Stacks on mobile with the photo above the copy.

### Contact / "Brief Us" (signature)
- Maroon background with the incumbent's V-notch top seam, recreated via `clip-path: polygon(0 56px, 50% 0, 100% 56px, 100% 100%, 0 100%)` rather than the old double-skewed-div hack. Gold eyebrow, ivory heading, gold-bright italic pull-quote — the Footer continues the same maroon register with no hard seam between them, matching the incumbent site.

## Do's and Don'ts

### Do:
- **Do** keep the DataSoft wordmark bold, green, and non-italic — it's the one thing every returning visitor recognizes.
- **Do** keep the hero photo and the Contact V-notch seam — they're brand evidence, not incumbent debt.
- **Do** keep maroon confined to Contact + Footer.
- **Do** use hairlines and register changes for hierarchy before reaching for a shadow.

### Don't:
- **Don't** bring back the incumbent letter-by-letter glitch-text hero effect — retired as dated execution.
- **Don't** use the old 8-color rainbow card-chip set (`$cardColor1`–`8`) — collapsed into the three-hue brand system.
- **Don't** let maroon leak into sections other than Contact/Footer, or let gold appear as a second logotype color.
- **Don't** fabricate portfolio stats, client names, or testimonials — genericize illustrative examples per PRODUCT.md instead.
