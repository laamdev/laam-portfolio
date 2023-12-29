import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export const Heading = ({
  children,
  isPageTitle,
  className,
}: {
  children: ReactNode
  isPageTitle?: boolean
  className?: string
}) => {
  return (
    <>
      {isPageTitle ? (
        <h1
          className={cn(
            "font-serif text-6xl font-black uppercase md:text-9xl",
            className
          )}
        >
          {children}
        </h1>
      ) : (
        <h2
          className={cn(
            "font-serif text-6xl font-black uppercase md:text-9xl",
            className
          )}
        >
          {children}
        </h2>
      )}
    </>
  )
}
