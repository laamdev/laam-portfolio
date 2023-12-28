import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Suspense } from "react"
import Balancer from "react-wrap-balancer"

import { CustomMDX } from "@/components/mdx/mdx-remote"
import { SnippetDetails } from "@/components/snippets/snippet-details"
import { SnippetTitle } from "@/components/snippets/snippet-title"
import { getSnippets } from "@/lib/mdx"
import { formatDate } from "@/lib/utils"

// // export async function generateMetadata({ params }) {
// //   const { meta } = await getPageContent(params.slug)
// //   return { title: meta.title }
// // }

export default async function SnippetPage({ params }: { params: any }) {
  let snippet = getSnippets().find((snippet) => snippet.slug === params.slug)
  if (!snippet) {
    notFound()
  }

  return (
    <main className="grid border-b md:grid-cols-2">
      {/* <script type="application/ld+json">
      {JSON.stringify(snippet.structuredData)}
    </script> */}
      <article className="border-b p-5">
        <SnippetTitle>{snippet.metadata.title}</SnippetTitle>

        {/* <SnippetDetails>
          {formatDate(meta.pubDate)} ·{" "}
          {remarkPluginFrontmatter.minutesRead}
        </SnippetDetails> */}
      </article>

      <div className="bg-foreground p-10">
        <div className="relative aspect-square">
          <Image
            src={snippet.metadata.cover}
            alt={snippet.metadata.title}
            width={1080}
            height={1080}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <article className="p-5 md:border-r md:py-20">
        <CustomMDX source={snippet.content} />
      </article>
    </main>
  )
}
