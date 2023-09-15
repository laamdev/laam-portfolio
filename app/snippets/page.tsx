import type { Metadata } from "next"
import Link from "next/link"
import { allSnippets } from "@/contentlayer/generated"
import Balancer from "react-wrap-balancer"

export const metadata: Metadata = {
  title: "Snippets",
  description: "Read my thoughts on software development, design, and more.",
  openGraph: {
    title: "Snippets",
    description: "Read my thoughts on software development, design, and more.",
  },
}

export default async function SnippetsPage() {
  return (
    <section>
      <h1 className="mb-5 font-serif text-3xl font-bold">
        <Balancer>Snippets</Balancer>
      </h1>
      {allSnippets
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((snippet) => (
          <Link
            key={snippet.slug}
            className="mb-4 flex flex-col space-y-1"
            href={snippet.slug}
          >
            <div className="flex w-full flex-col">
              <p>{snippet.title}</p>
            </div>
          </Link>
        ))}
    </section>
  )
}
