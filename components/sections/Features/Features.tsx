"use client"

import {
  BarChart3,
  CalendarCheck,
  ClipboardList,
  GitBranch,
  LineChart,
  Megaphone,
  Target,
  UploadCloud,
  UserPlus
} from "lucide-react"
import { type LucideIcon } from "lucide-react"

import FeatureCard from "./FeatureCard"
import { cn } from "@/lib/utils"

interface StageBenefit {
  icon: LucideIcon
  title: string
  description: string
  accent: string
}

interface StageMockupItem {
  title: string
  description: string
  status?: string
  statusClass?: string
}

interface Stage {
  id: string
  step: string
  label: string
  title: string
  description: string
  accent: string
  icon: LucideIcon
  benefits: StageBenefit[]
  mockup: {
    badge: string
    title: string
    accent: string
    items: StageMockupItem[]
  }
}

const statusBaseClass =
  "rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase"

const stages: Stage[] = [
  {
    id: "onboarding",
    step: "01",
    label: "Onboarding guiado",
    title: "Incorpora clubes, staff y jugadores sin fricciones",
    description:
      "Convierte el proceso de alta en una experiencia asistida. Plantillas, reglamentos y pagos quedan ordenados desde el primer día para que la temporada empiece con todos sincronizados.",
    accent: "from-emerald-400/60 via-cyan-400/25 to-transparent",
    icon: UserPlus,
    benefits: [
      {
        icon: ClipboardList,
        title: "Convocatorias automáticas",
        description:
          "Envía invitaciones personalizadas y recordatorios sin manejar hojas de cálculo ni chats interminables.",
        accent: "from-emerald-400/35 via-emerald-500/10 to-transparent"
      },
      {
        icon: UploadCloud,
        title: "Importa padrones en segundos",
        description:
          "Carga listas masivas de jugadores o cuerpos técnicos y valida documentos con un clic.",
        accent: "from-cyan-400/35 via-cyan-500/10 to-transparent"
      }
    ],
    mockup: {
      badge: "Checklist activo",
      title: "Panel de incorporación",
      accent: "from-emerald-400/55 via-cyan-400/25 to-transparent",
      items: [
        {
          title: "Registro de clubes",
          description: "8/8 plantillas aprobadas",
          status: "Completo",
          statusClass: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300"
        },
        {
          title: "Documentación",
          description: "Verificación automática de credenciales",
          status: "En revisión",
          statusClass: "border-cyan-500/30 bg-cyan-500/15 text-cyan-200"
        },
        {
          title: "Pagos iniciales",
          description: "Recordatorio programado para mañana",
          status: "Pendiente",
          statusClass: "border-amber-500/40 bg-amber-500/15 text-amber-200"
        }
      ]
    }
  },
  {
    id: "management",
    step: "02",
    label: "Gestión operativa",
    title: "Programa fixtures y mantén a todos alineados",
    description:
      "Automatiza calendarios, reasignaciones y notificaciones. Zona-Gol te ayuda a tomar decisiones sobre escenarios reales en cuestión de minutos.",
    accent: "from-indigo-400/60 via-sky-400/25 to-transparent",
    icon: CalendarCheck,
    benefits: [
      {
        icon: GitBranch,
        title: "Reasignaciones inteligentes",
        description:
          "Arrastra y suelta encuentros; la plataforma resuelve canchas, árbitros y horarios compatibles.",
        accent: "from-indigo-400/35 via-indigo-500/10 to-transparent"
      },
      {
        icon: Megaphone,
        title: "Alertas contextuales",
        description:
          "Equipos y staff reciben comunicaciones automáticas y confirmaciones por canal preferido.",
        accent: "from-sky-400/35 via-sky-500/10 to-transparent"
      }
    ],
    mockup: {
      badge: "Agenda dinámica",
      title: "Gestor de jornadas",
      accent: "from-sky-400/55 via-indigo-400/25 to-transparent",
      items: [
        {
          title: "Fixture de apertura",
          description: "14 partidos sincronizados",
          status: "Auto",
          statusClass: "border-sky-500/40 bg-sky-500/15 text-sky-200"
        },
        {
          title: "Asignación arbitral",
          description: "Cobertura confirmada para 100% de encuentros",
          status: "Confirmado",
          statusClass: "border-indigo-500/30 bg-indigo-500/15 text-indigo-200"
        },
        {
          title: "Alertas",
          description: "3 reprogramaciones comunicadas",
          status: "Enviado",
          statusClass: "border-cyan-500/30 bg-cyan-500/15 text-cyan-200"
        }
      ]
    }
  },
  {
    id: "analytics",
    step: "03",
    label: "Analítica accionable",
    title: "Transforma datos en decisiones competitivas",
    description:
      "Sigue métricas clave, rendimiento y tendencias económicas para optimizar la liga en tiempo real y escalar nuevas competencias.",
    accent: "from-purple-400/60 via-fuchsia-400/25 to-transparent",
    icon: LineChart,
    benefits: [
      {
        icon: BarChart3,
        title: "Dashboards personalizados",
        description:
          "Combina KPIs deportivos y administrativos con filtros por torneo, categoría o jornada.",
        accent: "from-purple-400/35 via-purple-500/10 to-transparent"
      },
      {
        icon: Target,
        title: "Proyecciones claras",
        description:
          "Anticipa recaudaciones, asistencia y desempeño gracias a pronósticos automáticos.",
        accent: "from-fuchsia-400/35 via-fuchsia-500/10 to-transparent"
      }
    ],
    mockup: {
      badge: "Insights en vivo",
      title: "Panel de analítica",
      accent: "from-fuchsia-400/55 via-purple-400/25 to-transparent",
      items: [
        {
          title: "Engagement de aficionados",
          description: "↑ 22% visitas semanales",
          status: "Destacado",
          statusClass: "border-fuchsia-500/30 bg-fuchsia-500/15 text-fuchsia-200"
        },
        {
          title: "Ingresos de taquilla",
          description: "USD 48K proyectados",
          status: "Nuevo",
          statusClass: "border-purple-500/30 bg-purple-500/15 text-purple-200"
        },
        {
          title: "Top performers",
          description: "Reporte enviado a directores técnicos",
          status: "Listo",
          statusClass: "border-emerald-500/30 bg-emerald-500/15 text-emerald-200"
        }
      ]
    }
  }
]

const StageVisual = ({
  icon: Icon,
  accent,
  badge,
  title,
  items
}: {
  icon: LucideIcon
  accent: string
  badge: string
  title: string
  items: StageMockupItem[]
}) => {
  return (
    <div className="relative w-full max-w-2xl">
      <div
        className={cn(
          "pointer-events-none absolute -inset-8 rounded-[36px] bg-gradient-to-br opacity-70 blur-3xl",
          accent
        )}
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-background/85 shadow-[0_40px_90px_-50px_rgba(15,23,42,0.85)] backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">{badge}</p>
              <p className="text-lg font-semibold text-foreground">{title}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-rose-400" />
          </div>
        </div>
        <div className="space-y-4 px-6 py-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4"
            >
              <div>
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
              {item.status ? (
                <span className={cn(statusBaseClass, item.statusClass)}>{item.status}</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Features = () => {
  return (
    <section id="caracteristicas" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary/80">Un flujo diseñado para ligas modernas</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Una plataforma que acompaña todo el ciclo de tu competencia
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Del onboarding de clubes a la toma de decisiones estratégicas, Zona-Gol guía cada paso con contexto, claridad y automatización.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {stages.map((stage, index) => {
            const isReversed = index % 2 === 1

            return (
              <div
                key={stage.id}
                className="flex flex-col items-center gap-12 lg:flex-row lg:items-start"
              >
                <div className={cn("w-full lg:w-5/12 space-y-8", isReversed && "lg:order-2")}> 
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2 text-sm font-semibold tracking-[0.28em] text-muted-foreground">
                    <span className="text-foreground">{stage.step}</span>
                    <span className="uppercase">{stage.label}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{stage.title}</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">{stage.description}</p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {stage.benefits.map((benefit) => (
                      <FeatureCard
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        accent={benefit.accent}
                        className="h-full"
                      />
                    ))}
                  </div>
                </div>
                <div className={cn("w-full lg:w-7/12", isReversed && "lg:order-1")}> 
                  <StageVisual
                    icon={stage.icon}
                    accent={stage.accent}
                    badge={stage.mockup.badge}
                    title={stage.mockup.title}
                    items={stage.mockup.items}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
