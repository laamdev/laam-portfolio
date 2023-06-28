import "./globals.css"

import { Metadata } from "next"
import { Provider as BalancerProvider } from "react-wrap-balancer"

import { siteConfig } from "@/config/site"
import { fontSans, fontSerif } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/navigation/footer"
import { SiteHeader } from "@/components/navigation/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <BalancerProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="mt-32 flex-1">{children}</div>
              <Footer />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </BalancerProvider>
      </body>
    </html>
  )
}
