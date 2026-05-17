/*
  /sme-finance. The supporting offer.

  Productized for finance teams and SME CFOs. Public, visible prices are the
  point: they tell the buyer this is a product, not a custom quote, and
  shorten the sales cycle. Lean offer page. Two priced SKUs plus an optional
  retainer. Embeds two hand-picked proof tiles inline.
*/

import { T } from "../_shared/theme";
import { SectionHead } from "../_shared/primitives";
import { SiteHeader } from "../_shared/SiteHeader";
import { Footer } from "../_shared/Footer";
import { BookCta } from "../_shared/Cta";
import { ProofStrip } from "../_shared/proof";
import { BOOKING_SME } from "../_shared/booking";

export const metadata = {
  title: "Productized AI for SME Finance Teams | Frostaing AI",
  description:
    "Fixed-scope, fixed-fee AI for finance teams and SME CFOs. Sprint (4 weeks, CHF 12,000) and Sprint Plus (6 weeks, CHF 22,000), with an optional CHF 1,500 per month retainer. Public prices, productized delivery.",
};

const SKUS = [
  {
    name: "Sprint",
    price: "CHF 12,000",
    terms: "4 weeks, fixed fee",
    summary: "One workflow productized end to end.",
    examples: [
      "Monthly management reporting automation",
      "Document intake and extraction",
      "Client communication automation",
      "Internal knowledge assistant",
    ],
  },
  {
    name: "Sprint Plus",
    price: "CHF 22,000",
    terms: "6 weeks, fixed fee",
    summary:
      "Two connected workflows, or one workflow with deeper integration.",
    examples: [
      "Existing ERP or CRM integration",
      "Custom data sources",
      "Multi-user dashboard",
      "One workflow with deeper depth",
    ],
  },
];

const DELIVERY = [
  "Scope locked at kickoff",
  "One revision cycle",
  "Live deployment included",
  "Code handover",
];

function Hero() {
  return (
    <section
      style={{ padding: "11rem 2rem 6rem", borderBottom: `1px solid ${T.borderStrong}` }}
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
            Supporting offer | Finance teams and SME CFOs
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
          Productized AI for finance teams and SME CFOs.
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
          Fixed scope, fixed fee, fixed timeline. From document intake to
          management reporting and internal knowledge assistants, delivered as
          a production tool with code handover.
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
          The price is public on purpose. This is a product, not a custom
          quote, which is what shortens the engagement from weeks of scoping to
          a single fit call.
        </p>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section style={{ padding: "8rem 2rem 4rem" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead num="01" label="Productized offer" right="2 SKUs + retainer" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "1rem",
          }}
        >
          {SKUS.map((s) => (
            <article
              key={s.name}
              style={{
                border: `1px solid ${T.borderSubtle}`,
                background: T.bg,
                padding: "2.25rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
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
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    letterSpacing: "-0.018em",
                    color: T.text,
                    margin: 0,
                  }}
                >
                  {s.name}
                </h3>
                <span
                  style={{
                    fontFamily: T.fMono,
                    fontSize: "0.62rem",
                    color: T.text3,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {s.terms}
                </span>
              </div>
              <div
                style={{
                  fontFamily: T.fMono,
                  fontSize: "2rem",
                  fontWeight: 600,
                  color: T.accent,
                  letterSpacing: "-0.01em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s.price}
              </div>
              <p
                style={{
                  fontFamily: T.fSans,
                  fontSize: "0.95rem",
                  color: T.text,
                  fontWeight: 500,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {s.summary}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.examples.map((e) => (
                  <li
                    key={e}
                    style={{
                      fontFamily: T.fMono,
                      fontSize: "0.72rem",
                      color: T.text2,
                      letterSpacing: "0.03em",
                      padding: "0.5rem 0",
                      borderTop: `1px solid ${T.borderSubtle}`,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
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
                      }}
                    />
                    {e}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "1.25rem",
                  borderTop: `1px solid ${T.border}`,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem 1.25rem",
                }}
              >
                {DELIVERY.map((d) => (
                  <span
                    key={d}
                    style={{
                      fontFamily: T.fMono,
                      fontSize: "0.62rem",
                      color: T.text3,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: "1rem",
            border: `1px solid ${T.borderSubtle}`,
            background: T.bg,
            padding: "1.75rem 2rem",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: T.fSans,
                fontSize: "1.05rem",
                fontWeight: 600,
                color: T.text,
                marginBottom: "0.4rem",
              }}
            >
              Optional retainer
            </div>
            <p
              style={{
                fontFamily: T.fSans,
                fontSize: "0.9rem",
                color: T.text2,
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 620,
              }}
            >
              After delivery, monitoring, prompt tuning, and minor adjustments.
              Available, not required.
            </p>
          </div>
          <div
            style={{
              fontFamily: T.fMono,
              fontSize: "1.15rem",
              fontWeight: 600,
              color: T.text,
              letterSpacing: "-0.005em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            CHF 1,500 / month
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section
      style={{
        padding: "4rem 2rem 6rem",
        background: T.surface,
        borderTop: `1px solid ${T.borderStrong}`,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <ProofStrip
          ids={["unified-research-terminal", "ai-research-agent"]}
          label="Proven on shipped systems"
        />
      </div>
    </section>
  );
}

export default function SmeFinancePage() {
  return (
    <main style={{ background: T.bg, color: T.text }}>
      <SiteHeader />
      <Hero />
      <Pricing />
      <Proof />
      <BookCta
        id="book"
        kicker="SME & Finance"
        title="Book a fit call."
        body="A 20-minute fit call is enough to confirm scope and pick the right SKU. If it is a fit, we lock scope and start. If it is not, we will tell you."
        buttonLabel="Book a 20-minute fit call"
        buttonHref={BOOKING_SME}
      />
      <Footer />
    </main>
  );
}
