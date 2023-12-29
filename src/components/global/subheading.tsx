import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export const Subheading = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <h2
      className={cn("text-2xl font-semibold uppercase md:text-4xl", className)}
    >
      {children}
    </h2>
  )
}
