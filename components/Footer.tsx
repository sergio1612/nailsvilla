"use client"

import { ArrowUp, Instagram, MapPin } from "lucide-react"
import { WhatsappIcon } from "@/components/common/WhatsappIcon"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative overflow-hidden bg-foreground text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-10 xl:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="max-w-md">
            <a href="#hero" className="inline-block">
              <span className="block font-display text-3xl font-bold">
                NailsVilla
              </span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-[0.3em] text-white/45">
                by Rutika
              </span>
            </a>

            <p className="mt-5 text-sm leading-relaxed text-white/62">
              Owner-led nail care in Ahmedabad, founded by Rutika Chauhan in
              2021. Home-based appointments with home service available on
              request.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
              Explore
            </h3>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/919429031140"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/65 transition-colors hover:text-white"
              >
                <WhatsappIcon className="h-4 w-4 text-accent" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="https://instagram.com/nailsvilla__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/65 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4 text-accent" />
                <span>@nailsvilla__</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-3 text-white/65 transition-colors hover:text-white"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span>Home-based in Ahmedabad</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} NailsVilla by Rutika. All rights reserved.</p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

