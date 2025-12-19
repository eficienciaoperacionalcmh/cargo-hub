import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Layout from "@/app/layoutFront"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CARGO-HUB",
  description: ""
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="w-full h-full" suppressHydrationWarning={true}>
      <body className={`${inter.className} w-full h-full flex flex-col`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
