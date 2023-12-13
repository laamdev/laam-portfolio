import Image from "next/image"
import Balancer from "react-wrap-balancer"

import { TechStackCore } from "@/components/about/tech-stack-core"
import { MDXComponents } from "@/components/mdx/mdx-components"
import { ProjectInfoDrawer } from "@/components/project/project-info-drawer"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { getProjectBySlug } from "@/lib/mdx"

const getPageContent = async (slug) => {
  const { meta, content } = await getProjectBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const { content, meta } = await getPageContent(params.slug)

  return (
    <main>
      {/* <script type="application/ld+json">
        {JSON.stringify(project.structuredData)}
      </script> */}
      <div className="grid gap-y-5 border-b p-5 md:grid-cols-3">
        <h1 className="col-span-2 font-serif text-4xl font-black uppercase md:self-center md:text-9xl">
          <Balancer>{meta.title}</Balancer>
        </h1>

        <div className="col-span-1 text-base md:self-end md:text-lg">
          <div className="uppercase md:text-right">
            <p>{meta.category}</p>
            <p>
              {meta.agency} {meta.year}
            </p>
            <p>{meta.summary}</p>
          </div>
        </div>
      </div>

      <section className="grid border-b md:grid-cols-2 md:divide-x">
        <div className="flex flex-col justify-between">
          <p className="border-t p-5 font-serif text-xl md:border-t-0 md:text-3xl">
            {meta.description}
          </p>
          <div className="grid w-full grid-cols-3 justify-between divide-x border-t">
            <a href={meta.siteUrl} target="_blank" rel="noreferrer">
              <div className="hover:bg-primary hover:text-background p-5 text-center font-medium uppercase">
                Site
              </div>
            </a>
            <div>
              {meta.codeUrl && (
                <a href={meta.codeUrl} target="_blank" rel="noreferrer">
                  <div className="hover:bg-primary hover:text-background p-5  text-center font-medium uppercase">
                    Code
                  </div>
                </a>
              )}
            </div>
            <div className="">
              <MDXComponents source={content} />
            </div>
            {/* <div className="flex gap-x-2.5">
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: "default",
                  className: "cursor-pointer",
                })}
              >
                Live Site
              </a>

              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    variant: "default",
                    className: "cursor-pointer",
                  })}
                >
                  Code Repo
                </a>
              )}
            </div>

           */}
          </div>
        </div>
        <div className="row-start-1 md:row-auto">
          <AspectRatio ratio={3 / 2}>
            <Image
              src={meta.coverImage!}
              alt={meta.title}
              fill
              className="object-cover object-center"
            />
          </AspectRatio>
        </div>
      </section>

      <div className="grid border-b md:grid-cols-3">
        <div className="border-b p-5 text-lg md:col-span-1 md:grid md:place-content-center md:border-b-0 md:border-r">
          <h2 className="font-serif text-5xl font-black uppercase md:text-9xl">
            Stack
          </h2>
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-col">
            <div className="grid gap-x-10 gap-y-5 p-5 text-lg md:grid-cols-2">
              {meta?.stack?.map((tech) => (
                <div className="flex items-center justify-between gap-x-5">
                  <p className="text-sm md:text-base">{tech.category}</p>

                  <Badge
                    variant="outline"
                    className="pointer-events-none text-sm md:text-base"
                  >
                    {tech.tech}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
