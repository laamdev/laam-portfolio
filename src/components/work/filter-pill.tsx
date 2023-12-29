import Link from "next/link"
import { ReactNode } from "react"

export const FilterPill = ({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) => {
  return (
    <Link
      href={href}
      className="tw-transition border-foreground hover:bg-foreground hover:text-background rounded-full
    border-2 px-1.5 py-0.5 text-sm font-medium uppercase"
    >
      {children}
    </Link>
  )
}
