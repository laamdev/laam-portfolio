import Image from "next/image"
import { notFound } from "next/navigation"
import { serialize } from "next-mdx-remote/serialize"
import matter from "gray-matter"
import remarkFrontmatter from "remark-frontmatter"

import { MdxContent } from "@/components/global/mdx-content"

import { getAllSnippets } from "@/lib/mdx"

interface SnippetPageProps {
  params: Promise<{ slug: string }>
}

export default async function SnippetPage({ params }: SnippetPageProps) {
  const { slug } = await params

  const snippet = await getAllSnippets().find(
    (snippet) => snippet.slug === slug
  )

  if (!snippet) {
    notFound()
  }

  // Parse and remove frontmatter
  const { content } = matter(snippet.content)

  // Serialize the content with properly configured remarkFrontmatter
  const serializedContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[remarkFrontmatter, { type: "yaml", marker: "-" }]],
    },
  })

  return (
    <main className="divide-y border-b md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
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
        <div className="prose prose-invert p-10">
          <MdxContent source={serializedContent} />
        </div>
      </div>
    </main>
  )
}
