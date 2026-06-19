/*
  Branded 404. Replaces Next's default bare white "This page could not be
  found." screen, which traps a visitor on an unstyled page with no nav and
  no way back. This keeps the dark firm chrome (header + footer), states the
  miss plainly, and offers explicit routes back into the site.

  Server component. Same design system as every other route (T tokens, no
  em dashes, no emojis, color-only interactions).
*/

import Link from "next/link";
import { T } from "./_shared/theme";
import { SiteHeader } from "./_shared/SiteHeader";
import { Footer } from "./_shared/Footer";

export const metadata = {
  title: "Page not found | Frostaing AI",
  description: "The page you requested does not exist. Return to Frostaing AI.",
};

const ROUTES = [
  ["Home", "/"],
  ["Inside the terminal", "/#features"],
  ["Pricing", "/#pricing"],
  ["Beta feedback", "/#feedback"],
];

export default function NotFound() {
  return (
    <main style={{ background: T.bg, color: T.text, minHeight: "100vh" }}>
      <SiteHeader />
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "9rem 2rem 4rem",
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginBottom: "2rem",
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
              Error 404 | Page not found
            </span>
          </div>

          <h1
            style={{
              fontFamily: T.fSans,
              fontSize: "clamp(2rem, 4.4vw, 3.25rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: T.text,
              margin: 0,
              maxWidth: 760,
            }}
          >
            That page does not exist.
          </h1>

          <p
            style={{
              fontFamily: T.fSans,
              fontSize: "clamp(0.98rem, 1.3vw, 1.12rem)",
              color: T.text2,
              lineHeight: 1.65,
              margin: "1.5rem 0 0",
              maxWidth: 560,
            }}
          >
            The link may be stale or mistyped. Pick a route below to get back
            into the site.
          </p>

          <div
            style={{
              marginTop: "2.75rem",
              border: `1px solid ${T.borderSubtle}`,
              background: T.bg,
              maxWidth: 560,
            }}
          >
            {ROUTES.map(([label, href], i) => (
              <Link
                key={href}
                href={href}
                className="contact-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  padding: "1.05rem 1.4rem",
                  borderBottom:
                    i === ROUTES.length - 1 ? "none" : `1px solid ${T.borderSubtle}`,
                  alignItems: "center",
                  gap: "1.25rem",
                  color: T.text2,
                }}
              >
                <span
                  className="contact-value"
                  style={{
                    fontFamily: T.fMono,
                    fontSize: "0.78rem",
                    color: T.text,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                  }}
                >
                  {label}
                </span>
                <span
                  aria-hidden
                  className="contact-arrow"
                  style={{ fontFamily: T.fMono, fontSize: "0.72rem", color: T.text3 }}
                >
                  {"→"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
