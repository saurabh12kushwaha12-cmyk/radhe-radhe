import { TestimonialCard } from "@/components/cards/testimonial-card"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { siteConfig } from "@/config/site"

export function Testimonials() {
  if (!siteConfig.features.testimonials) return null

  return (
    <section className="border-t border-border/60 bg-secondary/40 py-14 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by people who care about their space."
          align="center"
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {siteConfig.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}
