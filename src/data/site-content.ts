export type NavigationItem = {
  title: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type HeroTitle = {
  line1: string;
  line2: string;
};

export type HeroContent = {
  eyebrow: string;
  title: HeroTitle;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  scrollIndicator: string;
};

export type Pillar = {
  kicker: string;
  title: string;
  description: string;
  href: string;
  sectionId: string;
  image: string;
  imageAlt: string;
};

export type PillarsContent = {
  transitionStatement: string;
  eyebrow: string;
  title: string;
  learnMoreLabel: string;
  pillars: readonly Pillar[];
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  description: readonly string[];
  cta: CtaLink;
  image: {
    src: string;
    alt: string;
  };
};

export type FooterContent = {
  description: string;
  exploreHeading: string;
  contactCta: CtaLink;
  copyright: string;
};

export type EventItem = {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  cta?: string;
  href: string;
};

export type EventsContent = {
  featured: EventItem;
  upcoming: readonly EventItem[];
};

export const siteContent = {
  companyName: "Leo Sky Africa",
  tagline: "Africa's Gateway to Space",
} as const satisfies {
  companyName: string;
  tagline: string;
};

export const navigation: readonly NavigationItem[] = [
  { title: "About", href: "#about" },
  { title: "Space Education", href: "#education" },
  { title: "Astrotourism", href: "#astrotourism" },
  { title: "Space Innovation", href: "#innovation" },
  { title: "Events", href: "#events" },
  { title: "Partners", href: "#partners" },
  { title: "Contact", href: "#contact" },
] as const;

export const sectionIds = [
  "about",
  "education",
  "astrotourism",
  "innovation",
  "events",
  "partners",
  "contact",
] as const;

export const heroContent: HeroContent = {
  eyebrow: "Putting Africans in the Space Race",
  title: {
    line1: "Africa's Gateway",
    line2: "to Space",
  },
  description:
    "Inspiring the next generation through space education, immersive astronomy experiences, and innovation programs that unlock Africa's future in the global space economy.",
  primaryCta: {
    label: "Explore Programs",
    href: "#education",
  },
  secondaryCta: {
    label: "Partner With Us",
    href: "#partners",
  },
  scrollIndicator: "Scroll to Explore",
};

export const pillarsContent: PillarsContent = {
  transitionStatement:
    "Africa's future in space will be built through education, exploration, and innovation.",
  eyebrow: "What We Do",
  title: "Three pathways into Africa's space future.",
  learnMoreLabel: "Learn More",
  pillars: [
    {
      kicker: "Learning",
      title: "Space Education",
      description:
        "Inspiring future scientists, engineers, explorers, and innovators through immersive learning experiences and STEM programs.",
      href: "#education",
      sectionId: "education",
      image: "/images/pillar-education.png",
      imageAlt: "Students learning together in a classroom setting",
    },
    {
      kicker: "Exploration",
      title: "Astrotourism",
      description:
        "Connecting people to the universe through astronomy experiences, dark sky events, and celestial exploration.",
      href: "#astrotourism",
      sectionId: "astrotourism",
      image: "/images/pillar-astrotourism.png",
      imageAlt: "Stargazer beneath a vast Milky Way night sky",
    },
    {
      kicker: "Innovation",
      title: "Space Innovation",
      description:
        "Unlocking opportunities in the space economy through innovation, research, entrepreneurship, and future technologies.",
      href: "#innovation",
      sectionId: "innovation",
      image: "/images/pillar-innovation.png",
      imageAlt: "Earth viewed from space above the African continent",
    },
  ],
};

export const aboutContent: AboutContent = {
  eyebrow: "Our Mission",
  title: "Building Africa's future in the space economy.",
  description: [
    "Leo Sky Africa exists to make space accessible, inspiring, and economically relevant for the next generation of Africans.",
    "Through education, astrotourism, and innovation, we are creating pathways into one of the world's fastest-growing industries.",
  ],
  cta: {
    label: "Our story",
    href: "#about",
  },
  image: {
    src: "/images/about.png",
    alt: "Astronomical telescope pointed toward a star-filled night sky",
  },
};

export const footerContent: FooterContent = {
  description:
    "Africa's premier space education, astrotourism, and space innovation company — opening the continent's gateway to the space economy.",
  exploreHeading: "Explore",
  contactCta: {
    label: "Get in touch",
    href: "#contact",
  },
  copyright: "All rights reserved.",
};

export const eventsContent: EventsContent = {
  featured: {
    title: "African Space Education Summit 2026",
    description: "Join space science leaders, educators, and students from across the continent for three days of keynotes, interactive panels, and hands-on space technology workshops mapping Africa's space future.",
    date: "October 12-14, 2026",
    location: "Nairobi, Kenya & Virtual",
    image: "/images/event-summit.png",
    cta: "Register Now",
    href: "#contact",
  },
  upcoming: [
    {
      title: "Astrotourism Dark Sky Camp",
      description: "An immersive weekend of telescope stargazing, astrophotography workshops, and cultural astronomical storytelling under pristine dark skies.",
      date: "August 18-20, 2026",
      location: "Laikipia, Kenya",
      image: "/images/event-darksky.png",
      cta: "Join Waitlist",
      href: "#contact",
    },
    {
      title: "Space Innovation Hackathon",
      description: "Collaborate on solving real-world challenges in agriculture, climate monitoring, and urban planning using open-source satellite data.",
      date: "November 6-8, 2026",
      location: "Cape Town, South Africa & Online",
      image: "/images/event-hackathon.png",
      cta: "Register Team",
      href: "#contact",
    },
    {
      title: "Space Careers & Economy Webinar",
      description: "Learn about the emerging African space industry and diverse career paths in space policy, engineering, science, and entrepreneurship.",
      date: "September 24, 2026",
      location: "Online Event",
      image: "/images/event-webinar.png",
      cta: "RSVP Now",
      href: "#contact",
    },
  ],
};
