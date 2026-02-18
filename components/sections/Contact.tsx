"use client"

import { Button } from "@/components/common/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/common/Card"
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const handleWhatsApp = () => {
    // Replace with your actual WhatsApp number (format: country code + number without +)
    const phoneNumber = "1234567890"
    const message = encodeURIComponent(
      "Hello! I'm interested in booking an appointment at NailsVilla."
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@nailsvilla.com",
      link: "mailto:info@nailsvilla.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "123 Beauty Street, City, State 12345",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to book your appointment? Contact us via WhatsApp for instant
            booking or reach out through any of our channels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* WhatsApp CTA Card */}
          <Card className="mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4 mx-auto">
                <MessageCircle className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl mb-2">Book via WhatsApp</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Click below to message us directly on WhatsApp for quick
                booking and instant responses.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp
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
                  className="hover:shadow-lg transition-shadow"
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

