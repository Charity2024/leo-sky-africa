import type { PillarPageContent } from "./types";
import { mediaPaths } from "./site";

export const labsContent: PillarPageContent = {
  slug: "leosky-labs",
  path: "/leosky-labs",
  layoutVariant: "labs",
  kicker: "Innovation",
  title: "Leo Sky Labs",
  tagline: "Unlocking Africa's role in the global space economy.",
  heroDescription:
    "A launchpad for African innovators — satellite technology, research partnerships, space startups, and future technologies built for the continent.",
  heroImage: `${mediaPaths.images}/pillar-innovation.png`,
  heroWatermark: { position: "left", opacity: 0.07 },
  mission: {
    eyebrow: "Our Mission",
    title: "Building Africa's space economy from the ground up.",
    paragraphs: [
      "The global space economy is projected to exceed $1 trillion by 2040. Leo Sky Labs ensures African entrepreneurs, researchers, and startups claim their share.",
      "We connect talent with satellite data, mentorship, and funding pathways to solve real challenges in agriculture, climate, connectivity, and beyond.",
    ],
  },
  programs: {
    eyebrow: "What We Offer",
    title: "From research to orbit.",
    itemLabel: "Program",
    items: [
      {
        title: "Satellite Technology Lab",
        description:
          "Hands-on access to Earth observation datasets with guided projects in agriculture, disaster response, and environmental monitoring.",
      },
      {
        title: "Space Startup Studio",
        description:
          "Mentorship, pitch training, and investor introductions for early-stage African space-tech ventures ready to scale.",
      },
      {
        title: "Innovation Hackathons",
        description:
          "Intensive weekends solving real-world challenges using open-source satellite data and emerging space technologies.",
      },
      {
        title: "Research Partnerships",
        description:
          "Collaborative programs connecting African universities and founders with international space agencies and observatories.",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Innovation in progress.",
    images: [
      { src: `${mediaPaths.images}/pillar-innovation.png`, alt: "Earth from space above Africa" },
      { src: `${mediaPaths.gallery}/innovation-1.jpg`, alt: "Space hackathon team collaboration" },
      { src: `${mediaPaths.gallery}/innovation-2.jpg`, alt: "Satellite data analysis workshop" },
      { src: `${mediaPaths.gallery}/innovation-3.jpg`, alt: "Startup pitch event" },
    ],
  },
  impact: {
    eyebrow: "Impact",
    title: "Driving African innovation forward.",
    stats: [
      { value: 350, suffix: "+", label: "Innovators Engaged" },
      { value: 8, suffix: "", label: "Hackathons Hosted" },
      { value: 15, suffix: "", label: "Startups Supported" },
      { value: 4, suffix: "", label: "Research Partnerships" },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Builders and founders.",
    items: [
      {
        quote:
          "The hackathon gave our team access to satellite data we never knew existed. We built a crop monitoring prototype in 48 hours.",
        author: "Fatima Hassan",
        role: "Co-founder, AgriOrbit",
      },
      {
        quote:
          "Leo Sky Labs connected us with mentors from ESA and NASA. That network changed our trajectory entirely.",
        author: "Kwame Asante",
        role: "CEO, Orbital Africa",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Getting started.",
    items: [
      {
        question: "Who can join Leo Sky Labs programs?",
        answer:
          "Developers, researchers, entrepreneurs, and students with an interest in applying space technology to African challenges.",
      },
      {
        question: "Do I need a technical background?",
        answer:
          "Hackathons welcome multidisciplinary teams. Technical, design, business, and domain expertise are all valuable.",
      },
      {
        question: "How does the startup studio work?",
        answer:
          "Selected ventures receive 12 weeks of mentorship, workspace access, and introductions to investors and space industry partners.",
      },
    ],
  },
  relatedEventsSection: {
    eyebrow: "Events",
    title: "Related events",
  },
  relatedEvents: [
    {
      title: "Leo Sky Labs Hackathon",
      description: "Build solutions with open-source satellite data.",
      date: "November 6–8, 2026",
      location: "Cape Town & Online",
      image: `${mediaPaths.images}/event-hackathon.png`,
      href: "/events",
      cta: "Register team",
    },
  ],
  cta: {
    title: "Build the future of African space.",
    description: "Join our next hackathon or apply to the startup studio.",
    primaryLabel: "Apply now",
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
