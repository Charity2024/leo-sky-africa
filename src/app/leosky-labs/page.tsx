import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import PillarPageTemplate from "@/components/pillar/PillarPageTemplate";
import { labsContent, labsPageMetadata } from "@/content/labs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: labsPageMetadata.title,
  description: labsPageMetadata.description,
  path: "/leosky-labs",
});

export default function LeoSkyLabsPage() {
  return (
    <SiteLayout>
      <PillarPageTemplate content={labsContent} />
    </SiteLayout>
  );
}
