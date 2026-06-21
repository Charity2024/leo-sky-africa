import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  footerContent,
  navigation,
  siteContent,
} from "@/data/site-content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-black text-white/70">
      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-20">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="group relative inline-flex w-fit flex-col gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#691587] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span className="text-sm font-semibold tracking-[0.2em] text-white uppercase lg:text-base">
                {siteContent.companyName}
              </span>
              <span className="text-[11px] tracking-[0.18em] text-white/55 uppercase">
                {siteContent.tagline}
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
              />
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-white/65 lg:text-[15px]">
              {footerContent.description}
            </p>

            <Link
              href={footerContent.contactCta.href}
              className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#691587] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {footerContent.contactCta.label}
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-5 text-xs font-semibold tracking-[0.2em] text-white uppercase">
              {footerContent.exploreHeading}
            </h2>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-x-8">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex w-full rounded-lg px-1 py-2 text-sm font-medium text-white/65 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#691587] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <span className="relative">
                      {item.title}
                      <span
                        aria-hidden
                        className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#691587] transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-white/50 sm:text-sm">
            &copy; {currentYear} {siteContent.companyName}. {footerContent.copyright}
          </p>
          <p className="text-xs tracking-[0.14em] text-white/40 uppercase sm:text-[11px]">
            {siteContent.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
