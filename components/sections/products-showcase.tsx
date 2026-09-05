import Link from "next/link"
import { ProductCard } from "@/components/cards/product-card"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function ProductsShowcase() {
  if (!siteConfig.features.products) return null

  const products = siteConfig.products.slice(0, 4)

  return (
    <section className="py-14 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Shop" title="Pieces made to be lived with." />
          <Button variant="outline" render={<Link href="/products" />}>
            View all products
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
