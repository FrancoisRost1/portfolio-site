# Frostaing AI | Public marketing site

Public site for the **Frostaing terminal**, an AI-native finance research terminal built by Frostaing AI in Geneva and Romandie. Live at **[frostaing.com](https://frostaing.com)**.

This repository is the marketing site only. The product itself lives at **[terminal.frostaing.com](https://terminal.frostaing.com)**; the eleven shipped systems in sibling repositories are the terminal's technical foundation.

## What we sell

One thing: **access to the terminal**.

- Live markets, AI equity research with locked deterministic ratings, options, LBO and deal modeling, comps, portfolio construction, and systematic signals, in one research desk.
- **Open beta, free to use right now.** No card, no trial clock.
- Planned price at general availability: **CHF 200 / month** (held as the `PRICE_CHF` constant in `app/page.js`, the single source of truth for the number on the site).

The site does not sell consulting or bespoke AI mandates. Feedback from beta users is a first-class call to action: an in-terminal feedback control on every workspace, plus a 30-minute beta call via Cal.com.

## Stack

- **Framework**: Next.js 16.2 (App Router, server components throughout; no `"use client"`)
- **Hosting**: deploys from `main`
- **Booking**: Cal.com (30-minute beta call, `BOOKING_PE`)
- **Design system**: shared tokens in `app/_shared/theme.js`; interaction + responsive CSS in `app/globals.css`

## Architecture

```
app/
  page.js                      # single homepage (hero / overview / features /
                               #   pricing / feedback / systems / about / contact)
  not-found.js                 # branded 404
  layout.js                    # root layout + metadata
  globals.css                  # interaction + responsive CSS (single source)
  _shared/                     # shared, non-routable (underscore-prefixed)
    theme.js                   # T (color/type tokens), TIER (tier colors)
    primitives.js              # StatusTag, SectionHead
    SiteHeader.js              # fixed nav, ctaHref prop (opens the terminal)
    Footer.js                  # cross-route footer
    Cta.js                     # PrimaryButton
    booking.js                 # BOOKING_PE, CONTACT_EMAIL
public/                        # static assets (favicon, terminal-hero.png)
```

Each of the eight feature tiles and every row of the technical-foundation table deep-links to a live terminal workspace, so a curious visitor can open the real product in one click.

## Local development

```bash
npm install                    # first time only
npm run dev                    # http://localhost:3000
npm run build                  # production build (must pass before push)
npm run start                  # serve the built output
```

Verify every change with `npm run build` before pushing. Deploys from `main`.

## Design rules

- Swiss-finance understated tone. No Americanisms ("crush it", "10x", "game-changer"). Keywords: auditable, production-grade, test-covered, structured.
- No em dashes, no emojis in any user-visible string or in committed files. `->` and `→` arrows are the accepted convention.
- All colors and type via `T` from `app/_shared/theme.js`. No new hex literals in page code.
- Color-only interactions. No transforms, no glow, no animation.
- Server components only. `next/link` for internal anchors, plain `<a>` for external links and the booking URL.

## Hard rules (do not undo without explicit owner direction)

These decisions are deliberate and durable. Read `CLAUDE.md` before changing any of them.

- **The product is the terminal.** The site sells terminal access, not consulting. The consulting routes (`/deal-intelligence`, `/services`, `/sme-finance`) were deleted in the 2026-06-19 pivot. Do not re-create them without explicit owner instruction.
- **Beta feedback is a required, first-class section.** The owner wants a feedback path on the site.
- **One price**, `PRICE_CHF` in `app/page.js`. Do not hardcode the number anywhere else.
- **Founder CV is removed**, and **no multi-person team page** until verified LinkedIns exist (photos archived at `public/_archive/team/`).

## Pass 2 (pending)

Add `/fr` route + a language toggle on the single homepage. Render CHF 200 / mois; keep "terminal" in English. Skip the systems table and about. Use Romandie finance register. Avoid literal translation.

## Related

- **Terminal (the product)**: [terminal.frostaing.com](https://terminal.frostaing.com), repo `mini-bloomberg-terminal`. Sixty-eight institutional workspaces.
- **Engines (technical foundation)**: ten sibling repositories for LBO, PE screening, factor models, regime detection, TSMOM, options pricing, portfolio optimization, robustness lab, M&A database, and the AI research agent. The terminal integrates all ten.
