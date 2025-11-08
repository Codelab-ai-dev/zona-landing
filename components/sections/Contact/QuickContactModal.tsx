"use client"

import { useState } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface QuickContactModalProps {
  isOpen: boolean
  onClose: () => void
  type: "Email prioritario" | "Ventas"
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export const QuickContactModal = ({ isOpen, onClose, type }: QuickContactModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.name.split(" ")[0] || formData.name,
          lastName: formData.name.split(" ").slice(1).join(" ") || "",
          email: formData.email,
          phone: "",
          organization: formData.subject,
          message: `[${type}]\n\n${formData.message}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el formulario")
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => {
        onClose()
        setSubmitStatus("idle")
      }, 2000)
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
      // Reset form after modal closes
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSubmitStatus("idle")
      }, 300)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md border-border/40 bg-background/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-foreground">
            {type === "Email prioritario" ? "Contacto Prioritario" : "Contactar Ventas"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {type === "Email prioritario"
              ? "Envíanos tu consulta y te responderemos lo antes posible."
              : "Cuéntanos sobre tu proyecto y un asesor te contactará."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Nombre completo
            </Label>
            <Input
              id="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/70"
            />
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
              disabled={isSubmitting}
              className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/70"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-foreground">
              {type === "Ventas" ? "Empresa/Liga" : "Asunto"}
            </Label>
            <Input
              id="subject"
              placeholder={type === "Ventas" ? "Nombre de tu liga" : "¿En qué podemos ayudarte?"}
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="border-border/40 bg-white/5 text-foreground placeholder:text-muted-foreground/70"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Mensaje
            </Label>
            <Textarea
              id="message"
              placeholder={
                type === "Ventas"
                  ? "Cuéntanos sobre tu proyecto y necesidades..."
                  : "Describe tu consulta..."
              }
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
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
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default QuickContactModal
