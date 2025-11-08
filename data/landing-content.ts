import { landingContentSchema, type LandingContent } from "@/types/landing"

const fallbackData: LandingContent = {
  header: {
    logoSrc: "/images/zona-gol-logo.webp",
    logoAlt: "Zona-Gol",
    navItems: [
      { href: "#inicio", label: "Inicio" },
      { href: "#caracteristicas", label: "Características" },
      { href: "#precios", label: "Precios" },
      { href: "#contacto", label: "Contacto" },
    ],
    demoUrl: "https://admin.zona-gol.com",
    primaryCta: { label: "Solicitar demo", href: "#contacto" },
    secondaryCta: { label: "Ver demo", href: "https://admin.zona-gol.com" },
  },
  hero: {
    badge: "Temporada 2025 · Todo tu torneo en una vista",
    titleLead: "Organiza tu liga",
    titleHighlight: "con la plataforma oficial de Zona-Gol",
    description:
      "Programa jornadas, confirma árbitros y comparte resultados en un tablero moderno que todo tu equipo entiende al instante.",
    primaryAction: { label: "Solicitar demo en vivo", href: "#contacto" },
    secondaryAction: { label: "Ver demo interactiva", href: "https://admin.zona-gol.com" },
    stats: [
      { value: "Hasta 100", label: "Partidos automatizados cada mes" },
      { value: "Mas de 100", label: "Usuarios conectados en vivo" },
    ],
    schedule: {
      title: "Tu siguiente jornada en orden",
      matchLabel: "Próximo partido",
      matchValue: "Domingo · 8:00 · Liga dominical",
      checklist: [
        { label: "Asistencias", statusLabel: "Listo", tone: "success" },
        { label: "Jornada Generada", statusLabel: "OK", tone: "success" },
        { label: "Cedula de arbitros", statusLabel: "OK", tone: "success" },
        { label: "Notificaciones enviadas", statusLabel: "OK", tone: "success" },
      ],
    },
    video: {
      src: "/videos/hero.mp4",
      poster: "/images/football-field-bg.png",
    },
  },
  features: {
    eyebrow: "Un flujo diseñado para ligas modernas",
    heading: "Una plataforma que acompaña todo el ciclo de tu competencia",
    description:
      "Del onboarding de clubes a la toma de decisiones estratégicas, Zona-Gol guía cada paso con contexto, claridad y automatización.",
    stages: [
      {
        id: "onboarding",
        step: "01",
        label: "Onboarding guiado",
        title: "Incorpora clubes, staff y jugadores sin fricciones",
        description:
          "Convierte el proceso de alta en una experiencia asistida. Plantillas, reglamentos y pagos quedan ordenados desde el primer día para que la temporada empiece con todos sincronizados.",
        accent: "from-emerald-400/60 via-cyan-400/25 to-transparent",
        icon: "UserPlus",
        benefits: [
          {
            icon: "ClipboardList",
            title: "Convocatorias automáticas",
            description:
              "Envía invitaciones personalizadas y recordatorios sin manejar hojas de cálculo ni chats interminables.",
            accent: "from-emerald-400/35 via-emerald-500/10 to-transparent",
          },
          {
            icon: "UploadCloud",
            title: "Importa padrones en segundos",
            description:
              "Carga listas masivas de jugadores o cuerpos técnicos y valida documentos con un clic.",
            accent: "from-cyan-400/35 via-cyan-500/10 to-transparent",
          },
        ],
        mockup: {
          badge: "Checklist activo",
          title: "Panel de incorporación",
          accent: "from-emerald-400/55 via-cyan-400/25 to-transparent",
          items: [
            {
              title: "Registro de clubes",
              description: "8/8 plantillas aprobadas",
              statusLabel: "Completo",
              tone: "success",
            },
            {
              title: "Documentación",
              description: "Verificación automática de credenciales con nuestra app Zona-Gol y QR de credenciales.",
              statusLabel: "En revisión",
              tone: "info",
            },
            {
              title: "Pagos iniciales",
              description: "Recordatorio programado para mañana",
              statusLabel: "Pendiente",
              tone: "warning",
            },
          ],
        },
      },
      {
        id: "management",
        step: "02",
        label: "Gestión operativa",
        title: "Programa fixtures y mantén a todos alineados",
        description:
          "Automatiza calendarios, reasignaciones y notificaciones. Zona-Gol te ayuda a tomar decisiones sobre escenarios reales en cuestión de minutos.",
        accent: "from-indigo-400/60 via-sky-400/25 to-transparent",
        icon: "CalendarCheck",
        benefits: [
          {
            icon: "GitBranch",
            title: "Reasignaciones inteligentes",
            description:
              "Arrastra y suelta encuentros; la plataforma resuelve canchas, árbitros y horarios compatibles.",
            accent: "from-indigo-400/35 via-indigo-500/10 to-transparent",
          },
          {
            icon: "Megaphone",
            title: "Alertas contextuales",
            description:
              "Equipos y staff reciben comunicaciones automáticas y confirmaciones por canal preferido.",
            accent: "from-sky-400/35 via-sky-500/10 to-transparent",
          },
        ],
        mockup: {
          badge: "Agenda dinámica",
          title: "Gestor de jornadas",
          accent: "from-sky-400/55 via-indigo-400/25 to-transparent",
          items: [
            {
              title: "Fixture de apertura",
              description: "14 partidos sincronizados",
              statusLabel: "Auto",
              tone: "info",
            },
            {
              title: "Asignación arbitral",
              description: "Cobertura confirmada para 100% de encuentros",
              statusLabel: "Confirmado",
              tone: "success",
            },
            {
              title: "Alertas",
              description: "3 reprogramaciones comunicadas",
              statusLabel: "Enviado",
              tone: "info",
            },
          ],
        },
      },
      {
        id: "analytics",
        step: "03",
        label: "Analítica accionable",
        title: "Transforma datos en decisiones competitivas",
        description:
          "El panel ejecutivo resume desempeño deportivo, asistencia y arbitrajes para que tomes decisiones con datos verificados.",
        accent: "from-amber-400/60 via-rose-400/25 to-transparent",
        icon: "LineChart",
        benefits: [
          {
            icon: "BarChart3",
            title: "Dashboards ejecutivos",
            description:
              "Comparte métricas clave con tu staff, patrocinadores y prensa en tiempo real.",
            accent: "from-amber-400/35 via-amber-500/15 to-transparent",
          },
          {
            icon: "Target",
            title: "Alertas de rendimiento",
            description:
              "Identifica tendencias de juego, jugadores destacados y focos de atención disciplinaria.",
            accent: "from-rose-400/35 via-rose-500/15 to-transparent",
          },
        ],
        mockup: {
          badge: "Reporte ejecutivo",
          title: "Análisis de temporada",
          accent: "from-amber-400/55 via-rose-400/25 to-transparent",
          items: [
            {
              title: "Top goleadores",
              description: "Actualizado con datos en vivo",
              statusLabel: "Streaming",
              tone: "info",
            },
            {
              title: "KPIs de asistencia",
              description: "89% de ocupación promedio",
              statusLabel: "Insight",
              tone: "neutral",
            },
            {
              title: "Reportes automatizados",
              description: "Reporte enviado a directores técnicos",
              statusLabel: "Listo",
              tone: "success",
            },
          ],
        },
      },
    ],
    closing: {
      title: "Un ecosistema completo para tu liga",
      description:
        "Integracion con app móvil y herramientas de streaming mantienen a toda la comunidad conectada desde un mismo lugar(Proximamente).",
    },
  },
  testimonials: {
    heading: "Lo que dicen nuestros usuarios",
    subheading: "Organizadores de ligas de todo el país confían en Zona-Gol",
    stats: [
      {
        label: "Ligas activas gestionadas",
        value: 2,
        suffix: "+",
        description: "Comunidades que administran su temporada completa en Zona-Gol",
      },
      {
        label: "Partidos automatizados por temporada",
        value: 250,
        suffix: "+",
        duration: 1800,
        description: "Calendarios, resultados y notificaciones gestionados sin trabajo manual",
      },
      {
        label: "Tiempo administrativo ahorrado",
        value: 60,
        suffix: "%",
        duration: 1500,
        description: "Reducción promedio del tiempo dedicado a tareas operativas",
      },
    ],
    testimonials: [
      {
        content:
          '"Zona-Gol transformó completamente la organización de nuestra liga. Ahora todo es más profesional y eficiente."',
        author: "Juan Martínez",
        role: "Liga Municipal de Fútbol",
        initials: "JM",
      },
      {
        content:
          '"La facilidad para programar partidos y mantener las estadísticas actualizadas nos ahorra horas de trabajo cada semana."',
        author: "Ana Rodríguez",
        role: "Liga Femenina Regional",
        initials: "AR",
      },
      {
        content:
          '"Los equipos y jugadores están encantados con la transparencia y la información en tiempo real que proporciona la plataforma."',
        author: "Carlos López",
        role: "Torneo Empresarial",
        initials: "CL",
      },
    ],
  },
  pricing: {
    trustSignals: ["Sin costos ocultos", "Onboarding guiado", "Soporte humano 24/7"],
    heading: "Planes diseñados para cada momento de tu liga",
    description: "Escala de un torneo local a una federación completa con herramientas que crecen contigo.",
    savingsLabel: "Ahorra hasta 25%",
    plans: [
      {
        title: "Básico",
        description: "Ideal para ligas que comienzan su digitalización",
        price: { monthly: 29, yearly: 290 },
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
        footnote: "Cámbiate a Profesional cuando tu liga crezca.",
        comparison: [
          "Panel intuitivo para organizar fixtures en minutos",
          "Automatización de tablas y estadísticas básicas",
          "Plantillas de comunicación para equipos y staff",
        ],
      },
      {
        title: "Profesional",
        description: "Para ligas en expansión que necesitan datos avanzados",
        price: { monthly: 79, yearly: 790 },
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
        price: { monthly: 199, yearly: 1990 },
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
    ],
    comparison: {
      heading: "¿Qué gana tu liga con cada plan?",
      description: "Selecciona un plan y compara los beneficios clave.",
    },
    carouselHeading: "Confían en Zona",
    carouselSubheading: "Ligas que ya modernizan su gestión",
    carouselItems: [
      { name: "Liga Elite Soccer Guerreros Dominical", context: "+18 clubes" },
      { name: "Liga Elite Soccer Guerreros Nocturna", context: "+18 clubes" },
    ],
  },
  contact: {
    badge: "Soporte humano",
    title: "Conversemos sobre tu liga",
    description:
      "Agenda una llamada, escríbenos por WhatsApp o comparte tu calendario. Nuestro equipo responde en menos de 2 horas hábiles para ayudarte a profesionalizar tu torneo.",
    map: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.7661818464497!2d-99.16766219999999!3d19.3831707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fffe8f156d21%3A0x4a1a9ffb60f7ce4f!2sEstadio%20Ol%C3%ADmpico%20Universitario!5e0!3m2!1ses-419!2smx!4v1714500000000!5m2!1ses-419!2smx",
      message: "Visítanos en Ciudad Deportiva o agenda una reunión virtual.",
      responseTime: "Tiempo de respuesta < 2h",
    },
    support: {
      intro:
        "El mismo equipo que opera ligas profesionales te atiende. El 92% de las solicitudes se resuelven en la primera interacción.",
      channels: [
        {
          title: "Chat en vivo",
          description: "Disponible de 9:00 a 18:00 hrs (GDL)",
          action: "Abrir chat",
          href: "https://wa.me/523314341915?text=Hola,%20me%20gustaría%20información%20sobre%20Zona%20Gol",
          icon: "MessageCircle",
        },
        {
          title: "WhatsApp",
          description: "+52 33 1434 1915",
          action: "Enviar mensaje",
          href: "https://wa.me/523314341915",
          icon: "PhoneCall",
        },
        {
          title: "Email prioritario",
          description: "soporte@zona-gol.com",
          action: "Escribir correo",
          href: "mailto:soporte@zona-gol.com",
          icon: "Mail",
        },
        {
          title: "Ventas",
          description: "ventas@zona-gol.com",
          action: "Contactar ventas",
          href: "mailto:ventas@zona-gol.com",
          icon: "Mail",
        },
      ],
      resolutionNote: "Escalamos incidentes críticos con ingenieros en menos de 30 minutos.",
    },
    escalation: {
      title: "Seguimiento priorizado",
      description: "Escalamos incidentes críticos con ingenieros en menos de 30 minutos.",
      ctaLabel: "Agendar demo",
      ctaHref: "#cta",
    },
    form: {
      title: "Envíanos un mensaje",
      description:
        "Comparte los detalles de tu liga y te responderemos con un plan personalizado en menos de 24 horas.",
      footer: "Resolvemos dudas técnicas y administrativas. También podemos coordinar una sesión con tu staff en menos de 48 horas.",
    },
  },
  cta: {
    badge: "Respuesta media en 90 minutos",
    title: "Diseñamos contigo la próxima temporada de tu liga",
    description:
      "Completa el formulario express y un especialista deportivo te compartirá un playbook personalizado con calendario, roles de staff y reportes automatizados.",
    benefits: [
      "Kick-off en menos de 48h",
      "Onboarding asistido para tu staff",
      "Reportes en tiempo real",
      "Soporte humano en español",
    ],
    leadStat: "120+ ligas migradas en 2024 con equipo dedicado",
    supportEmail: "soporte@zona-gol.com",
    calendarUrl: "https://calendly.com/zona-gol/demo?hide_event_type_details=1&hide_gdpr_banner=1",
    calendarTitle: "Agenda una demo guiada",
    calendarDescription: "Selecciona un horario para conectar con nuestro equipo de implementación.",
    calendarDuration: "Tiempo estimado: 25 minutos",
    calendarCost: "Sin costo y sin tarjeta",
    formTitle: "Reserva tu espacio",
    formDescription: "Déjanos tu información y bloqueamos un cupo para mostrarte el panel de Zona-Gol en vivo.",
    formSuccess: "¡Gracias! Nuestro equipo te contactará en las próximas horas.",
  },
}

export const fallbackLandingContent = landingContentSchema.parse(fallbackData)
