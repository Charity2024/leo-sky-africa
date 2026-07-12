"use client";

import DesktopNavbar from "@/components/layout/DesktopNavbar";
import MobileNavbar from "@/components/layout/MobileNavbar";

export default function Navbar() {
  return (
    <>
      {/* Desktop (lg and up): keep existing implementation */}
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>

      {/* Mobile & Tablet (< lg): dedicated minimal header + drawer */}
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
