import type { PillarPageContent } from "./types";
import { mediaPaths } from "./site";

export const astrotourismContent: PillarPageContent = {
  slug: "astrotourism",
  path: "/astrotourism",
  layoutVariant: "astrotourism",
  kicker: "Exploration",
  title: "Astrotourism",
  tagline: "Discover Africa Through the Universe",
  heroDescription:
    "Pioneering astrotourism in Africa. Connecting people with the cosmos, preserving dark skies, and inspiring the next generation to look up and dream.",
  heroImage: `${mediaPaths.gallery}/astrotourism/Stargazing.png`,
  heroWatermark: { position: "center", opacity: 0.05 },
  heroCta: {
    primaryLabel: "Plan an Experience",
    primaryHref: "#experiences",
    secondaryLabel: "Learn More",
    secondaryHref: "#why-matters",
  },
  whyAstrotourismMatters: {
    eyebrow: "Why It Matters",
    title: "Africa's dark skies are a global treasure.",
    paragraphs: [
      "From the Namib Desert to Laikipia Plateau, Africa offers some of the world's most pristine dark skies — natural observatories with unparalleled views of the cosmos.",
      "For millennia, African communities have used the stars for navigation, agriculture, and storytelling. Astrotourism preserves this heritage while creating sustainable opportunities.",
      "Light pollution threatens ecosystems, wildlife, and human health. Responsible astrotourism protects these environments while inspiring the next generation of scientists and dreamers.",
    ],
  },
  leadership: {
    eyebrow: "LEO SKY ",
    title: "Pioneering astrotourism across Africa.",
    paragraphs: [
      "We're building a movement, not just offering experiences. As pioneers in Kenya and across the continent, we create public astronomy events that bring communities together under the stars.",
      "Working at the intersection of science and tourism, we build awareness of dark sky tourism as sustainable development. Making the cosmos accessible to everyone.",
      "We collaborate with communities, schools, and institutions to create experiences that are educational, inspiring, and economically beneficial. Every event ignites curiosity about the universe.",
    ],
  },
  signatureExperiences: {
    eyebrow: "Experiences",
    title: "Premium astronomy designed to inspire.",
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
      { src: `${mediaPaths.gallery}/astrotourism/Stargazing.png`, alt: "Milky Way over African landscape" },
      { src: `${mediaPaths.gallery}/astrotourism/Telescope.png`, alt: "Telescope stargazing session" },
      { src: `${mediaPaths.gallery}/astrotourism/Community.png`, alt: "Dark sky camp at night" },
      { src: `${mediaPaths.images}/dome.png`, alt: "Immersive planetarium experience" },
      { src: `${mediaPaths.gallery}/astrotourism/Maasai.png`, alt: "Community stargazing event" },
    ],
  },

  testimonials: {
    eyebrow: "Voices",
    title: "From our community.",
    items: [
      {
        quote:
          "Families, children, and elders all gathered together, learning about constellations and looking at planets. This is what community engagement should look like.",
        author: "Samuel Kipkorir",
        role: "Community Leader, Laikipia County",
      },
    ],
  },
  cta: {
    title: "Experience the universe like never before.",
    description: "Whether you're a school, family, traveller, or organisation, Leo Sky creates unforgettable astronomy experiences that inspire curiosity and connect people with the cosmos.",
    primaryLabel: "Plan an Experience",
    primaryHref: "/#contact",
    secondaryLabel: "View Events",
    secondaryHref: "/events",
  },
};

export const astrotourismPageMetadata = {
  title: "Astrotourism",
  description: astrotourismContent.heroDescription,
} as const;
