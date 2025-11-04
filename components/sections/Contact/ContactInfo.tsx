"use client"

import Link from "next/link"
import { Headset, Mail, MessageCircle, PhoneCall, Clock3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const ContactInfo = () => {
  const supportChannels = [
    {
      title: "Chat en vivo",
      description: "Disponible de 9:00 a 22:00 (CDMX)",
      action: "Abrir chat",
      href: "https://zona-gol.com/chat",
      icon: MessageCircle,
    },
    {
      title: "WhatsApp",
      description: "+52 55 1234 5678",
      action: "Enviar mensaje",
      href: "https://wa.me/525512345678",
      icon: PhoneCall,
    },
    {
      title: "Email prioritario",
      description: "soporte@zona-gol.com",
      action: "Escribir correo",
      href: "mailto:soporte@zona-gol.com",
      icon: Mail,
    },
    {
      title: "Mesa de ayuda",
      description: "Seguimiento de tickets críticos",
      action: "Crear ticket",
      href: "https://zona-gol.com/helpdesk",
      icon: Headset,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-border/40 bg-background/70 p-8 shadow-[0_18px_48px_-30px_rgba(56,189,248,0.65)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-2xl font-semibold text-foreground">Información de contacto</h3>
          <Badge className="border-primary/30 bg-primary/10 text-primary">Soporte humano real</Badge>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          El mismo equipo que opera ligas profesionales te atiende. El 92% de las solicitudes se resuelven en la primera
          interacción.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {supportChannels.map(({ title, description, action, href, icon: Icon }) => (
            <div
              key={title}
              className="group flex flex-col justify-between gap-4 rounded-2xl border border-border/40 bg-white/5 p-5 text-sm text-muted-foreground backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10 hover:text-foreground"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-9 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary transition group-hover:border-primary group-hover:bg-primary/25">
                  <Icon className="size-4" />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-foreground">{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="self-start border border-transparent text-primary transition hover:border-primary/40 hover:bg-primary/20"
                asChild
              >
                <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {action}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-3xl border border-border/40 bg-background/70 p-6 text-sm text-muted-foreground backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3 text-left">
          <span className="mt-1 inline-flex size-9 items-center justify-center rounded-full border border-secondary/40 bg-secondary/15 text-secondary">
            <Clock3 className="size-4" />
          </span>
          <div>
            <h4 className="text-base font-semibold text-foreground">Seguimiento priorizado</h4>
            <p>Escalamos incidentes críticos con ingenieros en menos de 30 minutos.</p>
          </div>
        </div>
        <Button
          variant="outline"
          className="border-primary/40 bg-primary/10 text-primary transition hover:-translate-y-0.5 hover:bg-primary/20"
          asChild
        >
          <Link href="#cta">Agendar demo</Link>
        </Button>
      </div>
    </div>
  )
}

export default ContactInfo
