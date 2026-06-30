export const NAV_SCROLL_OFFSET = 76;

export function scrollToSection(
  id: string,
  behavior: ScrollBehavior = "smooth",
): void {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
  window.scrollTo({ top, behavior });
}

export function getHashFromHref(href: string): string | null {
  if (href.startsWith("/#")) return href.slice(2);
  return null;
}
