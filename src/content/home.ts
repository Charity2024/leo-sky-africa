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
"Leo Sky Africa is the continent's leading authority on space education, astrotourism, and space innovation. Creating world-class experiences at the intersection of science, culture, and Africa's extraordinary skies.",
  primaryCta: {
    label: "Explore Our World",
    href: "/space-education",
  },

  secondaryCta: {
    label: "Patner With Us",
    href: socialLinks.whatsapp,
  },

  scrollIndicator: "Scroll to Explore",

  navAriaLabel: "Core programmes navigation",
};

export const pillarsContent: PillarsContent = {
  transitionStatement: "",

  eyebrow: "What We Do",

  title: "The Full Spectrum of Space in Africa..",

  learnMoreLabel: "Discover More",

  pillars: [
    {
      kicker: "Learning",
      title: "Space Education",
      description:
      "We take space science out of textbooks and into the real world - mobile planetariums, rocketry workshops, telescope sessions, and space camps that show young Africans that the universe is not far away. It's right above them.",
      href: "/space-education",
      sectionId: "education",
      image: `${mediaPaths.gallery}/education/school.png`,
      imageAlt: "Students learning astronomy",
    },

    {
      kicker: "Exploration",
      title: "Astrotourism",
      description:
      "Africa has the darkest, clearest skies  on the planet. Leo Sky Africa turns those skies into world-class experiences.",      href: "/astrotourism",
      sectionId: "astrotourism",
      image: `${mediaPaths.gallery}/astrotourism/Community.png`,
      imageAlt: "Community stargazing event",
    },

    {
      kicker: "Innovation",
      title: "Leo Sky Labs",
      description:
      "Africa's next rockets, satellites, and space technologies will be built by Africans. Leo Sky Labs is where that work begins.",
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
    "Since 2014, we have been on the ground; in classrooms, at lodges, under open skies.",

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