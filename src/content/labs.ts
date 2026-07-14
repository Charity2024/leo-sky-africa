import type { PillarPageContent } from "./types";
import { mediaPaths } from "./site";

export const labsContent: PillarPageContent = {
  slug: "leosky-labs",
  path: "/leosky-labs",
  layoutVariant: "labs",
  kicker: "Innovation",
  title: "Leo Sky Labs",
  tagline: "Building Africa's sovereign Space capabilities.",
  heroDescription: "Leo Sky's research, innovation, and engineering hub — developing satellite systems, hardware prototypes, and aerospace technologies that position Africa in the global Space economy.",
  heroImage: `${mediaPaths.gallery}/leosky-labs/rockets.png`,
  heroVideo: `${mediaPaths.videos}/hero.mp4`,
  heroWatermark: { position: "left", opacity: 0.07 },
  mission: {
    eyebrow: "Why It Matters",
    title: "Where African ideas become Space Technologies.",
    paragraphs: [
      "The global Space economy will exceed $1 trillion by 2040. Leo Sky Labs ensures African engineers and researchers claim their share through indigenous technology development.",
      "We bridge the gap between concept and deployment — transforming ideas into functional satellite systems, payloads, and aerospace hardware.",
    ],
  },
  programs: {
    eyebrow: "Our Approach",
    title: "From prototype to payload.",
    itemLabel: "Focus Area",
    items: [
      
      {
        title: "Hardware & Rapid Prototyping",
        description: "",
        image: `${mediaPaths.gallery}/leosky-labs/waterRockets.jpeg`,
      },
      {
        title: "Satellite Systems Development",
        description:"",
        image: `${mediaPaths.gallery}/leosky-labs/boad.jpeg`,
      },
      {
        title: "Payload Engineering",
        description: "",
        image: `${mediaPaths.gallery}/leosky-labs/rockets.png`,
      },
    ],
  },
  gallery: {
    eyebrow: "Innovation in Action",
    title: "Engineers, prototypes, experiments, technologies shaping Africa's future in space.",
    images: [
      { src: `${mediaPaths.gallery}/leosky-labs/rockets.png`, alt: "" },
      { src: `${mediaPaths.images}/dome.png`, alt: "" },
      { src: `${mediaPaths.gallery}/leosky-labs/waterRockets.jpeg`, alt: "" },
      { src: `${mediaPaths.gallery}/leosky-labs/boad.jpeg`, alt: "" },
    ],
  },


  cta: {
    title: "Transform your idea into Space Technology.",
    description: "Partner with Leo Sky Labs for research collaboration, facility access, and prototype development.",
    primaryLabel: "Start a conversation",
    primaryHref: "/#contact",
    secondaryLabel: "View events",
    secondaryHref: "/events",
  },

};

export const labsPageMetadata = {
  title: "Leo Sky Labs",
  description: labsContent.heroDescription,
} as const;

export const pillarPaths = ["/space-education", "/astrotourism", labsContent.path] as const;
