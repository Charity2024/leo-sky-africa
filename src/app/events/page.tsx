import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import EventsPageClient from "./EventsPageClient";

export const metadata: Metadata = createPageMetadata({
  title: "Events",
  description:
    "Join Leo Sky Africa's space education summits, astrotourism dark sky camps, innovation hackathons, and webinars across the continent.",
  path: "/events",
});

export default function EventsPage() {
  return <EventsPageClient />;
}
