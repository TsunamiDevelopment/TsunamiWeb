import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tsunami Development",
  description: "Premium Web Design & Hosting Solutions",
  icons: [
    {
      rel: "icon",
      url: "/assets/img/Tsunami-Trans.png",
      type: "image/png",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
