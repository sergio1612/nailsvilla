"use client"

import { Button } from "@/components/common/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/common/Card"
import { Clock, Instagram, MapPin, Phone } from "lucide-react"
import { WhatsappIcon } from "@/components/common/WhatsappIcon"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function Contact() {
  const whatsAppUrl = buildWhatsAppUrl()

  const handleWhatsApp = () => {
    window.open(whatsAppUrl, "_blank")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Fast Booking",
      content: "WhatsApp us to choose a service and confirm your slot",
      link: whatsAppUrl,
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@nailsvilla__",
      link: "https://instagram.com/nailsvilla__",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "No physical studio at the moment.",
      link: "#",
    },
    {
      icon: MapPin,
      title: "Appointment Options",
      content: "Visit Rutika's home setup or request home service in Ahmedabad.",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20 xl:py-24 bg-muted">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="text-center mb-16" data-section-eyebrow>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready for Your <span className="text-primary">Nail Glow Up?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Share the service you like, your reference photo, preferred date,
            and area. Rutika will confirm the best appointment option on WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* WhatsApp CTA Card */}
          <Card className="mb-12 overflow-hidden rounded-4xl border-primary/20 bg-linear-to-br from-primary/10 to-accent/20 shadow-xl shadow-primary/10">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4 mx-auto">
                <WhatsappIcon className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl mb-2 font-display">Book via WhatsApp</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Best for quick questions, booking slots, reference photos, and
                home service availability.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full bg-green-600 hover:bg-green-700 text-white hover:shadow-green-500/40"
              >
                <WhatsappIcon className="h-5 w-5 mr-2" />
                Book My Nails on WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const isClickable = info.link !== "#"
              const cardClassName =
                "rounded-3xl border border-white/70 bg-white/80 text-card-foreground shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl"
              const cardBody = (
                <div className="flex items-start gap-4 p-4 text-left sm:block sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-foreground sm:text-xl">
                      {info.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed text-muted-foreground ${
                        isClickable ? "transition-colors group-hover:text-primary" : ""
                      }`}
                    >
                      {info.content}
                    </p>
                  </div>
                </div>
              )

              if (isClickable) {
                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block ${cardClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
                    aria-label={`${info.title}: ${info.content}`}
                  >
                    {cardBody}
                  </a>
                )
              }

              return (
                <Card key={index} className={cardClassName}>
                  {cardBody}
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

