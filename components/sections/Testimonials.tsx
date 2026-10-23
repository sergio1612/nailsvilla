"use client";

import { useEffect, useState } from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/common/Card";
import { useCarouselAutoplay } from "@/lib/useCarouselAutoplay";

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  text: string;
  location: string;
};
console.log("test");

const testimonials: Testimonial[] = [
  {
    id: 5,
    name: "Kinjal Agrawal",
    rating: 5,
    text: "Finally got my dream nail set! Can’t stop staring at them. Thank you NailsVilla by Rutika for amazing nails.",
    location: "Engagement Bride Nails",
  },
  {
    id: 1,
    name: "Shikha Sharma",
    rating: 5,
    text: "Had a really great experience getting nail art done by Rutika! She manages her work and passion for nail art so beautifully. The designs were neat, creative, and exactly how I wanted them. Highly recommended for anyone looking for beautiful nail art from the comfort of home. I have been her repeat customer for every go to event.",
    location: "Repeat Client, Event Nails",
  },
  {
    id: 4,
    name: "Dhatri Kapuriya",
    rating: 5,
    text: "You understood exactly what I wanted and paid attention to every little detail. The final nails turned out even better than I imagined. Absolutely loved the result!",
    location: "Custom Bridal Nails",
  },
  {
    id: 2,
    name: "Kinjal Prajapati",
    rating: 5,
    text: "Thank you NailsVilla for making my special day even more beautiful with such amazing nail art. Absolutely loved the creativity, perfection, and sweet service.",
    location: "Bridal Nails",
  },
  {
    id: 6,
    name: "Aditi Singh",
    rating: 5,
    text: "I’ve always been a long nail girl at heart, but with super short nails I never thought it would actually look this beautiful on me. Then Rutika from NailsVilla made it happen. She completely transformed my hands and gave me the prettiest nails I always dreamed of. Now for every big occasion, I trust only her. No one has ever made my hands feel this beautiful and confident. Thank you for always working your magic.",
    location: "Loyal Client, Special Occasions",
  },
  {
    id: 7,
    name: "Krupali Jagad",
    rating: 5,
    text: "Absolutely obsessed with my nails! The shape, detailing, and finish turned out even prettier than I imagined. So clean, elegant, and long lasting.",
    location: "Signature Nails",
  },
];

function TestimonialCard({
  testimonial,
  index,
  layout,
}: {
  testimonial: Testimonial;
  index: number;
  layout: "carousel" | "grid";
}) {
  return (
    <Card
      data-testimonial-id={testimonial.id}
      data-carousel-index={layout === "carousel" ? index : undefined}
      className={`relative flex flex-col overflow-hidden rounded-3xl border-white/70 bg-white/75 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 ${
        layout === "carousel"
          ? "w-[85vw] max-w-md min-h-[300px] shrink-0 snap-center"
          : "w-full md:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-4rem)/3)]"
      }`}
    >
      <CardContent className="flex flex-1 flex-col p-6 pt-6">
        <div className="pointer-events-none absolute top-4 right-4 opacity-10">
          <Quote className="h-16 w-16 text-primary" />
        </div>

        <div className="mb-4 flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>

        <p className="relative z-10 mb-6 flex-1 leading-relaxed text-muted-foreground">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div className="mt-auto border-t border-border pt-4">
          <p className="mb-1 font-semibold leading-tight text-foreground">
            {testimonial.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {testimonial.location}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { carouselRef, scrollToIndex } = useCarouselAutoplay({
    itemCount: testimonials.length,
    currentIndex: activeIndex,
    onIndexChange: setActiveIndex,
  });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = carousel.querySelectorAll<HTMLElement>(
      "[data-testimonial-id]",
    );
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const id = Number(entry.target.getAttribute("data-testimonial-id"));
            const index = testimonials.findIndex((t) => t.id === id);
            if (index >= 0) setActiveIndex(index);
          }
        });
      },
      { root: carousel, threshold: [0.5, 0.75, 1] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-muted py-16 sm:py-20 xl:py-24"
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="mb-10 text-center sm:mb-16" data-section-eyebrow>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Client Reviews</span>
          </div>
          <h2 className="mb-5 font-display text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Real nails, real reactions, and finishes made to look good in every
            close up.
          </p>
        </div>

        <p className="mb-6 text-center text-sm text-muted-foreground sm:hidden">
          Swipe to read more reviews
        </p>

        {/* Mobile carousel */}
        <div
          ref={carouselRef}
          className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-none sm:hidden"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              layout="carousel"
            />
          ))}
        </div>

        {/* Dot indicators — mobile only */}
        <div
          className="mt-4 flex justify-center gap-2 sm:hidden"
          aria-label="Review navigation"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to review ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-primary"
                  : "w-2 bg-primary/25 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden flex-wrap justify-center gap-6 sm:flex xl:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              layout="grid"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
