/*
  Frostaing AI. Homepage.

  Positioning (2026-06-19): the product is the terminal. This site sells ONE
  thing, the mini Bloomberg terminal at terminal.frostaing.com. We do not sell
  bespoke AI mandates or consulting any more. The terminal is in open beta and
  free to use; the planned price at general availability is CHF 200 / month.
  Every page leads to either opening the terminal or giving feedback on it.

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

const TERMINAL_ROOT = "https://terminal.frostaing.com";

// Planned price at general availability. The terminal is free during beta;
// this number anchors the value and is the single source of truth for the
// price shown anywhere on the site.
const PRICE_CHF = "CHF 200";

export const metadata = {
  title: "Frostaing AI | An AI-native Bloomberg terminal",
  description:
    "Frostaing is an AI-native mini Bloomberg terminal: live markets, AI equity research, options, LBO and deal modeling, comps, portfolio construction, and systematic signals in one research desk. Open beta, free to use. Planned price CHF 200 per month.",
};

/* ─────────────────────────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────────────────────────── */

// What the terminal actually does. Each tile maps to a live workspace so the
// visitor can open the exact surface from the marketing copy.
const FEATURES = [
  {
    code: "F1",
    title: "Live Market Overview",
    body:
      "Indices, FX, commodities, a sector heatmap, breadth, and top movers on a single tape. Built live-first with honest stale indicators when a feed degrades.",
    href: `${TERMINAL_ROOT}/market-overview`,
  },
  {
    code: "F2",
    title: "AI Equity Research",
    body:
      "A deterministic recommendation aggregator turns filings, financials, valuation, and risk into an IC-ready memo. The rating is computed and locked before the model writes a word.",
    href: `${TERMINAL_ROOT}/ticker-deep-dive`,
  },
  {
    code: "F3",
    title: "Options Lab",
    body:
      "Black-Scholes, binomial, and Monte Carlo pricing, eight analytical Greeks, implied-vol extraction, an empirical vol surface, and P&L scenario analysis.",
    href: `${TERMINAL_ROOT}/options-lab`,
  },
  {
    code: "F4",
    title: "LBO and Deal Modeling",
    body:
      "Entry assumptions through exit returns with a full debt schedule, scenario analysis, and a Monte Carlo distribution on MOIC and IRR.",
    href: `${TERMINAL_ROOT}/lbo-quick-calc`,
  },
  {
    code: "F5",
    title: "Comps and Relative Value",
    body:
      "Peer screening, sector premium and discount, and historical valuation percentiles, blended with a simplified LBO IRR and red-flag detection.",
    href: `${TERMINAL_ROOT}/comps-relative-value`,
  },
  {
    code: "F6",
    title: "Portfolio Construction",
    body:
      "Mean variance, risk parity, HRP, and Black-Litterman across three covariance estimators, with a rolling backtest and vol-normalized comparison.",
    href: `${TERMINAL_ROOT}/portfolio-builder`,
  },
  {
    code: "F7",
    title: "Systematic Signals",
    body:
      "Cross-asset time-series momentum, a five-factor model, and a regime engine with vol targeting, all computed with strict no-lookahead signal timing.",
    href: `${TERMINAL_ROOT}/live-signals`,
  },
  {
    code: "F8",
    title: "Strategy Robustness Lab",
    body:
      "Probability of backtest overfitting via CSCV, deflated Sharpe, stochastic dominance, and parameter-stability plateau detection on any strategy.",
    href: `${TERMINAL_ROOT}/strategy-lab`,
  },
];

// What is included in the terminal. Used by the pricing card. The beta state
// gives all of this away free; CHF 200 / month is the planned GA price.
const INCLUDED = [
  "Every workspace, no tiering during beta",
  "Live market, FX, commodity, and macro data",
  "AI equity research with locked deterministic ratings",
  "Options, LBO, comps, portfolio, and signal engines",
  "Non-US equity coverage and multi-exchange calendars",
  "Watchlists and saved research",
];

const ALL_PROJECTS = [
  { num: "01", name: "LBO Engine",                    tier: "Foundation", tests: "n/a",    metric: "Monte Carlo, 500 sims",         status: "live", repo: "lbo-engine-version1",          liveUrl: `${TERMINAL_ROOT}/lbo-quick-calc` },
  { num: "02", name: "PE Target Screener",            tier: "Foundation", tests: "28",     metric: "80 companies scored",           status: "live", repo: "pe-target-screener",           liveUrl: `${TERMINAL_ROOT}/universe-screener` },
  { num: "03", name: "Factor Backtest Engine",        tier: "Quant Core", tests: "170",    metric: "Sharpe 1.55, 503 tickers",      status: "live", repo: "factor-backtest-engine",       liveUrl: `${TERMINAL_ROOT}/live-signals` },
  { num: "04", name: "M&A Database",                  tier: "Quant Core", tests: "124",    metric: "90 real + 300 synthetic deals", status: "live", repo: "ma-database",                  liveUrl: `${TERMINAL_ROOT}/comps-relative-value` },
  { num: "05", name: "Volatility Regime Engine",      tier: "Systematic", tests: "109",    metric: "CAGR 10.9%, Sharpe 1.03",       status: "live", repo: "volatility-regime-engine",     liveUrl: `${TERMINAL_ROOT}/live-signals` },
  { num: "06", name: "TSMOM Engine",                  tier: "Systematic", tests: "103",    metric: "13 ETFs, cross asset",          status: "live", repo: "tsmom-engine",                 liveUrl: `${TERMINAL_ROOT}/live-signals` },
  { num: "07", name: "Strategy Robustness Lab",       tier: "Advanced",   tests: "138",    metric: "PBO via CSCV",                  status: "live", repo: "strategy-robustness-lab",      liveUrl: `${TERMINAL_ROOT}/strategy-lab` },
  { num: "08", name: "Portfolio Optimization Engine", tier: "Advanced",   tests: "166",    metric: "HRP Sharpe 0.62",               status: "live", repo: "portfolio-optimization-engine", liveUrl: `${TERMINAL_ROOT}/portfolio-builder` },
  { num: "09", name: "Options Pricing Engine",        tier: "Elite",      tests: "230",    metric: "3 models, 8 Greeks",            status: "live", repo: "options-pricing-engine",       liveUrl: `${TERMINAL_ROOT}/options-lab` },
  { num: "10", name: "AI Research Agent",             tier: "Elite",      tests: "242",    metric: "6 engine pipeline",             status: "live", repo: "ai-research-agent",            liveUrl: `${TERMINAL_ROOT}/ticker-deep-dive` },
  { num: "11", name: "Unified Research Terminal",     tier: "Capstone",   tests: "7,734",  metric: "68 Workspaces",                 status: "live", repo: "mini-bloomberg-terminal",      liveUrl: TERMINAL_ROOT },
];

// Headline test count, shown in the hero stats, the systems footer, and the
// firm profile. Held as a fixed display string ("10'000+", Swiss apostrophe)
// rather than summing ALL_PROJECTS, since the live terminal test suite grows
// past what the per-system table records. Update this when the real count
// crosses the next round number.
const TESTS_DISPLAY = "10'000+";

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
          opacity: 0.16,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `linear-gradient(180deg, ${T.bg} 0%, rgba(10,10,15,0.55) 30%, rgba(10,10,15,0.55) 68%, ${T.bg} 100%)`,
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
            marginBottom: "2rem",
            flexWrap: "wrap",
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
            OPEN BETA · FREE TO USE · GENEVA & ROMANDIE
          </span>
        </div>

        <h1
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(2rem, 4.4vw, 3.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: T.text,
            margin: 0,
            maxWidth: 880,
          }}
        >
          An AI-native Bloomberg terminal.
        </h1>

        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(1.2rem, 2.6vw, 2.1rem)",
            fontWeight: 500,
            color: T.text2,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            margin: "1rem 0 0",
            maxWidth: 720,
          }}
        >
          Live markets, AI research, and the full quant stack in one desk.
        </p>

        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(0.98rem, 1.3vw, 1.12rem)",
            color: T.text,
            lineHeight: 1.6,
            margin: "1.75rem 0 0",
            maxWidth: 640,
          }}
        >
          Live market data, AI equity research with locked deterministic
          ratings, options, LBO and deal modeling, comps, portfolio
          construction, and systematic signals. Production-grade, auditable,
          and test-covered. Open beta, free to use right now.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.1rem 1.4rem",
            marginTop: "2.5rem",
            alignItems: "center",
          }}
        >
          <PrimaryButton href={TERMINAL_ROOT} external>
            Open the terminal
          </PrimaryButton>
          <Link
            href="/#pricing"
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
            Pricing
            <span aria-hidden>{"→"}</span>
          </Link>
          <Link
            href="/#feedback"
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
              color: T.text2,
              paddingBottom: "0.4rem",
              borderBottom: `1px solid ${T.border}`,
            }}
          >
            Give feedback
            <span aria-hidden>{"→"}</span>
          </Link>
        </div>
      </div>

      <div
        className="hero-stats"
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
          ["Workspaces", "68 institutional"],
          ["Tests Passing", TESTS_DISPLAY],
          ["Beta", "Free to use"],
          ["Planned Price", `${PRICE_CHF} / mo`],
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
   APPROACH (What the terminal is)
   ───────────────────────────────────────────────────────────────── */
function Approach() {
  return (
    <section id="overview" style={{ padding: "8.5rem 2rem 5.5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="01" label="The Terminal" right="What it is" />

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
            One research desk, built the way an analyst actually works.
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
              Institutional terminals cost thousands of dollars a month and lock
              a desk into a single vendor. Frostaing brings the same workflow,
              live markets, equity research, derivatives, deal modeling, and
              portfolio construction, into one AI-native desk priced for
              individuals and small teams.
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
              Every number is computed by a shipped, test-covered engine, not a
              black box. AI writes the narrative, but the rating is locked
              before the model is ever called, so the analysis stays auditable
              from input to recommendation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   FEATURES (Inside the terminal)
   ───────────────────────────────────────────────────────────────── */
function Features() {
  return (
    <section id="features" style={{ padding: "8.5rem 2rem 5.5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="02" label="Inside the Terminal" right={`${FEATURES.length} core engines`} />

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
            Ten engines, one terminal.
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
            The terminal integrates ten shipped, test-covered engines into 68
            institutional workspaces. Open any surface below directly. They all
            run on the same live-first data layer and the same auditable
            compute, so research, valuation, and portfolio work stay consistent.
          </p>
        </div>

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            border: `1px solid ${T.borderSubtle}`,
            background: T.bg,
          }}
        >
          {FEATURES.map((f, i) => (
            <a
              key={f.code}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="service-cell"
              style={{
                padding: "2rem 1.75rem",
                borderRight:
                  (i + 1) % 4 !== 0 ? `1px solid ${T.borderSubtle}` : "none",
                borderTop: i >= 4 ? `1px solid ${T.borderSubtle}` : "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.95rem",
                color: T.text,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <span
                  aria-hidden
                  style={{ width: 6, height: 6, background: T.accent, display: "inline-block" }}
                />
                <span
                  style={{
                    fontFamily: T.fMono,
                    fontSize: "0.58rem",
                    fontWeight: 600,
                    color: T.accent,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {f.code}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: T.fSans,
                  fontSize: "1.08rem",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  color: T.text,
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: T.fSans,
                  fontSize: "0.86rem",
                  color: T.text2,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {f.body}
              </p>
              <span
                aria-hidden
                style={{
                  marginTop: "auto",
                  paddingTop: "1rem",
                  fontFamily: T.fMono,
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
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

/* ─────────────────────────────────────────────────────────────────
   PRICING
   ───────────────────────────────────────────────────────────────── */
function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "8.5rem 2rem 6rem",
        background: T.surface,
        borderTop: `1px solid ${T.borderStrong}`,
        borderBottom: `1px solid ${T.borderStrong}`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="03" label="Pricing" right="Free during beta" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: "4rem",
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
                maxWidth: 420,
              }}
            >
              Free while we are in beta.
            </h2>
            <p
              style={{
                fontFamily: T.fSans,
                fontSize: "1rem",
                color: T.text2,
                lineHeight: 1.75,
                margin: "1.5rem 0 0",
                maxWidth: 440,
              }}
            >
              The terminal is in open beta. Every workspace is free to use right
              now, with no card and no trial clock. When the terminal reaches
              general availability the price will be {PRICE_CHF} per month, a
              fraction of what an institutional terminal costs. Early beta users
              help shape what ships.
            </p>
            <div style={{ marginTop: "2.5rem" }}>
              <PrimaryButton href={TERMINAL_ROOT} external>
                Start using it free
              </PrimaryButton>
            </div>
          </div>

          {/* Price card */}
          <div
            style={{
              border: `1px solid ${T.borderStrong}`,
              background: T.bg,
              padding: "2.25rem 2.1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                paddingBottom: "1.4rem",
                borderBottom: `1px solid ${T.borderSubtle}`,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontFamily: T.fMono,
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  color: T.accent,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Terminal access
              </span>
              <StatusTag status="building" />
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: "0.9rem", margin: "1.6rem 0 0.4rem" }}>
              <span
                style={{
                  fontFamily: T.fSans,
                  fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: T.text,
                  lineHeight: 1,
                }}
              >
                Free
              </span>
              <span
                style={{
                  fontFamily: T.fMono,
                  fontSize: "0.72rem",
                  color: T.text3,
                  letterSpacing: "0.04em",
                }}
              >
                during open beta
              </span>
            </div>
            <div
              style={{
                fontFamily: T.fMono,
                fontSize: "0.74rem",
                color: T.text2,
                letterSpacing: "0.04em",
                marginBottom: "1.6rem",
              }}
            >
              Planned at general availability: {PRICE_CHF} / month
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: T.fSans,
                    fontSize: "0.88rem",
                    color: T.text2,
                    lineHeight: 1.5,
                    padding: "0.7rem 0",
                    borderTop: `1px solid ${T.borderSubtle}`,
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 5,
                      height: 5,
                      background: T.accent,
                      display: "inline-block",
                      flexShrink: 0,
                      transform: "translateY(-1px)",
                    }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   FEEDBACK
   ───────────────────────────────────────────────────────────────── */
function Feedback() {
  return (
    <section id="feedback" style={{ padding: "8.5rem 2rem 6rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="04" label="Beta Feedback" right="Shape what ships" />

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
              maxWidth: 420,
            }}
          >
            Tell us what to build next.
          </h2>

          <div style={{ maxWidth: 620 }}>
            <p
              style={{
                fontFamily: T.fSans,
                fontSize: "1rem",
                color: T.text2,
                lineHeight: 1.75,
                margin: "0 0 1.5rem",
              }}
            >
              The terminal is in active development and your feedback decides the
              roadmap. There are two ways to send it.
            </p>

            <div
              style={{
                border: `1px solid ${T.borderSubtle}`,
                background: T.bg,
              }}
            >
              {[
                {
                  k: "Inside the terminal",
                  v: "Every workspace carries a feedback control. Flag a bug, request a data source, or suggest a workspace without leaving the page you are on.",
                  href: TERMINAL_ROOT,
                  cta: "Open the terminal",
                  external: true,
                },
                {
                  k: "On a short call",
                  v: "Book a 30-minute beta call to walk through what works, what is missing, and what you would pay for at launch. The fastest way to influence the roadmap.",
                  href: BOOKING_PE,
                  cta: "Book a beta call",
                  external: true,
                },
              ].map((row, i) => (
                <div
                  key={row.k}
                  style={{
                    padding: "1.6rem 1.5rem",
                    borderTop: i === 0 ? "none" : `1px solid ${T.borderSubtle}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: T.fMono,
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      color: T.accent,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      marginBottom: "0.7rem",
                    }}
                  >
                    {row.k}
                  </div>
                  <p
                    style={{
                      fontFamily: T.fSans,
                      fontSize: "0.92rem",
                      color: T.text2,
                      lineHeight: 1.65,
                      margin: "0 0 1rem",
                    }}
                  >
                    {row.v}
                  </p>
                  <a
                    href={row.href}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noopener noreferrer" : undefined}
                    className="case-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontFamily: T.fMono,
                      fontSize: "0.64rem",
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: T.accent,
                      paddingBottom: "0.35rem",
                      borderBottom: `1px solid ${T.accent}`,
                    }}
                  >
                    {row.cta}
                    <span aria-hidden>{"→"}</span>
                  </a>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: T.fMono,
                fontSize: "0.72rem",
                color: T.text3,
                letterSpacing: "0.04em",
                margin: "1.5rem 0 0",
              }}
            >
              Prefer email?{" "}
              <a href={`mailto:${CONTACT_EMAIL}?subject=Terminal%20feedback`} style={{ color: T.text2 }}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SYSTEMS (Technical foundation / Index)
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
          num="05"
          label="Technical Foundation"
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
            Eleven systems compose into the terminal.
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
          <span>All composed into one terminal</span>
          <span>{TESTS_DISPLAY} tests passing</span>
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
        <SectionHead num="06" label="About" />

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
              Built in Geneva, for anyone who runs research.
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
                Frostaing AI is a Geneva-based AI and finance systems firm. The
                terminal is its product: an AI-native research desk that brings
                institutional-grade analysis to individuals and small teams at a
                price that is not institutional.
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
                Founded and operated by Francois Rostaing, Claude Certified
                Architect (Anthropic), and a member of the Claude Partner
                Network (Anthropic).
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
                investors actually use. Eleven shipped, test-covered systems are
                the terminal's technical foundation.
              </p>
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
              ["Product", "Frostaing terminal"],
              ["Status", "Open beta, free to use"],
              ["Planned price", `${PRICE_CHF} / month`],
              ["Practice", "Frostaing AI"],
              ["Location", "Geneva and Romandie, CH"],
              ["Founded", "2026"],
              ["Founder", "Francois Rostaing"],
              ["Certification", "Claude Certified Architect (Anthropic)"],
              ["Network", "Claude Partner Network (Anthropic)"],
              ["Stack", "Python, Next.js, FastAPI, Claude"],
              ["Workspaces", "68 institutional"],
              ["Total Tests", TESTS_DISPLAY],
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
      url: "https://www.linkedin.com/in/francois-rostaing/",
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
        <SectionHead num="07" label="Contact" weight="compact" />

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
              Open the terminal.
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
              The terminal is free to use during beta. Open it, run real
              research, and tell us what to build next. A short beta call is the
              fastest way to shape the roadmap.
            </p>
            <PrimaryButton href={TERMINAL_ROOT} external>
              Open the terminal
            </PrimaryButton>
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
      <Features />
      <Pricing />
      <Feedback />
      <Systems />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
