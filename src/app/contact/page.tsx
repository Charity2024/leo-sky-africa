import type { Metadata } from "next";
import { contactPageMetadata } from "@/content/contact";
import { createPageMetadata } from "@/lib/metadata";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = createPageMetadata({
  title: contactPageMetadata.title,
  description: contactPageMetadata.description,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
