import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allBlogs } from "contentlayer/generated"
import Balancer from "react-wrap-balancer"

import { Mdx } from "@/components/mdx/mdx-components"

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const post = await allBlogs.find(
    (post) => post.slug.split("/")[1] === params.slug
  )
  if (!post) {
    return
  }

  // // const ogImage = project.image
  // //   ? `https://leerob.io${image}`
  // //   : `https://leerob.io/api/og?title=${title}`;

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://leerob.io/blog/${post.slug}`,
      // // images: [
      // //   {
      // //     url: ogImage,
      // //   },
      // // ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      // // images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: { params: any }) {
  const post = allBlogs.find((post) => post.slug.split("/")[1] === params.slug)
  if (!post) {
    notFound()
  }

  return (
    <section>
      {/* <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script> */}
      <h1 className="max-w-[650px] font-mono text-3xl font-bold">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mb-8 mt-4 grid max-w-[650px] grid-cols-[auto_1fr_auto] items-center font-mono text-sm">
        <div className="rounded-md bg-zinc-100 px-2 py-1 tracking-tighter dark:bg-zinc-800">
          {post.publishedAt}
        </div>
        <div className="mx-2 h-[0.2em] bg-zinc-50 dark:bg-zinc-800" />
      </div>
      <Mdx code={post.body.code} />
    </section>
  )
}
