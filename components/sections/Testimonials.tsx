"use client"

import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aarohi S.",
      rating: 5,
      text: "The finish was so neat and glossy. I sent a reference photo and the final nails looked even better in person.",
      service: "Gel Polish",
    },
    {
      id: 2,
      name: "Priya M.",
      rating: 5,
      text: "Loved how clearly the services and pricing were explained before booking. My extensions looked elegant and natural.",
      service: "Extensions",
    },
    {
      id: 3,
      name: "Neha K.",
      rating: 5,
      text: "The nail art was minimal, classy, and exactly my vibe. I got compliments the same day.",
      service: "Nail Art",
    },
    {
      id: 4,
      name: "Ishita R.",
      rating: 5,
      text: "Home service made the appointment so convenient. The setup was clean and the result felt completely professional.",
      service: "Home Service",
    },
    {
      id: 5,
      name: "Tanvi P.",
      rating: 5,
      text: "My refill was done beautifully and my nails felt fresh again without changing the whole set.",
      service: "Refilling",
    },
    {
      id: 6,
      name: "Rhea D.",
      rating: 5,
      text: "Clean removal, no roughness, and great aftercare tips. I felt confident booking my next set already.",
      service: "Removal & Care",
    },
  ]

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-cream py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-champagne/15 blur-3xl"></div>
      <div className="absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-taupe/15 blur-3xl"></div>

      <div className="container relative mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="section-eyebrow text-mocha/70 mb-4">
            ✦ &nbsp; Kind Words &nbsp; ✦
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight text-foreground">
            Notes from{" "}
            <span className="font-serif italic">happy clients</span>
          </h2>
          <p className="mt-6 font-serif text-xl leading-relaxed text-foreground/65 italic">
            Real nails, real reactions, real results.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="mx-auto max-w-4xl mb-12">
          <div className="rounded-[2rem] border border-taupe/15 bg-ivory/70 backdrop-blur p-10 sm:p-14 elegant-shadow text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-mocha text-mocha"
                  strokeWidth={1}
                />
              ))}
            </div>
            <p className="font-serif text-2xl sm:text-3xl leading-relaxed italic text-foreground/85 text-balance">
              &ldquo;{testimonials[0].text}&rdquo;
            </p>
            <div className="mt-8 divider-ornament">
              <span className="h-1 w-1 rounded-full bg-mocha"></span>
            </div>
            <p className="mt-6 artist-signature text-3xl text-mocha">
              {testimonials[0].name}
            </p>
            <p className="section-eyebrow text-foreground/55 mt-1">
              {testimonials[0].service}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="mx-auto max-w-6xl grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(1).map((t) => (
            <div
              key={t.id}
              className="group rounded-3xl border border-taupe/15 bg-ivory/60 backdrop-blur p-7 transition-all duration-500 hover:-translate-y-1 hover:elegant-shadow"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-mocha text-mocha"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <p className="font-serif text-base leading-relaxed italic text-foreground/75">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-taupe/20">
                <p className="artist-signature text-2xl text-mocha">{t.name}</p>
                <p className="text-[11px] tracking-[0.22em] uppercase text-foreground/55 mt-1">
                  {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
