import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Horizon Banking - Your Trusted Financial Partner",
  description:
    "Providing personal, business, and wealth management solutions to help you achieve your financial goals.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
       
          <div className="flex-1">{children}</div>
         
        </div>
      </body>
    </html>
  )
}
