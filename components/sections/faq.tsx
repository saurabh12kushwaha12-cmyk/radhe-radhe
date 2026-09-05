import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container } from "@/components/shared/container"
import { SectionHeading } from "@/components/shared/section-heading"
import { siteConfig } from "@/config/site"

export function Faq() {
  if (!siteConfig.features.faq) return null

  return (
    <section className="border-t border-border/60 py-14 sm:py-20">
      <Container className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" align="center" />
        <Accordion>
          {siteConfig.faq.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
