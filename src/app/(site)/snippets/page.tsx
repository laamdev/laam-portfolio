import { SearchIcon } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getSnippets } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Snippets",
  description: "Read my thoughts on software development, design, and more.",
  openGraph: {
    title: "Snippets",
    description: "Read my thoughts on software development, design, and more.",
  },
}

export default async function SnippetsPage() {
  // // const snippets = await getAllSnippetsMeta()
  let allSnippets = getSnippets()

  console.log(JSON.stringify(allSnippets[0], null, 2))

  return (
    <main>
      <h1 className="border-b p-5 font-serif text-7xl font-black uppercase md:text-9xl">
        {`Snippets`}
      </h1>

      <article>
        {allSnippets
          .filter((snippet) => snippet.metadata.isFeatured)
          .sort((a, b) => {
            if (new Date(a.metadata.pubDate) > new Date(b.metadata.pubDate)) {
              return -1
            }
            return 1
          })
          .map((snippet) => {
            return (
              <div className="flex flex-col-reverse border-b md:flex-row md:even:flex-row-reverse">
                <article className="flex-1 border-b p-5 md:border-b-0">
                  <h2 className="font-serif text-3xl font-bold uppercase md:text-5xl">
                    {snippet.metadata.title}
                  </h2>

                  {/* <SnippetDetails>
                    {formatDate(snippet.pubDate)} ·{" "}
                    {remarkPluginFrontmatter.minutesRead}
                  </SnippetDetails> */}

                  <div className="mt-5 md:mt-10">
                    <a href={`/snippets/${snippet.slug}`}>
                      <Button>Read More</Button>
                    </a>
                  </div>
                </article>
                <div className="odd:border-right even:border-left bg-foreground p-5 md:w-1/2">
                  <Image
                    src={snippet.metadata.cover}
                    alt={snippet.metadata.title}
                    width={1080}
                    height={1080}
                  />
                </div>
              </div>
            )
          })}
      </article>
    </main>
    // <main className="grid border-b md:grid-cols-2">
    //   <div>
    //     <h1 className="sticky top-0 p-5 font-serif text-5xl font-black uppercase md:text-9xl">
    //       {`Snippets`}
    //     </h1>
    //   </div>

    //   <div className="grid divide-y border-t md:border-l md:border-t-0">
    //     {/* <div className="flex items-center">
    //       <div className="border-r p-5">
    //         <SearchIcon className="h-4 w-4" />
    //       </div>
    //       <div className="w-full px-5">
    //         <Input />
    //       </div>
    //     </div> */}
    //     {snippets
    //       .filter((snippet) => snippet.isFeatured)
    //       .sort((a, b) => {
    //         if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
    //           return -1
    //         }
    //         return 1
    //       })
    //       .map((snippet) => (
    //         <Link
    //           key={snippet.slug}
    //           href={snippet.slug}
    //           className="hover:bg-primary hover:text-background flex items-center p-5 md:justify-end"
    //         >
    //           <h2 className="text-lg md:text-xl">{snippet.title}</h2>
    //         </Link>
    //       ))}
    //   </div>
    // </main>
  )
}
