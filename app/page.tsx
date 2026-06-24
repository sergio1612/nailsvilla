import { SiteLayout } from "@/components/layout/SiteLayout"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { PressOnNails } from "@/components/sections/PressOnNails"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <SiteLayout showLoader>
      <Hero />
      <Services />
      <PressOnNails />
      <Pricing />
      <Testimonials />
      <Contact />
    </SiteLayout>
  )
}
