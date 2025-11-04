import { LandingPageClient } from "@/components/LandingPageClient"
import { loadZonaAppContent } from "@/lib/load-zona-app-content"

export default async function HomePage() {
  const content = await loadZonaAppContent()

  return <LandingPageClient content={content} />
}
