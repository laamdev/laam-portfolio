import Link from "next/link"
import React, { ReactNode } from "react"

import { Button } from "@/components/ui/button"

export const NavButton = ({
  href,
  children,
  variant = "default",
}: {
  href: string
  children: ReactNode
  variant?: "default" | "outline" | "ghost"
}) => {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className="group w-fit">
        <Button variant={variant} className="flex items-center gap-x-8">
          {children}
        </Button>
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return (
      <a href={href.toString()} className="group w-fit">
        <Button variant={variant} className="flex items-center gap-x-8">
          {children}
        </Button>
      </a>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="group w-fit"
    >
      <Button variant={variant} className="flex items-center gap-x-8">
        {children}
      </Button>
    </a>
  )
}
