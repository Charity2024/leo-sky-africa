import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-[#390059] text-[#e1e1e1]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(105,21,135,0.12),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#691587]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#e089fd]/5 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-20">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="group relative inline-flex w-fit flex-col gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#691587] focus-visible:ring-offset-2 focus-visible:ring-offset-[#390059]"
            >
              <span className="text-sm font-semibold tracking-[0.2em] text-white uppercase lg:text-base">
                {siteConfig.name}
              </span>
              <span className="text-[11px] tracking-[0.18em] text-[#e089fd]/80 uppercase">
                {siteConfig.tagline}
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#691587] to-[#e089fd] transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
              />
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-[#e1e1e1]/90 lg:text-[15px]">
              Africa&apos;s premier space education, astrotourism, and space
              innovation company — opening the continent&apos;s gateway to the
              space economy.
            </p>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center rounded-full border border-[#691587]/30 bg-[#691587]/10 px-5 py-2.5 text-sm font-medium text-white transition hover:border-[#691587]/60 hover:bg-[#691587]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#691587] focus-visible:ring-offset-2 focus-visible:ring-offset-[#390059]"
            >
              Get in touch
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="mb-5 text-xs font-semibold tracking-[0.2em] text-white uppercase">
              Explore
            </h2>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-x-8">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex w-full rounded-lg px-1 py-2 text-sm font-medium text-[#e1e1e1] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#691587] focus-visible:ring-offset-2 focus-visible:ring-offset-[#390059]"
                  >
                    <span className="relative">
                      {item.title}
                      <span
                        aria-hidden
                        className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-[#691587] to-[#e089fd] transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-[#e1e1e1]/80 sm:text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.14em] text-[#e089fd]/60 uppercase sm:text-[11px]">
            {siteConfig.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
