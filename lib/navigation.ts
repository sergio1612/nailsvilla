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

/** Fixed header (h-20) plus breathing room so section eyebrows stay visible */
export const HEADER_SCROLL_OFFSET = 96

export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (!element) return

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    HEADER_SCROLL_OFFSET

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
}
