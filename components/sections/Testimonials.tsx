"use client"

import { Star, Quote, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/common/Card"

export function Testimonials() {
  // Ordered by content length (shortest → longest) so each row contains
  // cards of similar height, keeping the grid visually balanced.
  const testimonials = [
    {
      id: 5,
      name: "Kinjal",
      rating: 5,
      text: "Finally got my dream nail set! Can’t stop staring at them. Thank you NailsVilla by Rutika for amazing nails.",
      location: "Dream Set Client",
    },
    {
      id: 7,
      name: "Krupali",
      rating: 5,
      text: "Absolutely obsessed with my nails! The shape, detailing, and finish turned out even prettier than I imagined. So clean, elegant, and long lasting.",
      location: "Signature Set Client",
    },
    {
      id: 2,
      name: "Kinjal Prajapati",
      rating: 5,
      text: "Thank you NailsVilla for making my special day even more beautiful with such amazing nail art. Absolutely loved the creativity, perfection, and sweet service.",
      location: "Special Occasion Client",
    },
    {
      id: 4,
      name: "Dhatri",
      rating: 5,
      text: "You understood exactly what I wanted and paid attention to every little detail. The final nails turned out even better than I imagined. Absolutely loved the result!",
      location: "Custom Design Client",
    },
    {
      id: 1,
      name: "Shikha",
      rating: 5,
      text: "Had a really great experience getting nail art done by Rutika! She manages her work and passion for nail art so beautifully. The designs were neat, creative, and exactly how I wanted them. Highly recommended for anyone looking for beautiful nail art from the comfort of home. I have been her repeat customer for every go to event.",
      location: "Repeat Client, Event Nails",
    },
    {
      id: 6,
      name: "Aditi",
      rating: 5,
      text: "I’ve always been a long nail girl at heart, but with super short nails I never thought it would actually look this beautiful on me. Then Rutika from NailsVilla made it happen. She completely transformed my hands and gave me the prettiest nails I always dreamed of. Now for every big occasion, I trust only her. No one has ever made my hands feel this beautiful and confident. Thank you for always working your magic.",
      location: "Loyal Client, Special Occasions",
    },
  ]

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 xl:py-24 bg-muted">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
        {/* ============ HEADER ============ */}
        <div className="text-center mb-12 sm:mb-16" data-section-eyebrow>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real nails, real reactions, and finishes made to look good in every close up.
          </p>
        </div>

        {/* ============ TESTIMONIALS ============
             Uses flex-wrap with justify-center so any orphan cards on the last
             row center themselves naturally — works for 5, 6, 7, or any count
             without needing layout tweaks per card-count change. */}
        <div className="flex flex-wrap justify-center gap-6 xl:gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden rounded-3xl border-white/70 bg-white/75 backdrop-blur hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 flex flex-col w-full md:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-4rem)/3)]"
            >
              <CardContent className="p-6 pt-6 flex flex-col flex-1">
                {/* Decorative quote mark */}
                <div className="pointer-events-none absolute top-4 right-4 opacity-10">
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

                {/* Testimonial Text — flex-grow pushes author info to the bottom
                    so cards align nicely across rows even when text lengths vary. */}
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4 mt-auto">
                  <p className="font-semibold text-foreground leading-tight mb-1">
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
