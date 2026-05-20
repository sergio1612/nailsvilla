"use client"

import { useState } from "react"
import { Clock, Instagram, MapPin, MessageCircle, Phone, ArrowRight, Mail, User, Sparkles } from "lucide-react"

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    "Gel Polish",
    "Extensions",
    "Custom Nail Art",
    "Refilling",
    "Overlays",
    "Removal & Care",
    "Not sure yet",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const phoneNumber = "919429031140"
    const text = encodeURIComponent(
      `Hello Nails Villa by Rutika!\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || "Need help choosing"}\nNote: ${form.message || "—"}\n\nPlease help me book a slot in Ahmedabad.`
    )
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank")
      setIsSubmitting(false)
    }, 400)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      content: "+91 94290 31140",
      link: "https://wa.me/919429031140",
    },
    {
      icon: Instagram,
      label: "Instagram",
      content: "@nailsvilla__",
      link: "https://instagram.com/nailsvilla__",
    },
    {
      icon: MapPin,
      label: "Studio",
      content: "Home-based, Ahmedabad",
      link: null,
    },
    {
      icon: Clock,
      label: "Hours",
      content: "Prior booking only",
      link: null,
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="section-eyebrow text-mocha/70 mb-4">
            ✦ &nbsp; Get in Touch &nbsp; ✦
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-foreground">
            Let&apos;s plan your{" "}
            <span className="font-serif italic">perfect set</span>
          </h2>
          <p className="mt-6 font-serif text-xl leading-relaxed text-foreground/65 italic">
            Share your details — I&apos;ll respond on WhatsApp with a slot,
            pricing, and design guidance.
          </p>
        </div>

        {/* Main grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden rounded-[2.5rem] border border-taupe/20 bg-taupe/15 lg:grid-cols-[1fr_1.2fr] elegant-shadow">
            {/* Info side */}
            <div className="bg-espresso p-10 lg:p-12 text-ivory relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-champagne/15 blur-3xl"></div>

              <div className="relative">
                <p className="section-eyebrow text-champagne/80 mb-4">
                  Booking Information
                </p>
                <h3 className="font-display text-3xl sm:text-4xl font-light leading-tight">
                  Reach out anytime
                </h3>
                <p className="mt-4 font-serif text-base leading-relaxed text-ivory/70 italic">
                  Best for slot bookings, reference photos, and home-service
                  availability.
                </p>

                <div className="mt-10 space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    const content = (
                      <>
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/20">
                          <Icon className="h-4 w-4" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="section-eyebrow text-champagne/70">
                            {info.label}
                          </p>
                          <p className="mt-1 font-serif text-base text-ivory">
                            {info.content}
                          </p>
                        </div>
                      </>
                    )
                    return info.link ? (
                      <a
                        key={info.label}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={info.label} className="flex items-center gap-4">
                        {content}
                      </div>
                    )
                  })}
                </div>

                <div className="mt-12 pt-8 border-t border-ivory/15">
                  <p className="artist-signature text-4xl text-champagne">
                    xo, Rutika
                  </p>
                </div>
              </div>
            </div>

            {/* Form side */}
            <div className="bg-cream p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="section-eyebrow text-foreground/60 block mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" strokeWidth={1.5} />
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Aaliah Brown"
                      className="w-full rounded-2xl border border-taupe/30 bg-ivory/70 px-4 py-3.5 pl-11 font-serif text-base text-foreground placeholder:text-foreground/35 transition-all focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="section-eyebrow text-foreground/60 block mb-2">
                    WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" strokeWidth={1.5} />
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 9XXXX XXXXX"
                      className="w-full rounded-2xl border border-taupe/30 bg-ivory/70 px-4 py-3.5 pl-11 font-serif text-base text-foreground placeholder:text-foreground/35 transition-all focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="section-eyebrow text-foreground/60 block mb-2">
                    Service Interest
                  </label>
                  <div className="relative">
                    <Sparkles className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40 pointer-events-none" strokeWidth={1.5} />
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full appearance-none rounded-2xl border border-taupe/30 bg-ivory/70 px-4 py-3.5 pl-11 font-serif text-base text-foreground transition-all focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="section-eyebrow text-foreground/60 block mb-2">
                    Your Note (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 h-4 w-4 text-foreground/40" strokeWidth={1.5} />
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Preferred date, design reference, or any questions…"
                      className="w-full rounded-2xl border border-taupe/30 bg-ivory/70 px-4 py-3.5 pl-11 font-serif text-base text-foreground placeholder:text-foreground/35 transition-all focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-[12px] font-medium tracking-[0.22em] uppercase text-primary-foreground transition-all hover:bg-mocha disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span>Opening WhatsApp</span>
                      <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-ivory border-t-transparent"></div>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-4 w-4" />
                      Continue on WhatsApp
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs italic text-foreground/55">
                  Your details are only used to continue your booking
                  conversation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
