@AGENTS.md

# Portfolio Site — Frostaing AI firm site (local source of truth)

> Public site for **Frostaing AI**, a Geneva / Romandie AI and finance
> systems firm. This is NOT a personal recruiter portfolio. Read this fully
> before changing anything. Confirm with the user before undoing any
> positioning decision below — the firm direction has been wrongly reverted
> by past sessions.

## Current state (EN Pass 1 shipped 2026-05-17, commit f58f5ce)

Three static routes, all prerendered:

- `app/page.js` — homepage. Hero names the buyer (PE/VC/family office), not
  the technology. Services collapsed 4 -> 2 (primary: deal intelligence;
  secondary: productized SME analytics), each card links to its offer route.
  Reference Implementations honestly framed ("built to demonstrate
  capability ... available as starting points"), I1/I2/I3 each carry a
  quantified spec strip. SelectedWork + Systems table kept. About carries the
  solo + network line and the Claude Partner Network line, plus a discreet CV
  PDF link. Contact leads with a "Book a call" button, email de-emphasized.
- `app/deal-intelligence/page.js` — hero offer, **unpriced** (priced in the
  scoping call). Coverage (4 workflows), engagement model, 3 inline proof
  tiles (AI Research Agent, LBO Engine, PE Target Screener), `BookCta` ->
  `BOOKING_PE`.
- `app/sme-finance/page.js` — productized, **public prices**: Sprint
  CHF 12,000 (4wk), Sprint Plus CHF 22,000 (6wk), optional retainer
  CHF 1,500/mo. 2 inline proof tiles (Unified Research Terminal, AI Research
  Agent), `BookCta` -> `BOOKING_SME`.

## Architecture

- `app/_shared/` — shared, non-routable (underscore-prefixed):
  `theme.js` (`T`, `TIER`), `primitives.js` (`StatusTag`, `SectionHead`),
  `SiteHeader.js` (cross-route fixed nav, no CV link), `Footer.js`,
  `Cta.js` (`PrimaryButton`, `BookCta`), `proof.js` (`ProofStrip` + tile
  data subset), `booking.js`.
- `app/globals.css` — all interaction + responsive CSS. No per-page inline
  `<style>` blocks (removed in this pass). Color-only interactions: no
  transforms, glow, or animation.
- Server components throughout (no `"use client"`); `next/link` for internal
  routes, plain `<a>` for external + the booking placeholder.

## Hard rules

- No em dashes, no emojis in any user-visible string. `→` arrows are an
  existing accepted convention.
- Swiss-finance understated tone. No Americanisms ("crush it", "10x",
  "game-changer"). Keywords: auditable, production-grade, test-covered,
  structured.
- All colors/type via `T` from `app/_shared/theme.js`. No new hex literals.
- Verify every change with `npm run build` (must pass) before pushing.
  Deploys from `main`.

## Booking placeholder

`app/_shared/booking.js` exports `BOOKING_PE` and `BOOKING_SME`, both
`"#book"`. User is configuring Cal.com (PE Scoping 30min, SME Fit 20min) and
will send two URLs to swap into that one file. Button copy, styling, and
position are already final — only the two URLs change.

## Team page (do not re-add naively)

Removed as a credibility liability (10 personas, 3 Rostaings, stock photos,
no LinkedIns). Photos archived, not deleted, at `public/_archive/team/`.
Pass 2 may reintroduce a 1-2 person "Advisors & Collaborators" section ONLY
with real people and verified LinkedIn links.

## Pass 2 (pending, next session) — French

Add `/fr` route + a language toggle. Translate ONLY: homepage,
`/deal-intelligence`, `/sme-finance`, contact. Skip systems index, about,
architecture. Romandie finance register; keep "family office" and "deal
intelligence" in English; "note d'investissement" for IC memo. Avoid literal
translation. Add the "Claude Certified Architect" line to About only after
the exam is passed (not before).
