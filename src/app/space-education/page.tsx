import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import SpaceEducationPageView from "@/components/pillar/SpaceEducationPage";
import { educationContent, educationPageMetadata } from "@/content/education";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: educationPageMetadata.title,
  description: educationPageMetadata.description,
  path: "/space-education",
});

export default function SpaceEducationPage() {
  return (
    <SiteLayout>
      <SpaceEducationPageView content={educationContent} />
    </SiteLayout>
  );
}
