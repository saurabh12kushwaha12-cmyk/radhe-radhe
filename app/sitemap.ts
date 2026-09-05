import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = siteConfig.nav.primary.map((link) => ({
    url: link.href,
    lastModified: new Date(),
  }))

  const productRoutes = siteConfig.products.map((product) => ({
    url: `/products/${product.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...productRoutes]
}
