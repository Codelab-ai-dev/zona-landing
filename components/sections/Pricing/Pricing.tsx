"use client"

import { useEffect, useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import PricingCard from "./PricingCard"

type BillingCycle = "monthly" | "yearly"

interface PricingPlan {
  title: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  discountLabel?: string
  features: { text: string }[]
  buttonText: string
  buttonVariant: "default" | "outline"
  isPopular?: boolean
  footnote?: string
  comparison: string[]
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Básico",
    description: "Ideal para ligas que comienzan su digitalización",
    price: {
      monthly: 29,
      yearly: 290,
    },
    discountLabel: "Ahorra 2 meses",
    features: [
      { text: "Hasta 8 equipos y 120 jugadores" },
      { text: "1 torneo activo con fixtures automáticos" },
      { text: "Gestión de partidos y reportes PDF" },
      { text: "Tabla de posiciones en tiempo real" },
      { text: "Soporte por email en español" },
    ],
    buttonText: "Comenzar gratis",
    buttonVariant: "default",
    isPopular: false,
    footnote: "Cambiate a Profesional cuando tu liga crezca.",
    comparison: [
      "Panel intuitivo para organizar fixtures en minutos",
      "Automatización de tablas y estadísticas básicas",
      "Plantillas de comunicación para equipos y staff",
    ],
  },
  {
    title: "Profesional",
    description: "Para ligas en expansión que necesitan datos avanzados",
    price: {
      monthly: 79,
      yearly: 790,
    },
    discountLabel: "15% menos pagando anual",
    features: [
      { text: "Hasta 24 equipos y múltiples categorías" },
      { text: "3 torneos simultáneos con calendario inteligente" },
      { text: "Estadísticas avanzadas y ranking de jugadores" },
      { text: "Gestión de sanciones y arbitrajes" },
      { text: "Resultados en vivo + widgets embebibles" },
      { text: "Reportes personalizados en Excel" },
      { text: "Soporte prioritario por chat" },
    ],
    buttonText: "Probar 14 días",
    buttonVariant: "default",
    isPopular: true,
    footnote: "Incluye onboarding asistido por nuestro equipo.",
    comparison: [
      "Automatiza fixture, sanciones y confirmación de árbitros",
      "Comparte estadísticas en vivo con streaming y apps",
      "Reportes listos para sponsors y equipos de prensa",
    ],
  },
  {
    title: "Empresarial",
    description: "La suite completa para federaciones y multi-liga",
    price: {
      monthly: 199,
      yearly: 1990,
    },
    discountLabel: "Hasta 4 meses incluidos",
    features: [
      { text: "Equipos y torneos ilimitados" },
      { text: "Multi-tenant con subligas y roles personalizados" },
      { text: "API abierta y webhooks para integraciones" },
      { text: "Branding completo con dominio personalizado" },
      { text: "Gestión financiera con pagos y facturación" },
      { text: "Integración con medios y dashboards ejecutivos" },
      { text: "Soporte 24/7 y SLA dedicado" },
    ],
    buttonText: "Hablar con ventas",
    buttonVariant: "outline",
    isPopular: false,
    footnote: "Incluye roadmap compartido y acuerdos de SLA.",
    comparison: [
      "Gobierna múltiples ligas y sedes desde un único panel",
      "Integración API con tus sistemas de pagos y CRM",
      "Acceso anticipado a features y soporte dedicado",
    ],
  },
]

const trustSignals = [
  "Sin costos ocultos",
  "Onboarding guiado",
  "Soporte humano 24/7",
]

const leagueLogos = [
  { name: "Liga Norte 360", context: "+12 clubes" },
  { name: "Futsal Pro MX", context: "Streaming en vivo" },
  { name: "Campus Premier", context: "Academias juveniles" },
  { name: "Liga Andina", context: "4 sedes sincronizadas" },
  { name: "Copa Master", context: "Patrocinios activos" },
  { name: "Metropolitan League", context: "+45 arbitrajes" },
]

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly")
  const [comparisonPlan, setComparisonPlan] = useState<string>(pricingPlans[1].title)
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!carouselApi) return

    const autoplay = setInterval(() => {
      carouselApi.scrollNext()
    }, 4000)

    return () => clearInterval(autoplay)
  }, [carouselApi])

  const selectedPlan = useMemo(
    () => pricingPlans.find((plan) => plan.title === comparisonPlan) ?? pricingPlans[0],
    [comparisonPlan]
  )

  return (
    <section id="precios" className="bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            {trustSignals.map((signal) => (
              <Badge
                key={signal}
                variant="outline"
                className="border-primary/30 bg-primary/5 text-sm font-medium text-primary"
              >
                {signal}
              </Badge>
            ))}
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Planes diseñados para cada momento de tu liga
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Escala de un torneo local a una federación completa con herramientas que crecen contigo.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="inline-flex rounded-full border border-border/60 bg-muted/30 p-1 shadow-sm">
              <Button
                variant={billingCycle === "monthly" ? "default" : "ghost"}
                size="sm"
                className={billingCycle === "monthly" ? "bg-primary text-primary-foreground" : "px-5"}
                onClick={() => setBillingCycle("monthly")}
              >
                Mensual
              </Button>
              <Button
                variant={billingCycle === "yearly" ? "default" : "ghost"}
                size="sm"
                className={
                  billingCycle === "yearly"
                    ? "bg-primary text-primary-foreground"
                    : "px-5 text-muted-foreground"
                }
                onClick={() => setBillingCycle("yearly")}
              >
                Anual
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge className="bg-emerald-500/10 text-emerald-500">Ahorra hasta 25%</Badge>
              Cancela o cambia el plan cuando quieras.
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
              isPopular={plan.isPopular}
              billingCycle={billingCycle}
              discountLabel={plan.discountLabel}
              footnote={plan.footnote}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur">
          <div className="mb-6 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Comparativa</p>
              <h3 className="text-2xl font-bold text-foreground">¿Qué gana tu liga con cada plan?</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {pricingPlans.map((plan) => (
                <Button
                  key={plan.title}
                  variant={comparisonPlan === plan.title ? "default" : "outline"}
                  size="sm"
                  className={
                    comparisonPlan === plan.title
                      ? "bg-primary text-primary-foreground"
                      : "border-border/70 bg-background/40"
                  }
                  onClick={() => setComparisonPlan(plan.title)}
                >
                  {plan.title}
                </Button>
              ))}
            </div>
          </div>
          <ul
            key={selectedPlan.title}
            className="grid gap-4 md:grid-cols-3 transition-opacity"
          >
            {selectedPlan.comparison.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border/60 bg-background/60 p-4 text-sm text-muted-foreground transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 space-y-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">Confían en Zona</p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">Ligas que ya modernizan su gestión</h3>
          </div>
          <div className="relative">
            <Carousel
              opts={{ align: "start", loop: true }}
              setApi={setCarouselApi}
              className="mx-auto max-w-5xl"
            >
              <CarouselContent>
                {leagueLogos.map((logo) => (
                  <CarouselItem
                    key={logo.name}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="flex h-28 flex-col items-center justify-center rounded-2xl border border-border/50 bg-card/70 px-6 text-center shadow-sm backdrop-blur">
                      <span className="text-base font-semibold text-foreground">{logo.name}</span>
                      <span className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                        {logo.context}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
