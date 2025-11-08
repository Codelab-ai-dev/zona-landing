"use client"

import { useState } from "react"
import Link from "next/link"
import { Headset, Mail, MessageCircle, PhoneCall, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { QuickContactModal } from "./QuickContactModal"
import type { ContactContent, SupportChannelIcon } from "@/types/landing"

const ICON_MAP: Record<SupportChannelIcon, LucideIcon> = {
  MessageCircle,
  PhoneCall,
  Mail,
  Headset,
}

type SupportContent = ContactContent["support"]

interface ContactInfoProps {
  support: SupportContent
}

export const ContactInfo = ({ support }: ContactInfoProps) => {
  const [openModal, setOpenModal] = useState<"Email prioritario" | "Ventas" | null>(null)

  const handleChannelClick = (title: string, href: string) => {
    if (title === "Email prioritario" || title === "Ventas") {
      setOpenModal(title as "Email prioritario" | "Ventas")
    } else {
      window.open(href, href.startsWith("http") ? "_blank" : "_self")
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-border/40 bg-background/70 p-8 shadow-[0_18px_48px_-30px_rgba(56,189,248,0.65)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-2xl font-semibold text-foreground">Información de contacto</h3>
          <Badge className="border-primary/30 bg-primary/10 text-primary">Soporte humano real</Badge>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{support.intro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {support.channels.map(({ title, description, action, href, icon }) => {
            const Icon = ICON_MAP[icon] ?? MessageCircle
            const isModalChannel = title === "Email prioritario" || title === "Ventas"
            
            return (
              <div
                key={title}
                className="group flex flex-col justify-between gap-4 rounded-2xl border border-border/40 bg-white/5 p-5 text-sm text-muted-foreground backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10 hover:text-foreground"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-9 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary transition group-hover:border-primary group-hover:bg-primary/25">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-foreground">{title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
                {isModalChannel ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="self-start border border-transparent text-primary transition hover:border-primary/40 hover:bg-primary/20"
                    onClick={() => handleChannelClick(title, href)}
                  >
                    {action}
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="self-start border border-transparent text-primary transition hover:border-primary/40 hover:bg-primary/20"
                    asChild
                  >
                    <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {action}
                    </Link>
                  </Button>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {openModal && (
        <QuickContactModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
          type={openModal}
        />
      )}
    </div>
  )
}

export default ContactInfo
