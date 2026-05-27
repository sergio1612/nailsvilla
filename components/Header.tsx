"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/common/Button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const observerRef = useRef<IntersectionObserver | null>(null)

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Pricing", id: "pricing" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Track how much of each section is visible
    const visibilityMap = new Map<string, number>()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio)
        })

        // Pick the section with the highest visible ratio
        let maxRatio = 0
        let mostVisible = ""
        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio
            mostVisible = id
          }
        })

        if (mostVisible) {
          setActiveSection(mostVisible)
        }
      },
      {
        // Slightly shrink top to account for the fixed header height
        rootMargin: "-80px 0px 0px 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current!.observe(el)
    })

    return () => observerRef.current?.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
      setIsMobileMenuOpen(false)
    }
  }

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
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {/* Active underline indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </button>
              )
            })}
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
          <div className="xl:hidden py-4 space-y-1 border-t border-border">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 w-full text-left font-medium py-2.5 px-3 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? "text-primary bg-primary/8"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  )}
                  <span className={isActive ? "" : "ml-[18px]"}>
                    {item.label}
                  </span>
                </button>
              )
            })}
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

