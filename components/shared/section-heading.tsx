import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">{eyebrow}</span>
      ) : null}
      <h2 className="text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p> : null}
    </div>
  )
}
