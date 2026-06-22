import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leo Sky Africa | Africa's Gateway to Space",
  description: "Inspiring the next generation through space education, immersive astronomy experiences (astrotourism), and space innovation programs that unlock Africa's future in the global space economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
