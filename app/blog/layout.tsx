import { ReactNode } from "react"

export default async function BlogLayout({
  children,
}: {
  children: ReactNode
}) {
  return <main className="mt-24 px-4">{children}</main>
}
