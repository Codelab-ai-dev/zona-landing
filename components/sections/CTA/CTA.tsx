"use client"

import { FormEvent, useState } from "react"

import { CalendarClock, Check, Mail, ShieldCheck, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { CtaContent } from "@/types/landing"

interface CTAProps {
  content: CtaContent
}

export const CTA = ({ content }: CTAProps) => {
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    // TODO: connect with marketing automation endpoint
    console.info("CTA lead", Object.fromEntries(formData))
    setSubmitted(true)
    form.reset()
    setTimeout(() => setSubmitted(false), 3200)
  }

  return (
    <section id="cta" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background/10 via-background/40 to-background" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,420px)]">
          <div className="mx-auto flex w-full max-w-3xl flex-col justify-center text-center lg:mx-0 lg:text-left">
            <Badge className="mb-5 inline-flex w-fit items-center gap-2 border-primary/30 bg-primary/10 text-primary">
              <ShieldCheck className="size-4" />
              {content.badge}
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{content.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground/80 sm:text-xl">{content.description}</p>
            <ul className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {content.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="group flex items-center gap-3 rounded-2xl border border-border/40 bg-white/5 px-4 py-3 text-sm text-foreground/80 backdrop-blur-lg transition hover:border-primary/60 hover:bg-primary/10 hover:text-foreground"
                >
                  <span className="flex size-8 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary transition group-hover:border-primary group-hover:bg-primary/20">
                    <Check className="size-4" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 rounded-full border border-border/40 bg-background/50 px-4 py-3 text-sm text-muted-foreground/80 backdrop-blur-xl">
                <Users className="size-4 text-primary" />
                <span>{content.leadStat}</span>
              </div>
              <Dialog open={calendarOpen} onOpenChange={setCalendarOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="group border border-primary/50 bg-primary/15 text-primary transition hover:-translate-y-0.5 hover:bg-primary/25 hover:text-primary"
                  >
                    <CalendarClock className="mr-2 size-4" />
                    Abrir calendario de demos
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl overflow-hidden border-border/40 bg-background/95 p-0 backdrop-blur-xl">
                  <DialogHeader className="space-y-2 px-6 pt-6 text-left">
                    <DialogTitle className="text-2xl font-semibold text-foreground">{content.calendarTitle}</DialogTitle>
                    <DialogDescription className="text-muted-foreground">{content.calendarDescription}</DialogDescription>
                  </DialogHeader>
                  <div className="aspect-video w-full bg-muted/30">
                    <iframe
                      title={content.calendarTitle}
                      src={content.calendarUrl}
                      className="size-full"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex items-center justify-between px-6 py-4 text-xs text-muted-foreground">
                    <span>{content.calendarDuration}</span>
                    <span>{content.calendarCost}</span>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              ¿Prefieres escribirnos? Envíanos un correo a
              <a
                href={`mailto:${content.supportEmail}`}
                className="ml-2 inline-flex items-center text-primary underline-offset-4 hover:underline"
              >
                {content.supportEmail}
              </a>
            </p>
          </div>

          <Card className="relative overflow-hidden border border-border/40 bg-background/80 p-8 shadow-[0_24px_55px_-35px_rgba(15,118,110,0.8)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative">
              <h3 className="text-2xl font-semibold text-foreground">{content.formTitle}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{content.formDescription}</p>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="cta-name" className="text-sm font-medium text-foreground">
                    Nombre y apellido
                  </Label>
                  <Input
                    id="cta-name"
                    name="name"
                    required
                    placeholder="Alex Rodríguez"
                    className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cta-email" className="text-sm font-medium text-foreground">
                    Email profesional
                  </Label>
                  <Input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@liga.com"
                    className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/60"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  <Mail className="mr-2 size-4" />
                  Quiero mi demo personalizada
                </Button>
                <div className="flex items-center gap-2 rounded-xl border border-border/40 bg-white/5 px-3 py-3 text-xs text-muted-foreground backdrop-blur-lg">
                  <ShieldCheck className="size-4 text-primary" />
                  Guardamos tus datos siguiendo estándares GDPR.
                </div>
                {submitted && (
                  <p className="text-sm font-medium text-primary">{content.formSuccess}</p>
                )}
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CTA
