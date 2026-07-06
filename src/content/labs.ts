import type { PillarPageContent } from "./types";
import { mediaPaths } from "./site";

export const labsContent: PillarPageContent = {
  slug: "leosky-labs",
  path: "/leosky-labs",
  layoutVariant: "labs",
  kicker: "Innovation",
  title: "Leo Sky Labs",
  tagline: "Where African ideas become space technologies.",
  heroDescription:
    "Leo Sky's research, innovation, and engineering hub — developing satellite systems, hardware prototypes, and aerospace technologies that position Africa in the global space economy.",
  heroImage: `${mediaPaths.images}/pillar-innovation.png`,
  heroWatermark: { position: "left", opacity: 0.07 },
  mission: {
    eyebrow: "Why It Matters",
    title: "Building Africa's sovereign space capabilities.",
    paragraphs: [
      "The global space economy will exceed $1 trillion by 2040. Leo Sky Labs ensures African engineers and researchers claim their share through indigenous technology development.",
      "We bridge the gap between concept and deployment — transforming ideas into functional satellite systems, payloads, and aerospace hardware.",
    ],
  },
  programs: {
    eyebrow: "Our Approach",
    title: "From prototype to payload.",
    itemLabel: "Focus Area",
    items: [
      {
        title: "Satellite Systems Development",
        description:
          "Designing and testing CubeSat components, communication systems, and payload integration.",
        image: `${mediaPaths.gallery}/leosky-labs/prototype-1.jpg`,
      },
      {
        title: "Hardware & Rapid Prototyping",
        description:
          "Advanced fabrication for aerospace components, sensor systems, and experimental hardware.",
        image: `${mediaPaths.gallery}/leosky-labs/engineering-lab.jpg`,
      },
      {
        title: "Payload Engineering",
        description:
          "Developing instruments and technology demonstrators for satellite platforms.",
        image: `${mediaPaths.gallery}/leosky-labs/testing.jpg`,
      },
      {
        title: "Research & Experimentation",
        description:
          "Applied research in orbital mechanics, signal processing, and space simulation.",
        image: `${mediaPaths.images}/pillar-innovation.png`,
      },
    ],
  },
  gallery: {
    eyebrow: "Innovation in Action",
    title: "Engineers, prototypes, experiments, technologies shaping Africa's future in space.",
    images: [
      { src: `${mediaPaths.images}/pillar-innovation.png`, alt: "Earth from space above Africa" },
      { src: `${mediaPaths.gallery}/leosky-labs/prototype-1.jpg`, alt: "Satellite hardware prototype" },
      { src: `${mediaPaths.gallery}/leosky-labs/engineering-lab.jpg`, alt: "Engineering lab workspace" },
      { src: `${mediaPaths.gallery}/leosky-labs/testing.jpg`, alt: "Payload testing in progress" },
      { src: `${mediaPaths.gallery}/leosky-labs/prototype-1.jpg`, alt: "CubeSat assembly" },
      { src: `${mediaPaths.gallery}/leosky-labs/engineering-lab.jpg`, alt: "3D printing aerospace components" },
    ],
  },
  impact: {
    eyebrow: "Impact",
    title: "Building Africa's space technology future.",
    stats: [
      { value: 12, suffix: "", label: "Prototypes Developed" },
      { value: 5, suffix: "", label: "Research Projects" },
      { value: 3, suffix: "", label: "Payload Integrations" },
      { value: 45, suffix: "+", label: "Engineers & Researchers" },
    ],
  },
  testimonials: {
    eyebrow: "Voices",
    title: "From our community.",
    items: [
      {
        quote:
          "Leo Sky Labs gave us access to fabrication equipment and expertise that doesn't exist elsewhere. We built our first flight-ready prototype in three months.",
        author: "Dr. Aisha Mbeki",
        role: "Systems Engineer, Satellite Africa",
      },
      {
        quote:
          "The payload integration program connected our university research with flight opportunities. Our students are now building real space hardware.",
        author: "Prof. Emmanuel Okafor",
        role: "Director, Space Research Lab, University of Lagos",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions.",
    items: [
      {
        question: "What type of projects does Leo Sky Labs work on?",
        answer:
          "We focus on satellite systems, payload development, hardware prototyping, and applied aerospace research. Projects range from CubeSat components to sensor systems for Earth observation.",
      },
      {
        question: "Can researchers access lab facilities?",
        answer:
          "Yes. We offer facility access and technical support for university researchers and qualified projects aligned with our mission of advancing African space capabilities.",
      },
      {
        question: "How do I propose a research collaboration?",
        answer:
          "Submit a project proposal through our contact form. We review proposals quarterly and prioritize projects with clear pathways to deployment or publication.",
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
    title: "Transform your idea into space technology.",
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
