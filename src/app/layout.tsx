import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "~/lib/utils"
import "~/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Levy's portfolio",
  description: "This is Levy's portfolio",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased min-h-screen", inter.className)}>
        {children}
      </body>
    </html>
  )
}
