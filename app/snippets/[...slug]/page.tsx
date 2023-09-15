import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allSnippets } from "@/contentlayer/generated"
import Balancer from "react-wrap-balancer"

import { formatDate } from "@/lib/utils"
import { Mdx } from "@/components/mdx/mdx-components"

async function getSnippetFromParams(params: any) {
  const slug = params?.slug?.join("/")
  const snippet = allSnippets.find(
    (snippet: any) => snippet.slugAsParams === slug
  )

  if (!snippet) {
    null
  }

  return snippet
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const slug = params?.slug?.join("/")
  const snippet = allSnippets.find(
    (snippet: any) => snippet.slugAsParams === slug
  )
  if (!snippet) {
    return
  }

  // // const ogImage = project.image
  // //   ? `https://leerob.io${image}`
  // //   : `https://leerob.io/api/og?title=${title}`;

  return {
    title: snippet.title,
    description: snippet.summary,
    openGraph: {
      title: snippet.title,
      description: snippet.summary,
      type: "article",
      publishedTime: snippet.publishedAt,
      url: `https://laam.dev/snippets/${snippet.slug}`,
      // // images: [
      // //   {
      // //     url: ogImage,
      // //   },
      // // ],
    },
    twitter: {
      card: "summary_large_image",
      title: snippet.title,
      description: snippet.summary,
      // // images: [ogImage],
    },
  }
}

export async function generateStaticParams() {
  return allSnippets.map((snippet) => ({
    slug: snippet.slugAsParams.split("/"),
  }))
}

export default async function SnippetPage({ params }: { params: any }) {
  const snippet = await getSnippetFromParams(params)

  if (!snippet) {
    notFound()
  }

  return (
    <section>
      {/* <script type="application/ld+json">
        {JSON.stringify(snippet.structuredData)}
      </script> */}
      <h1 className="font-serif text-4xl font-bold">
        <Balancer>{snippet.title}</Balancer>
      </h1>
      <div className="mb-8 mt-4 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center font-serif text-sm">
        <div className="rounded-md bg-zinc-100 px-2 py-1 tracking-tighter dark:bg-zinc-800">
          {formatDate(snippet.publishedAt)}
        </div>
        <div className="mx-2 h-[0.2em] bg-zinc-50 dark:bg-zinc-800" />
      </div>
      <Mdx code={snippet.body.code} />
    </section>
  )
}
