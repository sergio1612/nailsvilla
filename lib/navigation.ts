export const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Press Ons", id: "press-on-nails" },
  { label: "Gallery", id: "gallery" },
  { label: "Pricing", id: "pricing" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
] as const

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
