"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/common/Card"
import { Sparkles } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely amazing experience! Rutika's attention to detail is incredible. My nails looked stunning and lasted for weeks. Highly recommend!",
      location: "Regular Client",
    },
    {
      id: 2,
      name: "Emily Chen",
      rating: 5,
      text: "Best nail salon I've ever been to! The designs are creative and unique. The service is top-notch and the atmosphere is so relaxing.",
      location: "Premium Member",
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      rating: 5,
      text: "Rutika is a true artist! She took my vision and made it even better. The quality is exceptional and I always get compliments on my nails.",
      location: "VIP Client",
    },
    {
      id: 4,
      name: "Jessica Williams",
      rating: 5,
      text: "I've been coming here for months and I'm never disappointed. The nail art is always perfect and the service is friendly and professional.",
      location: "Loyal Customer",
    },
    {
      id: 5,
      name: "Amanda Taylor",
      rating: 5,
      text: "The gel extensions I got here are the best! They look so natural and have lasted perfectly. Rutika really knows her craft.",
      location: "New Client",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      rating: 5,
      text: "Incredible work! Every time I visit, I'm amazed by the creativity and skill. This is my go-to place for all my nail care needs.",
      location: "Regular Client",
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
            Don't just take our word for it. See what our satisfied clients have to say about their experience at NailsVilla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
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
                  "{testimonial.text}"
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

