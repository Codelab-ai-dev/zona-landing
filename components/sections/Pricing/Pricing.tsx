"use client"

import { Button } from "@/components/ui/button"
import PricingCard from "./PricingCard"

export const Pricing = () => {
  const pricingPlans = [
    {
      title: "Básico",
      description: "Perfecto para ligas pequeñas y torneos locales",
      price: "$29",
      features: [
        { text: "Hasta 8 equipos" },
        { text: "1 torneo activo" },
        { text: "Gestión de partidos" },
        { text: "Tabla de posiciones" },
        { text: "Soporte por email" }
      ],
      buttonText: "Comenzar Gratis",
      buttonVariant: "default" as const,
      isPopular: false
    },
    {
      title: "Profesional",
      description: "Ideal para ligas medianas y organizaciones deportivas",
      price: "$79",
      features: [
        { text: "Hasta 24 equipos" },
        { text: "3 torneos simultáneos" },
        { text: "Estadísticas avanzadas" },
        { text: "Gestión de sanciones" },
        { text: "Resultados en vivo" },
        { text: "Reportes personalizados" },
        { text: "Soporte prioritario" }
      ],
      buttonText: "Comenzar Prueba Gratis",
      buttonVariant: "default" as const,
      isPopular: true
    },
    {
      title: "Empresarial",
      description: "Para federaciones y grandes organizaciones deportivas",
      price: "$199",
      features: [
        { text: "Equipos ilimitados" },
        { text: "Torneos ilimitados" },
        { text: "API personalizada" },
        { text: "Branding personalizado" },
        { text: "Múltiples administradores" },
        { text: "Integración con medios" },
        { text: "Soporte 24/7" }
      ],
      buttonText: "Contactar Ventas",
      buttonVariant: "outline" as const,
      isPopular: false
    }
  ]

  return (
    <section id="precios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Planes diseñados para tu liga</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte al tamaño y necesidades de tu liga de fútbol
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
              isPopular={plan.isPopular}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Necesitas algo diferente? Podemos crear un plan personalizado para tu organización.
          </p>
          <Button variant="outline" className="border-border hover:bg-muted bg-transparent">
            Hablar con un Especialista
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
