@AGENTS.md

# Portfolio Site: Frostaing AI firm site (local source of truth)

> Public site for **Frostaing AI**, a Geneva / Romandie AI and finance
> systems firm. This is NOT a personal recruiter portfolio. Read this fully
> before changing anything. Confirm with the user before undoing any
> positioning decision below. The firm direction has been wrongly reverted
> by past sessions.

## Current state (TERMINAL-AS-PRODUCT pivot, 2026-06-19)

**Direction change (owner request, 2026-06-19): the site sells ONE thing,
the terminal.** We no longer sell bespoke AI mandates / deal-intelligence
consulting / SME productized work. The three consulting routes
(`/deal-intelligence`, `/services`, `/sme-finance`) and their data files
(`app/_shared/mandates.js`, `app/_shared/proof.js`) were DELETED. The
terminal (`terminal.frostaing.com`) is the product, in open beta and FREE
to use; planned price at general availability is **CHF 200 / month** (one
number, `PRICE_CHF` constant at the top of `app/page.js`, do not hardcode
elsewhere). Do not re-add the consulting offering without explicit owner
instruction.

Two static routes, both prerendered: `/` and `/_not-found`.

- `app/page.js`: single-product homepage. Section order: Hero -> Approach
  (what the terminal is) -> Features (8 engine tiles, each links to a live
  workspace) -> Pricing (free during beta, CHF 200/mo planned) -> Feedback
  -> Systems (technical foundation, 11-system table kept) -> About ->
  Contact. Primary action everywhere is "Open the terminal"
  (`TERMINAL_ROOT`), not "Book a call". Hero stat strip: Workspaces 68 /
  Tests Passing / Beta Free / Planned Price CHF 200. `FEATURES`, `INCLUDED`,
  and `ALL_PROJECTS` are the only data arrays. No Streamlit URLs
  (`grep -r streamlit.app app/` empty).
- **Feedback is a first-class section** (`#feedback`, owner explicitly
  required a feedback path). Two channels: (1) in-terminal feedback control
  on every workspace, (2) a 30-min beta call via `BOOKING_PE`. Email
  fallback `francois@frostaing.com?subject=Terminal%20feedback`.
- `app/not-found.js` ROUTES now point at `/`, `/#features`, `/#pricing`,
  `/#feedback` (the old consulting routes are gone).

`app/_shared/SiteHeader.js` nav order: Terminal / Pricing / Feedback /
Systems / About / Contact (all `/#anchor` hash links now; no separate
routes). Header CTA button is "Open terminal" -> `ctaHref` prop (defaults
to the production terminal); the old `bookingHref`/`BOOKING_SME` are gone.
`app/_shared/Cta.js` `BookCta` was deleted (only `PrimaryButton` remains).
`app/_shared/booking.js` keeps only `BOOKING_PE` (repurposed as the beta
call) + `CONTACT_EMAIL`.

## Audit pass (2026-06-01, investor + mobile audit, NOT yet pushed)

Applied from two external audits (`frostaing-audit.md`, `frostaing-mobile-audit.md`,
phone tested at 375x844). Working-tree only; nothing committed/pushed (a parallel
session was live in `mini-bloomberg-terminal`). Verified with `npm run build` +
Playwright at 375x844 and 1280.

- **Test count reconciled to one canonical figure.** The capstone terminal was
  quoted as both `3,700+` and `4,000+` on one page. Pulled the real current
  number from `mini-bloomberg-terminal/CLAUDE.md` (v3.0.0-rc1, 2026-05-31):
  **7,734 backend pytest + 2,542 frontend vitest**. Used everywhere (capstone
  card, systems table, I3 spec, /sme-finance proof tile). The `ALL_PROJECTS`
  reducer now sums to a deterministic **9,044** via `toLocaleString("en-US")`
  (was locale-dependent; a comma-locale vs apostrophe-locale build would flip
  it). NOTE: the GitHub README (3,946) is stale and is the terminal repo's job
  to sync; do not anchor the site to it.
- **Branded 404** at `app/not-found.js` (server component, dark chrome,
  SiteHeader + Footer + 4 back-into-site routes). Replaces Next's bare white
  default.
- **`/pricing-cards` dead-link copy** on /deal-intelligence ENGAGEMENT now reads
  "the Services page" (in-site `/services`), not the non-existent route.
- **LBO row**: tests `-` -> `n/a`; metric `1000 sims` -> `500 sims` (matches the
  LBO repo + master index).
- **/sme-finance CHF** commas -> Swiss apostrophes.
- **Hero contrast**: bg image opacity 0.30 -> 0.16, stronger mid scrim, sub-
  paragraph bumped to `T.text`.
- **Mobile nav (CSS-only, no `use client`).** `SiteHeader` gained a hidden
  `#nav-toggle` checkbox (direct child of `<nav>`), a `.nav-burger` label, and a
  `.mobile-menu` sibling revealed by `.nav-toggle-checkbox:checked ~ .mobile-menu`
  under 900px. Page navigations reset the checkbox (header re-renders); same-page
  anchor taps leave it open (accepted no-JS trade-off). Keeps the server-component
  rule intact.
- **Mobile overflow fixes (375x844 now has zero horizontal scroll).** Hero stat
  strip `.hero-stats` collapses 4-up -> 2-up. `CaseStudy` `<article>` got a
  `.case-grid` class that stacks on mobile (the existing `div[style*=grid]`
  collapse rule misses `<article>`, so the narrow 4fr spec column was overflowing
  its right-aligned `<dd>` values). Contact rows shrink the value track
  (`minmax(0,1fr)`) + `overflow-wrap:anywhere` so long mono strings (the LinkedIn
  handle) wrap instead of pushing the grid past the viewport.
- **About: Claude Certified Architect** added (the audit confirmed the exam is
  passed, which clears the Pass 2 gate below). Founder paragraph now reads
  "Francois Rostaing, Claude Certified Architect (Anthropic), supported by ...",
  and a `CERTIFICATION -> Claude Certified Architect (Anthropic)` row was added to
  the firm-profile box. If the exam is NOT actually passed, revert both.

Still NOT fixable in code (owner / other-repo follow-ups): Cal.com booking loads
in French (dashboard event-locale setting); GitHub repo description + README say
"4 institutional workspaces" / 3,946 tests (stale, terminal repo's job).

## Architecture

- `app/_shared/`: shared, non-routable (underscore-prefixed):
  `theme.js` (`T`, `TIER`), `primitives.js` (`StatusTag`, `SectionHead`),
  `SiteHeader.js` (fixed nav, no CV link, `ctaHref` prop -> terminal),
  `Footer.js`, `Cta.js` (`PrimaryButton` only), `booking.js`
  (`BOOKING_PE` + `CONTACT_EMAIL`). `mandates.js` and `proof.js` were
  deleted in the 2026-06-19 terminal pivot.
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
- **One price on the site: `PRICE_CHF` in `app/page.js` (CHF 200 / mo,
  planned GA price; free during beta).** Do not hardcode the number
  anywhere else. If the terminal's launch price changes, change it here.
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

`app/_shared/booking.js` exports a single `BOOKING_PE` Cal.com URL (a 30-min
call), repurposed in the 2026-06-19 pivot as the BETA FEEDBACK call used by
the homepage `#feedback` section. `BOOKING_SME` was removed. The header CTA is
no longer a booking button; it opens the terminal (`ctaHref`).

## Team page (do not re-add naively)

Removed as a credibility liability (10 personas, 3 Rostaings, stock photos,
no LinkedIns). Photos archived, not deleted, at `public/_archive/team/`.
Pass 2 may reintroduce a 1-2 person "Advisors & Collaborators" section ONLY
with real people and verified LinkedIn links.

## Pass 2 (pending, next session): French

Add `/fr` route + a language toggle. Translate ONLY the single homepage
(hero, terminal overview, features, pricing, feedback, contact). Skip the
systems table and about. Romandie finance register; keep "terminal" in
English; render CHF 200 / mois. Avoid literal translation. ("Claude Certified
Architect" is LIVE in About; it no longer gates Pass 2.)
