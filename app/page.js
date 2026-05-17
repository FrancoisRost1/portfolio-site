/*
  Frostaing AI. Homepage.

  Positioning: PE / VC / family office deal intelligence is the hero offer;
  productized SME finance work is the secondary offer. The two offers each
  have a dedicated route (/deal-intelligence, /sme-finance); this page leads
  with the wedge and links into them.

  Design system: DESIGN.md and style_inject.py. No em dashes. No emojis.
  No gradients. No glow. No hover transforms. Shared tokens and chrome live
  in app/_shared/. Interaction and responsive CSS live in globals.css.
*/

import Link from "next/link";
import { T, TIER } from "./_shared/theme";
import { StatusTag, SectionHead } from "./_shared/primitives";
import { SiteHeader } from "./_shared/SiteHeader";
import { Footer } from "./_shared/Footer";
import { PrimaryButton } from "./_shared/Cta";
import { BOOKING_PE, CONTACT_EMAIL } from "./_shared/booking";

export const metadata = {
  title: "Frostaing AI | AI Investment Research & Deal Intelligence",
  description:
    "Geneva and Romandie firm building AI investment research and deal intelligence systems for private equity, venture capital, and family offices. IC memo automation, deal screening, diligence synthesis, portfolio monitoring. Productized analytics for SME finance teams.",
};

/* ─────────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    rank: "Primary offer",
    name: "Deal Intelligence for PE, VC and Family Offices",
    href: "/deal-intelligence",
    summary:
      "AI investment research and deal intelligence for funds and family offices in Geneva and Romandie. Scoped per mandate, test covered, deployed as production tools.",
    bullets: [
      "IC memo automation",
      "Deal and target screening",
      "Diligence synthesis",
      "Portfolio monitoring",
    ],
    cta: "Deal intelligence offer",
  },
  {
    rank: "Secondary offer",
    name: "Financial Analytics and Internal Decision Tools",
    href: "/sme-finance",
    summary:
      "Productized AI for finance teams and SME CFOs. Fixed scope, fixed fee, fixed timeline, from document intake to management reporting and internal knowledge assistants.",
    bullets: [
      "Management reporting automation",
      "Document intake and extraction",
      "Internal knowledge assistants",
      "Decision dashboards",
    ],
    cta: "Productized SME offer",
  },
];

const IMPLEMENTATIONS = [
  {
    code: "I1",
    title: "Investment Memo Automation",
    body:
      "A deterministic recommendation aggregator that turns filings, financials, valuation, and risk into an IC ready memo. The rating is computed and locked before the model writes any prose, so the narrative can never override the decision.",
    source: "Adapted from the AI Research Agent system.",
    specs: [
      ["Tests", "242"],
      ["Pipeline", "6 engines, parallel"],
      ["Composite", "BUY ≥ 65 / SELL ≤ 35"],
    ],
  },
  {
    code: "I2",
    title: "Deal and Target Screening",
    body:
      "Percentile scoring blended with a simplified LBO IRR, debt capacity tiering, and red flag detection across a screening universe. Built to surface a short list with the reasoning attached, not a black box rank.",
    source: "Adapted from the PE Target Screener system.",
    specs: [
      ["Tests", "28"],
      ["Universe", "80 companies scored"],
      ["Output", "Debt-capacity tiers, red flags"],
    ],
  },
  {
    code: "I3",
    title: "Portfolio and Market Intelligence",
    body:
      "The full engine stack integrated into a Bloomberg style research terminal with institutional workspaces for live market, research, comps, and portfolio work. The capstone that the prior systems compose into.",
    source: "Adapted from the Unified Research Terminal system.",
    specs: [
      ["Tests", "506"],
      ["Workspaces", "6 institutional"],
      ["Coverage", "Market, Research, Comps, Portfolio"],
    ],
  },
];

const CASE_STUDIES = [
  {
    num: "01",
    name: "Unified Research Terminal",
    status: "live",
    tier: "Capstone",
    takeaway: "Ten systems collapse into one research desk.",
    detail:
      "Unified Bloomberg-style research terminal integrating all 10 prior engines into 6 institutional workspaces (Market, Research, Options, LBO, Comps, Portfolio). 506 tests passing.",
    facts: [
      ["Tests", "506"],
      ["Integrates", "10 prior systems"],
      ["Workspaces", "6"],
      ["Stack", "Next.js, Python, Plotly"],
    ],
    repo: "https://github.com/FrancoisRost1/mini-bloomberg-terminal",
    liveUrl: "https://terminal.frostaing.com",
  },
  {
    num: "02",
    name: "AI Research Agent",
    status: "live",
    tier: "Elite",
    takeaway: "Six engines decide. The LLM only writes the memo.",
    detail:
      "Deterministic recommendation aggregator. Engines run in parallel. The model writes the prose. The rating is locked.",
    facts: [
      ["Tests", "242"],
      ["Engines", "6, parallel"],
      ["Composite", "BUY ≥ 65, SELL ≤ 35"],
      ["Stack", "Python, Claude API"],
    ],
    repo: "https://github.com/FrancoisRost1/ai-research-agent",
    liveUrl: "https://ai-research-agent1.streamlit.app",
  },
  {
    num: "03",
    name: "Portfolio Optimization Engine",
    status: "live",
    tier: "Advanced",
    takeaway: "HRP with RMT cleaning beats classical Mean Variance.",
    detail:
      "Four optimizers, three covariance methods. Ten year rolling backtest across fourteen ETFs. Sharpe 0.62 at 10 percent target volatility.",
    facts: [
      ["Tests", "166"],
      ["Methods", "4 x 3 grid"],
      ["Best", "HRP Sharpe 0.62"],
      ["Window", "10 year rolling"],
    ],
    repo: "https://github.com/FrancoisRost1/portfolio-optimization-engine",
    liveUrl: "https://portfolio-optimization-engine1.streamlit.app",
  },
];

const ALL_PROJECTS = [
  { num: "01", name: "LBO Engine",                    tier: "Foundation", tests: "-",   metric: "Monte Carlo, 1000 sims",    status: "live", repo: "lbo-engine-version1",          liveUrl: "https://lbo-engine-version1.streamlit.app" },
  { num: "02", name: "PE Target Screener",            tier: "Foundation", tests: "28",  metric: "80 companies scored",       status: "live", repo: "pe-target-screener",           liveUrl: "https://pe-target-screener.streamlit.app" },
  { num: "03", name: "Factor Backtest Engine",        tier: "Quant Core", tests: "170", metric: "Sharpe 1.55, 503 tickers",  status: "live", repo: "factor-backtest-engine",       liveUrl: "https://factor-backtest-engine.streamlit.app" },
  { num: "04", name: "M&A Database",                  tier: "Quant Core", tests: "124", metric: "90 real + 300 synthetic deals", status: "live", repo: "ma-database",                  liveUrl: "https://ma-database1.streamlit.app" },
  { num: "05", name: "Volatility Regime Engine",      tier: "Systematic", tests: "109", metric: "CAGR 10.9%, Sharpe 1.03",   status: "live", repo: "volatility-regime-engine",     liveUrl: "https://volatility-regime-engine.streamlit.app" },
  { num: "06", name: "TSMOM Engine",                  tier: "Systematic", tests: "103", metric: "13 ETFs, cross asset",      status: "live", repo: "tsmom-engine",                 liveUrl: "https://tsmom-engine-3kndf2dmvuhcvu2hmrjniz.streamlit.app" },
  { num: "07", name: "Strategy Robustness Lab",       tier: "Advanced",   tests: "138", metric: "PBO via CSCV",              status: "live", repo: "strategy-robustness-lab",      liveUrl: "https://strategy-robustness-lab.streamlit.app" },
  { num: "08", name: "Portfolio Optimization Engine", tier: "Advanced",   tests: "166", metric: "HRP Sharpe 0.62",           status: "live", repo: "portfolio-optimization-engine", liveUrl: "https://portfolio-optimization-engine1.streamlit.app" },
  { num: "09", name: "Options Pricing Engine",        tier: "Elite",      tests: "230", metric: "3 models, 8 Greeks",        status: "live", repo: "options-pricing-engine",       liveUrl: "https://options-pricing-engine1.streamlit.app" },
  { num: "10", name: "AI Research Agent",             tier: "Elite",      tests: "242", metric: "6 engine pipeline",         status: "live", repo: "ai-research-agent",            liveUrl: "https://ai-research-agent1.streamlit.app" },
  { num: "11", name: "Unified Research Terminal",     tier: "Capstone",   tests: "506", metric: "6 Workspaces",              status: "live", repo: "mini-bloomberg-terminal",      liveUrl: "https://terminal.frostaing.com" },
];

const totalTests = ALL_PROJECTS.reduce((s, p) => {
  const n = parseInt(p.tests, 10);
  return s + (Number.isFinite(n) ? n : 0);
}, 0);
const liveCount = ALL_PROJECTS.filter((p) => p.status === "live").length;

/* ─────────────────────────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "9rem 2rem 1.25rem",
        borderBottom: `1px solid ${T.borderStrong}`,
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        className="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/bloomberg-terminal.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.30,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(180deg, ${T.bg} 0%, transparent 18%, transparent 72%, ${T.bg} 100%)`,
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            marginBottom: "3rem",
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
            Frostaing AI | Geneva and Romandie | Established 2026
          </span>
        </div>

        <h1
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(2.5rem, 6.4vw, 5.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.035em",
            lineHeight: 1.02,
            color: T.text,
            margin: 0,
            maxWidth: 1080,
          }}
        >
          AI investment research and deal intelligence for private equity,
          venture capital, and family offices.
        </h1>

        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(1.05rem, 1.45vw, 1.25rem)",
            color: T.text2,
            lineHeight: 1.55,
            margin: "2.25rem 0 0",
            maxWidth: 820,
          }}
        >
          Frostaing AI builds AI investment research and deal intelligence
          systems for funds and family offices in Geneva and Romandie. IC memo
          automation, deal screening, diligence synthesis, and portfolio
          monitoring, delivered as production-grade, auditable tools.
        </p>
        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(0.98rem, 1.3vw, 1.12rem)",
            color: T.text2,
            lineHeight: 1.6,
            margin: "1rem 0 0",
            maxWidth: 760,
          }}
        >
          For finance teams and SME CFOs, we deliver productized financial
          analytics and internal decision tools on a fixed scope and fixed fee.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "2.5rem",
          }}
        >
          {[
            ["Deal intelligence for PE, VC and family offices", "/deal-intelligence"],
            ["Productized AI for SME finance teams", "/sme-finance"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="case-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.65rem",
                fontFamily: T.fMono,
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: T.accent,
                paddingBottom: "0.4rem",
                borderBottom: `1px solid ${T.accent}`,
              }}
            >
              {label}
              <span aria-hidden>{"→"}</span>
            </Link>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          borderTop: `1px solid ${T.border}`,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {[
          ["Systems Live", `${liveCount} / 11`],
          ["Tests Passing", totalTests.toLocaleString()],
          ["Practice", "Geneva and Romandie"],
          ["Stack", "Python, Next.js, Claude"],
        ].map(([label, value], i) => (
          <div
            key={label}
            style={{
              padding: "1.05rem 1.15rem",
              borderRight: i < 3 ? `1px solid ${T.border}` : "none",
            }}
          >
            <div
              style={{
                fontFamily: T.fMono,
                fontSize: "0.58rem",
                color: T.text3,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.4rem",
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontFamily: T.fMono,
                fontSize: "0.95rem",
                color: T.text2,
                fontWeight: 500,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   APPROACH
   ───────────────────────────────────────────────────────────────── */
function Approach() {
  return (
    <section id="approach" style={{ padding: "8.5rem 2rem 5.5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="01" label="Approach" right="Why we exist" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <h2
            style={{
              fontFamily: T.fSans,
              fontSize: "clamp(1.75rem, 3vw, 2.35rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: T.text,
              lineHeight: 1.15,
              margin: 0,
              maxWidth: 460,
            }}
          >
            Replace manual analysis with structured, repeatable systems.
          </h2>

          <div style={{ maxWidth: 620 }}>
            <p
              style={{
                fontFamily: T.fSans,
                fontSize: "1rem",
                color: T.text2,
                lineHeight: 1.75,
                margin: "0 0 1.25rem",
              }}
            >
              Investment research and reporting are still largely manual,
              fragmented, and hard to audit. We replace that work with
              structured systems that produce the same output every time.
            </p>
            <p
              style={{
                fontFamily: T.fSans,
                fontSize: "1rem",
                color: T.text2,
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              By combining finance, software engineering, and Claude-based AI,
              we build tools that produce consistent, auditable outputs instead
              of one-off work. Every system ships with full test coverage and a
              Codex-audited review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SERVICES
   ───────────────────────────────────────────────────────────────── */
function Services() {
  return (
    <section id="services" style={{ padding: "8.5rem 2rem 5.5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="02" label="Services" right="2 offers" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 4fr) minmax(0, 8fr)",
            gap: "3rem",
            marginBottom: "3rem",
            alignItems: "start",
          }}
        >
          <h2
            style={{
              fontFamily: T.fSans,
              fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
              fontWeight: 600,
              color: T.text,
              letterSpacing: "-0.022em",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: 360,
            }}
          >
            One wedge, one supporting offer.
          </h2>
          <p
            style={{
              fontFamily: T.fSans,
              fontSize: "1rem",
              color: T.text2,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 620,
            }}
          >
            The hero offer is deal intelligence for PE, VC, and family offices.
            The supporting offer is productized financial analytics for finance
            teams and SME CFOs. Both are scoped tightly, implemented to test
            coverage, and deployed as production tools.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            border: `1px solid ${T.borderSubtle}`,
            background: T.bg,
          }}
        >
          {SERVICES.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="service-cell"
              style={{
                padding: "2.5rem 2.25rem",
                borderRight: i === 0 ? `1px solid ${T.borderSubtle}` : "none",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                color: T.text,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <span
                  aria-hidden
                  style={{ width: 7, height: 7, background: T.accent, display: "inline-block" }}
                />
                <span
                  style={{
                    fontFamily: T.fMono,
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    color: T.accent,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.rank}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: T.fSans,
                  fontSize: "1.32rem",
                  fontWeight: 600,
                  letterSpacing: "-0.018em",
                  color: T.text,
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {s.name}
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
                {s.summary}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0.4rem 0 0" }}>
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      fontFamily: T.fMono,
                      fontSize: "0.72rem",
                      color: T.text2,
                      letterSpacing: "0.04em",
                      padding: "0.45rem 0",
                      borderTop: `1px solid ${T.borderSubtle}`,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        width: 4,
                        height: 4,
                        background: T.text3,
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <span
                aria-hidden
                style={{
                  marginTop: "auto",
                  paddingTop: "1.1rem",
                  fontFamily: T.fMono,
                  fontSize: "0.64rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: T.accent,
                }}
              >
                {s.cta} {"→"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   REFERENCE IMPLEMENTATIONS
   ───────────────────────────────────────────────────────────────── */
function Implementations() {
  return (
    <section id="implementations" style={{ padding: "8.5rem 2rem 5.5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead
          num="03"
          label="Reference Implementations"
          right={`${IMPLEMENTATIONS.length} examples`}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 4fr) minmax(0, 8fr)",
            gap: "3rem",
            marginBottom: "3rem",
            alignItems: "start",
          }}
        >
          <h3
            style={{
              fontFamily: T.fSans,
              fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
              fontWeight: 600,
              color: T.text,
              letterSpacing: "-0.018em",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: 360,
            }}
          >
            Reference implementations built to demonstrate capability.
          </h3>
          <p
            style={{
              fontFamily: T.fSans,
              fontSize: "0.95rem",
              color: T.text2,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 620,
            }}
          >
            These are not client engagements. They are reference systems built
            to demonstrate capability, and they are available as starting
            points for client engagements. Each maps to a shipped, test-covered
            system you can open and inspect.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "1rem",
          }}
        >
          {IMPLEMENTATIONS.map((impl) => (
            <article
              key={impl.code}
              style={{
                border: `1px solid ${T.borderSubtle}`,
                background: T.bg,
                padding: "1.75rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: T.fMono,
                  fontSize: "0.62rem",
                  color: T.accent,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {impl.code}
              </span>
              <h4
                style={{
                  fontFamily: T.fSans,
                  fontSize: "1.12rem",
                  color: T.text,
                  fontWeight: 600,
                  letterSpacing: "-0.012em",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {impl.title}
              </h4>
              <p
                style={{
                  fontFamily: T.fSans,
                  fontSize: "0.9rem",
                  color: T.text2,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {impl.body}
              </p>
              <dl
                style={{
                  margin: "0.25rem 0 0",
                  borderTop: `1px solid ${T.borderSubtle}`,
                }}
              >
                {impl.specs.map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(0, 1fr) auto",
                      padding: "0.6rem 0",
                      borderBottom: `1px solid ${T.borderSubtle}`,
                      gap: "1rem",
                      alignItems: "baseline",
                    }}
                  >
                    <dt
                      style={{
                        fontFamily: T.fMono,
                        fontSize: "0.58rem",
                        color: T.text3,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      {k}
                    </dt>
                    <dd
                      style={{
                        margin: 0,
                        fontFamily: T.fMono,
                        fontSize: "0.72rem",
                        color: T.text,
                        fontWeight: 500,
                        textAlign: "right",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <span
                style={{
                  marginTop: "auto",
                  fontFamily: T.fMono,
                  fontSize: "0.62rem",
                  color: T.text3,
                  letterSpacing: "0.04em",
                }}
              >
                {impl.source}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CASE STUDY (Selected Work)
   ───────────────────────────────────────────────────────────────── */
function CaseStudy({ cs, isLast, density }) {
  const tierColor = TIER[cs.tier] || T.accent;
  return (
    <article
      style={{
        padding: density === "tight" ? "3.25rem 0" : "4.25rem 0",
        borderBottom: isLast ? "none" : `1px solid ${T.border}`,
        display: "grid",
        gridTemplateColumns: "minmax(0, 6fr) minmax(0, 4fr)",
        gap: "4rem",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            marginBottom: "1.75rem",
          }}
        >
          <span
            aria-hidden
            style={{ width: 7, height: 7, background: tierColor, display: "inline-block" }}
          />
          <span
            style={{
              fontFamily: T.fMono,
              fontSize: "0.62rem",
              fontWeight: 600,
              color: tierColor,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Case {cs.num} / {cs.tier}
          </span>
          <span style={{ flex: 1, height: 1, background: T.border }} />
          <StatusTag status={cs.status} />
        </div>

        <h2
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.025em",
            color: T.text,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {cs.name}
        </h2>

        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(1.1rem, 1.55vw, 1.3rem)",
            color: T.text,
            fontWeight: 500,
            lineHeight: 1.4,
            letterSpacing: "-0.005em",
            margin: "1.25rem 0 0",
            maxWidth: 580,
          }}
        >
          {cs.takeaway}
        </p>

        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "0.92rem",
            color: T.text2,
            lineHeight: 1.7,
            margin: "1.1rem 0 0",
            maxWidth: 540,
          }}
        >
          {cs.detail}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.75rem",
            marginTop: "2rem",
          }}
        >
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.65rem",
                fontFamily: T.fMono,
                fontSize: "0.66rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: tierColor,
                paddingBottom: "0.4rem",
                borderBottom: `1px solid ${tierColor}`,
              }}
            >
              Live App
              <span aria-hidden>{"→"}</span>
            </a>
          )}
          <a
            href={cs.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="case-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              fontFamily: T.fMono,
              fontSize: "0.66rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: T.text2,
              paddingBottom: "0.4rem",
              borderBottom: `1px solid ${T.border}`,
            }}
          >
            View Repository
            <span aria-hidden>{"→"}</span>
          </a>
        </div>
      </div>

      <div>
        <div
          style={{
            fontFamily: T.fMono,
            fontSize: "0.6rem",
            color: T.text3,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "0.85rem",
            paddingBottom: "0.6rem",
            borderBottom: `1px solid ${T.border}`,
          }}
        >
          Specification
        </div>
        <dl style={{ margin: 0 }}>
          {cs.facts.map(([k, v]) => (
            <div
              key={k}
              style={{
                display: "grid",
                gridTemplateColumns: "110px 1fr",
                padding: "0.7rem 0",
                borderBottom: `1px solid ${T.borderSubtle}`,
                gap: "1rem",
              }}
            >
              <dt
                style={{
                  fontFamily: T.fMono,
                  fontSize: "0.6rem",
                  color: T.text3,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {k}
              </dt>
              <dd
                style={{
                  margin: 0,
                  fontFamily: T.fMono,
                  fontSize: "0.78rem",
                  color: T.text,
                  fontWeight: 500,
                }}
              >
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

function SelectedWork() {
  return (
    <section id="work" style={{ padding: "8.5rem 2rem 5.5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="04" label="Core Systems & Technical Foundation" right="3 of 11 featured" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 4fr) minmax(0, 8fr)",
            gap: "3rem",
            marginBottom: "1.5rem",
            alignItems: "start",
          }}
        >
          <h3
            style={{
              fontFamily: T.fSans,
              fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
              fontWeight: 600,
              color: T.text,
              letterSpacing: "-0.018em",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: 340,
            }}
          >
            The technical foundation of Frostaing AI's implementation capability.
          </h3>
          <p
            style={{
              fontFamily: T.fSans,
              fontSize: "0.95rem",
              color: T.text2,
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 620,
            }}
          >
            These systems form the technical foundation of Frostaing AI's
            implementation capability. Each ships with full test coverage, a
            Codex-audited review, and a live app. The capstone integrates the
            prior ten into a single research terminal.
          </p>
        </div>

        {CASE_STUDIES.map((cs, i) => (
          <CaseStudy
            key={cs.num}
            cs={cs}
            isLast={i === CASE_STUDIES.length - 1}
            density={i === 1 ? "tight" : "default"}
          />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SYSTEMS (Architecture / Index)
   ───────────────────────────────────────────────────────────────── */
function Systems() {
  return (
    <section
      id="systems"
      style={{
        padding: "5.5rem 2rem 4.5rem",
        background: T.surface,
        borderTop: `1px solid ${T.borderStrong}`,
        borderBottom: `1px solid ${T.borderStrong}`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead
          num="04.1"
          label="Architecture"
          right={`${ALL_PROJECTS.length} systems indexed`}
          weight="compact"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 4fr) minmax(0, 8fr)",
            gap: "3rem",
            marginBottom: "2.75rem",
            alignItems: "start",
          }}
        >
          <h3
            style={{
              fontFamily: T.fSans,
              fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
              fontWeight: 600,
              color: T.text,
              letterSpacing: "-0.018em",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: 320,
            }}
          >
            Eleven systems. Built to compose.
          </h3>
          <div>
            {[
              ["Foundation", "Deal modeling and screening."],
              ["Quant Core", "Factor research and transactions database."],
              ["Systematic", "Vol targeting, regimes, cross asset momentum."],
              ["Advanced", "Strategy validation and portfolio construction."],
              ["Elite", "Derivatives and autonomous research synthesis."],
              ["Capstone", "Unified terminal integrating the full stack."],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "18px 140px 1fr",
                  padding: "0.6rem 0",
                  borderTop: `1px solid ${T.borderSubtle}`,
                  gap: "0.85rem",
                  alignItems: "center",
                }}
              >
                <span
                  aria-hidden
                  style={{ width: 6, height: 6, background: TIER[k], display: "inline-block" }}
                />
                <span
                  style={{
                    fontFamily: T.fMono,
                    fontSize: "0.6rem",
                    color: TIER[k],
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {k}
                </span>
                <span
                  style={{
                    fontFamily: T.fSans,
                    fontSize: "0.82rem",
                    color: T.text2,
                    lineHeight: 1.5,
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ border: `1px solid ${T.borderSubtle}`, background: T.bg }}>
          <div
            className="systems-table-header"
            style={{
              display: "grid",
              gridTemplateColumns:
                "50px minmax(0, 3fr) minmax(0, 1.4fr) 70px minmax(0, 2.2fr) 100px",
              padding: "0.7rem 1.1rem",
              borderBottom: `1px solid ${T.borderSubtle}`,
              fontFamily: T.fMono,
              fontSize: "0.56rem",
              fontWeight: 600,
              color: T.text3,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            <span>#</span>
            <span>System</span>
            <span>Tier</span>
            <span style={{ textAlign: "right" }}>Tests</span>
            <span>Key Metric</span>
            <span style={{ textAlign: "right" }}>Status</span>
          </div>

          {ALL_PROJECTS.map((p, i) => {
            const tierColor = TIER[p.tier] || T.text2;
            return (
              <a
                key={p.num}
                href={p.liveUrl || `https://github.com/FrancoisRost1/${p.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="systems-row"
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "50px minmax(0, 3fr) minmax(0, 1.4fr) 70px minmax(0, 2.2fr) 100px",
                  padding: "0.72rem 1.1rem",
                  borderBottom:
                    i === ALL_PROJECTS.length - 1 ? "none" : `1px solid ${T.borderSubtle}`,
                  fontFamily: T.fMono,
                  fontSize: "0.72rem",
                  color: T.text2,
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ color: T.text3, fontWeight: 500 }}>{p.num}</span>
                <span
                  style={{
                    fontFamily: T.fSans,
                    fontSize: "0.84rem",
                    color: T.text,
                    fontWeight: 500,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.55rem",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 5,
                      height: 5,
                      background: tierColor,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {p.name}
                </span>
                <span
                  style={{
                    color: tierColor,
                    fontSize: "0.6rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {p.tier}
                </span>
                <span
                  style={{
                    textAlign: "right",
                    color: T.text,
                    fontVariantNumeric: "tabular-nums",
                    fontWeight: 500,
                  }}
                >
                  {p.tests}
                </span>
                <span style={{ color: T.text2, fontSize: "0.7rem" }}>{p.metric}</span>
                <span style={{ textAlign: "right" }}>
                  <StatusTag status={p.status} />
                </span>
              </a>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "1.1rem",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: T.fMono,
            fontSize: "0.58rem",
            color: T.text3,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          <span>{liveCount} of {ALL_PROJECTS.length} live</span>
          <span>{totalTests.toLocaleString()} tests passing</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ABOUT
   ───────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{ padding: "9rem 2rem 6.5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="05" label="About" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: T.fSans,
                fontSize: "clamp(1.75rem, 3vw, 2.35rem)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                color: T.text,
                lineHeight: 1.15,
                margin: 0,
                maxWidth: 680,
              }}
            >
              A Geneva-based AI and finance systems firm.
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginTop: "1rem",
                flexWrap: "wrap",
              }}
            >
              <span style={{ width: 18, height: 1, background: T.accent }} />
              <span
                style={{
                  fontFamily: T.fMono,
                  fontSize: "0.66rem",
                  color: T.text2,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Frostaing AI | Geneva and Romandie
              </span>
            </div>

            <div style={{ marginTop: "2.25rem", maxWidth: 620 }}>
              <p
                style={{
                  fontFamily: T.fSans,
                  fontSize: "1rem",
                  color: T.text2,
                  lineHeight: 1.75,
                  margin: "0 0 1.25rem",
                }}
              >
                Frostaing AI is a Geneva-based AI and finance systems firm
                building AI investment research and deal intelligence for
                private equity, venture capital, and family offices, with a
                supporting productized offer for finance teams and SME CFOs.
              </p>
              <p
                style={{
                  fontFamily: T.fSans,
                  fontSize: "1rem",
                  color: T.text2,
                  lineHeight: 1.75,
                  margin: "0 0 1.25rem",
                }}
              >
                Founded and operated by Francois Rostaing, supported by a
                network of specialist collaborators.
              </p>
              <p
                style={{
                  fontFamily: T.fSans,
                  fontSize: "1rem",
                  color: T.text2,
                  lineHeight: 1.75,
                  margin: "0 0 1.25rem",
                }}
              >
                Member of the Claude Partner Network (Anthropic).
              </p>
              <p
                style={{
                  fontFamily: T.fSans,
                  fontSize: "1rem",
                  color: T.text2,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                The work is anchored in three signals: real financial
                understanding, strong data engineering, and decision tools
                investors and operators actually use. The eleven shipped
                systems are the firm's technical foundation; client engagements
                extend that stack into production research, automation, and
                decision-support infrastructure.
              </p>

              <a
                href="/CV-francois-rostaing.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="case-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  marginTop: "1.75rem",
                  fontFamily: T.fMono,
                  fontSize: "0.64rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: T.text3,
                }}
              >
                Founder CV (PDF)
                <span aria-hidden>{"→"}</span>
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: T.fMono,
                fontSize: "0.6rem",
                color: T.text3,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "1rem",
                paddingBottom: "0.7rem",
                borderBottom: `1px solid ${T.borderStrong}`,
              }}
            >
              Firm Profile
            </div>
            {[
              ["Practice", "Frostaing AI"],
              ["Location", "Geneva and Romandie, CH"],
              ["Founded", "2026"],
              ["Founder", "Francois Rostaing"],
              ["Hero offer", "PE, VC, family office deal intelligence"],
              ["Supporting", "Productized SME finance analytics"],
              ["Network", "Claude Partner Network (Anthropic)"],
              ["Languages", "Python, JavaScript, SQL"],
              ["Frameworks", "Next.js, Streamlit, Plotly"],
              ["AI", "Claude API, deterministic orchestration"],
              ["Systems Live", `${liveCount} / 11`],
              ["Total Tests", totalTests.toLocaleString()],
            ].map(([k, v], i, arr) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  padding: "0.85rem 0",
                  borderBottom:
                    i === arr.length - 1 ? "none" : `1px solid ${T.borderSubtle}`,
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: T.fMono,
                    fontSize: "0.6rem",
                    color: T.text3,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {k}
                </span>
                <span
                  style={{
                    fontFamily: T.fSans,
                    fontSize: "0.85rem",
                    color: T.text,
                    fontWeight: 500,
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CONTACT
   ───────────────────────────────────────────────────────────────── */
function Contact() {
  const links = [
    {
      label: "Email",
      url: `mailto:${CONTACT_EMAIL}`,
      display: CONTACT_EMAIL,
      external: false,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/francois-rostaing-155371341/",
      display: "linkedin.com/in/francois-rostaing",
      external: true,
    },
    {
      label: "GitHub",
      url: "https://github.com/FrancoisRost1",
      display: "github.com/FrancoisRost1",
      external: true,
    },
    {
      label: "Location",
      url: "https://maps.google.com/?q=Geneva,+Switzerland",
      display: "Geneva, Switzerland",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      style={{ padding: "7.5rem 2rem 5rem", borderTop: `1px solid ${T.border}` }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="06" label="Contact" weight="compact" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: "4.5rem",
            alignItems: "start",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: T.fSans,
                fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                color: T.text,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Book a call.
            </h2>
            <p
              style={{
                fontFamily: T.fSans,
                fontSize: "0.95rem",
                color: T.text2,
                lineHeight: 1.7,
                margin: "1.5rem 0 2.25rem",
                maxWidth: 380,
              }}
            >
              We work with PE, VC, and family office teams on deal intelligence,
              and with finance teams on productized analytics. A short scoping
              call is the fastest way to see if there is a fit.
            </p>
            <PrimaryButton href={BOOKING_PE}>Book a call</PrimaryButton>
          </div>

          <div>
            <div
              style={{
                fontFamily: T.fMono,
                fontSize: "0.58rem",
                color: T.text3,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              Or reach us directly
            </div>
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.url}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="contact-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px 1fr auto",
                  padding: "1.05rem 0",
                  borderTop: i === 0 ? `1px solid ${T.border}` : "none",
                  borderBottom: `1px solid ${T.border}`,
                  alignItems: "center",
                  gap: "1.25rem",
                  color: T.text2,
                }}
              >
                <span
                  className="contact-label"
                  style={{
                    fontFamily: T.fMono,
                    fontSize: "0.58rem",
                    color: T.text3,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </span>
                <span
                  className="contact-value"
                  style={{
                    fontFamily: T.fMono,
                    fontSize: "0.84rem",
                    color: T.text2,
                    fontWeight: 500,
                  }}
                >
                  {link.display}
                </span>
                <span
                  aria-hidden
                  className="contact-arrow"
                  style={{ fontFamily: T.fMono, fontSize: "0.72rem", color: T.text3 }}
                >
                  {"→"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ROOT
   ───────────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <main style={{ background: T.bg, color: T.text }}>
      <SiteHeader />
      <Hero />
      <Approach />
      <Services />
      <Implementations />
      <SelectedWork />
      <Systems />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
