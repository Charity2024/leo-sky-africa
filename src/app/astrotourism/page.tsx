import type { Metadata } from "next";
import SiteLayout from "@/components/layout/SiteLayout";
import AstrotourismPageView from "@/components/pillar/AstrotourismPage";
import { astrotourismContent, astrotourismPageMetadata } from "@/content/astrotourism";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: astrotourismPageMetadata.title,
  description: astrotourismPageMetadata.description,
  path: "/astrotourism",
});

export default function AstrotourismPage() {
  return (
    <SiteLayout>
      <AstrotourismPageView content={astrotourismContent} />
    </SiteLayout>
  );
}
