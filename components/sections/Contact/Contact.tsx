"use client"

import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import { Card } from "@/components/ui/card"

export const Contact = () => {
  return (
    <section id="contacto" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background/40 via-background to-background/60" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,_rgba(99,102,241,0.25),_transparent_55%)]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Soporte humano
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl">Conversemos sobre tu liga</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Agenda una llamada, escríbenos por WhatsApp o comparte tu calendario. Nuestro equipo responde en menos de
            2 horas hábiles para ayudarte a profesionalizar tu torneo.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-8">
            <Card className="overflow-hidden border border-border/40 bg-background/70 shadow-[0_25px_60px_-40px_rgba(56,189,248,0.6)] backdrop-blur-2xl">
              <div className="aspect-[5/3] w-full">
                <iframe
                  title="Ubicación Zona-Gol"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.7661818464497!2d-99.16766219999999!3d19.3831707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fffe8f156d21%3A0x4a1a9ffb60f7ce4f!2sEstadio%20Ol%C3%ADmpico%20Universitario!5e0!3m2!1ses-419!2smx!4v1714500000000!5m2!1ses-419!2smx"
                  className="size-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  aria-label="Mapa con la sede de Zona-Gol"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/40 px-6 py-4 text-sm text-muted-foreground">
                <span>Visítanos en Ciudad Deportiva o agenda una reunión virtual.</span>
                <span className="inline-flex items-center gap-2 text-primary">
                  Tiempo de respuesta &lt; 2h
                </span>
              </div>
            </Card>
            <ContactInfo />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
