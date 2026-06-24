import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BackToTop } from "@/components/common/BackToTop"
import { Loader } from "@/components/common/Loader"

type SiteLayoutProps = {
  children: React.ReactNode
  showLoader?: boolean
}

export function SiteLayout({ children, showLoader = false }: SiteLayoutProps) {
  return (
    <main className="min-h-screen">
      {showLoader && <Loader />}
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </main>
  )
}
