"use client"

import { Button } from "@/components/common/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/common/Card"
import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react"

export function Contact() {
  const handleWhatsApp = () => {
    const phoneNumber = "919429031140"
    const message = encodeURIComponent(
      "Hello Nails Villa by Rutika! I want to book a nail appointment in Ahmedabad. Please help me choose between Rutika's home setup and home service."
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Fast Booking",
      content: "WhatsApp us to choose a service and confirm your slot",
      link: "https://wa.me/919429031140",
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
      content: "Prior booking only. No physical studio at the moment.",
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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready for Your <span className="text-primary">Nail Glow-Up?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh nails can change your whole mood. Message Rutika on WhatsApp,
            send your inspiration, and choose between her home setup or home
            service in Ahmedabad.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* WhatsApp CTA Card */}
          <Card className="mb-12 overflow-hidden rounded-[2rem] border-primary/20 bg-gradient-to-br from-primary/10 to-accent/20 shadow-xl shadow-primary/10">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4 mx-auto">
                <MessageCircle className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl mb-2 font-display">Book via WhatsApp</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Quickest way to confirm your service, slot, appointment option,
                and any inspiration photos you want recreated.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Book My Nails on WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card
                  key={index}
                  className="rounded-3xl border-white/70 bg-white/70 backdrop-blur hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.link !== "#" ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

