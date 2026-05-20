"use client"

import { ArrowUp, Instagram, MapPin, MessageCircle, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  const services = [
    "Gel Polish",
    "Extensions",
    "Nail Art",
    "Overlays",
    "Refilling",
    "Removal",
  ]

  return (
    <footer className="relative overflow-hidden bg-espresso text-ivory">
      {/* Decorative top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent"></div>
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-mocha/40 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-champagne/10 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-6 py-20 lg:px-10">
        {/* Top — brand */}
        <div className="text-center pb-16 border-b border-ivory/10">
          <p className="section-eyebrow text-champagne/80 mb-4">
            Thank you for visiting
          </p>
          <a href="#hero" className="inline-block group">
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-ivory">
              Nails Villa
            </h2>
            <p className="artist-signature text-4xl sm:text-5xl text-champagne mt-1">
              by Rutika
            </p>
          </a>
          <p className="mt-8 mx-auto max-w-xl font-serif text-lg leading-relaxed text-ivory/70 italic">
            &ldquo;Owner-led nail care, founded 10 April 2021 by{" "}
            <span className="artist-signature text-3xl text-champagne not-italic">
              Rutika Chauhan
            </span>
            &rdquo;
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919429031140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-[12px] font-medium tracking-[0.18em] uppercase text-espresso transition-all hover:bg-champagne"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </a>
            <a
              href="https://instagram.com/nailsvilla__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-7 py-3 text-[12px] font-medium tracking-[0.18em] uppercase text-ivory transition-all hover:bg-ivory/10"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>

        {/* Middle — link columns */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 border-b border-ivory/10">
          <div>
            <p className="section-eyebrow text-champagne/70 mb-5">Visit</p>
            <p className="font-serif text-lg leading-relaxed text-ivory/85">
              Home-based studio in <br />Ahmedabad, Gujarat
            </p>
            <p className="mt-3 text-sm text-ivory/55">
              Home service available on request
            </p>
          </div>

          <div>
            <p className="section-eyebrow text-champagne/70 mb-5">Navigate</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-serif text-base text-ivory/65 transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-eyebrow text-champagne/70 mb-5">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="font-serif text-base text-ivory/65">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-eyebrow text-champagne/70 mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-ivory/65">
              <li>
                <a
                  href="https://wa.me/919429031140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-champagne transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +91 94290 31140
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/nailsvilla__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-champagne transition-colors"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  @nailsvilla__
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@nailsvilla.com"
                  className="inline-flex items-center gap-2 hover:text-champagne transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  hello@nailsvilla.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                Ahmedabad, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom — copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-xs tracking-[0.12em] text-ivory/45">
            &copy; {currentYear} Nails Villa by Rutika. All rights reserved.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-ivory/55 transition-colors hover:text-champagne"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
