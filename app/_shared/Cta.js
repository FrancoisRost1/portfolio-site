/*
  Conversion CTA. PrimaryButton is the single accent button used in the nav,
  the hero, the pricing block, and the homepage Contact block. The primary
  action across the site is opening the terminal (free during beta).
*/

import { T } from "./theme";

export function PrimaryButton({ href, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="cta-btn"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.7rem",
        fontFamily: T.fMono,
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: T.bg,
        background: T.accent,
        border: `1px solid ${T.accent}`,
        padding: "1rem 1.6rem",
      }}
    >
      {children}
      <span aria-hidden>{"→"}</span>
    </a>
  );
}
