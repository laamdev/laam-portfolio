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
    <section className="grid border-b md:grid-cols-2 md:divide-x">
      {/* <script type="application/ld+json">
        {JSON.stringify(snippet.structuredData)}
      </script> */}
      <div className="border-b p-5 md:border-b-0">
        <h1 className="font-serif text-3xl font-bold md:text-5xl">
          <Balancer>{snippet.title}</Balancer>
        </h1>
        {/* <div>{formatDate(snippet.publishedAt)}</div> */}
      </div>

      <div className="prose-base prose-invert mx-auto w-full max-w-prose p-5 md:prose-lg">
        <Mdx code={snippet.body.code} />
      </div>
    </section>
  )
}
