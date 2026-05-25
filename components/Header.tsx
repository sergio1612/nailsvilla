"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/common/Button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    // Check initial scroll position
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
    { label: "Gallery", id: "gallery" },
    { label: "Pricing", id: "pricing" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/80 backdrop-blur-xl shadow-[0_12px_45px_rgba(117,59,162,0.12)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="group flex items-center gap-3 text-left cursor-pointer"
              aria-label="Go to home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:-rotate-6">
                NV
              </span>
              <span>
                <span className="block text-xl sm:text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent font-display">
                  NailsVilla
                </span>
                <span className="block text-[11px] font-medium tracking-[0.25em] text-foreground/55 uppercase">
                  by Rutika
                </span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-4"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
            >
              Book Now
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

