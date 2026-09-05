import Link from "next/link"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Cta() {
  const { cta } = siteConfig

  return (
    <section className="border-t border-border/60 bg-primary py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-balance font-serif text-3xl leading-tight text-primary-foreground sm:text-4xl">
          {cta.title}
        </h2>
        <p className="max-w-xl text-pretty leading-relaxed text-primary-foreground/70">{cta.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            variant="secondary"
            className="h-11 px-6"
            render={<Link href={cta.primaryCta.href} />}
          >
            {cta.primaryCta.label}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            render={<Link href={cta.secondaryCta.href} />}
          >
            {cta.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
