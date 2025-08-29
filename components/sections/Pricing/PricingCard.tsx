"use client"

import { ReactNode } from "react"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PricingFeature {
  text: string
}

interface PricingCardProps {
  title: string
  description: string
  price: string
  features: PricingFeature[]
  buttonText: string
  buttonVariant?: "default" | "outline"
  isPopular?: boolean
}

export const PricingCard = ({
  title,
  description,
  price,
  features,
  buttonText,
  buttonVariant = "default",
  isPopular = false
}: PricingCardProps) => {
  return (
    <Card className={`bg-card ${isPopular ? "border-primary shadow-lg" : "border-border hover:shadow-lg transition-shadow"} relative`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-4 py-1">Más Popular</Badge>
        </div>
      )}
      <CardHeader className={`text-center pb-8 ${isPopular ? "pt-8" : ""}`}>
        <CardTitle className="text-2xl font-bold text-card-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold text-card-foreground">{price}</span>
          <span className="text-muted-foreground">/mes</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-card-foreground">{feature.text}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`w-full mt-6 ${
            buttonVariant === "default" 
              ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
              : "border-border hover:bg-muted bg-transparent"
          }`}
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}

export default PricingCard
