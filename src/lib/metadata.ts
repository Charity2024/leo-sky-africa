import type { Metadata } from "next";
import { brandAssets, siteContent, siteDescription } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leoskyafrica.space";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteContent.companyName} | ${siteContent.tagline}`,
    template: `%s | ${siteContent.companyName}`,
  },
  description: siteDescription,
  keywords: [
    "Leo Sky Africa",
    "space education Africa",
    "astrotourism",
    "Leo Sky Labs",
    "African space economy",
  ],
  authors: [{ name: siteContent.companyName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteContent.companyName,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteContent.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.companyName} | ${siteContent.tagline}`,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: brandAssets.logoMark, type: "image/svg+xml" }],
    shortcut: [{ url: brandAssets.logoMark, type: "image/svg+xml" }],
  },
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteContent.companyName,
    url: siteUrl,
    logo: `${siteUrl}${brandAssets.logo}`,
    description: baseMetadata.description,
    slogan: siteContent.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@leoskyafrica.space",
      contactType: "customer service",
    },
  };
}
