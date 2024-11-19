import "@/app/globals.css"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next"
import localFont from "next/font/local"
import { ReactNode } from "react"

import { Footer } from "@/components/navigation/footer"
import { Header } from "@/components/navigation/header"
import { siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"

const machina = localFont({
  src: [
    {
      path: "../../../public/fonts/neue-machina/ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/neue-machina/light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/neue-machina/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/neue-machina/medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/neue-machina/bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/neue-machina/ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/neue-machina/black.woff2",
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
      path: "../../../public/fonts/lausanne/thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/fonts/lausanne/thin-italic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../../public/fonts/lausanne/ultralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/lausanne/ultralight-italic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../../public/fonts/lausanne/light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/lausanne/light-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/lausanne/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/lausanne/regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/lausanne/medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/lausanne/medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/lausanne/semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/lausanne/semibold-italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../public/fonts/lausanne/bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/lausanne/bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../public/fonts/lausanne/ultrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/lausanne/ultrabold-italic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../../public/fonts/lausanne/black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../../public/fonts/lausanne/black-italic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-lausanne",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://laam.dev"),
  title: {
    template: `%s - ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: `${siteConfig.links.site}/manifest.json`,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.links.site,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // // siteId: "1467726470533754880",
    creator: "@laam_dev",
    // // creatorId: "1467726470533754880",
    images: {
      url: `${siteConfig.links.site}/og.png`,
      alt: siteConfig.name,
    },
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans antialiased",
        machina.variable,
        lausanne.variable
      )}
    >
      <SpeedInsights />
      <body>
        <div>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
