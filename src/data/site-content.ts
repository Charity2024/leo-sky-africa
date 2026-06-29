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
  social: readonly { label: string; href: string }[];
};

export type EventItem = {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  cta?: string;
  href: string;
  status?: "upcoming" | "past";
};

export type EventsContent = {
  featured: EventItem;
  upcoming: readonly EventItem[];
  past: readonly EventItem[];
};

export const siteContent = {
  companyName: "Leo Sky Africa",
  tagline: "Africa's Gateway to Space",
  email: "info@leoskyafrica.space",
  phone: "+254 700 000 000",
  location: "Nairobi, Kenya",
} as const;

export const navigation: readonly NavigationItem[] = [
  { title: "About", href: "/#about" },
  { title: "Space Education", href: "/space-education" },
  { title: "Astrotourism", href: "/astrotourism" },
  { title: "Space Innovation", href: "/space-innovation" },
  { title: "Events", href: "/events" },
  { title: "Partners", href: "/partners" },
  { title: "Contact", href: "/contact" },
] as const;

export const sectionIds = [
  "about",
  "pillars",
  "impact",
  "events",
  "partners",
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
    href: "/space-education",
  },
  secondaryCta: {
    label: "Partner With Us",
    href: "/partners",
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
      href: "/space-education",
      sectionId: "education",
      image: "/images/pillar-education.png",
      imageAlt: "Students learning together in a classroom setting",
    },
    {
      kicker: "Exploration",
      title: "Astrotourism",
      description:
        "Connecting people to the universe through astronomy experiences, dark sky events, and celestial exploration.",
      href: "/astrotourism",
      sectionId: "astrotourism",
      image: "/images/pillar-astrotourism.png",
      imageAlt: "Stargazer beneath a vast Milky Way night sky",
    },
    {
      kicker: "Innovation",
      title: "Space Innovation",
      description:
        "Unlocking opportunities in the space economy through innovation, research, entrepreneurship, and future technologies.",
      href: "/space-innovation",
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
    href: "/#about",
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
    href: "/contact",
  },
  copyright: "All rights reserved.",
  social: [
    { label: "X (Twitter)", href: "https://x.com/leoskyafrica" },
    { label: "LinkedIn", href: "https://linkedin.com/company/leoskyafrica" },
    { label: "Instagram", href: "https://instagram.com/leoskyafrica" },
    { label: "YouTube", href: "https://youtube.com/@leoskyafrica" },
  ],
};

export const eventsContent: EventsContent = {
  featured: {
    title: "African Space Education Summit 2026",
    description:
      "Join space science leaders, educators, and students from across the continent for three days of keynotes, interactive panels, and hands-on space technology workshops mapping Africa's space future.",
    date: "October 12–14, 2026",
    location: "Nairobi, Kenya & Virtual",
    image: "/images/event-summit.png",
    cta: "Register Now",
    href: "/contact",
    status: "upcoming",
  },
  upcoming: [
    {
      title: "Astrotourism Dark Sky Camp",
      description:
        "An immersive weekend of telescope stargazing, astrophotography workshops, and cultural astronomical storytelling under pristine dark skies.",
      date: "August 18–20, 2026",
      location: "Laikipia, Kenya",
      image: "/images/event-darksky.png",
      cta: "Join Waitlist",
      href: "/contact",
      status: "upcoming",
    },
    {
      title: "Space Innovation Hackathon",
      description:
        "Collaborate on solving real-world challenges in agriculture, climate monitoring, and urban planning using open-source satellite data.",
      date: "November 6–8, 2026",
      location: "Cape Town, South Africa & Online",
      image: "/images/event-hackathon.png",
      cta: "Register Team",
      href: "/contact",
      status: "upcoming",
    },
    {
      title: "Space Careers & Economy Webinar",
      description:
        "Learn about the emerging African space industry and diverse career paths in space policy, engineering, science, and entrepreneurship.",
      date: "September 24, 2026",
      location: "Online Event",
      image: "/images/event-webinar.png",
      cta: "RSVP Now",
      href: "/contact",
      status: "upcoming",
    },
  ],
  past: [
    {
      title: "First Light Observatory Opening",
      description:
        "Inaugural stargazing event celebrating the launch of our community observatory partnership in central Kenya.",
      date: "March 15, 2025",
      location: "Laikipia, Kenya",
      image: "/images/event-darksky.png",
      href: "/events",
      status: "past",
    },
    {
      title: "Africa Space Week 2025",
      description:
        "A week-long celebration of African contributions to space science with panels, workshops, and public stargazing.",
      date: "July 7–13, 2025",
      location: "Nairobi, Kenya",
      image: "/images/event-summit.png",
      href: "/events",
      status: "past",
    },
  ],
};
