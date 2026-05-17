/*
  Compact proof tiles for the lean offer pages. The offer pages deliberately
  do NOT reuse the full eleven-system table from the homepage. Each embeds a
  few hand-picked tiles inline and links back to /#systems for the rest.

  Tiles are now explicit { title, blurb, href } objects passed by the page,
  not id lookups into a static dict. Every proof tile points at the live
  terminal (terminal.frostaing.com) so the story stays one product, not a
  scatter of standalone Streamlit apps. Deeplinks to specific workspaces are
  a possible follow-up.
*/

import { T } from "./theme";
import { StatusTag } from "./primitives";

function ProofTile({ title, blurb, href }) {
  return (
    <a
      href={href}
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
          style={{ width: 6, height: 6, background: T.accent, display: "inline-block" }}
        />
        <span
          style={{
            fontFamily: T.fMono,
            fontSize: "0.58rem",
            fontWeight: 600,
            color: T.accent,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Terminal
        </span>
        <span style={{ flex: 1, height: 1, background: T.border }} />
        <StatusTag status="live" />
      </div>
      <div
        style={{
          fontFamily: T.fSans,
          fontSize: "1.02rem",
          fontWeight: 600,
          color: T.text,
          letterSpacing: "-0.015em",
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontFamily: T.fSans,
          fontSize: "0.88rem",
          color: T.text2,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {blurb}
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
        Open terminal {"→"}
      </span>
    </a>
  );
}

export function ProofStrip({ tiles, label = "Proven on shipped systems" }) {
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
          gridTemplateColumns: `repeat(${tiles.length}, minmax(0, 1fr))`,
          gap: "1rem",
        }}
      >
        {tiles.map((t) => (
          <ProofTile key={t.title} title={t.title} blurb={t.blurb} href={t.href} />
        ))}
      </div>
    </div>
  );
}
