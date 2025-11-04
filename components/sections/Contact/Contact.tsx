"use client"

import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import { Card } from "@/components/ui/card"
import type { ContactContent } from "@/types/landing"

interface ContactProps {
  content: ContactContent
}

export const Contact = ({ content }: ContactProps) => {
  return (
    <section id="contacto" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background/40 via-background to-background/60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,_rgba(99,102,241,0.25),_transparent_55%)]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            {content.badge}
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl">{content.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{content.description}</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-8">
            <Card className="overflow-hidden border border-border/40 bg-background/70 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.6)] backdrop-blur-2xl">
              <div className="aspect-[5/3] w-full">
                <iframe
                  title="Mapa de oficinas"
                  src={content.map.embedUrl}
                  className="size-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  aria-label="Mapa con la sede de Zona-Gol"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/40 px-6 py-4 text-sm text-muted-foreground">
                <span>{content.map.message}</span>
                <span className="inline-flex items-center gap-2 text-primary">{content.map.responseTime}</span>
              </div>
            </Card>
            <ContactInfo support={content.support} escalation={content.escalation} />
          </div>

          <ContactForm form={content.form} />
        </div>
      </div>
    </section>
  )
}

export default Contact
