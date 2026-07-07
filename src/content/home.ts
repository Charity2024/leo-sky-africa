import type { HeroContent, ImpactContent, PillarsContent } from "./types";
import { mediaPaths, socialLinks } from "./site";

export const heroMedia = {
  video: `${mediaPaths.videos}/hero.mp4`,
} as const;

export const heroContent: HeroContent = {
  eyebrow: "Putting Africans in the Space Race",

  title: {
    line1: "Africa's Gateway",
    line2: "to Space",
  },

  description:
    "We are inspiring the next generation through world-class space education, immersive astronomy experiences and innovation programmes that unlock Africa's future in the global space economy.",

  primaryCta: {
    label: "Explore Programmes",
    href: "/space-education",
  },

  secondaryCta: {
    label: "Reach Out",
    href: socialLinks.whatsapp,
  },

  scrollIndicator: "Scroll to Explore",

  navAriaLabel: "Core programmes navigation",
};

export const pillarsContent: PillarsContent = {
  transitionStatement: "",

  eyebrow: "What We Do",

  title: "Three pathways into Africa's space future.",

  learnMoreLabel: "Discover More",

  pillars: [
    {
      kicker: "Learning",
      title: "Space Education",
      description:
        "Empowering students, educators and institutions through immersive STEM programmes, astronomy experiences and practical space learning.",
      href: "/space-education",
      sectionId: "education",
      image: `${mediaPaths.gallery}/education/school.png`,
      imageAlt: "Students learning astronomy",
    },

    {
      kicker: "Exploration",
      title: "Astrotourism",
      description:
        "Connecting people with the universe through unforgettable astronomy experiences, dark-sky destinations and community stargazing.",
      href: "/astrotourism",
      sectionId: "astrotourism",
      image: `${mediaPaths.gallery}/astrotourism/Community.png`,
      imageAlt: "Community stargazing event",
    },

    {
      kicker: "Innovation",
      title: "Leo Sky Labs",
      description:
        "Developing Africa's future innovators through rockets, satellite technology, entrepreneurship and emerging space technologies.",
      href: "/leosky-labs",
      sectionId: "labs",
      image: `${mediaPaths.gallery}/leosky-labs/rockets.png`,
      imageAlt: "Rocket development",
    },
  ],
};

export const impactContent: ImpactContent = {
  eyebrow: "Our Impact",

  title: "Creating Africa's Space Future",

  description:
    "Every programme, partnership and astronomy experience helps equip young Africans with the skills, inspiration and opportunities to participate in the global space economy.",

  stats: [
    {
      value: 1000,
      suffix: "+",
      label: "Students Reached",
    },
    {
      value: 50,
      suffix: "+",
      label: "Astronomy Events",
    },
    {
      value: 10,
      suffix: "+",
      label: "Partners",
    },
    {
      value: 3,
      suffix: "",
      label: "Flagship Programmes",
    },
  ],

  cta: {
    label: "Partner With Leo Sky",
    href: socialLinks.whatsapp,
  },
};