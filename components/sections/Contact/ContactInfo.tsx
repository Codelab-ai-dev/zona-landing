"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const ContactInfo = () => {
  return (
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
  )
}

export default ContactInfo
