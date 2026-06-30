import type { PillarPageContent } from "./types";
import { mediaPaths } from "./site";

export const astrotourismContent: PillarPageContent = {
  slug: "astrotourism",
  path: "/astrotourism",
  layoutVariant: "astrotourism",
  kicker: "Exploration",
  title: "Astrotourism",
  tagline: "Connecting people to the universe under Africa's darkest skies.",
  heroDescription:
    "Luxury dark sky experiences, astronomy nights, and celestial journeys that blend nature, adventure, and astrophotography beneath Africa's most pristine skies.",
  heroImage: `${mediaPaths.images}/pillar-astrotourism.png`,
  heroWatermark: { position: "center", opacity: 0.05 },
  heroCta: {
    primaryLabel: "Book an experience",
    primaryHref: "/#contact",
    secondaryLabel: "View destinations",
    secondaryHref: "#destinations",
  },
  mission: {
    eyebrow: "Introduction",
    title: "Africa's skies are the world's greatest observatory.",
    paragraphs: [
      "From the Namib Desert to the Laikipia Plateau, Africa offers some of the planet's most pristine dark skies. Leo Sky Africa opens these experiences to travellers, communities, and astronomy enthusiasts.",
      "Our astrotourism programs combine scientific observation with cultural storytelling, creating unforgettable journeys beneath the cosmos.",
    ],
  },
  destinations: {
    eyebrow: "Destinations",
    title: "Where the universe feels closest.",
    featured: {
      name: "Laikipia Dark Sky Reserve",
      location: "Laikipia Plateau, Kenya",
      description:
        "One of East Africa's premier dark sky locations — vast horizons, minimal light pollution, and expert-led observation from luxury tented camps beneath the Milky Way.",
      image: {
        src: `${mediaPaths.gallery}/astro-2.jpg`,
        alt: "Dark sky camp beneath the Milky Way on the Laikipia Plateau",
      },
    },
  },
  visitorJourney: {
    eyebrow: "Visitor Journey",
    title: "From arrival to departure.",
    steps: [
      {
        phase: "Arrival",
        title: "Welcome beneath the stars",
        description:
          "Private transfer to your dark sky destination. Settle into luxury accommodations as the sun sets over the African landscape.",
      },
      {
        phase: "Orientation",
        title: "Meet your guides",
        description:
          "An intimate briefing on the night's celestial highlights — planets, constellations, and deep-sky objects visible from your location.",
      },
      {
        phase: "Observation",
        title: "Telescope sessions",
        description:
          "Guided stargazing with professional-grade telescopes. Expert astronomers translate the cosmos into stories you will never forget.",
      },
      {
        phase: "Immersion",
        title: "Dining under the sky",
        description:
          "Curated meals served al fresco, paired with astrophotography workshops or cultural storytelling from local communities.",
      },
      {
        phase: "Departure",
        title: "Carry the cosmos home",
        description:
          "A personalised star map of your experience, astrophotography prints, and a lasting connection to Africa's greatest natural observatory.",
      },
    ],
  },
  programs: {
    eyebrow: "Experiences",
    title: "Journeys beneath the stars.",
    itemLabel: "Experience",
    items: [
      {
        title: "Dark Sky Expeditions",
        description:
          "Multi-night journeys to certified dark sky reserves with professional telescopes, expert guides, and luxury camp accommodations.",
      },
      {
        title: "Astronomy Nights",
        description:
          "Curated evening stargazing experiences combining telescope observation, celestial storytelling, and fine dining under the stars.",
      },
      {
        title: "Astrophotography Retreats",
        description:
          "Hands-on workshops capturing the Milky Way, planetary transits, and deep-sky objects in Africa's clearest skies.",
      },
      {
        title: "Private Celestial Experiences",
        description:
          "Bespoke journeys for travellers, corporate retreats, and celebrations seeking an unforgettable connection with the cosmos.",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Under African skies.",
    images: [
      { src: `${mediaPaths.images}/pillar-astrotourism.png`, alt: "Milky Way over African landscape" },
      { src: `${mediaPaths.gallery}/astro-1.jpg`, alt: "Telescope stargazing session" },
      { src: `${mediaPaths.gallery}/astro-2.jpg`, alt: "Dark sky camp at night" },
      { src: `${mediaPaths.gallery}/astro-3.jpg`, alt: "Astrophotography workshop" },
    ],
  },
  impact: {
    eyebrow: "Impact",
    title: "Tourism that inspires and preserves.",
    stats: [
      { value: 800, suffix: "+", label: "Stargazers Hosted" },
      { value: 15, suffix: "", label: "Dark Sky Locations" },
      { value: 24, suffix: "", label: "Astro Events" },
      { value: 6, suffix: "", label: "Community Partners" },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Unforgettable experiences.",
    items: [
      {
        quote:
          "Standing under the Laikipia sky with Leo Sky Africa was the most profound travel experience of my life. Pure magic.",
        author: "Sarah Chen",
        role: "Travel Writer, Condé Nast Traveller",
      },
      {
        quote:
          "Our corporate retreat stargazing evening was elegant, educational, and completely unique. Our team is still talking about it.",
        author: "David Okello",
        role: "CEO, Horizon Ventures",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Planning your journey.",
    items: [
      {
        question: "What is the best time for stargazing in East Africa?",
        answer:
          "Dry seasons (June–October and January–February) offer the clearest skies. New moon periods provide optimal dark sky conditions.",
      },
      {
        question: "Do I need prior astronomy experience?",
        answer:
          "No. Our experiences are designed for all levels, from first-time stargazers to experienced amateur astronomers.",
      },
      {
        question: "Can you arrange private group experiences?",
        answer:
          "Yes. We design bespoke astrotourism packages for groups, corporate events, and special celebrations.",
      },
    ],
  },
  relatedEventsSection: {
    eyebrow: "Events",
    title: "Related events",
  },
  relatedEvents: [
    {
      title: "Astrotourism Dark Sky Camp",
      description: "Weekend of telescope stargazing and astrophotography.",
      date: "August 18–20, 2026",
      location: "Laikipia, Kenya",
      image: `${mediaPaths.images}/event-darksky.png`,
      href: "/events",
      cta: "Join waitlist",
    },
  ],
  cta: {
    title: "Experience Africa's greatest show.",
    description: "Book a dark sky experience or partner with us on astrotourism development.",
    primaryLabel: "Book an experience",
    primaryHref: "/#contact",
    secondaryLabel: "View events",
    secondaryHref: "/events",
  },
};

export const astrotourismPageMetadata = {
  title: "Astrotourism",
  description: astrotourismContent.heroDescription,
} as const;
