import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { GalleryLoading } from "@/components/sections/GalleryLoading"

const Gallery = dynamic(
  () => import("@/components/sections/Gallery").then((mod) => mod.Gallery),
  { loading: () => <GalleryLoading /> }
)

export const metadata: Metadata = {
  title: "Nail Art Gallery | NailsVilla",
  description:
    "Browse hand-painted nail art by NailsVilla — gel polish, extensions, overlays, French tips, glitter, and custom designs by Rutika in Ahmedabad.",
}

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <Suspense fallback={<GalleryLoading />}>
        <Gallery />
      </Suspense>
    </div>
  )
}
