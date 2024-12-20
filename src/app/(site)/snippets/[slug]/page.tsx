import Image from "next/image"
import { notFound } from "next/navigation"

import { getSnippets } from "@/lib/mdx"

interface SnippetPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: SnippetPageProps) {
  const { slug } = await params

  let snippet = getSnippets().find((snippet) => snippet.slug === slug)

  return { title: snippet?.metadata.title }
}

export default async function SnippetPage({ params }: SnippetPageProps) {
  const { slug } = await params

  const snippet = getSnippets().find((snippet) => snippet.slug === slug)

  if (!snippet) {
    notFound()
  }

  return (
    <main className="divide-y border-b md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
      {/* <script type="application/ld+json">
      {JSON.stringify(snippet.structuredData)}
    </script> */}
      <div className="bg-foreground aspect-square h-fit p-10">
        <Image
          src={snippet.metadata.cover}
          alt={snippet.metadata.title}
          width={1080}
          height={1080}
          className="size-full object-cover object-center"
        />
      </div>

      <div>
        <div className="border-b p-5">
          <p className="mb-2.5 font-medium">{snippet.metadata.pubDate}</p>
          <h2 className="text-2xl font-semibold uppercase md:text-4xl">
            {snippet.metadata.title}
          </h2>
        </div>
        {/* <div className="p-5">
          <CustomMDX source={snippet.content} />
        </div> */}
      </div>
    </main>
  )
}
