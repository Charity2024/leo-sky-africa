import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import PillarPageTemplate from "@/components/pillar/PillarPageTemplate";
import { pillarPages } from "@/data/pillars";
import { createPageMetadata } from "@/lib/metadata";

const content = pillarPages.astrotourism;

export const metadata: Metadata = createPageMetadata({
  title: "Astrotourism",
  description: content.heroDescription,
  path: "/astrotourism",
});

export default function AstrotourismPage() {
  return (
    <SiteLayout>
      <PillarPageTemplate content={content} />
    </SiteLayout>
  );
}
