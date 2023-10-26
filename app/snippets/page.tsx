import type { Metadata } from "next"
import Link from "next/link"
import { allSnippets } from "@/contentlayer/generated"

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
    <main className="grid border-b md:grid-cols-2">
      <div>
        <h1 className="sticky top-0 p-5 font-serif text-5xl font-black uppercase md:text-9xl">
          Snippets
        </h1>
      </div>

      <div className="grid divide-y border-t md:border-l md:border-t-0">
        {allSnippets
          .filter((snippet) => snippet.isFeatured)
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1
            }
            return 1
          })
          .map((snippet) => (
            <Link
              key={snippet.slug}
              href={snippet.slug}
              className="flex items-center p-5 hover:bg-primary hover:text-background md:justify-end"
            >
              <h2 className="text-lg md:text-xl">{snippet.title}</h2>
            </Link>
          ))}
      </div>
    </main>
  )
}
