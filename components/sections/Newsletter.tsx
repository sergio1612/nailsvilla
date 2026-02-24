"use client"

import { useState } from "react"
import { Button } from "@/components/common/Button"
import { Card, CardContent } from "@/components/common/Card"
import { MessageCircle, Sparkles, CheckCircle2, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function Newsletter() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [discountCode, setDiscountCode] = useState("")

  // Generate a discount code
  const generateDiscountCode = () => {
    const prefix = "NAILS"
    const randomNum = Math.floor(1000 + Math.random() * 9000)
    return `${prefix}${randomNum}`
  }

  const formatPhoneNumber = (phone: string) => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, "")
    return cleaned
  }

  const validatePhoneNumber = (phone: string) => {
    const cleaned = formatPhoneNumber(phone)
    // Accept phone numbers with 10-15 digits (covers most international formats)
    return cleaned.length >= 10 && cleaned.length <= 15
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate phone number
    if (!phoneNumber || !validatePhoneNumber(phoneNumber)) {
      setError("Please enter a valid phone number (10-15 digits)")
      return
    }

    setIsSubmitting(true)

    try {
      // Generate discount code
      const code = generateDiscountCode()
      setDiscountCode(code)

      // Replace with your actual WhatsApp business number (format: country code + number without +)
      // Example: "919876543210" for Indian number
      const businessWhatsAppNumber = "1234567890" // TODO: Replace with your actual WhatsApp business number

      // Create WhatsApp message with discount code
      const message = encodeURIComponent(
        `Hello! I'm interested in booking an appointment at NailsVilla.\n\nI received a discount code: *${code}*\n\nPlease help me book my appointment with 10% off!`
      )

      // Small delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Open WhatsApp with pre-filled message to business number
      window.open(`https://wa.me/${businessWhatsAppNumber}?text=${message}`, "_blank")

      // On success
      setIsSuccess(true)
      setPhoneNumber("")
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setDiscountCode("")
      }, 5000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="newsletter" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/20 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 sm:p-12">
              <div className="text-center mb-8 space-y-6">
                {/* Special Offer Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-medium">Special Offer</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display">
                  Get Your <span className="text-primary">Discount Code</span>
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Enter your WhatsApp number and we'll send you a discount code instantly!
                </p>
                
                {/* Incentive Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-base shadow-lg">
                    <span>🎉</span>
                    <span>Get 10% Off Your First Appointment!</span>
                  </div>
                </div>
              </div>

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Success!</h3>
                  {discountCode && (
                    <div className="mb-4 p-4 rounded-lg bg-primary/10 border border-primary/20 max-w-xs mx-auto">
                      <p className="text-xs text-muted-foreground mb-1">Your Discount Code:</p>
                      <p className="text-2xl font-bold text-primary font-mono">{discountCode}</p>
                    </div>
                  )}
                  <p className="text-muted-foreground mb-4">
                    WhatsApp is opening with your discount code. Use it to book your appointment!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We'll send you exclusive updates and beauty tips via WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter your WhatsApp number"
                        className={cn(
                          "w-full h-12 pl-10 pr-4 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground",
                          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                          "transition-all duration-200",
                          error ? "border-red-500" : "border-border"
                        )}
                        disabled={isSubmitting}
                      />
                      {error && (
                        <p className="mt-2 text-sm text-red-500">{error}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="h-12 px-8 whitespace-nowrap bg-green-600 hover:bg-green-700 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Processing...</span>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Get Code via WhatsApp
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">
                    We'll send you a discount code via WhatsApp. No spam, promise!
                  </p>
                </form>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

