"use client"

import { useState, useEffect } from "react"
import { Orbitron } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Trophy,
  Users,
  Calendar,
  BarChart3,
  Shield,
  Zap,
  Star,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react"

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background Image Container */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/football-field-bg.png')" }}
      >
        {/* Dark overlay */}
        <div className="bg-black/40">
          {/* Header */}
          <header className="bg-transparent backdrop-blur-md p-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <img src="/images/zona-gol-logo.webp" alt="Zona-Gol" className="h-40 w-40" />
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="#inicio" className="text-white hover:text-primary transition-colors">
                    Inicio
                  </a>
                  <a href="#caracteristicas" className="text-white hover:text-primary transition-colors">
                    Características
                  </a>
                  <a href="#precios" className="text-white hover:text-primary transition-colors">
                    Precios
                  </a>
                  <a href="#contacto" className="text-white hover:text-primary transition-colors">
                    Contacto
                  </a>
                </nav>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section id="inicio" className="py-20 lg:py-32 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                  ⚽ Sistema de Gestión Profesional
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
                  Gestiona tu Liga de Fútbol con <span className={`text-black ${orbitron.className}`}>Zona-Gol</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
                  Organiza torneos, gestiona equipos, programa partidos y mantén estadísticas detalladas. Todo en una
                  plataforma fácil de usar diseñada para organizadores de ligas.
                </p>
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/50 hover:bg-white/10 bg-transparent text-white hover:text-white"
                  >
                    Ver Demo
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Features Section */}
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
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Gestión de Equipos</CardTitle>
                <CardDescription>
                  Registra equipos, jugadores y cuerpo técnico. Mantén toda la información organizada.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Programación de Partidos</CardTitle>
                <CardDescription>
                  Crea calendarios automáticos, programa partidos y envía notificaciones a los equipos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Estadísticas Avanzadas</CardTitle>
                <CardDescription>
                  Tablas de posiciones en tiempo real, estadísticas de jugadores y reportes detallados.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Gestión de Sanciones</CardTitle>
                <CardDescription>
                  Contamos con un sistema de control de asistencias por reconocimiento facial de última generación.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Resultados en Vivo</CardTitle>
                <CardDescription>
                  Actualiza marcadores en tiempo real y mantén a todos informados durante los partidos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-card-foreground">Múltiples Torneos</CardTitle>
                <CardDescription>
                  Gestiona diferentes categorías y torneos simultáneamente desde una sola plataforma.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lo que dicen nuestros usuarios</h2>
            <p className="text-xl text-muted-foreground">Organizadores de ligas de todo el país confían en Zona-Gol</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4">
                  "Zona-Gol transformó completamente la organización de nuestra liga. Ahora todo es más profesional y
                  eficiente."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">JM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Juan Martínez</p>
                    <p className="text-sm text-muted-foreground">Liga Municipal de Fútbol</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4">
                  "La facilidad para programar partidos y mantener las estadísticas actualizadas nos ahorra horas de
                  trabajo cada semana."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">AR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Ana Rodríguez</p>
                    <p className="text-sm text-muted-foreground">Liga Femenina Regional</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4">
                  "Los equipos y jugadores están encantados con la transparencia y la información en tiempo real que
                  proporciona la plataforma."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">CL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Carlos López</p>
                    <p className="text-sm text-muted-foreground">Torneo Empresarial</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Planes diseñados para tu liga</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte al tamaño y necesidades de tu liga de fútbol
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-card-foreground">Básico</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Perfecto para ligas pequeñas y torneos locales
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">$29</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Hasta 8 equipos</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">1 torneo activo</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Gestión de partidos</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Tabla de posiciones</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Soporte por email</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Comenzar Gratis
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-card border-primary shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">Más Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-card-foreground">Profesional</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Ideal para ligas medianas y organizaciones deportivas
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">$79</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Hasta 24 equipos</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">3 torneos simultáneos</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Estadísticas avanzadas</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Gestión de sanciones</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Resultados en vivo</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Reportes personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Soporte prioritario</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Comenzar Prueba Gratis
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-card-foreground">Empresarial</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Para federaciones y grandes organizaciones deportivas
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">$199</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Equipos ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Torneos ilimitados</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">API personalizada</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Branding personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Múltiples administradores</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Integración con medios</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-card-foreground">Soporte 24/7</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6 border-border hover:bg-muted bg-transparent">
                  Contactar Ventas
                </Button>
              </CardContent>
            </Card>
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

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contáctanos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes preguntas sobre Zona-Gol? Estamos aquí para ayudarte a gestionar tu liga de manera profesional.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">contacto@zona-gol.com</p>
                      <p className="text-muted-foreground">soporte@zona-gol.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Teléfono</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Oficina</h4>
                      <p className="text-muted-foreground">Av. Deportes 123, Piso 5</p>
                      <p className="text-muted-foreground">Ciudad Deportiva, CP 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">¿Necesitas una demo personalizada?</h4>
                <p className="text-muted-foreground mb-4">
                  Agenda una llamada con nuestro equipo para ver cómo Zona-Gol puede adaptarse a las necesidades
                  específicas de tu liga.
                </p>
                <Button variant="outline" className="border-border hover:bg-muted bg-transparent">
                  Agendar Demo
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-card-foreground">
                        Nombre
                      </Label>
                      <Input id="firstName" placeholder="Tu nombre" className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-card-foreground">
                        Apellido
                      </Label>
                      <Input id="lastName" placeholder="Tu apellido" className="bg-background border-border" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      Email
                    </Label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="bg-background border-border" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-card-foreground">
                      Teléfono (opcional)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-card-foreground">
                      Organización/Liga
                    </Label>
                    <Input
                      id="organization"
                      placeholder="Nombre de tu liga o organización"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-card-foreground">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos sobre tu liga y cómo podemos ayudarte..."
                      rows={4}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Enviar Mensaje
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Listo para profesionalizar tu liga?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a cientos de organizadores que ya están usando Zona-Gol para gestionar sus ligas de manera
              profesional y eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Ver Demo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                Hablar con Ventas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Footer */}
      <footer className="bg-sidebar border-t border-sidebar-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div>
                <img src="/images/zona-gol-logo.webp" alt="Zona-Gol" className="h-36 w-36" />
              </div>
              <p className="text-sidebar-foreground/70">
                La plataforma líder para la gestión profesional de ligas de fútbol.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sidebar-foreground mb-4">Producto</h3>
              <ul className="space-y-2 text-sidebar-foreground/70">
                <li>
                  <a href="#caracteristicas" className="hover:text-sidebar-primary transition-colors">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#precios" className="hover:text-sidebar-primary transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-sidebar-primary transition-colors">
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sidebar-foreground mb-4">Soporte</h3>
              <ul className="space-y-2 text-sidebar-foreground/70">
                <li>
                  <a href="#" className="hover:text-sidebar-primary transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-sidebar-primary transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sidebar-primary transition-colors">
                    Documentación
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sidebar-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sidebar-foreground/70">
                <li>
                  <a href="#" className="hover:text-sidebar-primary transition-colors">
                    Términos de Servicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sidebar-primary transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sidebar-primary transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sidebar-foreground/70">
            <p>&copy; 2024 Zona-Gol. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
