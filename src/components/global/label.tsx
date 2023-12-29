import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export const Label = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <h4 className={cn("text-sm font-bold uppercase md:text-base", className)}>
      {children}
    </h4>
  )
}
