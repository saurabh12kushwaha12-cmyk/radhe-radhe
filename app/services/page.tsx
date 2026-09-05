import { Check } from "lucide-react"
import type { Metadata } from "next"
import { Cta } from "@/components/sections/cta"
import { SiteFooter } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/header"
import { iconMap } from "@/components/shared/icon-map"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Services",
  description: "Interior design consultation, space planning, and custom furniture from Cove Home.",
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border/60 py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Services"
              title="Design guidance for spaces that actually work for you."
              description="Whether you need a single layout question answered or a full-home plan, our services scale to what you actually need."
              align="center"
              className="mx-auto max-w-2xl"
            />
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container className="flex flex-col gap-16">
            {siteConfig.services.map((service, index) => {
              const Icon = iconMap[service.icon]
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`grid items-start gap-8 md:grid-cols-2 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className="flex flex-col gap-4">
                    <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h2 className="font-serif text-2xl text-foreground sm:text-3xl">{service.title}</h2>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3 rounded-xl border border-border/70 bg-card p-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </Container>
        </section>

        <Cta />
      </main>
      <SiteFooter />
    </>
  )
}
