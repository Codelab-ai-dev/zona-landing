"use client"

import { ChevronRight } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const ContactForm = () => {
  return (
    <Card className="border border-border/40 bg-background/85 shadow-[0_25px_60px_-40px_rgba(94,234,212,0.6)] backdrop-blur-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-foreground">Envíanos un mensaje</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Comparte los detalles de tu liga y te responderemos con un plan personalizado en menos de 24 horas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                Nombre
              </Label>
              <Input
                id="firstName"
                placeholder="Tu nombre"
                className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/70"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                Apellido
              </Label>
              <Input
                id="lastName"
                placeholder="Tu apellido"
                className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/70"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/70"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
              Teléfono (opcional)
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/70"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization" className="text-sm font-medium text-foreground">
              Organización/Liga
            </Label>
            <Input
              id="organization"
              placeholder="Nombre de tu liga o organización"
              className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/70"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Mensaje
            </Label>
            <Textarea
              id="message"
              placeholder="Cuéntanos sobre tu liga y cómo podemos ayudarte..."
              rows={4}
              className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/70 resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Enviar Mensaje
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-xs text-muted-foreground">
            Resolvemos dudas técnicas y administrativas. También podemos coordinar una sesión con tu staff en menos de
            48 horas.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
