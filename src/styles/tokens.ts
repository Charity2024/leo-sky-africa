/** Official Leo Sky Africa brand palette */
export const brand = {
  primary: "#691587",
  secondary: "#e089fd",
  accent: "#fdc005",
  neutral: "#e1e1e1",
  cool: "#390059",
} as const;

export const colors = {
  background: brand.cool,
  surface: "#481068",
  surfaceElevated: "#551878",

  /** Headlines and high-emphasis text */
  primary: "#FFFFFF",
  /** Body copy and supporting text */
  secondary: brand.neutral,
  /** Captions, labels, and de-emphasized text */
  muted: "rgba(225, 225, 225, 0.65)",

  /** Brand purple — CTAs, links, active states */
  accent: brand.primary,
  /** Magenta violet — hovers, highlights, glow */
  accentLight: brand.secondary,
  glow: brand.secondary,
  /** Gold — accent highlights and emphasis */
  highlight: brand.accent,

  border: "rgba(255, 255, 255, 0.08)",
  borderAccent: "rgba(224, 137, 253, 0.4)",
};

export const spacing = {
  section: "py-24 lg:py-32",
};

export const radius = {
  lg: "1rem",
  xl: "1.5rem",
};
