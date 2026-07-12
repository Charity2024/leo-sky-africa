# TODO — Premium polish for Leo Sky Africa

## Phase 1 (Hero reliability + Mobile header)
- [x] Mobile header redesign (height/logo scale/glassmorphism/scroll shrink)
  - File: `src/components/layout/Navbar.tsx`

- [ ] Home hero video reliability: poster→video fade; keep poster on failure (never empty)
  - File: `src/components/sections/Hero.tsx`

- [ ] Pillar hero video reliability: same poster→video→fallback flow
  - File: `src/components/pillar/PillarPageTemplate.tsx`


## Phase 2 (Hero responsiveness)
- [ ] Audit home hero typography overflow and edge-safe spacing (320px→desktop)
  - File: `src/components/sections/Hero.tsx`
- [ ] Audit pillar hero typography overflow and edge-safe spacing
  - File: `src/components/pillar/PillarPageTemplate.tsx`

## Phase 3 (Video optimization)
- [ ] Background video attributes: `preload="metadata"` for first hero only; lazy start for others
  - Files: hero components above
- [ ] Ensure video tags use `muted playsInline autoPlay loop`

## Phase 4 (Spacing system + mobile optimization)
- [ ] Standardize section vertical rhythm and padding using a spacing scale/tokens
  - Files: `src/styles/tokens.ts` and relevant section wrappers
- [ ] Mobile overflow/horizontal scroll audit (cards/grids/galleries/forms/footer)

## Phase 5 (Animations + QA)
- [ ] Animation polish: reduce jank, respect prefers-reduced-motion
- [ ] QA checklist: broken media, missing assets, responsive issues, layout shifts, performance

## Done checklist
- [ ] `next build`
- [ ] lint/typecheck

