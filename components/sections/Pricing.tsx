"use client"

import { Button } from "@/components/common/Button"
import { Card, CardContent } from "@/components/common/Card"
import { ArrowRight, Check, Gem, Home, Sparkles } from "lucide-react"

export function Pricing() {
  const services = [
    { name: "Gel Polish", price: "₹499", note: "Glossy, durable colour finish" },
    { name: "Temporary Extension", price: "₹799", note: "Event-ready length with a soft finish" },
    { name: "Gel Overlays", price: "₹999", note: "Strength and shine over natural nails" },
    { name: "Permanent Extension", price: "₹1299", note: "Long-lasting sculpted extensions" },
    { name: "Refilling", price: "₹599", note: "Refresh your extensions beautifully" },
    { name: "Gel Polish Removal", price: "₹299", note: "Gentle product removal" },
    { name: "Extension Removal", price: "₹499", note: "Careful removal with nail care" },
    { name: "Toe Extensions (Feet)", price: "₹899", note: "Polished toe extension service" },
  ]

  const highlights = [
    "Transparent INR pricing",
    "Home-based appointments",
    "Custom nail art on request",
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-background">
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-secondary/80 to-transparent"></div>
      <div className="absolute right-0 top-20 h-96 w-96 translate-x-1/3 rounded-full bg-primary/12 blur-3xl"></div>
      <div className="absolute bottom-12 left-0 h-96 w-96 -translate-x-1/3 rounded-full bg-accent/25 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/75 px-4 py-2 text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Updated price list</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-tight text-balance">
              A clean, premium <span className="text-primary">nail menu</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Transparent INR pricing for Ahmedabad clients who want glossy gel
              work, extensions, overlays, refills, removals, and appointment
              options that fit their day.
            </p>
          </div>

          <Card className="relative overflow-hidden rounded-[2.25rem] border-white/70 bg-white/70 shadow-[0_30px_100px_rgba(156,48,75,0.16)] backdrop-blur">
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-primary/35 to-transparent"></div>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-linear-to-br from-[#2a171d] via-[#7d2340] to-primary p-6 text-white sm:p-8">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/15 blur-2xl"></div>
                  <div className="absolute bottom-6 right-6 text-[8rem] font-bold leading-none text-white/4 font-display">
                    ₹
                  </div>

                  <div className="relative">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-primary shadow-2xl shadow-black/15">
                      <Gem className="h-8 w-8" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                      Signature finish
                    </p>
                    <h3 className="mt-3 max-w-sm text-3xl sm:text-4xl font-bold font-display leading-tight">
                      Modern gel work, clean extensions, soft luxe detailing.
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/72">
                      Share your inspiration, occasion, and whether you prefer
                      visiting Rutika&apos;s home setup or requesting home service.
                      We will help you pick the right service before booking.
                    </p>

                    <div className="mt-8 grid gap-3">
                      {highlights.map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur">
                          <Check className="h-4 w-4 text-accent" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((service, index) => (
                    <div
                      key={service.name}
                      className="group rounded-3xl border border-primary/10 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/10"
                    >
                      <div className="flex h-full flex-col justify-between gap-5">
                        <div className="flex items-start justify-between gap-4">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-secondary text-xs font-bold text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{service.price}</p>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                              onwards
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold font-display text-foreground">
                            {service.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {service.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 rounded-4xl border border-primary/10 bg-linear-to-r from-primary to-[#b82950] p-6 text-primary-foreground shadow-2xl shadow-primary/20 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                  <Home className="h-4 w-4" />
                  Home-based in Ahmedabad
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display">
                  Prefer home service? DM your Ahmedabad area and preferred slot.
                </h3>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/80">
                  Final timing depends on selected service, design complexity,
                  and travel availability.
                </p>
              </div>
              <Button
                className="rounded-full bg-white px-7 text-primary hover:bg-white/90"
                onClick={scrollToContact}
              >
                Book on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
