import type { Metadata } from "next"
import Link from "next/link"
import { ProductCard } from "@/components/cards/product-card"
import { SiteFooter } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/header"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Products",
  description: "Shop furniture and home goods from Cove Home.",
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const categories = Array.from(new Set(siteConfig.products.map((p) => p.category)))
  const products = category ? siteConfig.products.filter((p) => p.category === category) : siteConfig.products

  return (
    <>
      <SiteHeader />
      <ScrollReveal>
      <main>
        <section className="border-b border-border/60 py-14 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Shop"
              title="Furniture & home goods for considered living."
              description="A small, considered collection — built to last, not to trend."
            />
          </Container>
        </section>

        <section className="py-14 sm:py-16">
          <Container className="flex flex-col gap-10">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/products"
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  !category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:border-foreground/30",
                )}
              >
                All
              </Link>
              {categories.map((c) => (
                <Link
                  key={c}
                  href={`/products?category=${encodeURIComponent(c)}`}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                    category === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-foreground hover:border-foreground/30",
                  )}
                >
                  {c}
                </Link>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      </ScrollReveal>
      <SiteFooter />
    </>
  )
}
