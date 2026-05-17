/*
  Shared footer. Identical across all routes.
*/

import { T } from "./theme";
import { CONTACT_EMAIL } from "./booking";

export function Footer() {
  return (
    <footer
      style={{
        padding: "1.75rem 2rem",
        borderTop: `1px solid ${T.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
          fontFamily: T.fMono,
          fontSize: "0.6rem",
          color: T.text3,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        <span>Frostaing AI / Geneva, Switzerland / 2026</span>
        <span>
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: T.text3 }}>
            {CONTACT_EMAIL}
          </a>
          {"  |  "}
          <a href="https://www.frostaing.com" style={{ color: T.text3 }}>
            www.frostaing.com
          </a>
        </span>
      </div>
    </footer>
  );
}
