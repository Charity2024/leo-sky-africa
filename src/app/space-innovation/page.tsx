import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import PillarPageTemplate from "@/components/pillar/PillarPageTemplate";
import { pillarPages } from "@/data/pillars";
import { createPageMetadata } from "@/lib/metadata";

const content = pillarPages["space-innovation"];

export const metadata: Metadata = createPageMetadata({
  title: "Space Innovation",
  description: content.heroDescription,
  path: "/space-innovation",
});

export default function SpaceInnovationPage() {
  return (
    <SiteLayout>
      <PillarPageTemplate content={content} />
    </SiteLayout>
  );
}
