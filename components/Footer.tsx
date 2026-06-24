"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ArrowUp, Instagram, MapPin } from "lucide-react"
import { WhatsappIcon } from "@/components/common/WhatsappIcon"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { NAV_ITEMS, handleNavClick, scrollToSection } from "@/lib/navigation"

export function Footer() {
  const router = useRouter()
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  const contactItem = NAV_ITEMS.find((item) => item.sectionId === "contact")!

  const handleNavClickEvent = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof NAV_ITEMS)[number]
  ) => {
    event.preventDefault()
    handleNavClick(item, pathname, router)
  }

  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (pathname === "/") {
      scrollToSection("hero")
    } else {
      router.push("/")
    }
  }

  return (
    <footer className="relative overflow-hidden bg-foreground text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-10 xl:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="max-w-md">
            <a href="/" onClick={goHome} className="inline-block">
              <span className="block font-display text-3xl font-bold">
                NailsVilla
              </span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-[0.3em] text-white/45">
                by Rutika
              </span>
            </a>

            <p className="mt-5 text-sm leading-relaxed text-white/62">
              Owner led nail care in Ahmedabad, founded by Rutika Chauhan in
              2021. Home based appointments with home service available on
              request.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
              Explore
            </h3>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClickEvent(e, item)}
                  className="text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={buildWhatsAppUrl()}
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
              <Link
                href={contactItem.href}
                onClick={(e) => handleNavClickEvent(e, contactItem)}
                className="flex items-center gap-3 text-white/65 transition-colors hover:text-white"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span>Home based in Ahmedabad</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} NailsVilla by Rutika. All rights reserved.</p>
          <a
            href="/"
            onClick={goHome}
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
