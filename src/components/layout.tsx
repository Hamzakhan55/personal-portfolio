import type React from "react"
import "../globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="font-sans antialiased overflow-x-hidden">
      {children}
    </div>
  )
}
