# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Tanzanian (and East African) business owners, organizations, and institutions who have a technology need — a website, a system, a network, or visual/brand design — but not the in-house technical skill to build it themselves. They are evaluating DataSoft against other local agencies/freelancers and are judging trustworthiness and professionalism largely from the website itself before ever making contact. Secondary audience: English-speaking or diaspora clients who need the option to read the site in English.

## Product Purpose

DataSoft Tanzania (based in Mwanza) is a technology solutions company that turns a client's idea into a working, customized product across four service lines: Software Development, Web Design & Hosting, Computer Networking, and Graphics Design. Success is a visitor trusting the company enough to submit the contact/brief form or call.

## Positioning

A local (Mwanza-based), full-service technology partner — one company that can take a client from idea to software, to the network it runs on, to the website that presents it, to the graphics that market it — rather than a single-skill freelancer or an overseas agency with no local presence.

## Operating Context

- Real business: House No 640, Medical Research Road, Kitangiri, Ilemela, Mwanza, Tanzania. Phone +255 767 887 999. Email datasofttanzania@gmail.com. Instagram @datasofttanzania.
- Contact happens via a brief/contact form (posts to `/api/email` via Nodemailer) or direct call/WhatsApp-style tel link.
- Site currently has one shared "Software Development Process" content block reused verbatim across the Software, Hosting, Networking, and Graphics service pages — a known defect to fix, not a fact to preserve.
- Live at https://www.datasoft.co.tz.

## Capabilities and Constraints

- Next.js 13 App Router, TypeScript, SCSS modules, MUI, react-icons, axios, react-hot-toast, Nodemailer-backed contact API.
- **Language: decided.** Kiswahili is the default/primary language of the site; an English toggle is kept for international/diaspora visitors. (Confirmed by user 2026-08-05.)
- **Portfolio/case-study content: decided.** The current "Recent Projects" entries (Real Estate App, Food Delivery, XChain AI, Find My Place, Photo Editor) and the generic 4-step "Software Development Process" copy are placeholder-quality, not verified real case studies. Treat them as illustrative capability examples only — genericize rather than presenting them as specific fabricated client work. (Confirmed by user 2026-08-05.)
- **Proof points: decided, then partially reversed for testimonials.** No verified stats, client logos, team size, or years-in-business are available yet — do not fabricate them; the redesign must earn trust through design craft, clarity, and service depth rather than fabricated social proof otherwise. (Confirmed by user 2026-08-05.) **Exception (user, 2026-08-09):** a testimonials panel (`app/components/Testimonials.tsx`, styled after laravel.com/cloud) was added with two real names/locations the user supplied (Godwin Marko Shauri, Kasulu/Kigoma; Benson Godfrey, Kuafit Gym, Njiro/Arusha) plus four additional illustrative names/quotes the user explicitly asked to be generated as placeholders, to be swapped for real client testimonials later. Treat all quote text and the four extra people as placeholder-quality pending real data, same as the portfolio case studies.

## Brand Commitments

- Name: DataSoft Tanzania / DataSoft. Existing mark: `/brainas.svg` (brain-motif logo, recolored to the brand palette — was a clashing default green/maroon).
- Requested direction (user, 2026-08-05): professional, luxurious, "expensive touch," captivating, curiosity-capturing, optimized for conversion to sales, and optimized for performance. This is binding creative direction, not to be diluted toward a generic safe template.
- **Brand elements to preserve (user, 2026-08-05, after reviewing live datasoft.co.tz):** this is a refinement of DataSoft's real brand, not a replacement with an unrelated palette. Keep (a) the gold and maroon brand colors, (b) the "DataSoft" wordmark's own font (bold sans, never the display serif), and (c) the maroon "Brief Us" contact section's signature V-notch top seam. Everything else — layout, spacing, typography scale, glitch-text removal, Kiswahili copy, performance — is open to elevate.
- **Palette pivot (user, 2026-08-06):** the brand green is retired sitewide — shell, logotype, and success states move to a professional sapphire/cobalt blue, gold and maroon are unchanged. The one exception is the WhatsApp floating affordance, which keeps WhatsApp's own brand green for recognizability. The hero must use a deliberate, professional gradient rather than a flat fill. Goal: read as senior, expert, and trustworthy enough that a visitor feels confident hiring DataSoft. See DESIGN.md for the resulting token values.
- **Hero art swap (user, 2026-08-06):** the `datasoftsoftware.gif` hero photo is retired, replaced by an original SVG illustration — a top-down city map (streets, rooftops, a coastline) overlaid with DataSoft's own fiber network graph running house to house, a maroon HQ pin with a rotating radar sweep, plus one home's interior floor plan zoomed in around a pulsing router. Runs at every screen size (user, 2026-08-06): full-bleed behind the hero card on desktop, and as its own illustration band above the card on mobile/tablet — not desktop-only.
- **Hero art swap #2 (user, 2026-08-09):** the city-map illustration is retired in turn, replaced by a VS Code–style IDE mockup — title bar, activity bar, file explorer, tabs, minimap, status bar — "typing" a small React/JSX snippet on load, in a dark sapphire glassmorphism card (translucent, blurred, soft top highlight) floating on the ivory hero. The snippet and filenames are written in Kiswahili so the mockup reads as DataSoft literally coding the client's business (`biashara-yako.tsx`, `faida.tsx` = profit, `mauzo.tsx` = sales) rather than generic sample code. See DESIGN.md and `app/components/CodeEditor.tsx`.
- **Portfolio ("Uwezo Wetu") redesign (user, 2026-08-09):** the four-item "Uwezo Wetu" / "Haya Ndiyo Tunayoyajenga" portfolio section moves off the icon-card grid (`CardProject`, now deleted) onto a stacked, alternating-row layout inspired by laravel.com/cloud, with each item paired against a bespoke sapphire-glass mockup window (`app/components/CapabilityShowcase.tsx`) reusing the Hero IDE mockup's chrome — a dashboard, a smartphone frame, a browser/website frame, and a design artboard, one per capability — instead of a shared icon medallion. No card borders/boxes; hairlines only, per DESIGN.md. All mockup content (dashboard numbers, product names/prices, "98" performance score) is illustrative UI chrome, not real client data or metrics — see Evidence on Hand below.

## Evidence on Hand

- Real: address, phone, email, social handle, four real service categories, live domain.
- Not verified as real: the five portfolio project case studies and the generic software-process copy (see Capabilities and Constraints). Future work must not invent new fake project names, client names, testimonials, or statistics to replace them — genericize instead.

## Product Principles

1. Trust is earned visually first — a Tanzanian SME deciding whether to hire DataSoft judges credibility from the site's craft before any conversation happens.
2. One company, four capabilities — software, hosting, networking, and graphics should read as a single coherent, full-service offer, not four disconnected mini-sites.
3. Kiswahili-first, not Kiswahili-only — the primary experience must feel native and fluent in Kiswahili, with English available without being the assumed default.
4. Never fabricate proof — where real testimonials/stats/case studies don't exist yet, the design carries the credibility burden instead of invented numbers.
5. Every page pulls toward one action — the contact/brief form — so visual ambition must still resolve into clear conversion paths.
