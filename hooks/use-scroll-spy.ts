"use client"

import { useEffect, useState } from "react"

type UseScrollSpyOptions = IntersectionObserverInit

export const useScrollSpy = (
  sectionIds: string[],
  options?: UseScrollSpyOptions
) => {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "")

  useEffect(() => {
    if (sectionIds.length === 0) {
      return
    }

    const observers: IntersectionObserver[] = []
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is Element => Boolean(el))

    if (elements.length === 0) {
      return
    }

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      const intersecting = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (intersecting.length > 0) {
        const newActiveId = intersecting[0].target.id
        setActiveId(newActiveId)
        return
      }

      const visibleEntry = entries.find((entry) => entry.boundingClientRect.top >= 0)
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id)
      }
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      rootMargin: options?.rootMargin ?? "0px 0px -60% 0px",
    })

    elements.forEach((element) => observer.observe(element))
    observers.push(observer)

    return () => {
      observers.forEach((instance) => instance.disconnect())
    }
  }, [options?.rootMargin, sectionIds])

  return activeId
}
