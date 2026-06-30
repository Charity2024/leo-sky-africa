import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { baseMetadata, createOrganizationSchema } from "@/lib/metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(createOrganizationSchema()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
