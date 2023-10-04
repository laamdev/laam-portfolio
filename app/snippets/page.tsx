import type { Metadata } from "next"
import Image from "next/image"
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
    // <section>
    //   <h1 className="mb-5 font-serif text-3xl font-bold">
    //     <Balancer>Snippets</Balancer>
    //   </h1>
    //   {allSnippets
    //     .sort((a, b) => {
    //       if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
    //         return -1
    //       }
    //       return 1
    //     })
    //     .map((snippet) => (
    //       <Link
    //         key={snippet.slug}
    //         className="mb-4 flex flex-col space-y-1"
    //         href={snippet.slug}
    //       >
    //         <div className="flex w-full flex-col">
    //           <p>{snippet.title}</p>
    //         </div>
    //       </Link>
    //     ))}
    // </section>

    <main className="grid border-b md:grid-cols-2">
      <div>
        <h1 className="sticky top-0 p-5 font-serif text-5xl font-black uppercase md:text-9xl">
          Snippets
        </h1>
      </div>

      <div className="grid divide-y text-left md:border-l md:text-right">
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
              href={snippet.slug}
              className="p-5 hover:bg-primary hover:text-background"
            >
              <h2 className="text-lg md:text-xl">{snippet.title}</h2>
            </Link>
          ))}
      </div>
    </main>
  )
}
