"use client"

import { Instagram, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold bg-linear-to-r from-white via-secondary to-accent bg-clip-text text-transparent mb-4 font-display">
              Nails Villa by Rutika
            </h2>
            <p className="text-white/65 text-sm">
              Founded by owner Rutika Chauhan on 10 April 2021. Home-based in
              Ahmedabad with home service available on request.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                className="text-white/65 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/65 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/919429031140"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/65 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="https://instagram.com/nailsvilla__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/65 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@nailsvilla__</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-white/65 hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4" />
                <span>Home-based in Ahmedabad</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/55">
          <p>&copy; {currentYear} Nails Villa by Rutika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

