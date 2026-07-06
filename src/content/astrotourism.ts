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
  heroImage: `${mediaPaths.images}/pillar-astrotourism.png`,
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
    eyebrow: "Our Leadership",
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
          "Guided telescope sessions under pristine dark skies.",
        image: `${mediaPaths.gallery}/astrotourism/stargazing-1.jpg`,
      },
      {
        title: "Astronomy Nights",
        description:
          "Curated evening events with celestial storytelling.",
        image: `${mediaPaths.images}/pillar-astrotourism.png`,
      },
      {
        title: "Telescope Sessions",
        description:
          "Hands-on professional telescope operation.",
        image: `${mediaPaths.gallery}/astrotourism/dark-sky-camp.jpg`,
      },
      {
        title: "Educational Tours",
        description:
          "Immersive journeys for schools and groups.",
        image: `${mediaPaths.gallery}/astrotourism/astrophotography.jpg`,
      },
      {
        title: "School Camps",
        description:
          "Multi-day residential programs for students.",
        image: `${mediaPaths.gallery}/astrotourism/stargazing-1.jpg`,
      },
      {
        title: "Community Events",
        description:
          "Public astronomy festivals for everyone.",
        image: `${mediaPaths.images}/pillar-astrotourism.png`,
      },
      {
        title: "Astrophotography",
        description:
          "Workshops for capturing the night sky.",
        image: `${mediaPaths.gallery}/astrotourism/dark-sky-camp.jpg`,
      },
      {
        title: "Corporate Experiences",
        description:
          "Bespoke stargazing for teams.",
        image: `${mediaPaths.gallery}/astrotourism/astrophotography.jpg`,
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Experiences Under African Skies",
    images: [
      { src: `${mediaPaths.images}/pillar-astrotourism.png`, alt: "Milky Way over African landscape" },
      { src: `${mediaPaths.gallery}/astrotourism/stargazing-1.jpg`, alt: "Telescope stargazing session" },
      { src: `${mediaPaths.gallery}/astrotourism/dark-sky-camp.jpg`, alt: "Dark sky camp at night" },
      { src: `${mediaPaths.gallery}/astrotourism/astrophotography.jpg`, alt: "Astrophotography workshop" },
      { src: `${mediaPaths.images}/pillar-astrotourism.png`, alt: "Night sky observation" },
      { src: `${mediaPaths.gallery}/astrotourism/stargazing-1.jpg`, alt: "Community stargazing event" },
    ],
  },
  whyChooseLeoSky: {
    eyebrow: "Why Leo Sky",
    title: "Experience with Africa's astrotourism pioneers.",
    items: [
      {
        title: "Expert Facilitators",
        description:
          "Our team brings expertise in astronomy, science communication, and education — ensuring every experience is accurate and inspiring.",
      },
      {
        title: "Scientific Approach",
        description:
          "We go beyond entertainment. Every experience is grounded in real astronomy, making learning integral to the journey.",
      },
      {
        title: "Premium Experiences",
        description:
          "From equipment to location, every detail is carefully planned to deliver unforgettable, high-quality astronomy experiences.",
      },
      {
        title: "Community Engagement",
        description:
          "We work with local communities, schools, and institutions to ensure our experiences benefit everyone and create lasting impact.",
      },
      {
        title: "Africa's Space Future",
        description:
          "Astrotourism is part of our broader mission to inspire the next generation of African scientists and space leaders.",
      },
      {
        title: "Trusted Partner",
        description:
          "We partner with leading schools, universities, and organisations across Kenya and Africa, delivering experiences that meet the highest standards.",
      },
    ],
  },
  featuredExperiences: {
    eyebrow: "Featured",
    title: "Real activities, real impact.",
    items: [
      {
        title: "Public Stargazing",
        description:
          "Regular community astronomy nights with telescope viewing, constellation tours, and educational talks.",
        location: "Multiple locations across Kenya",
      },
      {
        title: "Astronomy Festivals",
        description:
          "Annual celebrations bringing together astronomers, educators, and communities for multi-day events under the stars.",
        location: "Laikipia, Kenya",
      },
      {
        title: "Community Nights",
        description:
          "Partnership events making astronomy accessible and inspiring curiosity about the universe.",
        location: "Rural Kenya",
      },
      {
        title: "School Experiences",
        description:
          "Tailored programs combining curriculum-aligned astronomy education with hands-on telescope observation.",
        location: "Schools across Kenya",
      },
      {
        title: "Astrophotography",
        description:
          "Specialized workshops teaching techniques for capturing stunning images of the night sky.",
        location: "Dark sky reserves",
      },
    ],
  },
  testimonials: {
    eyebrow: "Voices",
    title: "From our community.",
    items: [
      {
        quote:
          "Students who had never looked through a telescope were seeing Saturn's rings for the first time. The impact on their interest in science has been incredible.",
        author: "Grace Wanjiku",
        role: "Principal, Nairobi Primary Academy",
      },
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
