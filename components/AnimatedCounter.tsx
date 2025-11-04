"use client"

import { useEffect, useMemo, useRef, useState } from "react"

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export const AnimatedCounter = ({
  value,
  duration = 1400,
  prefix = "",
  suffix = "",
  decimals = 0
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!hasAnimated) return

    let frameId: number
    let start: number | null = null

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const currentValue = value * eased

      setDisplayValue(currentValue)

      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      } else {
        setDisplayValue(value)
      }
    }

    frameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [hasAnimated, value, duration])

  useEffect(() => {
    if (!hasAnimated) {
      setDisplayValue(0)
    }
  }, [hasAnimated])

  const formattedValue = useMemo(() => {
    return Number(displayValue).toFixed(decimals)
  }, [displayValue, decimals])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
