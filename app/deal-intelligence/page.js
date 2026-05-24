/*
  /deal-intelligence. The hero offer.

  PE / VC / family office. Deliberately unpriced: pricing is set in the
  scoping call once fund size and workflow complexity are clear. Lean offer
  page, not a second homepage. Embeds three hand-picked proof tiles inline
  and links back to /#systems for the full eleven.
*/

import { T } from "../_shared/theme";
import { SectionHead } from "../_shared/primitives";
import { SiteHeader } from "../_shared/SiteHeader";
import { Footer } from "../_shared/Footer";
import { BookCta } from "../_shared/Cta";
import { ProofStrip } from "../_shared/proof";
import { BOOKING_PE } from "../_shared/booking";

export const metadata = {
  title: "Deal Intelligence for PE, VC & Family Offices | Frostaing AI",
  description:
    "AI investment research and deal intelligence for private equity, venture capital, and family offices in Geneva and Romandie. IC memo automation, deal screening, diligence synthesis, portfolio monitoring. Scoped per mandate.",
};

const COVERAGE = [
  {
    code: "01",
    title: "IC memo automation",
    body:
      "Filings, financials, valuation, and risk compressed into an IC ready memo. The rating is computed and locked before any prose is written, so the narrative cannot drift from the decision. Auditable at every step.",
  },
  {
    code: "02",
    title: "Deal and target screening",
    body:
      "Percentile scoring blended with a simplified LBO IRR, debt capacity tiering, and red flag detection. A short list with the reasoning attached, not an opaque rank.",
  },
  {
    code: "03",
    title: "Diligence synthesis",
    body:
      "Document intake, extraction, and structured synthesis across a data room. Consistent output across analysts, with provenance kept so a number can always be traced to its source.",
  },
  {
    code: "04",
    title: "Portfolio monitoring",
    body:
      "Ongoing tracking of portfolio companies and market context in a single research surface. Built to compose with the screening and memo systems rather than sit beside them.",
  },
];

const ENGAGEMENT = [
  ["Scoped per mandate", "Each engagement is scoped to one fund and one workflow. No open-ended retainers to start."],
  ["Test covered", "Systems ship with full test coverage and a Codex-audited review. The same standard as the eleven shipped systems."],
  ["Deployed", "Delivered as a production tool with code handover, not a slide deck or a notebook."],
  ["Priced in the call", "Pricing is set in the scoping call once fund size and workflow complexity are clear. Engagements typically run as a pilot scaling into ongoing work. The terminal's published per-deliverable catalog on /pricing-cards is the reference anchor."],
];

// Deep links into the live terminal. The marketing page leads with the
// scoping call, but a curious buyer can open the product in one click.
const TERMINAL_LINKS = [
  {
    label: "Methodology",
    href: "https://terminal.frostaing.com/methodology",
    blurb: "How every number is computed and the limits we declare.",
  },
  {
    label: "Pricing catalog",
    href: "https://terminal.frostaing.com/pricing-cards",
    blurb: "Geneva-anchored per-deliverable and retainer rates.",
  },
  {
    label: "Case studies",
    href: "https://terminal.frostaing.com/case-studies",
    blurb: "Anonymised mandate summaries (populated on first close).",
  },
];

function Hero() {
  return (
    <section
      style={{
        padding: "11rem 2rem 6rem",
        borderBottom: `1px solid ${T.borderStrong}`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          <span style={{ width: 44, height: 1, background: T.accent }} />
          <span
            style={{
              fontFamily: T.fMono,
              fontSize: "0.68rem",
              color: T.accent,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Hero offer | PE, VC and Family Offices
          </span>
        </div>
        <h1
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(2.3rem, 5.4vw, 4.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.032em",
            lineHeight: 1.05,
            color: T.text,
            margin: 0,
            maxWidth: 980,
          }}
        >
          Deal intelligence for private equity, venture capital, and family
          offices.
        </h1>
        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(1.02rem, 1.4vw, 1.22rem)",
            color: T.text2,
            lineHeight: 1.6,
            margin: "2.25rem 0 0",
            maxWidth: 780,
          }}
        >
          We automate the investment research and IC memo workflow for funds
          and family offices in Geneva and Romandie. IC memo automation, deal
          screening, diligence synthesis, and portfolio monitoring, delivered
          as production-grade, auditable systems.
        </p>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section style={{ padding: "8rem 2rem 5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="01" label="What we cover" right="4 workflows" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            border: `1px solid ${T.borderSubtle}`,
            background: T.bg,
          }}
        >
          {COVERAGE.map((c, i) => (
            <div
              key={c.code}
              className="service-cell"
              style={{
                padding: "2.25rem 2rem",
                borderRight: i % 2 === 0 ? `1px solid ${T.borderSubtle}` : "none",
                borderBottom: i < 2 ? `1px solid ${T.borderSubtle}` : "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
              }}
            >
              <span
                style={{
                  fontFamily: T.fMono,
                  fontSize: "0.62rem",
                  color: T.accent,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {c.code}
              </span>
              <h3
                style={{
                  fontFamily: T.fSans,
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  letterSpacing: "-0.016em",
                  color: T.text,
                  margin: 0,
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontFamily: T.fSans,
                  fontSize: "0.92rem",
                  color: T.text2,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Engagement() {
  return (
    <section style={{ padding: "3rem 2rem 5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="02" label="How engagements run" weight="compact" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "1rem",
          }}
        >
          {ENGAGEMENT.map(([k, v]) => (
            <div
              key={k}
              style={{
                border: `1px solid ${T.borderSubtle}`,
                background: T.bg,
                padding: "1.6rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: T.fMono,
                  fontSize: "0.62rem",
                  color: T.accent,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "0.7rem",
                }}
              >
                {k}
              </div>
              <p
                style={{
                  fontFamily: T.fSans,
                  fontSize: "0.92rem",
                  color: T.text2,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TerminalDeepLinks() {
  return (
    <section style={{ padding: "0 2rem 5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="03" label="Open the terminal" weight="compact" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "1rem",
          }}
        >
          {TERMINAL_LINKS.map((tl) => (
            <a
              key={tl.label}
              href={tl.href}
              target="_blank"
              rel="noopener noreferrer"
              className="proof-tile"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                border: `1px solid ${T.borderSubtle}`,
                background: T.bg,
                padding: "1.6rem 1.5rem",
                color: T.text,
              }}
            >
              <div
                style={{
                  fontFamily: T.fMono,
                  fontSize: "0.62rem",
                  color: T.accent,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {tl.label}
              </div>
              <p
                style={{
                  fontFamily: T.fSans,
                  fontSize: "0.92rem",
                  color: T.text2,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {tl.blurb}
              </p>
              <span
                aria-hidden
                style={{
                  marginTop: "auto",
                  paddingTop: "0.85rem",
                  borderTop: `1px solid ${T.borderSubtle}`,
                  fontFamily: T.fMono,
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: T.accent,
                }}
              >
                Open {"→"}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section
      style={{
        padding: "5rem 2rem 6rem",
        background: T.surface,
        borderTop: `1px solid ${T.borderStrong}`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <ProofStrip
          label="Proven on shipped systems · open the live workspace"
          tiles={[
            {
              title: "IC Memo Automation · Terminal Workspace",
              blurb:
                "Six-engine deterministic recommendation aggregator with Claude-synthesized memo and PDF export. Rating is locked before the LLM writes prose.",
              href: "https://terminal.frostaing.com/memo-builder",
            },
            {
              title: "Deal and Target Screening · Terminal Workspace",
              blurb:
                "Universe-scale percentile scoring plus simplified LBO IRR, debt-capacity tiering and red-flag detection. A short list with reasoning attached.",
              href: "https://terminal.frostaing.com/universe-screener",
            },
            {
              title: "LBO and Credit Mechanics · Terminal Workspace",
              blurb:
                "Live LBO base case, equity bridge, IRR sensitivity grid. Source-reconciled to FMP and FRED, with a mega-cap guard so multi-trillion targets cannot accidentally clear.",
              href: "https://terminal.frostaing.com/lbo-quick-calc",
            },
            {
              title: "Portfolio and Risk Analytics · Terminal Workspace",
              blurb:
                "MV, HRP, Risk Parity and Black-Litterman; Brinson attribution, ex-ante factor exposure, and a PBO / DSR robustness pass on the chosen basket.",
              href: "https://terminal.frostaing.com/portfolio-builder",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default function DealIntelligencePage() {
  return (
    <main style={{ background: T.bg, color: T.text }}>
      <SiteHeader />
      <Hero />
      <Coverage />
      <Engagement />
      <TerminalDeepLinks />
      <Proof />
      <BookCta
        id="book"
        kicker="Deal Intelligence"
        title="Book a scoping call."
        body="A 30-minute scoping call is the fastest way to see if there is a fit. We use it to understand fund size, current memo workflow, and where the manual time goes. Pricing follows from that conversation."
        buttonLabel="Book a 30-minute scoping call"
        buttonHref={BOOKING_PE}
      />
      <Footer />
    </main>
  );
}
