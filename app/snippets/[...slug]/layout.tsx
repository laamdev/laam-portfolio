import { ReactNode } from "react"

interface SnippetsLayoutProps {
  children: ReactNode
}

export default function SnippetsLayout({ children }: SnippetsLayoutProps) {
  return <div className="mx-auto max-w-prose px-5 md:px-0">{children}</div>
}
