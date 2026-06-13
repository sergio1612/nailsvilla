"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/common/Button"
import { Menu, X } from "lucide-react"
import { NAV_ITEMS, scrollToSection } from "@/lib/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const observerRef = useRef<IntersectionObserver | null>(null)

  const navItems = NAV_ITEMS

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return

    requestAnimationFrame(() => scrollToSection(hash))
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

  const handleScrollToSection = (id: string) => {
    scrollToSection(id)
    setActiveSection(id)
    setIsMobileMenuOpen(false)
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
              onClick={() => handleScrollToSection("hero")}
              className="group flex items-center gap-0 text-left cursor-pointer"
              aria-label="Go to home"
            >
              <Image
                src="/nv-photos/logo-hands-v4.png"
                alt=""
                width={64}
                height={64}
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16"
                priority
              />
              <span>
                <span className="block font-display bg-linear-to-r from-primary to-accent bg-clip-text text-transparent" style={{ fontWeight: 600, fontSize: "24px", lineHeight: 1.2 }}>
                  NailsVilla
                </span>
                <span className="block text-[11px] font-medium text-foreground/55 uppercase text-center" style={{ letterSpacing: "2px" }}>
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
                  onClick={() => handleScrollToSection(item.id)}
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
              onClick={() => handleScrollToSection("contact")}
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
                  onClick={() => handleScrollToSection(item.id)}
                  className={`w-full rounded-xl px-3 py-2.5 text-left font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary/8 text-primary"
                      : "text-foreground hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
            <div className="pt-2">
              <Button
                onClick={() => handleScrollToSection("contact")}
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

