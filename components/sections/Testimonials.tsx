"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/common/Card"
import { Sparkles } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aarohi S.",
      rating: 5,
      text: "The finish was so neat and glossy. I sent a reference photo and the final nails looked even better in person.",
      location: "Gel Polish Client",
    },
    {
      id: 2,
      name: "Priya M.",
      rating: 5,
      text: "Loved how clearly the services and pricing were explained before booking. My extensions looked elegant and natural.",
      location: "Extension Client",
    },
    {
      id: 3,
      name: "Neha K.",
      rating: 5,
      text: "The nail art was minimal, classy, and exactly my vibe. I got compliments the same day.",
      location: "Nail Art Client",
    },
    {
      id: 4,
      name: "Ishita R.",
      rating: 5,
      text: "Home service made the appointment so convenient. The setup was clean and the result felt professional.",
      location: "Home Service Client",
    },
    {
      id: 5,
      name: "Tanvi P.",
      rating: 5,
      text: "My refill was done beautifully and my nails felt fresh again without changing the whole set.",
      location: "Refill Client",
    },
    {
      id: 6,
      name: "Rhea D.",
      rating: 5,
      text: "Clean removal, no roughness, and great aftercare tips. I felt confident booking my next set already.",
      location: "Removal Client",
    },
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real nails, real reactions, and finishes made to look good in every close-up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden rounded-3xl border-white/70 bg-white/75 backdrop-blur hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-16 w-16 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

