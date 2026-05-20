"use client"

import { useState } from "react"
import { CheckCircle2, MessageCircle, Phone, ArrowRight } from "lucide-react"

export function Newsletter() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const formatPhone = (phone: string) => phone.replace(/\D/g, "")
  const validatePhone = (phone: string) => {
    const cleaned = formatPhone(phone)
    return cleaned.length >= 10 && cleaned.length <= 15
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!phoneNumber || !validatePhone(phoneNumber)) {
      setError("Please enter a valid WhatsApp number")
      return
    }
    setIsSubmitting(true)
    try {
      const businessWhatsApp = "919429031140"
      const message = encodeURIComponent(
        `Hello Nails Villa by Rutika!\n\nMy WhatsApp number: ${phoneNumber}\nI'd love to plan a nail appointment in Ahmedabad — please share availability and design guidance.`
      )
      await new Promise((r) => setTimeout(r, 400))
      window.open(`https://wa.me/${businessWhatsApp}?text=${message}`, "_blank")
      setIsSuccess(true)
      setPhoneNumber("")
      setTimeout(() => setIsSuccess(false), 5000)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-cream py-20 sm:py-24"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] dark-card p-10 sm:p-14 elegant-shadow">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-champagne/15 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-mocha/30 blur-3xl"></div>

          <div className="relative text-center">
            <p className="section-eyebrow text-champagne/80 mb-4">
              ✦ &nbsp; Appointment Concierge &nbsp; ✦
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight tracking-tight text-ivory">
              Tell me your{" "}
              <span className="font-serif italic">nail mood</span>
            </h2>
            <p className="mt-5 mx-auto max-w-xl font-serif text-lg leading-relaxed text-ivory/70 italic">
              Drop your number and I&apos;ll continue the conversation on
              WhatsApp — availability, design ideas, and home-service requests.
            </p>

            {isSuccess ? (
              <div className="mt-10">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-espresso">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <p className="mt-5 artist-signature text-3xl text-champagne">
                  WhatsApp opening
                </p>
                <p className="mt-2 font-serif text-base text-ivory/65 italic">
                  Send the pre-filled message and we&apos;ll take it from there.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-ivory/55" strokeWidth={1.5} />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Your WhatsApp number"
                    className="h-14 w-full rounded-full border border-ivory/20 bg-ivory/10 pl-12 pr-4 font-serif text-base text-ivory placeholder:text-ivory/40 backdrop-blur transition-all focus:border-champagne focus:outline-none focus:bg-ivory/15"
                    disabled={isSubmitting}
                  />
                </div>
                {error && <p className="mt-3 text-sm text-champagne/90 italic">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-7 py-4 text-[12px] font-medium tracking-[0.22em] uppercase text-espresso transition-all hover:bg-champagne disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span>Opening WhatsApp</span>
                      <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-espresso border-t-transparent"></div>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-4 w-4" />
                      Continue on WhatsApp
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
