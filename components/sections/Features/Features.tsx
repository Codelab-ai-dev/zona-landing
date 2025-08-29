"use client"

import { Users, Calendar, BarChart3, Shield, Zap, Trophy } from "lucide-react"
import FeatureCard from "./FeatureCard"

export const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Gestión de Equipos",
      description: "Registra equipos, jugadores y cuerpo técnico. Mantén toda la información organizada."
    },
    {
      icon: Calendar,
      title: "Programación de Partidos",
      description: "Crea calendarios automáticos, programa partidos y envía notificaciones a los equipos."
    },
    {
      icon: BarChart3,
      title: "Estadísticas Avanzadas",
      description: "Tablas de posiciones en tiempo real, estadísticas de jugadores y reportes detallados."
    },
    {
      icon: Shield,
      title: "Gestión de Sanciones",
      description: "Contamos con un sistema de control de asistencias por reconocimiento facial de última generación."
    },
    {
      icon: Zap,
      title: "Resultados en Vivo",
      description: "Actualiza marcadores en tiempo real y mantén a todos informados durante los partidos."
    },
    {
      icon: Trophy,
      title: "Múltiples Torneos",
      description: "Gestiona diferentes categorías y torneos simultáneamente desde una sola plataforma."
    }
  ]

  return (
    <section id="caracteristicas" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Todo lo que necesitas para gestionar tu liga
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Herramientas profesionales diseñadas específicamente para organizadores de ligas de fútbol
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
