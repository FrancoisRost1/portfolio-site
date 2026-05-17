/*
  Conversion CTA. The call is the path; email is the fallback.

  PrimaryButton is the single accent button used in the nav, the offer pages,
  and the homepage Contact block. BookCta is the full closing section for the
  two offer routes: heading, one line, the booking button, email fallback.
*/

import { T } from "./theme";
import { CONTACT_EMAIL } from "./booking";

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

export function BookCta({ id, kicker, title, body, buttonLabel, buttonHref }) {
  return (
    <section
      id={id}
      style={{
        padding: "7.5rem 2rem 6.5rem",
        borderTop: `1px solid ${T.borderStrong}`,
        background: T.surface,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ width: 18, height: 1, background: T.accent }} />
          <span
            style={{
              fontFamily: T.fMono,
              fontSize: "0.66rem",
              color: T.accent,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {kicker}
          </span>
        </div>
        <h2
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(1.85rem, 3.4vw, 2.75rem)",
            fontWeight: 600,
            letterSpacing: "-0.028em",
            color: T.text,
            lineHeight: 1.1,
            margin: 0,
            maxWidth: 720,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "1.02rem",
            color: T.text2,
            lineHeight: 1.7,
            margin: "1.5rem 0 2.75rem",
            maxWidth: 620,
          }}
        >
          {body}
        </p>
        <PrimaryButton href={buttonHref}>{buttonLabel}</PrimaryButton>
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
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: T.text2 }}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
