import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { allProjects } from "@/contentlayer/generated"
import Balancer from "react-wrap-balancer"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { TechStackCore } from "@/components/about/tech-stack-core"
import { Mdx } from "@/components/mdx/mdx-components"
import { ProjectInfoDrawer } from "@/components/project/project-info-drawer"

// // import { Mdx } from "@/components/mdx/mdx-components"

async function getProjectFromParams(params: any) {
  const slug = params?.slug?.join("/")
  const page = allProjects.find((page: any) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const project = await getProjectFromParams(params)

  if (!project) {
    notFound()
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      // // publishedTime,
      url: `https://laam.dev/projects/${project.slug}`,
      // // images: [
      // //   {
      // //     url: ogImage,
      // //   },
      // // ],
    },
    // // twitter: {
    // //   card: "summary_large_image",
    // //   title,
    // //   description,
    // //   images: [ogImage],
    // // },
  }
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }))
}

export default async function ProjectPage({ params }: { params: any }) {
  const project = await getProjectFromParams(params)

  if (!project) {
    notFound()
  }

  return (
    <main>
      {/* <script type="application/ld+json">
        {JSON.stringify(project.structuredData)}
      </script> */}
      <div className="flex flex-col gap-y-5 border-b p-5 md:flex-row md:justify-between md:gap-x-10 md:gap-y-0">
        <h1 className="font-serif text-5xl font-black uppercase md:self-center md:text-9xl">
          <Balancer>{project.title}</Balancer>
        </h1>

        <div className="md:self-end">
          <div className="uppercase md:text-right">
            <p>{project.category}</p>
            <p>
              {project.agency} {project.year}
            </p>
            <p>{project.summary}</p>
          </div>
        </div>

        {/* <Button asChild className="w-fit self-end" variant="outline">
          <a href={project.siteUrl} target="_blank">
            Live site
          </a>
        </Button> */}
      </div>

      <section className="grid border-b md:grid-cols-2 md:divide-x">
        <div className="flex flex-col justify-between">
          <p className="border-t p-5 font-serif text-xl md:border-t-0 md:text-3xl">
            {project.description}
          </p>
          <div className="grid w-full grid-cols-3 justify-between divide-x border-t">
            <a href={project.siteUrl} target="_blank" rel="noreferrer">
              <div className="p-5 text-center font-medium uppercase hover:bg-primary hover:text-background">
                Live Site
              </div>
            </a>
            <div>
              {project.codeUrl && (
                <a href={project.codeUrl} target="_blank" rel="noreferrer">
                  <div className="p-5 text-center font-medium  uppercase hover:bg-primary hover:text-background">
                    Code Repo
                  </div>
                </a>
              )}
            </div>
            <div className="">
              <ProjectInfoDrawer body={project.body.code} />
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
              src={project.coverImage!}
              alt={project.title}
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
              {project?.stack?.map((tech) => (
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
