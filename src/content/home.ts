import type {
  EventsContent,
  EventsPageContent,
  EventsSectionContent,
  HeroContent,
  ImpactContent,
  PillarsContent,
} from "./types";
import { mediaPaths } from "./site";

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
    "Inspiring the next generation through space education, immersive astronomy experiences, and Leo Sky Labs programs that unlock Africa's future in the global space economy.",
  primaryCta: {
    label: "Explore Programs",
    href: "/space-education",
  },
  secondaryCta: {
    label: "Partner With Us",
    href: "/#contact",
  },
  scrollIndicator: "Scroll to Explore",
  navAriaLabel: "Core programs navigation",
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
      image: `${mediaPaths.images}/pillar-education.png`,
      imageAlt: "Students learning together in a classroom setting",
    },
    {
      kicker: "Exploration",
      title: "Astrotourism",
      description:
        "Connecting people to the universe through astronomy experiences, dark sky events, and celestial exploration.",
      href: "/astrotourism",
      sectionId: "astrotourism",
      image: `${mediaPaths.images}/pillar-astrotourism.png`,
      imageAlt: "Stargazer beneath a vast Milky Way night sky",
    },
    {
      kicker: "Innovation",
      title: "Leo Sky Labs",
      description:
        "Unlocking opportunities in the space economy through research, satellite technology, entrepreneurship, and future technologies.",
      href: "/leosky-labs",
      sectionId: "labs",
      image: `${mediaPaths.images}/pillar-innovation.png`,
      imageAlt: "Earth viewed from space above the African continent",
    },
  ],
};

export const impactContent: ImpactContent = {
  eyebrow: "Our Impact",
  title: "Building Africa's Space Future",
  description:
    "Through education, astronomy experiences, and innovation programs, Leo Sky Africa is creating pathways for thousands of young Africans to participate in the global space economy.",
  stats: [
    { value: 1000, suffix: "+", label: "Students Reached" },
    { value: 50, suffix: "+", label: "Space Events" },
    { value: 10, suffix: "+", label: "Partners & Institutions" },
    { value: 3, suffix: "", label: "Core Programs" },
  ],
  cta: {
    label: "Partner With Leo Sky",
    href: "/partners",
  },
};

export const eventsContent: EventsContent = {
  featured: {
    title: "African Space Education Summit 2026",
    description:
      "Join space science leaders, educators, and students from across the continent for three days of keynotes, interactive panels, and hands-on space technology workshops mapping Africa's space future.",
    date: "October 12–14, 2026",
    location: "Nairobi, Kenya & Virtual",
    image: `${mediaPaths.images}/event-summit.png`,
    cta: "Register Now",
    href: "/#contact",
    status: "upcoming",
  },
  upcoming: [
    {
      title: "Astrotourism Dark Sky Camp",
      description:
        "An immersive weekend of telescope stargazing, astrophotography workshops, and cultural astronomical storytelling under pristine dark skies.",
      date: "August 18–20, 2026",
      location: "Laikipia, Kenya",
      image: `${mediaPaths.images}/event-darksky.png`,
      cta: "Join Waitlist",
      href: "/#contact",
      status: "upcoming",
    },
    {
      title: "Leo Sky Labs Hackathon",
      description:
        "Collaborate on solving real-world challenges in agriculture, climate monitoring, and urban planning using open-source satellite data.",
      date: "November 6–8, 2026",
      location: "Cape Town, South Africa & Online",
      image: `${mediaPaths.images}/event-hackathon.png`,
      cta: "Register Team",
      href: "/#contact",
      status: "upcoming",
    },
    {
      title: "Space Careers & Economy Webinar",
      description:
        "Learn about the emerging African space industry and diverse career paths in space policy, engineering, science, and entrepreneurship.",
      date: "September 24, 2026",
      location: "Online Event",
      image: `${mediaPaths.images}/event-webinar.png`,
      cta: "RSVP Now",
      href: "/#contact",
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
      image: `${mediaPaths.images}/event-darksky.png`,
      href: "/events",
      status: "past",
    },
    {
      title: "Africa Space Week 2025",
      description:
        "A week-long celebration of African contributions to space science with panels, workshops, and public stargazing.",
      date: "July 7–13, 2025",
      location: "Nairobi, Kenya",
      image: `${mediaPaths.images}/event-summit.png`,
      href: "/events",
      status: "past",
    },
  ],
};

export const eventsSectionContent: EventsSectionContent = {
  eyebrow: "Space Events",
  title: "Connect With the Cosmos",
  description:
    "Join our astro-tourism camps, educational summits, and hackathons designed to launch Africa into the global space economy.",
  featuredBadge: "★ FEATURED EVENT",
  upcomingTitle: "Upcoming Programs",
  viewAllLabel: "View all events →",
  defaultCta: "Register Now",
  defaultLearnMore: "Learn More",
};

export const eventsPageContent: EventsPageContent = {
  eyebrow: "Space Events",
  title: "Connect With the Cosmos",
  description:
    "Join our astro-tourism camps, educational summits, and hackathons designed to launch Africa into the global space economy.",
  featuredBadge: "Featured Event",
  calendarEyebrow: "Calendar",
  calendarTitle: "Upcoming & past events",
  tabs: {
    upcoming: "Upcoming Events",
    past: "Past Events",
  },
  galleryEyebrow: "Gallery",
  galleryTitle: "Moments from our events",
  registerCta: {
    label: "Register for an event",
    href: "/#contact",
  },
  defaultCta: "Register",
  defaultLearnMore: "Learn more",
};

export const eventsPageMetadata = {
  title: "Events",
  description:
    "Join Leo Sky Africa's space education summits, astrotourism dark sky camps, innovation hackathons, and webinars across the continent.",
} as const;

export const blogContent = {
  eyebrow: "Blog",
  title: "Insights from the cosmos.",
  description: "Explore our latest articles on space education, astrotourism, and African innovation in the space sector.",
  posts: [
    {
      title: "The Future of Space Education in Africa",
      excerpt: "How African institutions are building pathways to careers in the global space economy through innovative STEM programs.",
      date: "June 15, 2026",
      author: "Dr. Amara Osei",
      category: "Education",
      image: `${mediaPaths.images}/pillar-education.png`,
      href: "/blog/future-space-education-africa",
    },
    {
      title: "Dark Sky Tourism: A Sustainable Opportunity",
      excerpt: "Exploring how astrotourism can create economic opportunities while preserving Africa's pristine night skies.",
      date: "May 28, 2026",
 author: "Samuel Kipkorir",
      category: "Astrotourism",
      image: `${mediaPaths.images}/pillar-astrotourism.png`,
      href: "/blog/dark-sky-tourism-sustainable",
    },
    {
      title: "Building Africa's First CubeSat",
      excerpt: "Inside Leo Sky Labs' journey from concept to prototype, developing indigenous satellite capabilities.",
      date: "May 10, 2026",
      author: "Dr. Aisha Mbeki",
      category: "Innovation",
      image: `${mediaPaths.images}/pillar-innovation.png`,
      href: "/blog/building-africas-first-cubesat",
    },
  ],
  viewAllLabel: "View all posts →",
  viewAllHref: "/blog",
};
