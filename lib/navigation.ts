import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export type NavItem = {
  label: string
  href: string
  sectionId?: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Press Ons", href: "/#press-on-nails", sectionId: "press-on-nails" },
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/#pricing", sectionId: "pricing" },
  { label: "Testimonials", href: "/#testimonials", sectionId: "testimonials" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
]

/** Fixed header height (h-20) */
export const HEADER_SCROLL_OFFSET = 80

export function scrollToSection(id: string) {
  if (id === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }

  const section = document.getElementById(id)
  if (!section) return

  const target =
    section.querySelector<HTMLElement>("[data-section-eyebrow]") ?? section

  const top =
    target.getBoundingClientRect().top + window.scrollY - HEADER_SCROLL_OFFSET

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
}

export function isNavItemActive(
  pathname: string,
  item: NavItem,
  activeSection: string
): boolean {
  if (item.href === "/about") return pathname === "/about"
  if (item.href === "/gallery") return pathname === "/gallery"
  if (pathname !== "/") return false
  return activeSection === item.sectionId
}

export function handleNavClick(
  item: NavItem,
  pathname: string,
  router: AppRouterInstance,
  onSectionScroll?: (sectionId: string) => void
) {
  if (pathname === "/" && item.sectionId) {
    scrollToSection(item.sectionId)
    onSectionScroll?.(item.sectionId)
    return
  }

  router.push(item.href)
}
