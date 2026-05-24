/*
  /services. The full mandate catalog.

  Single page surfacing every per-deliverable, retainer, quarterly, and seat
  mandate the firm offers. Data lives in app/_shared/mandates.js so the page
  stays pure layout. Every mandate that maps to a terminal workspace links
  through to that workspace (e.g. LBO -> /lbo-quick-calc) so a buyer can
  inspect the actual deliverable surface before booking. No Streamlit links.

  Booking: the page CTA points at BOOKING_PE (PE Scoping Call, 30 min) since
  the catalog is fund- and family-office-led. The SME route keeps its own
  /sme-finance page and the SME-specific booking.
*/

import { T } from "../_shared/theme";
import { SectionHead } from "../_shared/primitives";
import { SiteHeader } from "../_shared/SiteHeader";
import { Footer } from "../_shared/Footer";
import { BookCta } from "../_shared/Cta";
import { BOOKING_PE } from "../_shared/booking";
import {
  MANDATE_GROUPS,
  formatChf,
  totalMandateCount,
} from "../_shared/mandates";

const TERMINAL_ROOT = "https://terminal.frostaing.com";
const MANDATE_TOTAL = totalMandateCount();

export const metadata = {
  title: "Services & Mandate Catalog | Frostaing AI",
  description:
    "Per-deliverable, retainer, and seat pricing for the firm's research mandates. PE diligence packs, M&A transaction memos, sector deep-dives, LBO models, VC pipeline screens, family-office monitoring, geopolitics intelligence, and white-label terminal seats. Every mandate maps to a live workspace on the production terminal.",
};

/* ─────────────────────────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        padding: "11rem 2rem 5.5rem",
        borderBottom: `1px solid ${T.borderStrong}`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
            marginBottom: "2.5rem",
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
            Mandate catalog | {MANDATE_TOTAL} live SKUs
          </span>
        </div>
        <h1
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(2.3rem, 5.4vw, 4.4rem)",
            fontWeight: 600,
            letterSpacing: "-0.032em",
            lineHeight: 1.05,
            color: T.text,
            margin: 0,
            maxWidth: 980,
          }}
        >
          What we ship, and what it costs.
        </h1>
        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "clamp(1.02rem, 1.4vw, 1.22rem)",
            color: T.text2,
            lineHeight: 1.6,
            margin: "2.25rem 0 0",
            maxWidth: 780,
          }}
        >
          Per-deliverable packs, monthly retainers, quarterly reviews, and
          white-label terminal seats. Every mandate is bound to a workspace on
          the production terminal so the deliverable is auditable before the
          buyer signs anything.
        </p>
        <p
          style={{
            fontFamily: T.fSans,
            fontSize: "0.95rem",
            color: T.text3,
            lineHeight: 1.7,
            margin: "1.25rem 0 0",
            maxWidth: 680,
          }}
        >
          Prices are Geneva-anchored, in CHF, and net of VAT. SLA is business
          days from kickoff. Volume and recurring engagements adjust headline
          pricing in the scoping call.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CARD
   ───────────────────────────────────────────────────────────────── */
function MandateCard({ m, isRetainer }) {
  const priceSuffix = isRetainer ? " / mo" : "";
  const wsHref = m.terminal_workspace
    ? `${TERMINAL_ROOT}/${m.terminal_workspace}`
    : TERMINAL_ROOT;
  return (
    <article
      style={{
        border: `1px solid ${T.borderSubtle}`,
        background: T.bg,
        padding: "2rem 1.8rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <h3
          style={{
            fontFamily: T.fSans,
            fontSize: "1.18rem",
            fontWeight: 600,
            letterSpacing: "-0.018em",
            color: T.text,
            margin: 0,
            lineHeight: 1.25,
            maxWidth: 320,
          }}
        >
          {m.label}
        </h3>
        <span
          style={{
            fontFamily: T.fMono,
            fontSize: "0.6rem",
            color: T.text3,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {m.cadence}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: T.fMono,
            fontSize: "1.7rem",
            fontWeight: 600,
            color: T.accent,
            letterSpacing: "-0.01em",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {formatChf(m.headline_chf)}
          {priceSuffix}
        </span>
        <span
          style={{
            fontFamily: T.fMono,
            fontSize: "0.62rem",
            color: T.text3,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          SLA {m.sla_days} {isRetainer ? "day cycle" : "business days"}
        </span>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {m.includes.map((line) => (
          <li
            key={line}
            style={{
              fontFamily: T.fMono,
              fontSize: "0.7rem",
              color: T.text2,
              letterSpacing: "0.02em",
              padding: "0.5rem 0",
              borderTop: `1px solid ${T.borderSubtle}`,
              display: "flex",
              alignItems: "flex-start",
              gap: "0.65rem",
              lineHeight: 1.55,
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
                marginTop: "0.45rem",
              }}
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <a
        href={wsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="case-link"
        style={{
          marginTop: "auto",
          paddingTop: "1rem",
          borderTop: `1px solid ${T.border}`,
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6rem",
          fontFamily: T.fMono,
          fontSize: "0.62rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: T.accent,
        }}
      >
        Open in terminal
        <span aria-hidden>{"→"}</span>
      </a>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────
   GROUPS
   ───────────────────────────────────────────────────────────────── */
function MandateGroup({ group, num }) {
  const isRetainer =
    group.id === "monthly" || group.id === "subscription";
  return (
    <section style={{ padding: "5.5rem 2rem 1.5rem" }} id={group.id}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead
          num={num}
          label={group.label}
          right={`${group.items.length} mandate${group.items.length === 1 ? "" : "s"}`}
        />
        <div
          className="mandate-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              group.items.length >= 3
                ? "repeat(3, minmax(0, 1fr))"
                : `repeat(${group.items.length}, minmax(0, 1fr))`,
            gap: "1rem",
          }}
        >
          {group.items.map((m) => (
            <MandateCard key={m.key} m={m} isRetainer={isRetainer} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   NOTES
   ───────────────────────────────────────────────────────────────── */
function Notes() {
  const lines = [
    ["Currency", "All prices in CHF, net of Swiss VAT."],
    ["Volume", "Multi-mandate or recurring engagements adjust pricing in the scoping call."],
    ["Compliance", "Every deliverable ships with a methodology note and a per-engine audit trail for the buyer's file."],
    ["Custom", "Not on this list? Bring it to the scoping call; the catalog is the anchor, not the boundary."],
  ];
  return (
    <section style={{ padding: "5rem 2rem 2rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="05" label="Engagement notes" weight="compact" />
        <div style={{ border: `1px solid ${T.borderSubtle}`, background: T.bg }}>
          {lines.map(([k, v], i) => (
            <div
              key={k}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                padding: "1.05rem 1.6rem",
                borderBottom:
                  i === lines.length - 1 ? "none" : `1px solid ${T.borderSubtle}`,
                gap: "1.25rem",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: T.fMono,
                  fontSize: "0.62rem",
                  color: T.text3,
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
                  fontSize: "0.92rem",
                  color: T.text2,
                  lineHeight: 1.6,
                }}
              >
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ROOT
   ───────────────────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main style={{ background: T.bg, color: T.text }}>
      <SiteHeader />
      <Hero />
      {MANDATE_GROUPS.map((g, i) => (
        <MandateGroup
          key={g.id}
          group={g}
          num={String(i + 1).padStart(2, "0")}
        />
      ))}
      <Notes />
      <BookCta
        id="book"
        kicker="Scoping call"
        title="Book a 30-minute scoping call."
        body="Walk us through the workflow you want to compress. We pick the mandate that fits, anchor the SLA, and tell you on the call whether it is a fit. If it is not, we will say so."
        buttonLabel="Book a 30-minute scoping call"
        buttonHref={BOOKING_PE}
      />
      <Footer />
    </main>
  );
}
