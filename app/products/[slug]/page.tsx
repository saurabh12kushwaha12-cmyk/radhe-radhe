import { Check } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { AddToCartButton } from "@/components/products/add-to-cart-button"
import { ProductGallery } from "@/components/products/product-gallery"
import { QuantitySelector } from "@/components/products/quantity-selector"
import { ProductCard } from "@/components/cards/product-card"
import { SiteFooter } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/header"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/shared/container"
import { siteConfig } from "@/config/site"

export function generateStaticParams() {
  return siteConfig.products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = siteConfig.products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: product.title,
    description: product.shortDescription,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = siteConfig.products.find((p) => p.slug === slug)
  if (!product) notFound()

  const related = siteConfig.products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main>
        <Container className="py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/products" className="hover:text-foreground">
              Products
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{product.title}</span>
          </nav>

          <div className="grid gap-10 md:grid-cols-2">
            <ProductGallery images={product.images} />

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {product.category}
                </span>
                <div className="flex items-center gap-3">
                  <h1 className="font-serif text-3xl text-foreground sm:text-4xl">{product.title}</h1>
                  {product.badge ? <Badge>{product.badge}</Badge> : null}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-semibold text-foreground">${product.price.toLocaleString()}</span>
                  {product.compareAtPrice ? (
                    <span className="text-base text-muted-foreground line-through">
                      ${product.compareAtPrice.toLocaleString()}
                    </span>
                  ) : null}
                </div>
              </div>

              <p className="text-pretty leading-relaxed text-muted-foreground">{product.description}</p>

              <ul className="flex flex-col gap-2.5">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 pt-2">
                <QuantitySelector />
                <AddToCartButton />
              </div>
              <p className="text-xs text-muted-foreground">
                This is a demo checkout action — no payment is processed.
              </p>
            </div>
          </div>
        </Container>

        {related.length > 0 ? (
          <section className="border-t border-border/60 py-14 sm:py-20">
            <Container className="flex flex-col gap-8">
              <h2 className="font-serif text-2xl text-foreground sm:text-3xl">You may also like</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {related.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.slug} product={relatedProduct} />
                ))}
              </div>
            </Container>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  )
}
