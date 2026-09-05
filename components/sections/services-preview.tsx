import Link from "next/link"
import { ServiceCard } from "@/components/cards/service-card"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function ServicesPreview() {
  return (
    <section className="border-t border-border/60 bg-secondary/40 py-14 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="What We Do" title="Design services, from a single room to a full home." />
          <Button variant="outline" render={<Link href="/services" />}>
            View all services
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
