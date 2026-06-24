import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BackToTop } from "@/components/common/BackToTop"

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">{children}</div>
      <Footer />
      <BackToTop />
    </div>
  )
}
