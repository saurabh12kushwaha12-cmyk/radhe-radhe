"use client"

import { CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Frontend-only demo form. No backend, database, or email service is
// wired up in this Master template — submission simply confirms intent
// on screen. Connect this to a real endpoint when adapting for a client.
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border/70 bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-foreground">Thank you for reaching out</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          We&apos;ve received your message and will get back to you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>
      <Button type="submit" size="lg" className="w-fit px-6">
        Send message
      </Button>
    </form>
  )
}
