"use client"

import { AnimatedCounter } from "@/components/AnimatedCounter"
import TestimonialCard from "./TestimonialCard"

const stats = [
  {
    label: "Ligas activas gestionadas",
    value: 58,
    suffix: "+",
    description: "Comunidades que administran su temporada completa en Zona-Gol"
  },
  {
    label: "Partidos automatizados por temporada",
    value: 1280,
    suffix: "+",
    duration: 1800,
    description: "Calendarios, resultados y notificaciones gestionados sin trabajo manual"
  },
  {
    label: "Tiempo administrativo ahorrado",
    value: 35,
    suffix: "%",
    duration: 1500,
    description: "Reducción promedio del tiempo dedicado a tareas operativas"
  }
]

export const Testimonials = () => {
  const testimonials = [
    {
      content: "\"Zona-Gol transformó completamente la organización de nuestra liga. Ahora todo es más profesional y eficiente.\"",
      author: "Juan Martínez",
      role: "Liga Municipal de Fútbol",
      initials: "JM"
    },
    {
      content: "\"La facilidad para programar partidos y mantener las estadísticas actualizadas nos ahorra horas de trabajo cada semana.\"",
      author: "Ana Rodríguez",
      role: "Liga Femenina Regional",
      initials: "AR"
    },
    {
      content: "\"Los equipos y jugadores están encantados con la transparencia y la información en tiempo real que proporciona la plataforma.\"",
      author: "Carlos López",
      role: "Torneo Empresarial",
      initials: "CL"
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-xl text-muted-foreground">Organizadores de ligas de todo el país confían en Zona-Gol</p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-background/70 p-6 shadow-[0_30px_70px_-50px_rgba(15,23,42,0.85)] backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" aria-hidden />
              <div className="relative space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">{stat.label}</p>
                <p className="text-4xl font-semibold text-foreground md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={stat.duration} />
                </p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
