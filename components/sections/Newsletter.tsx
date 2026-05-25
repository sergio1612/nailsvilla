"use client"

import { useState } from "react"
import { Button } from "@/components/common/Button"
import { Card, CardContent } from "@/components/common/Card"
import { CheckCircle2, MessageCircle, Phone, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function Newsletter() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const formatPhoneNumber = (phone: string) => phone.replace(/\D/g, "")

  const validatePhoneNumber = (phone: string) => {
    const cleaned = formatPhoneNumber(phone)
    return cleaned.length >= 10 && cleaned.length <= 15
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!phoneNumber || !validatePhoneNumber(phoneNumber)) {
      setError("Please enter a valid WhatsApp number")
      return
    }

    setIsSubmitting(true)

    try {
      const businessWhatsAppNumber = "919429031140"
      const message = encodeURIComponent(
        `Hello NailsVilla by Rutika! I want to book a nail appointment in Ahmedabad.\n\nMy WhatsApp number: ${phoneNumber}\nPreferred service: Please help me choose from the latest price list.\nAppointment preference: Rutika's home setup / home service.`
      )

      await new Promise((resolve) => setTimeout(resolve, 400))
      window.open(`https://wa.me/${businessWhatsAppNumber}?text=${message}`, "_blank")

      setIsSuccess(true)
      setPhoneNumber("")

      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="newsletter" className="relative overflow-hidden py-16 sm:py-20 xl:py-24 bg-linear-to-br from-secondary/70 via-background to-accent/25">
      <div className="absolute right-8 top-8 h-32 w-32 rounded-full border border-primary/15"></div>
      <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
        <Card className="luxury-surface mx-auto max-w-5xl overflow-hidden rounded-4xl border-white/70">
          <CardContent className="grid gap-8 p-6 sm:p-8 lg:p-10 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between rounded-3xl bg-linear-to-br from-primary via-purple-600 to-accent p-6 text-primary-foreground sm:p-8">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  Appointment concierge
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-balance">
                  Tell us your nail mood. Rutika will help plan your nail glow-up.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/80">
                  Share your number and continue on WhatsApp for availability,
                  home-based appointment details, home-service requests, and design guidance.
                </p>
              </div>

              <div className="mt-8 grid gap-3 text-sm">
                {["Latest INR pricing", "Home-based appointments", "Home service on request"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              {isSuccess ? (
                <div className="w-full text-center py-8">
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground font-display">
                    WhatsApp is opening
                  </h3>
                  <p className="text-muted-foreground">
                    Send the pre-filled message and we will help you plan your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-5">
                  <div>
                    <label htmlFor="booking-phone" className="mb-2 block text-sm font-semibold text-foreground">
                      WhatsApp number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="booking-phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your WhatsApp number"
                        className={cn(
                          "h-14 w-full rounded-2xl border bg-white/80 pl-12 pr-4 text-foreground shadow-sm placeholder:text-muted-foreground",
                          "transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary",
                          error ? "border-red-500" : "border-border"
                        )}
                        disabled={isSubmitting}
                      />
                    </div>
                    {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="h-14 w-full rounded-full bg-green-600 text-base text-white hover:bg-green-700"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Opening WhatsApp</span>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Continue on WhatsApp
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We will use this only to continue your booking conversation.
                  </p>
                </form>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
