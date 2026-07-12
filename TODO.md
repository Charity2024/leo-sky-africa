# TODO

- [x] Identify hydration mismatch root cause in `src/components/ui/Starfield.tsx` (non-deterministic `Math.random()` during render)
- [x] Refactor `Starfield.tsx` to use a deterministic seeded PRNG so SSR and client hydration match exactly

- [x] Preserve all existing Framer Motion animation behavior (no quality reduction)

- [x] Ensure no hydration hazards remain (no browser-only values during render)

- [x] Build the app to confirm zero hydration warnings


