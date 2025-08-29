"use client"

import { LucideIcon } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-card border-border hover:shadow-lg transition-shadow">
      <CardHeader>
        <Icon className="h-12 w-12 text-primary mb-4" />
        <CardTitle className="text-card-foreground">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default FeatureCard
