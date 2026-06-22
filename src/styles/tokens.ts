/** Official Leo Sky Africa brand palette */
export const brand = {
  primary: "#691587",
  secondary: "#E089FD",
  accent: "#FDC005",
  cream: "#FFF0FA",
  lightPurple: "#FFB3FF",
  purpleTone: "#792797",
  deepSpace: "#390059",
  dark: "#030303",
  neutral: "#E1E1E1",
} as const;

export const colors = {
  background: brand.deepSpace,
  surface: "rgba(3, 3, 3, 0.55)",
  surfaceElevated: "rgba(105, 21, 135, 0.12)",

  /** Headlines — cream white */
  heading: brand.cream,
  /** Body copy */
  body: "rgba(255, 240, 250, 0.75)",
  /** Labels and kickers */
  label: brand.secondary,
  /** Captions and de-emphasized text */
  muted: "rgba(255, 240, 250, 0.55)",

  accent: brand.primary,
  accentLight: brand.secondary,
  accentHover: brand.lightPurple,
  glow: brand.secondary,
  highlight: brand.accent,

  border: "rgba(224, 137, 253, 0.15)",
  borderHover: brand.secondary,
};

export const spacing = {
  section: "py-24 lg:py-32",
};

export const radius = {
  lg: "1rem",
  xl: "1.5rem",
};

export const backgrounds = {
  hero: "linear-gradient(180deg, #030303 0%, #390059 100%)",
  heroOverlay:
    "linear-gradient(90deg, rgba(57, 0, 89, 0.8), rgba(3, 3, 3, 0.5))",
  sectionDark: "#030303",
  sectionDeep: "#390059",
  sectionRadial:
    "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(105, 21, 135, 0.35), #030303 70%)",
  partners:
    "linear-gradient(180deg, #030303 0%, #390059 55%, #030303 100%)",
};
