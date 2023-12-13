import { ReactNode } from "react"

export const SnippetDetails = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mt-2 text-base font-bold uppercase opacity-75 md:text-lg">
      {children}
    </p>
  )
}
