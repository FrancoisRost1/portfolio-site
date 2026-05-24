@AGENTS.md

# Portfolio Site: Frostaing AI firm site (local source of truth)

> Public site for **Frostaing AI**, a Geneva / Romandie AI and finance
> systems firm. This is NOT a personal recruiter portfolio. Read this fully
> before changing anything. Confirm with the user before undoing any
> positioning decision below. The firm direction has been wrongly reverted
> by past sessions.

## Current state (EN Pass 2 shipped 2026-05-24, terminal-centric)

Four static routes, all prerendered:

- `app/page.js`: homepage. Hero names the buyer (PE/VC/family office), not
  the technology. Services grown to 3 cards (deal intelligence / mandate
  catalog / SME productized), each card links to its dedicated route.
  Reference Implementations honestly framed, I1/I2/I3 each carry a
  quantified spec strip. SelectedWork + Systems table kept. About carries the
  solo + network line and the Claude Partner Network line. No founder CV
  anywhere. Contact leads with a "Book a call" button, email de-emphasized.
  **Every `liveUrl` in `CASE_STUDIES` and `ALL_PROJECTS` is now a
  `terminal.frostaing.com/<workspace>` route** (LBO -> /lbo-quick-calc,
  PE Screener -> /universe-screener, etc.). Button copy "Live App" was
  replaced with "Open in terminal" everywhere. There are NO Streamlit URLs
  anywhere in the site any more (`grep -r streamlit.app app/` is empty).
- `app/services/page.js` (NEW): the mandate catalog. 13 priced SKUs grouped
  by cadence (per-deliverable / monthly retainer / quarterly / subscription).
  Each card: label, cadence, headline CHF, SLA, includes-list, and
  "Open in terminal" link to the matching workspace. Data lives in
  `app/_shared/mandates.js` so the page stays pure layout. `BookCta` ->
  `BOOKING_PE` (30 min scoping call).
- `app/deal-intelligence/page.js`: hero offer, **unpriced** (priced in the
  scoping call). Coverage (4 workflows), engagement model, 3 inline proof
  tiles (AI Research Agent, LBO Engine, PE Target Screener). The "Open
  the terminal" section's "Pricing catalog" tile now links INTERNALLY to
  `/services` (not the terminal's `/pricing-cards`) so the buyer reads the
  catalog in the firm chrome; methodology + case studies stay on the
  terminal where they live. `BookCta` -> `BOOKING_PE`.
- `app/sme-finance/page.js`: productized, **public prices**: Sprint
  CHF 12,000 (4wk), Sprint Plus CHF 22,000 (6wk), optional retainer
  CHF 1,500/mo. 2 inline proof tiles (Unified Research Terminal, IC Memo
  workspace), `BookCta` -> `BOOKING_SME`.

`app/_shared/mandates.js` is the canonical mirror of the terminal's
`config.d/pricing-cards.yaml`. When the terminal YAML changes, this file
changes in the same commit. Drift means the marketing site shows a number
the buyer won't see on the workspace they land on after the booking call.

`app/_shared/SiteHeader.js` nav order: Deal Intelligence / Services /
SME & Finance / Systems / About / Contact.

## Architecture

- `app/_shared/`: shared, non-routable (underscore-prefixed):
  `theme.js` (`T`, `TIER`), `primitives.js` (`StatusTag`, `SectionHead`),
  `SiteHeader.js` (cross-route fixed nav, no CV link, `bookingHref` prop),
  `Footer.js`, `Cta.js` (`PrimaryButton`, `BookCta`), `proof.js`
  (`ProofStrip` + tile data subset), `booking.js`.
- `app/globals.css`: all interaction + responsive CSS. No per-page inline
  `<style>` blocks (removed in this pass). Color-only interactions: no
  transforms, glow, or animation.
- Server components throughout (no `"use client"`); `next/link` for internal
  routes, plain `<a>` for external links and the booking URLs.

## Hard rules

- **No Streamlit URLs anywhere.** Every "live" link points at the
  production terminal (`terminal.frostaing.com` or a workspace subroute).
  The ten engine repos still exist on GitHub as reference implementations,
  but the marketing site treats them as ONE product: the terminal.
  Regression check: `grep -r 'streamlit.app' app/` must be empty.
- **`app/_shared/mandates.js` mirrors `mini-bloomberg-terminal/config.d/
  pricing-cards.yaml`.** Update both in the same commit when pricing
  changes. A buyer must never see a different number on the marketing
  catalog than on the terminal workspace they open after the booking call.
- No em dashes, no emojis in any user-visible string OR in committed files
  (CLAUDE.md, README) since they surface on GitHub. `->` and `→` arrows are
  an existing accepted convention.
- Swiss-finance understated tone. No Americanisms ("crush it", "10x",
  "game-changer"). Keywords: auditable, production-grade, test-covered,
  structured.
- All colors/type via `T` from `app/_shared/theme.js`. No new hex literals.
- Verify every change with `npm run build` (must pass) before pushing.
  Deploys from `main`.

## Booking

`app/_shared/booking.js` exports `BOOKING_PE` and `BOOKING_SME`, now live
Cal.com URLs (PE Scoping Call 30 min, SME Fit Call 20 min). The `SiteHeader`
takes a `bookingHref` prop defaulting to `BOOKING_PE`; `/sme-finance` passes
`BOOKING_SME` so the header CTA matches the page buyer. PE-facing copy says
"30-minute"; SME-facing copy says "20-minute". Keep that split if the Cal.com
event durations change: PE is 30, SME is 20.

## Team page (do not re-add naively)

Removed as a credibility liability (10 personas, 3 Rostaings, stock photos,
no LinkedIns). Photos archived, not deleted, at `public/_archive/team/`.
Pass 2 may reintroduce a 1-2 person "Advisors & Collaborators" section ONLY
with real people and verified LinkedIn links.

## Pass 2 (pending, next session): French

Add `/fr` route + a language toggle. Translate ONLY: homepage,
`/deal-intelligence`, `/sme-finance`, contact. Skip systems index, about,
architecture. Romandie finance register; keep "family office" and "deal
intelligence" in English; "note d'investissement" for IC memo. Avoid literal
translation. Add the "Claude Certified Architect" line to About only after
the exam is passed (not before).
