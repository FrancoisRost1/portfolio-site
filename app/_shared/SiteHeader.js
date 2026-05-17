/*
  Site-wide fixed header. Replaces the original single-page anchor Nav.

  Now spans three routes, so primary items are real page links (next/link)
  and the homepage sections are reached via "/#id" hash links. The CV link
  was deliberately removed from the global nav (a firm site does not carry a
  CV in the same row as Services and Contact); the PDF stays reachable from
  the About bio instead. The "Book a call" button is the primary action.
*/

import Link from "next/link";
import { T } from "./theme";
import { BOOKING_PE } from "./booking";

const LINKS = [
  { href: "/deal-intelligence", label: "Deal Intelligence", page: true },
  { href: "/sme-finance", label: "SME & Finance", page: true },
  { href: "/#systems", label: "Systems", page: false },
  { href: "/#about", label: "About", page: false },
  { href: "/#contact", label: "Contact", page: false },
];

export function SiteHeader() {
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
          gap: "1.25rem",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.65rem",
            color: T.text,
            fontFamily: T.fSans,
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "-0.005em",
            flexShrink: 0,
          }}
        >
          <span style={{ width: 6, height: 6, background: T.accent }} />
          Frostaing AI
        </Link>

        <div
          className="nav-links"
          style={{ display: "flex", alignItems: "center", gap: "1.6rem" }}
        >
          {LINKS.map((item) => {
            const style = {
              fontFamily: T.fMono,
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: T.text2,
            };
            return item.page ? (
              <Link key={item.href} href={item.href} className="site-nav-link" style={style}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className="site-nav-link" style={style}>
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href={BOOKING_PE}
          className="cta-btn"
          style={{
            flexShrink: 0,
            fontFamily: T.fMono,
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: T.bg,
            background: T.accent,
            padding: "0.62rem 1.1rem",
            border: `1px solid ${T.accent}`,
          }}
        >
          Book a call
        </a>
      </div>
    </nav>
  );
}
