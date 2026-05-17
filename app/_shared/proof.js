/*
  Compact proof tiles for the lean offer pages. The offer pages deliberately
  do NOT reuse the full eleven-system table from the homepage. Each embeds one
  or two hand-picked systems inline and links back to /#systems for the rest.

  Data is a small explicit subset (not imported from the homepage route file)
  so the offer pages stay self-contained. Specs mirror the live apps.
*/

import { T, TIER } from "./theme";
import { StatusTag } from "./primitives";

const PROOF = {
  "ai-research-agent": {
    name: "AI Research Agent",
    tier: "Elite",
    tests: "242",
    metric: "6-engine deterministic pipeline",
    liveUrl: "https://ai-research-agent1.streamlit.app",
  },
  "lbo-engine": {
    name: "LBO Engine",
    tier: "Foundation",
    tests: "n/a",
    metric: "Monte Carlo, 1000 sims",
    liveUrl: "https://lbo-engine-version1.streamlit.app",
  },
  "pe-target-screener": {
    name: "PE Target Screener",
    tier: "Foundation",
    tests: "28",
    metric: "80 companies scored",
    liveUrl: "https://pe-target-screener.streamlit.app",
  },
  "unified-research-terminal": {
    name: "Unified Research Terminal",
    tier: "Capstone",
    tests: "506",
    metric: "6 institutional workspaces",
    liveUrl: "https://terminal.frostaing.com",
  },
};

function ProofTile({ id }) {
  const p = PROOF[id];
  if (!p) return null;
  const tierColor = TIER[p.tier] || T.accent;
  return (
    <a
      href={p.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="proof-tile"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: `1px solid ${T.borderSubtle}`,
        background: T.bg,
        padding: "1.5rem 1.4rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
        <span
          aria-hidden
          style={{ width: 6, height: 6, background: tierColor, display: "inline-block" }}
        />
        <span
          style={{
            fontFamily: T.fMono,
            fontSize: "0.58rem",
            fontWeight: 600,
            color: tierColor,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {p.tier}
        </span>
        <span style={{ flex: 1, height: 1, background: T.border }} />
        <StatusTag status="live" />
      </div>
      <div
        style={{
          fontFamily: T.fSans,
          fontSize: "1.05rem",
          fontWeight: 600,
          color: T.text,
          letterSpacing: "-0.015em",
        }}
      >
        {p.name}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "0.5rem 1.25rem",
          fontFamily: T.fMono,
          fontSize: "0.7rem",
        }}
      >
        <span style={{ color: T.text3, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Tests
        </span>
        <span style={{ color: T.text, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
          {p.tests}
        </span>
        <span style={{ color: T.text3, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Metric
        </span>
        <span style={{ color: T.text2, textAlign: "right" }}>{p.metric}</span>
      </div>
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
          color: tierColor,
        }}
      >
        Live App {"→"}
      </span>
    </a>
  );
}

export function ProofStrip({ ids, label = "Proven on shipped systems" }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            fontFamily: T.fMono,
            fontSize: "0.62rem",
            fontWeight: 600,
            color: T.text3,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <a
          href="/#systems"
          className="case-link"
          style={{
            fontFamily: T.fMono,
            fontSize: "0.62rem",
            fontWeight: 600,
            color: T.accent,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          See all 11 systems {"→"}
        </a>
      </div>
      <div
        className="proof-grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${ids.length}, minmax(0, 1fr))`,
          gap: "1rem",
        }}
      >
        {ids.map((id) => (
          <ProofTile key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
