import type { FooterContent, NavigationItem } from "./types";

export const siteContent = {
  companyName: "Leo Sky Africa",
  tagline: "Africa's Gateway to Space",
  email: "info@leoskyafrica.space",
  phone: "+254 700 000 000", // Update later
  location: "Nairobi, Kenya",
} as const;

export const brandAssets = {
  logo: "/logo/logo.svg",
  logoMark: "/logo/logo-mark.svg",
  logoAlt: "Leo Sky Africa — Africa's Gateway to Space",
  homeLabel: "Leo Sky Africa home",
} as const;

export const mediaPaths = {
  images: "/images",
  gallery: "/gallery",
  videos: "/videos",
  logos: "/logos",
} as const;

export const socialLinks = {
  whatsapp: "https://wa.me/254700000000", // Replace later
  instagram: "https://instagram.com/leoskyafrica",
  linkedin: "https://linkedin.com/company/leoskyafrica",
  youtube: "https://youtube.com/@leoskyafrica",
  x: "https://x.com/leoskyafrica",

  // Replace with the actual article later
  story: "https://blog.leoskyafrica.space",
} as const;

export const siteDescription =
  "Leo Sky Africa is Africa's premier space education, astrotourism and innovation company, inspiring the next generation to participate in the global space economy.";

export const navigation: readonly NavigationItem[] = [
  {
    title: "About",
    href: "/#about",
    sectionId: "about",
  },
  {
    title: "Space Education",
    href: "/space-education",
  },
  {
    title: "Astrotourism",
    href: "/astrotourism",
  },
  {
    title: "Leo Sky Labs",
    href: "/leosky-labs",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Partners",
    href: "/partners",
  },
  {
    title: "Our Story",
    href: socialLinks.story,
  },
  {
    title: "Contact",
    href: socialLinks.whatsapp,
  },
] as const;

export const sectionIds = navigation
  .map((item) => item.sectionId)
  .filter((id): id is string => Boolean(id));

export const footerContent: FooterContent = {
  description:
    "Africa's premier space education, astrotourism and innovation company—empowering the next generation through education, exploration and innovation.",

  exploreHeading: "Explore",

  contactHeading: "Connect",

  blogHeading: "Learn More",

  blogViewAllLabel: "Read Our Story",

  blogViewAllHref: socialLinks.story,

  contactCta: {
    label: "Chat on WhatsApp",
    href: socialLinks.whatsapp,
  },

  copyright: "All rights reserved.",

  social: [
    {
      label: "Instagram",
      href: socialLinks.instagram,
      icon: "instagram"
    },
    {
      label: "LinkedIn",
      href: socialLinks.linkedin,
      icon: "linkedin"
    },
    {
      label: "YouTube",
      href: socialLinks.youtube,
      icon: "youtube"
    },
    {
      label: "X",
      href: socialLinks.x,
      icon: "x"
    },
  ],
};

export const openGraphContent = {
  alt: "Leo Sky Africa — Africa's Gateway to Space",
  titleLine1: "LEO SKY AFRICA",
  titleLine2: "AFRICA'S GATEWAY TO SPACE",
} as const;