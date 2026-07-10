import type { EventsContent, EventsPageContent, EventsSectionContent } from "./types";
import { mediaPaths } from "./site";

export const eventsContent: EventsContent = {
  featured: {
    title: "Space Camp",
    description:
      "Join us for an exciting week of space exploration, hands-on STEM activities, telescope observations, rocketry, and expert-led astronomy sessions.",
    date: "September 12–18, 2026",
    location: "Nairobi, Kenya",
    image: `${mediaPaths.images}/event-spacecamp1.png`,
    cta: "Register Now",
    href: "/#contact",
    status: "upcoming",
  },

  upcoming: [
    {
      title: "The Blood Moon",
      description:
        "Experience the rare total lunar eclipse",
      date: "October 7, 2026",
      location: "Nairobi, Kenya & Virtual",
      image: `${mediaPaths.images}/event-bloodmoon.png`,
      cta: "Register Now",
      href: "/#contact",
      status: "upcoming",
    },
    {
      title: "Astrotourism Dark Sky Camp",
      description:
        "Spend a weekend under pristine African skies enjoying telescope observations and cultural astronomy storytelling.",
      date: "August 18–20, 2026",
      location: "Sopa Lodge",
      image: `${mediaPaths.gallery}/astrotourism/Maasai.png`,
      cta: "Join Waitlist",
      href: "/#contact",
      status: "upcoming",
    },
  ],

  past: [
    {
      title: "Space Camp",
      description:
        "A week-long immersive STEM experience introducing students to astronomy, rocketry, robotics, and space exploration.",
      date: "March 15, 2025",
      location: "Laikipia, Kenya",
      image: `${mediaPaths.images}/event-spacecamp.png`,
      href: "/events",
      status: "past",
    },
    {
      title: "Africa Space Week 2025",
      description:
        "A continental celebration of African achievements in space science featuring public talks, workshops, exhibitions, and stargazing sessions.",
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
    "Join our astrotourism experiences, space education programmes, innovation workshops, and public astronomy events across Africa.",
  featuredBadge:  "FEATURED EVENT",
  upcomingTitle: "Upcoming Programmes",
  viewAllLabel: "View all events →",
  defaultCta: "Register Now",
  defaultLearnMore: "Learn More",
};

export const eventsPageContent: EventsPageContent = {
  eyebrow: "Space Events",
  title: "Connect With the Cosmos",
  description:
    "Explore Leo Sky Africa's upcoming and past events, from public stargazing nights and Space Camps to STEM workshops and innovation programmes.",
  featuredBadge: "Featured Event",
  calendarEyebrow: "Calendar",
  calendarTitle: "Upcoming & Past Events",
  tabs: {
    upcoming: "Upcoming Events",
    past: "Past Events",
  },
  galleryEyebrow: "",
  galleryTitle: "Moments from Our Events",
  registerCta: {
    label: "Register for an Event",
    href: "/#contact",
  },
  defaultCta: "",
  defaultLearnMore: "",
};

export const eventsPageMetadata = {
  title: "Events",
  description:
    "Join Leo Sky Africa's Space Camps, astrotourism experiences, STEM workshops, astronomy outreach events, and innovation programmes across the continent.",
} as const;