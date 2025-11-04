import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"

import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

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
        className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
