import type { Metadata } from "next";
import { eventsPageMetadata } from "@/content/events";
import { createPageMetadata } from "@/lib/metadata";
import EventsPageClient from "./EventsPageClient";

export const metadata: Metadata = createPageMetadata({
  title: eventsPageMetadata.title,
  description: eventsPageMetadata.description,
  path: "/events",
});

export default function EventsPage() {
  return <EventsPageClient />;
}
