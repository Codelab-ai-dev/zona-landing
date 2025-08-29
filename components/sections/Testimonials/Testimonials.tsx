"use client"

import TestimonialCard from "./TestimonialCard"

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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-xl text-muted-foreground">Organizadores de ligas de todo el país confían en Zona-Gol</p>
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
