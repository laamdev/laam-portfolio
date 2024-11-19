import { SearchIcon } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Heading } from "@/components/global/heading"
import { NavButton } from "@/components/global/nav-button"
import { Subheading } from "@/components/global/subheading"
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
  let allSnippets = getSnippets()

  return (
    <main>
      <Heading className="border-b p-5">{`Snippets`}</Heading>

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
                  <Subheading>{snippet.metadata.title}</Subheading>

                  {/* <SnippetDetails>
                    {formatDate(snippet.pubDate)} ·{" "}
                    {remarkPluginFrontmatter.minutesRead}
                  </SnippetDetails> */}

                  <div className="mt-2.5 md:mt-5">
                    <NavButton
                      href={`/snippets/${snippet.slug}`}
                      variant="outline"
                    >
                      {`Read More`}
                    </NavButton>
                  </div>
                </article>
                <div className="odd:border-right even:border-left tw-noise bg-foreground p-5 md:w-1/2">
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
  )
}
