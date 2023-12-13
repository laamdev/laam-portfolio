import { ReactNode } from "react"

export const SnippetTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="font-serif text-3xl font-bold uppercase md:text-5xl">
      {children}
    </h2>
  )
}
