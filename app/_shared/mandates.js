/*
  Mandate catalog. Single source of truth for the firm's per-deliverable and
  retainer pricing on the marketing site.

  Mirrors the terminal's config.d/pricing-cards.yaml (read by the terminal's
  /pricing-cards workspace). The two stay in sync by hand: when the terminal
  YAML changes, this file changes in the same PR. Drift here means a buyer
  sees a different number on the marketing site than on the terminal page
  they land on after the booking call, so the bar for keeping them aligned
  is high.

  Cadence ordering is the order the /services page renders. Within each
  group, items are ordered by descending headline_chf so the buyer reads the
  high-anchor mandate first (Bloomberg "biggest cell first" convention).
*/

export const PER_DELIVERABLE = [
  {
    key: "strategy_backtest",
    label: "Strategy backtest + robustness",
    cadence: "per strategy",
    headline_chf: 30000,
    sla_days: 10,
    terminal_workspace: "strategy-lab",
    includes: [
      "Strategy specification in the terminal's strategy lab",
      "Walk-forward CSCV PBO + deflated Sharpe per Bailey et al.",
      "Stochastic-dominance test vs benchmark",
      "Parameter-stability plateau + block-bootstrap CI",
      "ROBUST / LIKELY ROBUST / BORDERLINE / OVERFIT verdict",
    ],
  },
  {
    key: "pe_diligence",
    label: "PE diligence pack",
    cadence: "per IC memo",
    headline_chf: 22000,
    sla_days: 5,
    terminal_workspace: "ticker-deep-dive",
    includes: [
      "Full deterministic pipeline on the target (PE / factor / TSMOM / LBO / Greeks)",
      "Bull / base / bear scenario payoffs with Monte Carlo IRR bounds",
      "Robustness verdict on the entry-exit thesis (PBO / deflated Sharpe)",
      "Comparable-deals M&A intelligence + Altman Z'' credit screen",
      "Final IC-memo PDF ready to circulate",
    ],
  },
  {
    key: "ma_transaction_memo",
    label: "M&A transaction memo",
    cadence: "per transaction",
    headline_chf: 18000,
    sla_days: 7,
    terminal_workspace: "comps-relative-value",
    includes: [
      "Standalone valuation (DCF + multiples + LBO floor)",
      "Synergy bridge with explicit cost / revenue split",
      "Comparable-transactions premium analysis",
      "Accretion / dilution per the buyer's cap structure",
      "Pro-forma covenant + leverage screen",
    ],
  },
  {
    key: "sector_deep_dive",
    label: "Sector deep-dive (any sector)",
    cadence: "per report",
    headline_chf: 15000,
    sla_days: 7,
    terminal_workspace: "industry-explorer",
    includes: [
      "Cross-vertical synthesis (e.g. VLCC + Brent + India refining)",
      "Top-15 names ranked on the deterministic composite",
      "Sector regime classification (rule-based + factor exposure)",
      "Relative-value matrix vs the sector cohort",
      "Catalyst calendar for the next 90 days",
    ],
  },
  {
    key: "lbo_smb_target",
    label: "LBO model (SMB target)",
    cadence: "per target",
    headline_chf: 15000,
    sla_days: 5,
    terminal_workspace: "lbo-quick-calc",
    includes: [
      "Full LBO model with covenant + cash-sweep mechanics",
      "Base case + Monte Carlo IRR / MOIC dispersion (500 sims)",
      "Exit-multiple x growth sensitivity grid",
      "Equity bridge waterfall (multiple vs growth vs paydown)",
      "Lender-pack credit screen (Altman Z'' + naive Merton)",
    ],
  },
  {
    key: "vc_sector_pack",
    label: "VC sector diligence (5-name)",
    cadence: "per pack",
    headline_chf: 12000,
    sla_days: 5,
    terminal_workspace: "universe-screener",
    includes: [
      "Five-name comparative pipeline + composite score",
      "Per-name PE-screener red flags + sub-score breakdown",
      "Cohort relative-value matrix",
      "One-page-per-name written summary",
      "Cap-table-sensitive IRR scenarios",
    ],
  },
  {
    key: "custom_screen_build",
    label: "Custom universe screen",
    cadence: "per screen",
    headline_chf: 6000,
    sla_days: 5,
    terminal_workspace: "universe-screener",
    includes: [
      "Bespoke filter logic on the live universe (FMP Ultimate)",
      "Backtest on 10-year window with turnover + cost report",
      "Persistent screen integrated into the terminal",
      "Methodology note for the client's compliance file",
    ],
  },
  {
    key: "single_name_deep_dive",
    label: "Single-name deep-dive",
    cadence: "per name",
    headline_chf: 4000,
    sla_days: 2,
    terminal_workspace: "ticker-deep-dive",
    includes: [
      "Full ticker deep-dive pipeline output as PDF",
      "DES + financials + analyst pack + transcripts summary",
      "LBO snapshot + factor exposure + options IV",
      "Composite rating with deterministic decision banner",
    ],
  },
];

export const MONTHLY_RETAINER = [
  {
    key: "family_office_monitoring",
    label: "Family office monitoring",
    cadence: "monthly retainer",
    headline_chf: 1500,
    sla_days: 30,
    terminal_workspace: "portfolio-builder",
    includes: [
      "Watchlist of up to 25 names",
      "Weekly rating-change digest via terminal alerts",
      "Quarterly comparison refresh against sell-side",
      "Ad-hoc one-pagers up to 4 per month",
    ],
  },
  {
    key: "geopolitics_intel",
    label: "Geopolitics intelligence",
    cadence: "monthly retainer",
    headline_chf: 1200,
    sla_days: 30,
    terminal_workspace: "vessel-map",
    includes: [
      "Sanctions + tariff regime watch (regulatory pressure index)",
      "VLCC flow + chokepoint stress (vessel map workspace)",
      "EM credit-spread + FX carry signal",
      "Quarterly written deep-dive on one named geography",
    ],
  },
  {
    key: "macro_pulse_newsletter",
    label: "Macro pulse newsletter",
    cadence: "monthly retainer",
    headline_chf: 800,
    sla_days: 30,
    terminal_workspace: "market-overview",
    includes: [
      "Weekly regime read (rule-based composite + HMM)",
      "Yield-curve + credit-spread snapshot with thresholds",
      "ECO calendar surprises (signed by event family)",
      "Cross-asset rotation flag with breadth metrics",
    ],
  },
];

export const QUARTERLY = [
  {
    key: "portfolio_risk_review",
    label: "Portfolio risk review",
    cadence: "per quarter",
    headline_chf: 4000,
    sla_days: 5,
    terminal_workspace: "portfolio-builder",
    includes: [
      "VaR / CVaR (parametric + historical + Monte Carlo)",
      "Brinson-Fachler allocation vs selection attribution",
      "Ex-ante factor-exposure profile vs SPY",
      "Scenario stress (2008 / 2020 / custom)",
      "Optimizer benchmark (MV / HRP / RP / BL) + frontier overlay",
    ],
  },
];

export const SUBSCRIPTION = [
  {
    key: "white_label_seat",
    label: "White-label terminal seat",
    cadence: "monthly per seat (min 3 seats)",
    headline_chf: 2000,
    sla_days: 30,
    terminal_workspace: "",
    includes: [
      "Full terminal access on a private subdomain",
      "Branded chrome (logo + accent color, methodology page kept)",
      "Per-seat watchlist + decision-log persistence",
      "Read-only API access to engine outputs",
      "Monthly office hour for the team",
    ],
  },
];

export const MANDATE_GROUPS = [
  { id: "per-deliverable", label: "Per deliverable",  items: PER_DELIVERABLE },
  { id: "monthly",         label: "Monthly retainer", items: MONTHLY_RETAINER },
  { id: "quarterly",       label: "Per quarter",      items: QUARTERLY },
  { id: "subscription",    label: "Subscription",     items: SUBSCRIPTION },
];

// Display helpers. Kept here so the page is pure layout.
export function formatChf(n) {
  return `CHF ${n.toLocaleString("en-CH")}`;
}

export function totalMandateCount() {
  return MANDATE_GROUPS.reduce((s, g) => s + g.items.length, 0);
}
