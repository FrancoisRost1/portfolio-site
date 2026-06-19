/*
  Frostaing AI. Institutional finance design system.
  Single source of truth: DESIGN.md and style_inject.py.
  No em dashes. No emojis. No gradients. No glow. No hover transforms.

  Shared across the homepage and the 404 route. This is the one place
  colors and type tokens are defined.
*/

export const T = {
  bg: "#0A0A0F",
  surface: "#121218",
  elevated: "#1A1A22",
  text: "#E8E8EC",
  text2: "#8E8E9A",
  text3: "#55555F",
  border: "rgba(255,255,255,0.08)",
  borderSubtle: "rgba(255,255,255,0.04)",
  borderStrong: "rgba(255,255,255,0.16)",
  // Stronger primary accent. Used for links, key UI elements, and hover states.
  // Same single hue, higher contrast against the charcoal background.
  accent: "#E07020",
  accentSoft: "#C89040",
  success: "#3D9A50",
  danger: "#C43D3D",
  fSans: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
  fMono: "var(--font-mono), 'SF Mono', Consolas, monospace",
};

// Tier accents. Mirrors DESIGN.md per-project accent guide. Used only
// for small text accents and 6px tier dots. No backgrounds, no fills.
export const TIER = {
  Foundation: "#C8962E",   // warm amber, deal modeling
  "Quant Core": "#4A7FB5", // steel blue, factor research
  Systematic: "#B86A3A",   // muted red amber, vol regime
  Advanced: "#5A7A9E",     // cool grey blue, portfolio
  Elite: "#7C6DB0",        // muted violet, derivatives + research agent
  Capstone: "#E07020",     // amber accent, capstone
};
