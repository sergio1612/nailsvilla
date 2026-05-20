"use client"

import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"

export function Pricing() {
  const sections = [
    {
      title: "Most Requested",
      items: [
        { name: "Gel Polish", price: "499", note: "Glossy, durable colour finish" },
        { name: "Temporary Extension", price: "799", note: "Event-ready length with soft finish" },
        { name: "Gel Overlays", price: "999", note: "Strength and shine over natural nails" },
      ],
    },
    {
      title: "Extensions & Care",
      items: [
        { name: "Permanent Extension", price: "1299", note: "Long-lasting sculpted extensions" },
        { name: "Refilling", price: "599", note: "Refresh your extensions beautifully" },
        { name: "Gel Polish Removal", price: "299", note: "Gentle product removal" },
      ],
    },
    {
      title: "Finishing Touches",
      items: [
        { name: "Extension Removal", price: "499", note: "Careful removal with nail care" },
        { name: "Toe Extensions", price: "899", note: "Polished toe extension service" },
        { name: "Custom Nail Art", price: "—", note: "Pricing varies with design complexity" },
      ],
    },
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-cream py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-champagne/15 blur-3xl"></div>
      <div className="absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-taupe/15 blur-3xl"></div>

      <div className="container relative mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="section-eyebrow text-mocha/70 mb-4">
            ✦ &nbsp; Price List &nbsp; ✦
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-foreground">
            A boutique{" "}
            <span className="font-serif italic">nail menu</span>
          </h2>
          <p className="mt-6 font-serif text-xl leading-relaxed text-foreground/65 italic">
            Transparent pricing in INR. Final price may vary only with custom
            art, charms, chrome, or extra detailing.
          </p>
        </div>

        {/* Menu — three-column editorial layout */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] border border-taupe/15 bg-ivory/70 backdrop-blur p-8 sm:p-12 lg:p-16 elegant-shadow">
            {/* Menu header */}
            <div className="text-center pb-10 border-b border-taupe/20">
              <p className="artist-signature text-5xl text-mocha">Nails Villa</p>
              <p className="section-eyebrow text-foreground/55 mt-2">
                Service Menu &nbsp;·&nbsp; INR
              </p>
            </div>

            {/* Sections */}
            <div className="grid gap-12 pt-12 md:grid-cols-3 md:gap-10">
              {sections.map((section, idx) => (
                <div key={section.title}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-display text-2xl font-light text-mocha/40">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
                      {section.title}
                    </h3>
                  </div>

                  <ul className="space-y-6">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline gap-3">
                          <span className="font-serif text-lg text-foreground">
                            {item.name}
                          </span>
                          <span
                            className="flex-1 border-b border-dotted border-taupe/40 mb-1"
                            aria-hidden="true"
                          ></span>
                          <span className="font-display text-lg font-medium text-foreground whitespace-nowrap">
                            {item.price === "—" ? "—" : `₹${item.price}`}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-foreground/55 italic">
                          {item.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Menu footer */}
            <div className="mt-12 pt-8 border-t border-taupe/20 text-center">
              <p className="font-serif text-base italic text-foreground/65">
                Send your reference photo, preferred date, and area —{" "}
                <span className="artist-signature text-2xl text-mocha not-italic">
                  Rutika
                </span>{" "}
                will guide you to the right service.
              </p>
            </div>
          </div>

          {/* Policies card — like reference */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-taupe/15 bg-ivory/70 backdrop-blur p-8 elegant-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-taupe/30 mb-5">
                <Sparkles className="h-5 w-5 text-mocha" strokeWidth={1.5} />
              </div>
              <p className="section-eyebrow text-mocha/70">Payments</p>
              <p className="mt-4 font-serif text-base leading-relaxed text-foreground/75">
                A ₹500 deposit is required to secure your appointment. This
                amount will go toward your final total and is non-refundable and
                non-transferable under any circumstances.
              </p>
            </div>

            <div className="rounded-3xl border border-taupe/15 bg-ivory/70 backdrop-blur p-8 elegant-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-taupe/30 mb-5">
                <Sparkles className="h-5 w-5 text-mocha" strokeWidth={1.5} />
              </div>
              <p className="section-eyebrow text-mocha/70">Cancellation</p>
              <p className="mt-4 font-serif text-base leading-relaxed text-foreground/75">
                Cancellations must be made at least 48 hours in advance. Failure
                to do so will count as a no-show, and you will need to pay a
                ₹500 fee before re-booking.
              </p>
            </div>
          </div>

          {/* CTA banner */}
          <div className="mt-10 rounded-[2.5rem] dark-card p-10 sm:p-14 elegant-shadow">
            <div className="flex flex-col items-center text-center gap-6 lg:flex-row lg:text-left lg:justify-between">
              <div className="max-w-2xl">
                <p className="section-eyebrow text-champagne/80 mb-3">
                  Ready to book
                </p>
                <h3 className="font-display text-3xl sm:text-4xl font-light leading-tight text-ivory">
                  Send your reference, we&apos;ll guide you to the{" "}
                  <span className="font-serif italic">perfect set</span>.
                </h3>
              </div>
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-[12px] font-medium tracking-[0.22em] uppercase text-espresso transition-all hover:bg-champagne whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
