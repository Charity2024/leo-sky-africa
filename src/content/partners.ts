import type { Partner, PartnersPageContent, PartnersSectionContent } from "./types";
import { mediaPaths } from "./site";

export const partners: readonly Partner[] = [
  {
    name: "NASA",
    logo: `${mediaPaths.logos}/nasa.svg`,
    url: "https://www.nasa.gov",
    width: 240,
    height: 80,
  },
  {
    name: "European Space Agency",
    logo: `${mediaPaths.logos}/esa.svg`,
    url: "https://www.esa.int",
    width: 240,
    height: 80,
  },
  {
    name: "UNESCO",
    logo: `${mediaPaths.logos}/unesco.svg`,
    url: "https://www.unesco.org",
    width: 280,
    height: 80,
  },
  {
    name: "Kenya Space Agency",
    logo: `${mediaPaths.logos}/ksa.png`,
    url: "https://www.ksa.go.ke",
    width: 320,
    height: 80,
  },
  {
    name: "University Partner",
    logo: `${mediaPaths.logos}/university.svg`,
    url: "https://www.unesco.org/en/fieldoffice/nairobi",
    width: 300,
    height: 80,
  },
  {
    name: "Observatory Partner",
    logo: `${mediaPaths.logos}/observatory.svg`,
    url: "https://www.esa.int",
    width: 300,
    height: 80,
  },
] as const;

export const partnersSectionContent: PartnersSectionContent = {
  eyebrow: "Trusted Partners",
  title:
    "Building Africa's space future through strategic partnerships, education, and innovation.",
};

export const partnersPageContent: PartnersPageContent = {
  metadataDescription:
    "Building Africa's space future through strategic partnerships with NASA, ESA, UNESCO, Kenya Space Agency, and leading institutions.",
  hero: {
    eyebrow: "Trusted Partners",
    title: "Building Africa's space future together.",
    description:
      "We collaborate with space agencies, universities, and observatories to deliver world-class education, tourism, and innovation programs across the continent.",
  },
  cta: {
    title: "Partner with Leo Sky Africa",
    description: "Join our network of institutions shaping Africa's gateway to space.",
    button: {
      label: "Become a partner",
      href: "/#contact",
    },
  },
};

export const partnersMarqueeLabel = "Partner organization logos";
