import "@/app/globals.css"

import { Metadata } from "next"
import localFont from "next/font/local"
import { Provider as BalancerProvider } from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/navigation/footer"
import { Header } from "@/components/navigation/header"

const supply = localFont({
  src: [
    {
      path: "../public/fonts/supply-mono/thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/supply-mono/ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/supply-mono/light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/supply-mono/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/supply-mono/medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/supply-mono/semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/supply-mono/black.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/supply-mono/black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-supply",
})
const brut = localFont({
  src: [
    {
      path: "../public/fonts/brut/regular-mono.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/brut/italic-mono.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-brut",
})
const machina = localFont({
  src: [
    {
      path: "../public/fonts/neue-machina/ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-machina/black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-machina",
})
const lausanne = localFont({
  src: [
    {
      path: "../public/fonts/lausanne/thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/lausanne/thin-italic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/lausanne/ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/lausanne/ultralight-italic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/lausanne/light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/lausanne/light-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/lausanne/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/lausanne/regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/lausanne/medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/lausanne/medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/lausanne/semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/lausanne/semibold-italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/lausanne/bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/lausanne/bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/lausanne/ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/lausanne/ultrabold-italic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/lausanne/black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/lausanne/black-italic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-lausanne",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* <html lang="en" suppressHydrationWarning> */}
      {/* <head /> */}

      <body
        className={cn(
          "font-sans antialiased",
          supply.variable,
          brut.variable,
          machina.variable,
          lausanne.variable
        )}
      >
        <BalancerProvider>
          <div>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </BalancerProvider>
      </body>
    </html>
  )
}
