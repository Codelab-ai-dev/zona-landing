"use client"

import { useState } from "react"
import { ChevronRight, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { ContactContent } from "@/types/landing"

type FormContent = ContactContent["form"]

interface ContactFormProps {
  form: FormContent
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  organization: string
  message: string
}

export const ContactForm = ({ form }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Enviar datos al API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el formulario")
      }

      setSubmitStatus("success")
      // Limpiar el formulario
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      })

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setSubmitStatus("error")
      
      // Resetear el estado de error después de 5 segundos
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border border-border/40 bg-background/85 shadow-[0_25px_60px_-40px_rgba(94,234,212,0.6)] backdrop-blur-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-foreground">{form.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{form.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                Nombre
              </Label>
              <Input
                id="firstName"
                placeholder="Tu nombre"
                value={formData.firstName}
                onChange={handleChange}
                required
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
                value={formData.lastName}
                onChange={handleChange}
                required
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
              value={formData.email}
              onChange={handleChange}
              required
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
              placeholder="+52 33 1234 5678"
              value={formData.phone}
              onChange={handleChange}
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
              value={formData.organization}
              onChange={handleChange}
              required
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
              value={formData.message}
              onChange={handleChange}
              required
              className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/70 resize-none"
            />
          </div>

          {submitStatus === "success" && (
            <div className="flex items-center gap-2 rounded-lg border border-green-500/40 bg-green-500/10 p-3 text-sm text-green-600 dark:text-green-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>¡Mensaje enviado! Te contactaremos pronto.</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4" />
              <span>Hubo un error. Por favor intenta de nuevo.</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-xs text-muted-foreground">{form.footer}</p>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
