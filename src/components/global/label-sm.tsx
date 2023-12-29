import { ReactNode } from "react"

export const LabelSm = ({ children }: { children: ReactNode }) => {
  return <p className="text-xs md:text-sm">{children}</p>
}
