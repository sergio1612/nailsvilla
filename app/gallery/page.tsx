import type { Metadata } from "next"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { Gallery } from "@/components/sections/Gallery"

export const metadata: Metadata = {
  title: "Nail Art Gallery | NailsVilla",
  description:
    "Browse hand-painted nail art by NailsVilla — gel polish, extensions, overlays, French tips, glitter, and custom designs by Rutika in Ahmedabad.",
}

export default function GalleryPage() {
  return (
    <SiteLayout>
      <div className="pt-20">
        <Gallery />
      </div>
    </SiteLayout>
  )
}
