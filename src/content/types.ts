import type { ReactNode } from "react";

export type NavigationItem = {
  title: string;
  href: string;
  sectionId?: string;
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
  navAriaLabel: string;
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

type FooterSocial = {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "youtube" | "x";
};

export interface FooterContent {
  newsletterHeading: ReactNode;
  newsletterSuccessMessage: ReactNode;
  newsletterEmailLabel: ReactNode;
  newsletterPlaceholder: string | undefined;
  newsletterSubmitLabel: ReactNode;
  description: string;

  exploreHeading: string;

  contactHeading: string;

  blogHeading: string;

  blogViewAllLabel: string;

  blogViewAllHref: string;

  contactCta: {
    label: string;
    href: string;
  };

  socialHeading: string;

  tagline: string;

  copyright: string;

  social: FooterSocial[];
}

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

export type ImpactContent = {
  eyebrow: string;
  title: string;
  description: string;
  stats: readonly StatItem[];
  cta: CtaLink;
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

export type EventsSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  featuredBadge: string;
  upcomingTitle: string;
  viewAllLabel: string;
  defaultCta: string;
  defaultLearnMore: string;
};

export type EventsPageContent = {
  defaultCta: string | undefined;
  defaultLearnMore: string;
  eyebrow: string;
  title: string;
  description: string;
  featuredBadge: string;
  calendarEyebrow: string;
  calendarTitle: string;
  tabs: {
    upcoming: string;
    past: string;
  };
};

export type ContactCardType =
  | "general"
  | "meeting"
  | "proposal"
  | "partnership";

export type ContactCardContent = {
  id: ContactCardType;
  title: string;
  description: string;
  submitLabel: string;
};

export type ContactSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  contactLabels: {
    email: string;
    phone: string;
    location: string;
  };
  cards: readonly ContactCardContent[];
};

export type InquiryFormContent = {
  selectPlaceholder: string;
  loadingLabel: string;
  successTitle: string;
  successMessage: string;
  validation: Record<string, string>;
  fields: Record<
    ContactCardType,
    readonly {
      id: string;
      name: string;
      label: string;
      type?: string;
      as?: "input" | "textarea" | "select";
      options?: readonly string[];
    }[]
  >;
};

export type Partner = {
  name: string;
  logo: string;
  url: string;
  width: number;
  height: number;
};

export type PartnersSectionContent = {
  eyebrow: string;
  title: string;
};

export type PartnersPageContent = {
  metadataDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
    button: CtaLink;
  };
};

export type Program = {
  title: string;
  description: string;
  image?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PillarLayoutVariant = "education" | "astrotourism" | "labs";

export type JourneyStep = {
  phase: string;
  title: string;
  description: string;
};

export type FeaturedDestination = {
  name: string;
  location: string;
  description: string;
  image: { src: string; alt: string };
};

export type PillarPageContent = {
  slug: string;
  path: string;
  layoutVariant: PillarLayoutVariant;
  kicker: string;
  title: string;
  tagline: string;
  heroDescription: string;
  heroImage: string;
  heroVideo?: string;
  heroWatermark?: {
    position: "center" | "left" | "right";
    opacity: 0.04 | 0.05 | 0.06 | 0.07 | 0.08;
  };
  heroCta?: {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  mission?: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
  whyAstrotourismMatters?: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
  leadership?: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
  learningExperience?: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    image: { src: string; alt: string };
  };
  destinations?: {
    eyebrow: string;
    title: string;
    featured: FeaturedDestination;
  };
  visitorJourney?: {
    eyebrow: string;
    title: string;
    steps: readonly JourneyStep[];
  };
  programs?: {
    eyebrow: string;
    title: string;
    itemLabel: string;
    items: readonly Program[];
  };
  signatureExperiences?: {
    eyebrow: string;
    title: string;
    itemLabel: string;
    items: readonly Program[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    images: readonly { src: string; alt: string }[];
  };
  impact?: {
    eyebrow: string;
    title: string;
    stats: readonly StatItem[];
  };
  whyChooseLeoSky?: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      description: string;
    }[];
  };
  featuredExperiences?: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      description: string;
      location: string;
    }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: readonly Testimonial[];
  };
  faq?: {
    eyebrow: string;
    title: string;
    items: readonly FaqItem[];
  };
  relatedEvents?: readonly EventItem[];
  relatedEventsSection?: {
    eyebrow: string;
    title: string;
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};
