import { Clock, Mail, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { SiteFooter } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/header"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Cove Home to book a design consultation or ask a question.",
}

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.contact.phoneDisplay, href: `tel:${siteConfig.contact.phone}` },
  { icon: MapPin, label: "Studio", value: siteConfig.contact.address },
  { icon: Clock, label: "Hours", value: siteConfig.contact.hours },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <ScrollReveal>
      <main>
        <section className="border-b border-border/60 py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk about your space."
              description="Tell us a little about your project and we'll follow up within one business day."
            />
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div className="flex flex-col gap-6">
              {contactDetails.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        {item.label}
                      </span>
                      <span className="text-sm font-medium text-foreground">{item.value}</span>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={item.label} href={item.href} className="rounded-lg transition-opacity hover:opacity-80">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>

            <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </Container>
        </section>
      </main>
      </ScrollReveal>
      <SiteFooter />
    </>
  )
}
