import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { allProjects } from "@/contentlayer/generated"
import Balancer from "react-wrap-balancer"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
    <main className="container">
      {/* <script type="application/ld+json">
        {JSON.stringify(project.structuredData)}
      </script> */}
      <section className="grid gap-x-10 md:grid-cols-2">
        <div className="">
          <h1 className="font-serif text-4xl font-bold uppercase leading-tight tracking-tighter md:text-7xl">
            <Balancer>{project.title}</Balancer>
          </h1>

          <p className="prose mt-5 max-w-prose text-zinc-300 md:prose-xl">
            {project.summary}
          </p>

          <Button size="sm" asChild className="mt-5 md:mt-10">
            <a href={project.siteUrl} target="_blank">
              Live site
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col gap-y-1">
            <p className="text-xl font-medium capitalize">{project.agency}</p>

            {project.agency !== "personal" && (
              <p className="font-serif">@ {project.client}</p>
            )}
          </div>

          <div className="flex flex-col gap-y-10">
            <p className="font-serif text-xl font-medium">{project.year}</p>
          </div>

          <div className="col-span-2 mt-10 flex flex-col gap-y-10">
            <div>
              <p className="font-light text-zinc-400">Roles</p>
              <ul className="mt-2.5 flex flex-wrap gap-2.5">
                {project.role?.map((role: string, roleIdx: number) => (
                  <li key={roleIdx}>
                    <Badge
                      variant="outline"
                      className="w-fit gap-x-1.5 text-base font-bold uppercase"
                    >
                      {role}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-light text-zinc-400">Tech Stack</p>
              <ul className="mt-2.5 flex flex-wrap gap-2.5">
                {project.stack?.map((stack: string, stackIdx: number) => (
                  <li key={stackIdx}>
                    <Badge
                      variant="outline"
                      className="w-fit gap-x-1.5 font-serif text-xs uppercase"
                    >
                      {stack}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="relative aspect-video">
          <Image
            src={project.coverImage!}
            alt={project.title}
            fill
            className="rounded bg-zinc-900 object-cover object-center"
          />
        </div>
      </section>
    </main>
  )
}
