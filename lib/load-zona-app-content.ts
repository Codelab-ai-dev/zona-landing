import { promises as fs } from "node:fs"
import path from "node:path"

import { fallbackLandingContent } from "@/data/landing-content"
import { landingContentSchema, type LandingContent } from "@/types/landing"

const candidatePaths = [
  process.env.ZONA_APP_LANDING_DATA_PATH,
  "../zona-app/apps/web/src/app/(marketing)/data/landing.json",
  "../zona-app/apps/web/src/data/landing.json",
  "../zona-app/apps/web/data/landing.json",
  "../zona-app/data/landing.json",
].filter(Boolean) as string[]

async function readJsonFile(filePath: string): Promise<LandingContent | null> {
  try {
    const resolvedPath = path.resolve(process.cwd(), filePath)
    const fileContent = await fs.readFile(resolvedPath, "utf8")
    const parsed = JSON.parse(fileContent)
    return landingContentSchema.parse(parsed)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null
    }

    if (process.env.NODE_ENV !== "production") {
      console.warn(`No se pudo cargar el contenido de ${filePath}:`, error)
    }

    return null
  }
}

export async function loadZonaAppContent(): Promise<LandingContent> {
  for (const candidate of candidatePaths) {
    const data = await readJsonFile(candidate)
    if (data) {
      return data
    }
  }

  return fallbackLandingContent
}
