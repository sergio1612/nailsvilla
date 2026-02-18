import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"
import { Gallery } from "@/components/sections/Gallery"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
