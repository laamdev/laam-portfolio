import { ReactNode } from "react"

export const TextSubheading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="font-serif text-xl uppercase tracking-wider text-zinc-300">
      {children}
    </h2>
  )
}
