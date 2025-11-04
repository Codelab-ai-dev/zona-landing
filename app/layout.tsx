import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "./globals.css"

export const metadata: Metadata = {
  title: "Zona-Gol · Plataforma para gestionar ligas deportivas",
  description:
    "Organiza calendarios, arbitrajes y comunicación de tu liga con Zona-Gol, la plataforma integral para torneos deportivos.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
