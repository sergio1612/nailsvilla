"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"
import { Button } from "@/components/common/Button"
import { Check } from "lucide-react"

export function Pricing() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$35",
      description: "Perfect for regular maintenance",
      features: [
        "Classic Manicure",
        "Nail Shaping",
        "Cuticle Care",
        "Standard Polish",
      ],
    },
    {
      name: "Premium",
      price: "$55",
      description: "Most popular choice",
      features: [
        "Gel Manicure",
        "Nail Art Design",
        "Hand Massage",
        "Premium Polish",
        "Long-lasting Finish",
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "$85",
      description: "Ultimate pampering experience",
      features: [
        "Gel Extensions",
        "Custom Nail Art",
        "Extended Hand Massage",
        "Premium Products",
        "3D Nail Art Options",
        "Follow-up Care",
      ],
    },
  ]

  const additionalServices = [
    { service: "Pedicure", price: "$45" },
    { service: "Gel Pedicure", price: "$60" },
    { service: "Nail Repair", price: "$15" },
    { service: "Nail Removal", price: "$20" },
    { service: "French Tips", price: "+$10" },
    { service: "3D Nail Art", price: "+$25" },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display">
            Pricing <span className="text-primary">Plans</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your nail care needs. All prices are
            transparent with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-lg md:scale-105"
                  : "hover:shadow-lg transition-shadow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  onClick={scrollToContact}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {additionalServices.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-card border border-border"
              >
                <span className="font-medium">{item.service}</span>
                <span className="text-primary font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

