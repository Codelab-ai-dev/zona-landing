"use client"

import { useEffect, useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import PricingCard from "./PricingCard"
import type { PricingContent } from "@/types/landing"

type BillingCycle = "monthly" | "yearly"

interface PricingProps {
  content: PricingContent
}

export const Pricing = ({ content }: PricingProps) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly")
  const [comparisonPlan, setComparisonPlan] = useState<string>(
    content.plans[1]?.title ?? content.plans[0]?.title ?? ""
  )
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!carouselApi) return

    const autoplay = setInterval(() => {
      carouselApi.scrollNext()
    }, 4000)

    return () => clearInterval(autoplay)
  }, [carouselApi])

  useEffect(() => {
    setComparisonPlan(content.plans[1]?.title ?? content.plans[0]?.title ?? "")
  }, [content.plans])

  const selectedPlan = useMemo(() => {
    return content.plans.find((plan) => plan.title === comparisonPlan) ?? content.plans[0]
  }, [comparisonPlan, content.plans])

  return (
    <section id="precios" className="bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            {content.trustSignals.map((signal) => (
              <Badge
                key={signal}
                variant="outline"
                className="border-primary/30 bg-primary/5 text-sm font-medium text-primary"
              >
                {signal}
              </Badge>
            ))}
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{content.heading}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{content.description}</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="inline-flex rounded-full border border-border/60 bg-muted/30 p-1 shadow-sm">
              <Button
                variant={billingCycle === "monthly" ? "default" : "ghost"}
                size="sm"
                className={billingCycle === "monthly" ? "bg-primary text-primary-foreground" : "px-5"}
                onClick={() => setBillingCycle("monthly")}
              >
                Mensual
              </Button>
              <Button
                variant={billingCycle === "yearly" ? "default" : "ghost"}
                size="sm"
                className={
                  billingCycle === "yearly"
                    ? "bg-primary text-primary-foreground"
                    : "px-5 text-muted-foreground"
                }
                onClick={() => setBillingCycle("yearly")}
              >
                Anual
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge className="bg-emerald-500/10 text-emerald-500">{content.savingsLabel}</Badge>
              Cancela o cambia el plan cuando quieras.
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {content.plans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
              isPopular={plan.isPopular}
              billingCycle={billingCycle}
              discountLabel={plan.discountLabel}
              footnote={plan.footnote}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur">
          <div className="mb-6 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">{content.comparison.heading}</p>
              <h3 className="text-2xl font-bold text-foreground">{content.comparison.description}</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {content.plans.map((plan) => (
                <Button
                  key={plan.title}
                  variant={comparisonPlan === plan.title ? "default" : "outline"}
                  size="sm"
                  className={
                    comparisonPlan === plan.title
                      ? "bg-primary text-primary-foreground"
                      : "border-border/70 bg-background/40"
                  }
                  onClick={() => setComparisonPlan(plan.title)}
                >
                  {plan.title}
                </Button>
              ))}
            </div>
          </div>
          <ul key={selectedPlan.title} className="grid gap-4 md:grid-cols-3 transition-opacity">
            {selectedPlan.comparison.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border/60 bg-background/60 p-4 text-sm text-muted-foreground transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 space-y-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">{content.carouselHeading}</p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">{content.carouselSubheading}</h3>
          </div>
          <div className="relative">
            <Carousel opts={{ align: "start", loop: true }} setApi={setCarouselApi} className="mx-auto max-w-5xl">
              <CarouselContent>
                {content.carouselItems.map((logo) => (
                  <CarouselItem key={logo.name} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="flex h-28 flex-col items-center justify-center rounded-2xl border border-border/50 bg-card/70 px-6 text-center shadow-sm backdrop-blur">
                      <span className="text-base font-semibold text-foreground">{logo.name}</span>
                      <span className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{logo.context}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
