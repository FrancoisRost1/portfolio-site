/*
  Frostaing AI. Institutional finance design system.
  Single source of truth: DESIGN.md and style_inject.py.
  No em dashes. No emojis. No gradients. No glow. No hover transforms.
*/

const T = {
  bg: "#0A0A0F",
  surface: "#121218",
  elevated: "#1A1A22",
  text: "#E8E8EC",
  text2: "#8E8E9A",
  text3: "#55555F",
  border: "rgba(255,255,255,0.08)",
  borderSubtle: "rgba(255,255,255,0.04)",
  borderStrong: "rgba(255,255,255,0.16)",
  // Stronger primary accent. Used for links, key UI elements, and hover states.
  // Same single hue, higher contrast against the charcoal background.
  accent: "#E07020",
  accentSoft: "#C89040",
  success: "#3D9A50",
  danger: "#C43D3D",
  fSans: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
  fMono: "var(--font-mono), 'SF Mono', Consolas, monospace",
};

// Tier accents. Mirrors DESIGN.md per-project accent guide. Used only
// for small text accents and 6px tier dots. No backgrounds, no fills.
const TIER = {
  Foundation: "#C8962E",   // warm amber, deal modeling
  "Quant Core": "#4A7FB5", // steel blue, factor research
  Systematic: "#B86A3A",   // muted red amber, vol regime
  Advanced: "#5A7A9E",     // cool grey blue, portfolio
  Elite: "#7C6DB0",        // muted violet, derivatives + research agent
  Capstone: "#E07020",     // Bloomberg orange, capstone
};

const NAV = [
  { id: "services",  num: "01", label: "Services" },
  { id: "work",      num: "02", label: "Systems" },
  { id: "use-cases", num: "03", label: "Use Cases" },
  { id: "team",      num: "04", label: "Team" },
  { id: "about",     num: "05", label: "About" },
  { id: "contact",   num: "06", label: "Contact" },
];

const SERVICES = [
  {
    num: "A",
    name: "Claude Integration & Workflow Automation",
    summary:
      "We design Claude-powered workflows for research, reporting, internal knowledge management, and operational automation.",
    bullets: [
      "Agentic pipelines and orchestrators",
      "Memo, briefing, and report generation",
      "Internal knowledge assistants",
      "Process automation across analyst tasks",
    ],
  },
  {
    num: "B",
    name: "AI Investment Research Systems",
    summary:
      "We build structured research agents, memo-generation pipelines, valuation tools, and analyst copilots for finance workflows.",
    bullets: [
      "Deterministic recommendation engines",
      "Memo synthesis with rating-lock invariants",
      "Filing ingestion and entity extraction",
      "Analyst copilots with auditable traces",
    ],
  },
  {
    num: "C",
    name: "Financial Analytics & Decision Support",
    summary:
      "We develop valuation, portfolio, options, factor, regime, and screening systems for investment analysis.",
    bullets: [
      "Valuation, LBO, and DCF infrastructure",
      "Portfolio construction and risk decomposition",
      "Factor and regime models",
      "Screening and target databases",
    ],
  },
  {
    num: "D",
    name: "Custom Internal Tools & Dashboards",
    summary:
      "We build internal applications, dashboards, and terminal-style interfaces for teams that need fast, auditable decision infrastructure.",
    bullets: [
      "Bloomberg-style research terminals",
      "Streamlit and Next.js dashboards",
      "Provider-routing and data layers",
      "Test-covered, deployable systems",
    ],
  },
];

const USE_CASES = [
  ["UC1", "Research Memos",     "Claude-powered investment research memo generation with locked, deterministic ratings."],
  ["UC2", "Analysis Pipelines", "Automated financial analysis pipelines spanning ingestion, valuation, and reporting."],
  ["UC3", "Knowledge Assistant","Internal AI knowledge assistant workflows over filings, decks, and operating data."],
  ["UC4", "Valuation & Screen", "Valuation and screening infrastructure across public companies and private targets."],
  ["UC5", "Decision Terminals", "Terminal-style dashboards for finance workflows requiring auditable decision support."],
];

const TEAM = [
  {
    name: "Francois Rostaing",
    role: "Founder & Lead AI Finance Systems Architect",
    email: "francois@frostaing.com",
    photo: "/team/francois-rostaing.webp",
    bio: "Builder of the firm's research, valuation, and Claude-powered systems. Combines finance modelling with software engineering and AI workflow design.",
  },
  {
    name: "Alexandre Levy",
    role: "AI Workflow Specialist",
    email: "alexandre@frostaing.com",
    photo: "/team/alexandre-levy.webp",
    bio: "Designs and ships Claude-driven automations for research and operations. Focused on reliable orchestration, prompts, and tool use.",
  },
  {
    name: "Gizem Gul Dincer",
    role: "Operations & Client Coordination",
    email: "gizem@frostaing.com",
    photo: "/team/gizem-gul-dincer.webp",
    bio: "Coordinates client engagements and internal delivery. Keeps scoping, timelines, and documentation aligned across projects.",
  },
  {
    name: "Pierre-Jean Remy Martin",
    role: "Business Development & Implementation Support",
    email: "pierrejean@frostaing.com",
    photo: "/team/pierre-jean-remy-martin.webp",
    bio: "Engages with prospective clients and translates use cases into implementable scopes. Supports rollout of finance and AI workflows.",
  },
  {
    name: "Louis Rostaing",
    role: "Product & Research Analyst",
    email: "louis@frostaing.com",
    photo: "/team/louis-rostaing.webp",
    bio: "Works across product specification and applied research for the firm's analytics modules. Focused on user-facing analyst tools.",
  },
  {
    name: "Jacques Rostaing",
    role: "Strategic Advisor",
    email: "jacques@frostaing.com",
    photo: "/team/jacques-rostaing.webp",
    bio: "Advises on positioning, partnerships, and long-horizon strategy. Brings senior perspective on finance and operating decisions.",
  },
  {
    name: "Karine Rostaing",
    role: "Administrative & Operations Support",
    email: "karine@frostaing.com",
    photo: "/team/karine-rostaing.webp",
    bio: "Supports the firm's administrative operations and back-office processes. Ensures documentation and recordkeeping stay clean.",
  },
  {
    name: "Thomas Vittory",
    role: "Data & Automation Analyst",
    email: "thomas@frostaing.com",
    photo: "/team/thomas-vittory.webp",
    bio: "Works on data pipelines, ingestion, and process automation. Supports analytics and reporting workflows for client engagements.",
  },
  {
    name: "Emma Vernizeau",
    role: "Client Experience & Documentation Support",
    email: "emma@frostaing.com",
    photo: "/team/emma-vernizeau.webp",
    bio: "Owns client-facing documentation and communication. Focused on clarity, structure, and a consistent client experience.",
  },
  {
    name: "Florine Reau",
    role: "Research & Process Documentation Analyst",
    email: "florine@frostaing.com",
    photo: "/team/florine-reau.webp",
    bio: "Writes and maintains internal research and process documentation. Supports knowledge capture across implementations.",
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
      "Unified Bloomberg-style research terminal integrating all 10 prior engines into 6 institutional workspaces (Market, Research, Options, LBO, Comps, Portfolio). 137 tests passing.",
    facts: [
      ["Tests", "137"],
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
      ["Tests", "203"],
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
  { num: "01", name: "LBO Engine",                    tier: "Foundation", tests: "-",   metric: "Monte Carlo, 500 sims",     status: "live", repo: "lbo-engine-version1",          liveUrl: "https://lbo-engine-version1.streamlit.app" },
  { num: "02", name: "PE Target Screener",            tier: "Foundation", tests: "14",  metric: "90 companies scored",       status: "live", repo: "pe-target-screener",           liveUrl: "https://pe-target-screener.streamlit.app" },
  { num: "03", name: "Factor Backtest Engine",        tier: "Quant Core", tests: "166", metric: "Sharpe 1.55, 503 tickers",  status: "live", repo: "factor-backtest-engine",       liveUrl: "https://factor-backtest-engine.streamlit.app" },
  { num: "04", name: "M&A Database",                  tier: "Quant Core", tests: "124", metric: "390 deals, 11 sectors",     status: "live", repo: "ma-database",                  liveUrl: "https://ma-database1.streamlit.app" },
  { num: "05", name: "Volatility Regime Engine",      tier: "Systematic", tests: "109", metric: "CAGR 10.9, Sharpe 1.03",    status: "live", repo: "volatility-regime-engine",     liveUrl: "https://volatility-regime-engine.streamlit.app" },
  { num: "06", name: "TSMOM Engine",                  tier: "Systematic", tests: "103", metric: "13 ETFs, cross asset",      status: "live", repo: "tsmom-engine",                 liveUrl: "https://tsmom-engine-3kndf2dmvuhcvu2hmrjniz.streamlit.app" },
  { num: "07", name: "Strategy Robustness Lab",       tier: "Advanced",   tests: "136", metric: "PBO via CSCV",              status: "live", repo: "strategy-robustness-lab",      liveUrl: "https://strategy-robustness-lab.streamlit.app" },
  { num: "08", name: "Portfolio Optimization Engine", tier: "Advanced",   tests: "166", metric: "HRP Sharpe 0.62",           status: "live", repo: "portfolio-optimization-engine", liveUrl: "https://portfolio-optimization-engine1.streamlit.app" },
  { num: "09", name: "Options Pricing Engine",        tier: "Elite",      tests: "230", metric: "3 models, 8 Greeks",        status: "live", repo: "options-pricing-engine",       liveUrl: "https://options-pricing-engine1.streamlit.app" },
  { num: "10", name: "AI Research Agent",             tier: "Elite",      tests: "203", metric: "6 engine pipeline",         status: "live", repo: "ai-research-agent",            liveUrl: "https://ai-research-agent1.streamlit.app" },
  { num: "11", name: "Unified Research Terminal",     tier: "Capstone",   tests: "137", metric: "6 Workspaces",              status: "live", repo: "mini-bloomberg-terminal",      liveUrl: "https://terminal.frostaing.com" },
];

const totalTests = ALL_PROJECTS.reduce((s, p) => {
  const n = parseInt(p.tests, 10);
  return s + (Number.isFinite(n) ? n : 0);
}, 0);
const liveCount = ALL_PROJECTS.filter((p) => p.status === "live").length;

/* ─────────────────────────────────────────────────────────────────
   PRIMITIVES
   ───────────────────────────────────────────────────────────────── */

function StatusTag({ status }) {
  const cfg =
    status === "live"
      ? { color: T.success, label: "LIVE" }
      : status === "planned"
      ? { color: T.text3, label: "PLANNED" }
      : { color: T.accent, label: "BUILDING" };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: T.fMono,
        fontSize: "0.62rem",
        fontWeight: 600,
        letterSpacing: "0.18em",
        color: cfg.color,
      }}
    >
      <span style={{ width: 6, height: 6, background: cfg.color }} />
      {cfg.label}
    </span>
  );
}

function SectionHead({ num, label, right, weight = "default" }) {
  const compact = weight === "compact";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        paddingBottom: compact ? "0.7rem" : "1.1rem",
        borderBottom: compact
          ? `1px solid ${T.borderSubtle}`
          : `1px solid ${T.borderStrong}`,
        marginBottom: compact ? "2.25rem" : "3.5rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem" }}>
        <span
          style={{
            fontFamily: T.fMono,
            fontSize: compact ? "0.62rem" : "0.72rem",
            fontWeight: 600,
            color: compact ? T.text3 : T.accent,
            letterSpacing: "0.14em",
          }}
        >
          {num}
        </span>
        <span
          style={{
            fontFamily: T.fSans,
            fontSize: compact ? "0.7rem" : "0.82rem",
            fontWeight: 600,
            color: compact ? T.text2 : T.text,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
      </div>
      {right && (
        <span
          style={{
            fontFamily: T.fMono,
            fontSize: compact ? "0.58rem" : "0.66rem",
            fontWeight: 500,
            color: T.text3,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {right}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   NAV
   ───────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(10, 10, 15, 0.86)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0.85rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#top"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.65rem",
            color: T.text,
            fontFamily: T.fSans,
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "-0.005em",
          }}
        >
          <span style={{ width: 6, height: 6, background: T.accent }} />
          Frostaing AI
        </a>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                fontFamily: T.fMono,
                fontSize: "0.62rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: T.text2,
                display: "inline-flex",
                gap: "0.55rem",
              }}
            >
              <span style={{ color: T.text3 }}>{item.num}</span>
              {item.label}
            </a>
          ))}
          <a
            href="/CV-francois-rostaing.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: T.fMono,
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: T.text2,
            }}
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}

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
      {/* Faint dashboard texture -- barely visible at 0.04 opacity */}
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
      {/* Gradient overlay: fade to bg at top and bottom edges */}
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
        {/* Top meta line */}
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
            Frostaing AI | Geneva | Established 2026
          </span>
        </div>

        {/* Main headline: firm-level capability */}
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
          AI and finance systems built like a research desk.
        </h1>

        {/* Positioning line */}
        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(1.05rem, 1.45vw, 1.25rem)",
            color: T.text2,
            lineHeight: 1.55,
            margin: "2.25rem 0 0",
            maxWidth: 760,
          }}
        >
          Frostaing AI is an AI and finance systems firm specializing in
          Claude-powered research, automation, and decision-support tools.
          Eleven shipped systems span private equity, systematic strategies,
          derivatives, and a unified research terminal.
        </p>
      </div>

      {/* Bottom data strip -- quieter than the headline */}
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
          ["Practice", "Geneva, CH"],
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
   SERVICES
   ───────────────────────────────────────────────────────────────── */
function Services() {
  return (
    <section id="services" style={{ padding: "8.5rem 2rem 5.5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="01" label="Services" right="4 offerings" />

        {/* Lead statement */}
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
            What we build for clients.
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
            We help investment and operating teams move from manual work to
            structured, auditable systems. Engagements are scoped tightly,
            implemented to test coverage, and deployed as production tools.
          </p>
        </div>

        {/* 4 offerings as a 2x2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            border: `1px solid ${T.borderSubtle}`,
            background: T.bg,
          }}
        >
          {SERVICES.map((s, i) => {
            const isRight = i % 2 === 1;
            const isBottom = i >= SERVICES.length - 2;
            return (
              <div
                key={s.num}
                className="service-cell"
                style={{
                  padding: "2.25rem 2rem",
                  borderRight: isRight ? "none" : `1px solid ${T.borderSubtle}`,
                  borderBottom: isBottom ? "none" : `1px solid ${T.borderSubtle}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 7,
                      height: 7,
                      background: T.accent,
                      display: "inline-block",
                    }}
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
                    Offering {s.num}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: T.fSans,
                    fontSize: "1.18rem",
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
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0.4rem 0 0",
                  }}
                >
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        fontFamily: T.fMono,
                        fontSize: "0.72rem",
                        color: T.text2,
                        letterSpacing: "0.04em",
                        padding: "0.4rem 0",
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
              </div>
            );
          })}
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
      {/* Left column: prose */}
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
            style={{
              width: 7,
              height: 7,
              background: tierColor,
              display: "inline-block",
            }}
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

        {/* Strong takeaway: the one-liner that frames the work */}
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

        {/* Short supporting paragraph */}
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
              <span aria-hidden>→</span>
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
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Right column: compact specification */}
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
    <section
      id="work"
      style={{
        padding: "8.5rem 2rem 5.5rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="02" label="Systems" right="3 of 11 featured" />

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
              maxWidth: 320,
            }}
          >
            Technical foundation and implementation track record.
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
            The eleven systems below are how we sharpen the firm's analytical
            stack. Each ships with full test coverage, a Codex-audited review,
            and a live app. The capstone integrates the prior ten into a
            single research terminal.
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
          num="02.1"
          label="Architecture"
          right={`${ALL_PROJECTS.length} systems indexed`}
          weight="compact"
        />

        {/* Intro: short statement, tier index. Tighter than other sections. */}
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
            ].map(([k, v], i) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "18px 140px 1fr",
                  padding: "0.6rem 0",
                  borderTop: i === 0 ? `1px solid ${T.borderSubtle}` : `1px solid ${T.borderSubtle}`,
                  gap: "0.85rem",
                  alignItems: "center",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 6,
                    height: 6,
                    background: TIER[k],
                    display: "inline-block",
                  }}
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

        {/* Full project index table. Quieter than the case studies. */}
        <div
          style={{
            border: `1px solid ${T.borderSubtle}`,
            background: T.bg,
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50px minmax(0, 3fr) minmax(0, 1.4fr) 70px minmax(0, 2.2fr) 100px",
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

          {/* Rows */}
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
                  gridTemplateColumns: "50px minmax(0, 3fr) minmax(0, 1.4fr) 70px minmax(0, 2.2fr) 100px",
                  padding: "0.72rem 1.1rem",
                  borderBottom: i === ALL_PROJECTS.length - 1 ? "none" : `1px solid ${T.borderSubtle}`,
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

        {/* Footnote */}
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
   USE CASES
   ───────────────────────────────────────────────────────────────── */
function UseCases() {
  return (
    <section id="use-cases" style={{ padding: "8.5rem 2rem 5.5rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="03" label="Use Cases" right={`${USE_CASES.length} implementation areas`} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 4fr) minmax(0, 8fr)",
            gap: "3rem",
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
            Where Frostaing AI implementations land.
          </h3>

          <div
            style={{
              border: `1px solid ${T.borderSubtle}`,
              background: T.bg,
            }}
          >
            {USE_CASES.map(([code, title, desc], i) => (
              <div
                key={code}
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px minmax(0, 1.3fr) minmax(0, 3fr)",
                  padding: "1.15rem 1.25rem",
                  borderBottom:
                    i === USE_CASES.length - 1
                      ? "none"
                      : `1px solid ${T.borderSubtle}`,
                  alignItems: "start",
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
                  {code}
                </span>
                <span
                  style={{
                    fontFamily: T.fSans,
                    fontSize: "0.95rem",
                    color: T.text,
                    fontWeight: 500,
                  }}
                >
                  {title}
                </span>
                <span
                  style={{
                    fontFamily: T.fSans,
                    fontSize: "0.88rem",
                    color: T.text2,
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
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
   TEAM
   ───────────────────────────────────────────────────────────────── */
function TeamMemberCard({ m }) {
  return (
    <article
      style={{
        border: `1px solid ${T.borderSubtle}`,
        background: T.bg,
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <img
          src={m.photo}
          alt={m.name}
          width={72}
          height={72}
          loading="lazy"
          style={{
            width: 72,
            height: 72,
            objectFit: "cover",
            border: `1px solid ${T.border}`,
            background: T.elevated,
            flexShrink: 0,
          }}
        />
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontFamily: T.fSans,
              fontSize: "1rem",
              fontWeight: 600,
              color: T.text,
              letterSpacing: "-0.012em",
              lineHeight: 1.2,
            }}
          >
            {m.name}
          </div>
          <div
            style={{
              fontFamily: T.fMono,
              fontSize: "0.6rem",
              fontWeight: 600,
              color: T.accent,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginTop: "0.4rem",
              lineHeight: 1.4,
            }}
          >
            {m.role}
          </div>
        </div>
      </div>

      <p
        style={{
          fontFamily: T.fSans,
          fontSize: "0.86rem",
          color: T.text2,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {m.bio}
      </p>

      <a
        href={`mailto:${m.email}`}
        className="team-email"
        style={{
          fontFamily: T.fMono,
          fontSize: "0.68rem",
          color: T.text2,
          letterSpacing: "0.04em",
          paddingTop: "0.85rem",
          borderTop: `1px solid ${T.borderSubtle}`,
          display: "inline-block",
          marginTop: "auto",
          wordBreak: "break-all",
        }}
      >
        {m.email}
      </a>
    </article>
  );
}

function Team() {
  return (
    <section
      id="team"
      style={{
        padding: "8.5rem 2rem 5.5rem",
        background: T.surface,
        borderTop: `1px solid ${T.borderStrong}`,
        borderBottom: `1px solid ${T.borderStrong}`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="04" label="Team" right={`${TEAM.length} members and collaborators`} />

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
            Practice team and collaborator network.
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
            Frostaing AI operates with a small trained practice team and
            collaborator network focused on Claude-powered implementation,
            finance systems, and AI workflow deployment.
          </p>
        </div>

        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "1rem",
          }}
        >
          {TEAM.map((m) => (
            <TeamMemberCard key={m.email} m={m} />
          ))}
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
          {/* Left: prose. Capability first, credentials secondary. */}
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
                Frostaing AI | Founded by Francois Rostaing
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
                building practical Claude-powered workflows, analytics
                engines, and internal decision tools. The firm combines
                finance, automation, software engineering, and AI
                implementation to help teams move from manual analysis to
                structured, auditable systems.
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
                Our work is anchored in three signals: real financial
                understanding, strong data engineering, and decision tools
                investors and operators actually use. Every system ships with
                full test coverage and a Codex-audited review.
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
                We focus on practical implementation, not theory. The eleven
                shipped systems are the firm's technical foundation; client
                engagements extend that stack into Claude-powered research,
                automation, and decision-support infrastructure.
              </p>
            </div>
          </div>

          {/* Right: facts table */}
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
              ["Location", "Geneva, Switzerland"],
              ["Founded", "2026"],
              ["Founder", "Francois Rostaing"],
              ["Focus", "Claude-powered finance and AI systems"],
              ["Languages", "Python, JavaScript, SQL"],
              ["Frameworks", "Next.js, Streamlit, Plotly"],
              ["Data", "DuckDB, SQLite, FMP, FRED, SEC EDGAR"],
              ["AI", "Claude API, deterministic orchestration"],
              ["Systems Live", `${liveCount} / 11`],
              ["Total Tests", totalTests.toLocaleString()],
            ].map(([k, v], i, arr) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "130px 1fr",
                  padding: "0.85rem 0",
                  borderBottom: i === arr.length - 1 ? "none" : `1px solid ${T.borderSubtle}`,
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
      url: "mailto:francois@frostaing.com",
      display: "francois@frostaing.com",
      external: false,
      mono: true,
    },
    {
      label: "Location",
      url: "https://maps.google.com/?q=Geneva,+Switzerland",
      display: "Geneva, Switzerland",
      external: true,
    },
    {
      label: "GitHub",
      url: "https://github.com/FrancoisRost1",
      display: "github.com/FrancoisRost1",
      external: true,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/francois-rostaing-155371341/",
      display: "linkedin.com/in/francois-rostaing",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "7.5rem 2rem 5rem",
        borderTop: `1px solid ${T.border}`,
      }}
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
              Work with us.
            </h2>
            <p
              style={{
                fontFamily: T.fSans,
                fontSize: "0.95rem",
                color: T.text2,
                lineHeight: 1.7,
                margin: "1.5rem 0 0",
                maxWidth: 380,
              }}
            >
              We engage with investment and operating teams on Claude-powered
              workflows, AI research systems, financial analytics, and
              internal decision tools. Reach out to scope a project.
            </p>
          </div>

          <div>
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.url}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="contact-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr auto",
                  padding: "1.4rem 0",
                  borderTop: i === 0 ? `1px solid ${T.border}` : "none",
                  borderBottom: `1px solid ${T.border}`,
                  alignItems: "center",
                  gap: "1.25rem",
                  color: T.text,
                }}
              >
                <span
                  className="contact-label"
                  style={{
                    fontFamily: T.fMono,
                    fontSize: "0.62rem",
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
                    fontFamily: link.mono ? T.fMono : T.fSans,
                    fontSize: "1rem",
                    color: T.text,
                    fontWeight: 500,
                  }}
                >
                  {link.display}
                </span>
                <span
                  aria-hidden
                  className="contact-arrow"
                  style={{
                    fontFamily: T.fMono,
                    fontSize: "0.75rem",
                    color: T.text3,
                  }}
                >
                  →
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
   FOOTER
   ───────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        padding: "1.75rem 2rem",
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
          fontFamily: T.fMono,
          fontSize: "0.6rem",
          color: T.text3,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        <span>Frostaing AI / Geneva, Switzerland / 2026</span>
        <span>
          <a href="mailto:francois@frostaing.com" style={{ color: T.text3 }}>
            francois@frostaing.com
          </a>
          {"  |  "}
          <a href="https://frostaing.com" style={{ color: T.text3 }}>
            frostaing.com
          </a>
        </span>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ROOT
   ───────────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <main style={{ background: T.bg, color: T.text }}>
      <style>{`
        html { scroll-behavior: smooth; scroll-padding-top: 64px; }
        a { text-decoration: none; }

        /* Color-only interactions. No transforms, no glow, no animation. */
        .systems-row { transition: background 0.12s linear, color 0.12s linear; }
        .systems-row:hover { background: rgba(255,255,255,0.025); color: ${T.text}; }

        .contact-row { transition: border-color 0.12s linear; }
        .contact-row:hover { border-bottom-color: ${T.accent}; }
        .contact-row:hover .contact-arrow,
        .contact-row:hover .contact-value { color: ${T.accent}; }
        .contact-row:hover .contact-label { color: ${T.text2}; }

        .case-link { transition: opacity 0.12s linear; }
        .case-link:hover { opacity: 0.78; }

        .service-cell { transition: background 0.12s linear; }
        .service-cell:hover { background: rgba(255,255,255,0.02); }

        .team-email { transition: color 0.12s linear; }
        .team-email:hover { color: ${T.accent}; }

        @media (max-width: 1100px) {
          .team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }

        @media (max-width: 900px) {
          section[id] > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          .team-grid { grid-template-columns: 1fr !important; }
          .nav-links { display: none !important; }
          .hero-bg { display: none; }
        }
      `}</style>
      <Nav />
      <Hero />
      <Services />
      <SelectedWork />
      <Systems />
      <UseCases />
      <Team />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
