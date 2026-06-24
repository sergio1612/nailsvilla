import type { Metadata } from "next"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { About } from "@/components/sections/About"

export const metadata: Metadata = {
  title: "About Rutika | NailsVilla",
  description:
    "Meet Rutika Chauhan, founder of NailsVilla. Owner-led nail care in Ahmedabad since April 2021 — home studio appointments and home visits on request.",
}

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="pt-20">
        <About />
      </div>
    </SiteLayout>
  )
}
