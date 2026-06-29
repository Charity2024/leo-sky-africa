import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import PageTransition from "@/components/ui/PageTransition";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main id="main-content" className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
