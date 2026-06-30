import type { FooterContent, NavigationItem } from "./types";

export const siteContent = {
  companyName: "Leo Sky Africa",
  tagline: "Africa's Gateway to Space",
  email: "info@leoskyafrica.space",
  phone: "+254 700 000 000",
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
  videos: "/videos",
  logos: "/logos",
  gallery: "/gallery",
} as const;

export const siteDescription =
  "Inspiring the next generation through space education, immersive astronomy experiences, and Leo Sky Labs programs that unlock Africa's future in the global space economy.";

export const navigation: readonly NavigationItem[] = [
  { title: "About", href: "/#about", sectionId: "about" },
  { title: "Space Education", href: "/#education", sectionId: "education" },
  { title: "Astrotourism", href: "/#astrotourism", sectionId: "astrotourism" },
  { title: "Leo Sky Labs", href: "/#labs", sectionId: "labs" },
  { title: "Events", href: "/#events", sectionId: "events" },
  { title: "Partners", href: "/#partners", sectionId: "partners" },
  { title: "Contact", href: "/#contact", sectionId: "contact" },
] as const;

export const sectionIds = navigation
  .map((item) => item.sectionId)
  .filter((id): id is string => Boolean(id));

export const footerContent: FooterContent = {
  description:
    "Africa's premier space education, astrotourism, and innovation company — opening the continent's gateway to the space economy.",
  exploreHeading: "Explore",
  contactHeading: "Contact",
  newsletterHeading: "Newsletter",
  newsletterPlaceholder: "Your email",
  newsletterSubmitLabel: "Join",
  newsletterSuccessMessage: "Thank you for subscribing.",
  newsletterEmailLabel: "Email address",
  contactCta: {
    label: "Get in touch",
    href: "/#contact",
  },
  copyright: "All rights reserved.",
  social: [
    { label: "X", href: "https://x.com/leoskyafrica" },
    { label: "LinkedIn", href: "https://linkedin.com/company/leoskyafrica" },
    { label: "Instagram", href: "https://instagram.com/leoskyafrica" },
    { label: "YouTube", href: "https://youtube.com/@leoskyafrica" },
  ],
};

export const openGraphContent = {
  alt: "Leo Sky Africa — Africa's Gateway to Space",
  titleLine1: "LEO SKY AFRICA",
  titleLine2: "AFRICA'S GATEWAY TO SPACE",
} as const;
