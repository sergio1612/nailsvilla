"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/common/Button"
import { MessageCircle, Sparkles, CheckCircle2, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { getCookie, setCookie } from "@/lib/cookies"

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
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

  useEffect(() => {
    setIsMounted(true)
    // Check if user has already seen/closed the popup
    const hasSeenPopup = getCookie("newsletter_popup_seen")
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000) // 2 seconds delay
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    // Set cookie to remember user has seen/closed the popup
    setCookie("newsletter_popup_seen", "true", 365) // Expires in 1 year
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
      
      // Set cookie to remember user has submitted
      setCookie("newsletter_popup_seen", "true", 365)
      
      // Close popup after showing success message
      setTimeout(() => {
        handleClose()
      }, 4000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isMounted || !isVisible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-foreground hover:text-primary transition-colors"
          aria-label="Close newsletter popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 sm:p-8">
          <div className="text-center mb-6 space-y-4">
            {/* Special Offer Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Special Offer</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              Get Your <span className="text-primary">Discount Code</span>
            </h2>

            {/* Description */}
            <p className="text-sm text-muted-foreground">
              Enter your WhatsApp number and we'll send you a discount code instantly!
            </p>
            
            {/* Incentive Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg">
                <span>🎉</span>
                <span>Get 10% Off Your First Appointment!</span>
              </div>
            </div>
          </div>

          {isSuccess ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 mb-4">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Success!</h3>
              {discountCode && (
                <div className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-xs text-muted-foreground mb-1">Your Discount Code:</p>
                  <p className="text-xl font-bold text-primary font-mono">{discountCode}</p>
                </div>
              )}
              <p className="text-sm text-muted-foreground mb-2">
                WhatsApp is opening with your discount code. Use it to book your appointment!
              </p>
              <p className="text-xs text-muted-foreground">
                This window will close automatically.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-3">
                <div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your WhatsApp number"
                      className={cn(
                        "w-full h-11 pl-10 pr-4 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                        "transition-all duration-200 text-sm",
                        error ? "border-red-500" : "border-border"
                      )}
                      disabled={isSubmitting}
                    />
                  </div>
                  {error && (
                    <p className="mt-2 text-xs text-red-500">{error}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-green-600 hover:bg-green-700 text-white"
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
      </div>
    </div>
  )
}

