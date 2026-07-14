import type { PillarPageContent } from "./types";
import { mediaPaths } from "./site";

export const astrotourismContent: PillarPageContent = {
  slug: "astrotourism",
  path: "/astrotourism",
  layoutVariant: "astrotourism",
  kicker: "Astrotourism",
  title: "Astrotourism Training & Experiences",
  tagline:
  "Building Africa's astrotourism capacity through world-class training and unforgettable astronomy experiences.",

  heroDescription:
  "Leo Sky Africa equips tour guides, hospitality professionals, tourism institutions, and destination partners with the knowledge, practical skills, and immersive experiences needed to deliver authentic astrotourism across Africa.",
  heroImage: `${mediaPaths.gallery}/astrotourism/Stargazing.png`,
  heroVideo: `${mediaPaths.videos}/hero.mp4`,
  heroWatermark: { position: "center", opacity: 0.05 },
  heroCta: {
    primaryLabel: "Plan an Experience",
    primaryHref: "#experiences",
    secondaryLabel: "Learn More",
    secondaryHref: "#why-matters",
  },
  whyAstrotourismMatters: {
  eyebrow: "Why It Matters",
  title: "Looking Up Has Always Been Part of Our Story.",
  paragraphs: [
    "Long before modern astronomy, African communities looked to the skies to navigate journeys, mark seasons, and pass knowledge from one generation to the next.",
    "Today, those same skies present an opportunity to reconnect people with science, culture, and discovery through astrotourism.",
    "Leo Sky Africa is helping build that future by equipping tourism professionals with the knowledge and practical skills to transform Africa's remarkable night skies into meaningful educational experiences.",
  ],
},
  leadership: {
  eyebrow: "Africa's Gateway to Space",
  title: "Connecting Africa to Space Through Astrotourism.",
  paragraphs: [
    "Leo Sky Africa believes space should be accessible to every African. Through astrotourism, we connect people with the night sky while building the skills needed to deliver world-class astronomy experiences.",
    "Our programmes combine astronomy education, practical training, and immersive experiences that empower tourism professionals to confidently interpret and share the wonders of Africa's skies.",
    "By building capacity across the tourism sector, we are creating ambassadors who inspire curiosity, celebrate African heritage, and connect more people to space.",
    "The training is designed for tour guides, safari guides, hotels, tourism institutions, conservancies, national parks, destination managers, and community tourism initiatives."  ],
},
  signatureExperiences: {
  eyebrow: "Training Programme",
  title: "Astrotourism Training & Experiences",
  itemLabel: "Experience",
    items: [
      {
        title: "Stargazing",
        description:
          "Guided telescope sessions under the night  sky.",
        image: `${mediaPaths.gallery}/astrotourism/Stargazing.png`,
      },
      {
        title: "Planetarium Shows",
        description:
          "Immersive dome experiences with expert narration.",
        image: `${mediaPaths.gallery}/astrotourism/Planeterium.png`,
      },
      {
        title: "Telescope Sessions",
        description:
          "Hands-on professional telescope operation.",
        image: `${mediaPaths.gallery}/astrotourism/Telescope.png`,
      },
      {
        title: "Community Events",
        description:
          "Engaging local communities in astronomy education.",
        image: `${mediaPaths.gallery}/astrotourism/Community.png`,
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Experiences Under African Skies",
    images: [
      { src: `${mediaPaths.gallery}/astrotourism/Stargazing.png`, alt: "" },
      { src: `${mediaPaths.gallery}/astrotourism/InsidePlaneterium.jpeg`, alt: "" },
      { src: `${mediaPaths.gallery}/astrotourism/Dome.jpeg`, alt: "" },
      { src: `${mediaPaths.gallery}/astrotourism/Telescope.png`, alt: "" },
      { src: `${mediaPaths.gallery}/astrotourism/Community.png`, alt: "" },
      { src: `${mediaPaths.gallery}/astrotourism/Planeterium.png`, alt: "" },
      { src: `${mediaPaths.gallery}/astrotourism/Maasai.png`, alt: "" },
      { src: `${mediaPaths.gallery}/astrotourism/training.jpeg`, alt: "" },
      { src: `${mediaPaths.gallery}/astrotourism/sopa.jpeg`, alt: "" },
    ],
  },

  
  cta: {
  title: "Let's Build the Future of Astrotourism in Africa.",
  description:
    "Partner with Leo Sky Africa to equip your team with the knowledge, practical skills, and confidence to deliver inspiring astronomy experiences that celebrate Africa's skies, culture, and future in space.",
  primaryLabel: "Partner With Us",
  primaryHref: "/contact",
  secondaryLabel: "Explore Our Programmes",
  secondaryHref: "#experiences",
},
};

export const astrotourismPageMetadata = {
  title: "Astrotourism",
  description: astrotourismContent.heroDescription,
} as const;
