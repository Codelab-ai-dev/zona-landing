"use client"

import { ChevronRight } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const ContactForm = () => {
  return (
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
  )
}

export default ContactForm
