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
import { ScrollReveal } from "@/components/shared/scroll-reveal"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal delay={60}><TrustFeatures /></ScrollReveal>
        <ScrollReveal delay={90}><ServicesPreview /></ScrollReveal>
        <ScrollReveal delay={120}><ProductsShowcase /></ScrollReveal>
        <ScrollReveal delay={90}><Stats /></ScrollReveal>
        <ScrollReveal delay={60}><AboutPreview /></ScrollReveal>
        <ScrollReveal delay={90}><Testimonials /></ScrollReveal>
        <ScrollReveal delay={120}><Gallery /></ScrollReveal>
        <ScrollReveal delay={90}><Faq /></ScrollReveal>
        <ScrollReveal delay={60}><Cta /></ScrollReveal>
      </main>
      <SiteFooter />
    </>
  )
}
