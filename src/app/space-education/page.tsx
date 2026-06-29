import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import PillarPageTemplate from "@/components/pillar/PillarPageTemplate";
import { pillarPages } from "@/data/pillars";
import { createPageMetadata } from "@/lib/metadata";

const content = pillarPages["space-education"];

export const metadata: Metadata = createPageMetadata({
  title: "Space Education",
  description: content.heroDescription,
  path: "/space-education",
});

export default function SpaceEducationPage() {
  return (
    <SiteLayout>
      <PillarPageTemplate content={content} />
    </SiteLayout>
  );
}
