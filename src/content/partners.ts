import type { Partner, PartnersPageContent, PartnersSectionContent } from "./types";
import { mediaPaths } from "./site";

export const partners: readonly Partner[] = [
  {
    name: "KSA",
    logo: `${mediaPaths.logos}/ksa.svg`,
    url: "https://www.ksa.go.ke",
    width: 320,
    height: 80,
  },
  {
    name: "Women in Space",
    logo: `${mediaPaths.logos}/Women.svg`,
    url: "https://www.womeninspace.org",
    width: 240,
    height: 80,
  },
  {
    name: "ACORN",
    logo: `${mediaPaths.logos}/Acorn.svg`,
    url: "https://www.acornspace.org",
    width: 280,
    height: 80,
  },
  {
    name: "Sopa",
    logo: `${mediaPaths.logos}/Sopa.svg`,
    url: "https://www.sopalodge.org",
    width: 320,
    height: 80,
  },
  
] as const;

export const partnersSectionContent: PartnersSectionContent = {
  eyebrow: "Trusted Partners",
  title:
    "Building Africa's Space future through Strategic Partnerships, Education, and Innovation.",
};

export const partnersPageContent: PartnersPageContent = {
  metadataDescription:
    "Building Africa's Space future through strategic partnerships with leading institutions.",
  hero: {
    eyebrow: "Trusted Partners",
    title: "Building Africa's Space future together.",
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
