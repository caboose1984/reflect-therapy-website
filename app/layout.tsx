import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Roboto, Roboto_Serif, Libre_Baskerville } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

const robotoSerif = Roboto_Serif({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-serif",
})

const baskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskerville",
})

export const metadata: Metadata = {
  title: "Reflect Therapy - Counselling Services",
  description: "Professional counselling and therapy services. A safe space for healing, growth, and self-discovery.",
  keywords: "therapy, counselling, mental health, psychotherapy, wellness",
  authors: [{ name: "Reflect Therapy" }],
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${roboto.variable} ${robotoSerif.variable} ${baskerville.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
