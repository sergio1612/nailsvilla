import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { AboutLoading } from "@/components/sections/AboutLoading"

const About = dynamic(
  () => import("@/components/sections/About").then((mod) => mod.About),
  { loading: () => <AboutLoading /> }
)

export const metadata: Metadata = {
  title: "About Rutika | NailsVilla",
  description:
    "Meet Rutika Chauhan, founder of NailsVilla. Owner-led nail care in Ahmedabad since April 2021 — home studio appointments and home visits on request.",
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Suspense fallback={<AboutLoading />}>
        <About />
      </Suspense>
    </div>
  )
}
