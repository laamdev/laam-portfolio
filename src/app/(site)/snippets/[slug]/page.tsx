import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import Balancer from "react-wrap-balancer"

import { MDXComponents } from "@/components/mdx/mdx-components"
import { SnippetDetails } from "@/components/snippets/snippet-details"
import { SnippetTitle } from "@/components/snippets/snippet-title"
import { getSnippetBySlug } from "@/lib/mdx"
import { formatDate } from "@/lib/utils"

const getPageContent = async (slug) => {
  const { meta, content } = await getSnippetBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

export default async function SnippetPage({ params }: { params: any }) {
  const { content, meta } = await getPageContent(params.slug)

  return (
    <main className="grid grid-cols-2 border-b">
      {/* <script type="application/ld+json">
      {JSON.stringify(snippet.structuredData)}
    </script> */}
      <article className="border-b p-5">
        <SnippetTitle>{meta.title}</SnippetTitle>

        {/* <SnippetDetails>
          {formatDate(meta.pubDate)} ·{" "}
          {remarkPluginFrontmatter.minutesRead}
        </SnippetDetails> */}
      </article>

      <div className="bg-foreground p-10">
        <div className="relative aspect-square">
          <Image
            src={meta.cover}
            alt={meta.title}
            width={1080}
            height={1080}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <article className="border-r py-20">
        <div className="prose prose-invert prose-foreground mx-auto w-full">
          <MDXComponents source={content} />
        </div>
      </article>
    </main>
  )
}
