/*
  Shared primitives. StatusTag and SectionHead are used by the homepage and
  both offer routes. Lifted verbatim from the original single-page build so
  the visual language stays identical across routes.
*/

import { T } from "./theme";

export function StatusTag({ status }) {
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

export function SectionHead({ num, label, right, weight = "default" }) {
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
