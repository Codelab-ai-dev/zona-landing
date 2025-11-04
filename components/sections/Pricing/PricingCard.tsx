"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PricingFeature {
  text: string
}

interface PricingCardProps {
  title: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: PricingFeature[]
  buttonText: string
  buttonVariant?: "default" | "outline"
  isPopular?: boolean
  billingCycle: "monthly" | "yearly"
  discountLabel?: string
  footnote?: string
}

export const PricingCard = ({
  title,
  description,
  price,
  features,
  buttonText,
  buttonVariant = "default",
  isPopular = false,
  billingCycle,
  discountLabel,
  footnote,
}: PricingCardProps) => {
  const formattedPrice = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(billingCycle === "monthly" ? price.monthly : price.yearly)

  const cadenceLabel = billingCycle === "monthly" ? "mes" : "año"

  return (
    <Card
      className={cn(
        "group relative h-full border border-border/60 bg-card/90 backdrop-blur-sm transition-all duration-300",
        isPopular
          ? "border-primary shadow-[0_20px_45px_-20px_rgba(59,130,246,0.45)]"
          : "hover:-translate-y-3 hover:shadow-[0_16px_40px_-24px_rgba(15,23,42,0.55)]"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
            Más Popular
          </Badge>
        </div>
      )}
      <CardHeader className={cn("text-center pb-8", isPopular ? "pt-8" : "pt-6")}>
        <CardTitle className="text-2xl font-bold text-card-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-card-foreground">{formattedPrice}</span>
            <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              /{cadenceLabel}
            </span>
          </div>
          {billingCycle === "yearly" && discountLabel && (
            <Badge variant="outline" className="border-primary/40 bg-primary/5 text-primary">
              {discountLabel}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between space-y-6">
        <div className="space-y-3">
          <ul className="space-y-3 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-card-foreground">
                <span className="mt-1 inline-flex size-2.5 rounded-full bg-primary/80 transition-colors group-hover:bg-primary" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <Button
            className={cn(
              "w-full",
              buttonVariant === "default"
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "border-border bg-transparent hover:bg-muted"
            )}
            variant={buttonVariant}
          >
            {buttonText}
          </Button>
          {footnote && <p className="text-sm text-muted-foreground">{footnote}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

export default PricingCard
