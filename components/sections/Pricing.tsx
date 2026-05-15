"use client"

import { forwardRef, useRef, useState, type ReactNode } from "react"
import HTMLFlipBook from "react-pageflip"
import { Button } from "@/components/common/Button"
import { ArrowLeft, ArrowRight, Check, Gem, Home, Sparkles } from "lucide-react"

type FlipBookHandle = {
  pageFlip: () => {
    flipNext: () => void
    flipPrev: () => void
  }
}

type BrochurePageProps = {
  children: ReactNode
  className?: string
}

const BrochurePage = forwardRef<HTMLDivElement, BrochurePageProps>(
  ({ children, className = "" }, ref) => (
    <div
      ref={ref}
      className={`overflow-hidden bg-white text-foreground shadow-2xl ${className}`}
    >
      {children}
    </div>
  )
)

BrochurePage.displayName = "BrochurePage"

export function Pricing() {
  const bookRef = useRef<FlipBookHandle>(null)
  const [currentPage, setCurrentPage] = useState(0)

  const services = [
    { name: "Gel Polish", price: "₹499", note: "Glossy, durable colour finish" },
    { name: "Temporary Extension", price: "₹799", note: "Event-ready length with a soft finish" },
    { name: "Gel Overlays", price: "₹999", note: "Strength and shine over natural nails" },
    { name: "Permanent Extension", price: "₹1299", note: "Long-lasting sculpted extensions" },
    { name: "Refilling", price: "₹599", note: "Refresh your extensions beautifully" },
    { name: "Gel Polish Removal", price: "₹299", note: "Gentle product removal" },
    { name: "Extension Removal", price: "₹499", note: "Careful removal with nail care" },
    { name: "Toe Extensions (Feet)", price: "₹899", note: "Polished toe extension service" },
  ]

  const highlights = [
    "Transparent INR pricing",
    "Service-first menu",
    "Design guidance on request",
  ]

  const servicePages = [
    services.slice(0, 3),
    services.slice(3, 6),
    services.slice(6),
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="relative overflow-hidden py-16 sm:py-20 xl:py-28 bg-background">
      <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-secondary/80 to-transparent"></div>
      <div className="absolute right-0 top-20 h-96 w-96 translate-x-1/3 rounded-full bg-primary/12 blur-3xl"></div>
      <div className="absolute bottom-12 left-0 h-96 w-96 -translate-x-1/3 rounded-full bg-accent/25 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/75 px-4 py-2 text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Flip-through brochure</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-tight text-balance">
              A boutique <span className="text-primary">nail menu</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Browse the price list like a mini brochure. Swipe the pages or use
              the arrows to flip through services and booking notes.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl rounded-4xl border border-white/70 bg-white/55 p-3 shadow-[0_30px_100px_rgba(117,59,162,0.18)] backdrop-blur sm:p-5">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"></div>
            <div className="relative flex justify-center overflow-hidden rounded-3xl py-4 sm:py-6">
              {currentPage === 0 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-6 hidden h-[500px] w-[360px] -translate-x-[102%] rounded-l-3xl border border-primary/10 bg-linear-to-br from-white via-secondary/45 to-white shadow-[inset_-18px_0_35px_rgba(117,59,162,0.10),0_22px_55px_rgba(117,59,162,0.12)] xl:block"
                >
                  <div className="absolute inset-y-8 right-4 w-px bg-primary/15"></div>
                  <div className="absolute left-8 top-8 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    Nails Villa
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-primary/10 bg-white/70 p-5 text-sm leading-relaxed text-muted-foreground">
                    Open the brochure to view service pricing, nail care notes,
                    and booking guidance.
                  </div>
                </div>
              )}
              <HTMLFlipBook
                ref={bookRef}
                width={340}
                height={540}
                size="stretch"
                minWidth={290}
                maxWidth={390}
                minHeight={460}
                maxHeight={540}
                startPage={0}
                drawShadow
                flippingTime={850}
                usePortrait
                startZIndex={10}
                autoSize
                maxShadowOpacity={0.36}
                showCover
                mobileScrollSupport
                clickEventForward
                useMouseEvents
                swipeDistance={24}
                showPageCorners
                disableFlipByClick={false}
                className="mx-auto"
                style={{ margin: "0 auto" }}
                onFlip={(event) => setCurrentPage(Number(event.data))}
              >
                <BrochurePage className="relative bg-linear-to-br from-foreground via-purple-800 to-primary text-white before:absolute before:inset-y-0 before:left-0 before:w-5 before:bg-white/10 before:shadow-[inset_-10px_0_18px_rgba(0,0,0,0.18)]">
                  <div className="relative flex h-full flex-col justify-between p-5 sm:p-7">
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15 blur-2xl"></div>
                    <div className="absolute bottom-8 right-6 text-[8rem] font-bold leading-none text-white/5 font-display">
                      ₹
                    </div>
                    <div className="relative">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-white text-primary shadow-2xl shadow-black/15">
                        <Gem className="h-7 w-7" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                        Nails Villa
                      </p>
                      <h3 className="mt-4 text-3xl font-bold leading-tight font-display">
                        Price list brochure
                      </h3>
                      <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
                        Modern gel work, clean extensions, refills, removal, and
                        soft luxe detailing by Rutika.
                      </p>
                    </div>
                    <div className="relative rounded-3xl bg-white/12 p-3.5 text-sm backdrop-blur">
                      Swipe or tap the corners to turn pages.
                    </div>
                  </div>
                </BrochurePage>

                {servicePages.map((pageServices, pageIndex) => (
                  <BrochurePage key={pageIndex} className="relative bg-[#fffbff] before:absolute before:inset-y-0 before:left-0 before:w-4 before:bg-linear-to-r before:from-primary/10 before:to-transparent after:absolute after:inset-y-6 after:right-2 after:w-px after:bg-primary/10">
                    <div className="relative flex h-full flex-col p-4 sm:p-5">
                      <div className="mb-3 border-b border-primary/10 pb-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                          Price menu {pageIndex + 1}
                        </p>
                        <h3 className="mt-1.5 text-2xl font-bold leading-tight font-display">
                          {pageIndex === 0
                            ? "Most requested"
                            : pageIndex === 1
                              ? "Extensions & care"
                              : "Finishing touches"}
                        </h3>
                      </div>
                      <div className="grid flex-1 content-start gap-2.5">
                        {pageServices.map((service, index) => (
                          <div
                            key={service.name}
                            className="rounded-[1.25rem] border border-primary/10 bg-white/90 p-3 shadow-sm"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <span className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-secondary text-xs font-bold text-primary">
                                  {String(pageIndex * 3 + index + 1).padStart(2, "0")}
                                </span>
                                <h4 className="text-lg font-semibold font-display">
                                  {service.name}
                                </h4>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-primary">
                                  {service.price}
                                </p>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                  onwards
                                </p>
                              </div>
                            </div>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                              {service.note}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BrochurePage>
                ))}

                <BrochurePage className="relative bg-[#fffbff] before:absolute before:inset-y-0 before:left-0 before:w-4 before:bg-linear-to-r before:from-primary/10 before:to-transparent after:absolute after:inset-y-6 after:right-2 after:w-px after:bg-primary/10">
                  <div className="flex h-full flex-col justify-between p-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                        How it works
                      </p>
                      <h3 className="mt-3 text-2xl font-bold font-display">
                        Simple booking, guided selection.
                      </h3>
                      <div className="mt-6 grid gap-2.5">
                        {highlights.map((item) => (
                          <div key={item} className="flex items-center gap-3 rounded-3xl bg-secondary/70 p-3.5 text-sm font-medium">
                            <Check className="h-4 w-4 shrink-0 text-primary" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="rounded-3xl border border-primary/10 bg-white/85 p-3.5 text-sm leading-relaxed text-muted-foreground">
                      Final pricing may vary only if custom art, charms, chrome,
                      or extra detailing is added.
                    </p>
                  </div>
                </BrochurePage>

                <BrochurePage className="relative bg-linear-to-br from-primary via-purple-600 to-accent text-white before:absolute before:inset-y-0 before:right-0 before:w-5 before:bg-white/10 before:shadow-[inset_10px_0_18px_rgba(0,0,0,0.16)]">
                  <div className="flex h-full flex-col justify-between p-5 sm:p-7">
                    <div>
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white text-primary shadow-xl shadow-black/10">
                        <Home className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                        Prior booking only
                      </p>
                      <h3 className="mt-4 text-3xl font-bold leading-tight font-display">
                        Ready to plan your set?
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/78">
                        Send your reference photo, preferred date, and area.
                        Rutika will guide you to the right service.
                      </p>
                    </div>
                    <Button
                      className="rounded-full bg-white px-7 text-primary hover:bg-white/90"
                      onClick={scrollToContact}
                    >
                      Book on WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </BrochurePage>
              </HTMLFlipBook>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 px-1 sm:mt-5">
              <Button
                variant="outline"
                className="rounded-full bg-white/80 px-4"
                onClick={() => bookRef.current?.pageFlip().flipPrev()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Prev
              </Button>
              <p className="text-center text-xs font-medium text-muted-foreground">
                Page {currentPage + 1} of 6
              </p>
              <Button
                className="rounded-full px-4"
                onClick={() => bookRef.current?.pageFlip().flipNext()}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-10 rounded-4xl border border-primary/10 bg-linear-to-r from-primary via-purple-600 to-accent p-6 text-primary-foreground shadow-2xl shadow-primary/20 sm:p-8">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                  <Home className="h-4 w-4" />
                  Need help choosing?
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display">
                  Send your nail reference and we will guide you to the right service.
                </h3>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/80">
                  Final pricing may vary only if custom art or extra detailing is added.
                </p>
              </div>
              <Button
                className="rounded-full bg-white px-7 text-primary hover:bg-white/90"
                onClick={scrollToContact}
              >
                Book on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
