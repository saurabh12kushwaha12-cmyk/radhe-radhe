import { AboutPreview } from "@/components/sections/about-preview"
import { Cta } from "@/components/sections/cta"
import { Faq } from "@/components/sections/faq"
import { Gallery } from "@/components/sections/gallery"
import { Hero } from "@/components/sections/hero"
import { ProductsShowcase } from "@/components/sections/products-showcase"
import { ServicesPreview } from "@/components/sections/services-preview"
import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import { TrustFeatures } from "@/components/sections/trust-features"
import { SiteFooter } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/header"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustFeatures />
        <ServicesPreview />
        <ProductsShowcase />
        <Stats />
        <AboutPreview />
        <Testimonials />
        <Gallery />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  )
}
