import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IA con Criterio - Pensamiento Crítico en la Era Digital",
  description:
    "Un taller interdisciplinario para estudiantes universitarios que buscan usar la Inteligencia Artificial de manera ética, equilibrada y crítica. Aprende a pensar mejor con IA.",
  keywords: "IA ética, pensamiento crítico, educación digital, inteligencia artificial responsable",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
