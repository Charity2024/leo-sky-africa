import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Leo Sky Africa for partnerships, program inquiries, astrotourism bookings, and space innovation opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
