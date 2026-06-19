/*
  Site-wide fixed header. Replaces the original single-page anchor Nav.

  Now spans four routes, so primary items are real page links (next/link)
  and the homepage sections are reached via "/#id" hash links. There is no
  founder CV anywhere on the site (a firm site does not carry one); the
  "Book a call" button is the primary action.

  The primary action is opening the terminal, since the product is the
  terminal and it is free during beta. The target is a `ctaHref` prop that
  defaults to the production terminal; pages can override it but the homepage
  does not need to. No route detection inside the component.

  Mobile nav: the desktop link row is display:none under 900px. To keep the
  links reachable on a phone WITHOUT introducing a client component (the
  architecture rule is server components throughout), the hamburger is a
  CSS-only checkbox toggle. The hidden checkbox is a direct child of <nav>;
  the label (burger) flips it via htmlFor; the mobile menu is a sibling of
  the checkbox so a `:checked ~ .mobile-menu` rule in globals.css reveals it.
  Page navigations re-render the header fresh (checkbox resets); same-page
  anchor taps leave it open, an accepted no-JS trade-off.
*/

import Link from "next/link";
import { T } from "./theme";

const TERMINAL_ROOT = "https://terminal.frostaing.com";

const LINKS = [
  { href: "/#features", label: "Terminal", page: false },
  { href: "/#pricing", label: "Pricing", page: false },
  { href: "/#feedback", label: "Feedback", page: false },
  { href: "/#systems", label: "Systems", page: false },
  { href: "/#about", label: "About", page: false },
  { href: "/#contact", label: "Contact", page: false },
];

const NAV_LINK_STYLE = {
  fontFamily: T.fMono,
  fontSize: "0.62rem",
  fontWeight: 500,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: T.text2,
};

function NavLink({ item, style, className }) {
  return item.page ? (
    <Link href={item.href} className={className} style={style}>
      {item.label}
    </Link>
  ) : (
    <a href={item.href} className={className} style={style}>
      {item.label}
    </a>
  );
}

export function SiteHeader({ ctaHref = TERMINAL_ROOT }) {
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
      {/* CSS-only toggle. Hidden control; flipped by the burger label. */}
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle-checkbox"
        aria-hidden="true"
        tabIndex={-1}
      />

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
          {LINKS.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              className="site-nav-link"
              style={NAV_LINK_STYLE}
            />
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", flexShrink: 0 }}>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
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
            Open terminal
          </a>

          {/* Burger. Shown only under 900px via globals.css. */}
          <label
            htmlFor="nav-toggle"
            className="nav-burger"
            aria-label="Toggle navigation menu"
            role="button"
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
              width: 34,
              height: 34,
              cursor: "pointer",
              border: `1px solid ${T.border}`,
              padding: "0 7px",
            }}
          >
            <span className="nav-burger-bar" style={{ height: 1.5, background: T.text2, display: "block" }} />
            <span className="nav-burger-bar" style={{ height: 1.5, background: T.text2, display: "block" }} />
            <span className="nav-burger-bar" style={{ height: 1.5, background: T.text2, display: "block" }} />
          </label>
        </div>
      </div>

      {/* Mobile dropdown. Revealed by `.nav-toggle-checkbox:checked ~`. */}
      <div
        className="mobile-menu"
        style={{
          display: "none",
          flexDirection: "column",
          borderTop: `1px solid ${T.border}`,
          background: "rgba(10, 10, 15, 0.98)",
        }}
      >
        {LINKS.map((item) => (
          <NavLink
            key={item.href}
            item={item}
            className="mobile-menu-link"
            style={{
              fontFamily: T.fMono,
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: T.text2,
              padding: "1rem 2rem",
              borderTop: `1px solid ${T.borderSubtle}`,
            }}
          />
        ))}
      </div>
    </nav>
  );
}
