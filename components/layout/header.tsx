import Link from "next/link"
import { AnnouncementBar } from "@/components/layout/announcement-bar"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/80">
      <AnnouncementBar />
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-serif text-2xl font-medium tracking-tight text-foreground">
          {siteConfig.brand.logoText}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {siteConfig.nav.primary.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" className="hidden md:inline-flex" render={<Link href={siteConfig.nav.cta.href} />}>
            {siteConfig.nav.cta.label}
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
