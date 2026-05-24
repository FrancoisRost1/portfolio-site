# Frostaing AI | Public marketing site

Public site for **Frostaing AI**, a Geneva and Romandie AI and finance systems firm. Live at **[frostaing.com](https://frostaing.com)**.

This repository is the marketing site only. The technical work lives in sibling repositories; the eleven shipped systems are the firm's technical foundation, with the [Unified Research Terminal](https://terminal.frostaing.com) (`mini-bloomberg-terminal`) as the capstone.

## What we sell

- **Deal Intelligence** for PE, VC, and family offices in Geneva and Romandie. IC memo automation, deal screening, diligence synthesis, and portfolio monitoring. Scoped per mandate. Priced in the scoping call. Lives at `/deal-intelligence`.
- **Productized AI for SME finance teams**: fixed scope, fixed fee, fixed timeline. Sprint (4 weeks, CHF 12,000), Sprint Plus (6 weeks, CHF 22,000), optional retainer (CHF 1,500 / month). Lives at `/sme-finance`.

Both offers route to live calendars via Cal.com. Pricing for the deal-intelligence side is anchored to the published per-deliverable catalog on the terminal at [terminal.frostaing.com/pricing-cards](https://terminal.frostaing.com/pricing-cards).

## Stack

- **Framework**: Next.js 16.2 (App Router, server components throughout; no `"use client"`)
- **Hosting**: Vercel (deploys from `main`)
- **Booking**: Cal.com (live event types: 30-min PE Scoping Call, 20-min SME Fit Call)
- **Design system**: shared tokens in `app/_shared/theme.js`; interaction + responsive CSS in `app/globals.css`

## Architecture

```
app/
  page.js                      # homepage
  deal-intelligence/page.js    # hero offer (PE / VC / family offices)
  sme-finance/page.js          # supporting offer (SME CFOs)
  layout.js                    # root layout
  globals.css                  # interaction + responsive CSS (single source)
  _shared/                     # shared, non-routable (underscore-prefixed)
    theme.js                   # T (color/type tokens), TIER (tier colors)
    primitives.js              # StatusTag, SectionHead
    SiteHeader.js              # cross-route fixed nav, bookingHref prop
    Footer.js                  # cross-route footer
    Cta.js                     # PrimaryButton, BookCta
    proof.js                   # ProofStrip (deep-links to terminal workspaces)
    booking.js                 # BOOKING_PE, BOOKING_SME, CONTACT_EMAIL
public/                        # static assets (favicon, OG image, hero png)
```

Every proof tile on the offer pages deep-links to a specific terminal workspace (`/memo-builder`, `/universe-screener`, `/lbo-quick-calc`, `/portfolio-builder`) so a curious buyer can open the live product in one click.

## Local development

```bash
npm install                    # first time only
npm run dev                    # http://localhost:3000
npm run build                  # production build (must pass before push)
npm run start                  # serve the built output
```

Verify every change with `npm run build` before pushing. Vercel deploys from `main`.

## Design rules

- Swiss-finance understated tone. No Americanisms ("crush it", "10x", "game-changer"). Keywords: auditable, production-grade, test-covered, structured.
- No em dashes, no emojis in any user-visible string or in committed files. `->` and `→` arrows are the accepted convention.
- All colors and type via `T` from `app/_shared/theme.js`. No new hex literals in page code.
- Color-only interactions. No transforms, no glow, no animation.
- Server components only. `next/link` for internal routes, plain `<a>` for external links and the booking URLs.

## Hard rules (do not undo without explicit owner direction)

The firm direction has been wrongly reverted by past sessions. These decisions are deliberate and durable. Read `CLAUDE.md` before changing any of them.

- **Hero offer is deal intelligence for PE / VC / family offices**, not "AI/finance portfolio". Reverted twice before by sessions misreading the firm direction as a mistake.
- **Founder CV is removed** (no nav link, no About-bio link, the PDF was deleted). A firm site does not carry a founder CV.
- **No multi-person team page** until verified LinkedIns exist. The previous 10-persona team page was a credibility liability; photos archived (not deleted) at `public/_archive/team/` for a possible Pass 2 verified-advisors section.
- **The `Claude Certified Architect` line goes into About only after the exam is passed**, never before.

## Pass 2 (pending)

Add `/fr` route + a language toggle. Translate ONLY the homepage, `/deal-intelligence`, `/sme-finance`, and contact. Skip the systems index, about, and architecture sections. Use Romandie finance register; keep "family office" and "deal intelligence" in English; use "note d'investissement" for IC memo. Avoid literal translation.

## Related

- **Terminal (capstone product)**: [terminal.frostaing.com](https://terminal.frostaing.com), repo `mini-bloomberg-terminal`. Sixty-eight institutional workspaces, ~4,000 tests, seven institutional audit closure passes through v2.79.0.
- **Engines (technical foundation)**: ten sibling repositories for LBO, PE screening, factor models, regime detection, TSMOM, options pricing, portfolio optimization, robustness lab, M&A database, and the AI research agent. The terminal integrates all ten.
- **Methodology**: [terminal.frostaing.com/methodology](https://terminal.frostaing.com/methodology) is the trust surface that names every kernel, every limit, and every config-truthful threshold.
