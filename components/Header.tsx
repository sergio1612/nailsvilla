"use client"

import { useState, useEffect } from "react"
import { Menu, X, Instagram, MessageCircle } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Gallery", id: "gallery" },
    { label: "Reviews", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ]

  // Light text on the dark hero, dark text once scrolled past it
  const isLight = !isScrolled && !isMobileMenuOpen

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/90 backdrop-blur-xl border-b border-taupe/15"
          : "bg-transparent"
      }`}
    >
      {/* Top utility bar */}
      <div
        className={`hidden lg:block transition-all duration-500 ${
          isScrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-10">
          <div
            className={`flex items-center justify-between py-2 text-[11px] tracking-[0.18em] uppercase transition-colors ${
              isLight ? "text-ivory/70" : "text-foreground/55"
            }`}
          >
            <span>Based in Ahmedabad, India</span>
            <div className="flex items-center gap-6">
              <span>Prior booking only</span>
              <a
                href="https://instagram.com/nailsvilla__"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 transition-colors ${
                  isLight ? "hover:text-ivory" : "hover:text-foreground"
                }`}
              >
                <Instagram className="h-3 w-3" />
                @nailsvilla__
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full border font-display text-base font-semibold tracking-tight transition-all group-hover:rotate-[-8deg] ${
                isLight
                  ? "border-ivory/40 bg-ivory/10 text-ivory backdrop-blur"
                  : "border-foreground/15 bg-cream/60 text-foreground"
              }`}
            >
              N<span className="opacity-50">V</span>
            </span>
            <span className="leading-tight">
              <span
                className={`block font-display text-2xl font-medium tracking-tight transition-colors ${
                  isLight ? "text-ivory" : "text-foreground"
                }`}
              >
                Nails Villa
              </span>
              <span
                className={`block artist-signature text-xl -mt-1 transition-colors ${
                  isLight ? "text-champagne" : "text-mocha/80"
                }`}
              >
                by Rutika
              </span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-[13px] font-medium tracking-[0.14em] uppercase transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:transition-all hover:after:w-full ${
                  isLight
                    ? "text-ivory/75 hover:text-ivory after:bg-ivory"
                    : "text-foreground/65 hover:text-foreground after:bg-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-medium tracking-[0.18em] uppercase transition-all ${
                isLight
                  ? "bg-cream text-espresso hover:bg-champagne"
                  : "bg-foreground text-primary-foreground hover:bg-mocha"
              }`}
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`rounded-full p-2 xl:hidden transition-colors ${
              isLight ? "text-ivory" : "text-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="border-t border-taupe/20 py-6 xl:hidden">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full rounded-2xl px-4 py-3 text-left font-serif text-lg text-foreground/75 transition-colors hover:bg-cream/60 hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-[12px] font-medium tracking-[0.18em] uppercase text-primary-foreground transition-all hover:bg-mocha"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
