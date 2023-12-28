import Image from "next/image"
import { notFound } from "next/navigation"
import Balancer from "react-wrap-balancer"

import { TechStackCore } from "@/components/about/tech-stack-core"
import { CustomMDX } from "@/components/mdx/mdx-remote"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { ProjectContentDrawer } from "@/components/work/project-content-drawer"
import { getProjects } from "@/lib/mdx"

// // export async function generateMetadata({
// //   params,
// // }: {
// //   params: { slug: string }
// // }) {
// //   const { meta } = await getPageContent(params.slug)
// //   return { title: meta.title }
// // }

export default async function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  let project = getProjects().find((project) => project.slug === params.slug)
  if (!project) {
    notFound()
  }

  const stack = project.metadata.stack.split(",").map((elm) => elm.split("-"))

  return (
    <main>
      {/* <script type="application/ld+json">
        {JSON.stringify(project.structuredData)}
      </script> */}
      <div className="grid gap-y-5 border-b p-5 md:grid-cols-3">
        <h1 className="col-span-2 font-serif text-4xl font-black uppercase md:self-center md:text-9xl">
          <Balancer>{project.metadata.title}</Balancer>
        </h1>

        <div className="col-span-1 text-base md:self-end md:text-lg">
          <div className="uppercase md:text-right">
            <p>{project.metadata.category}</p>
            <p>
              {project.metadata.agency} {project.metadata.year}
            </p>
            <p>{project.metadata.summary}</p>
          </div>
        </div>
      </div>

      <section className="grid border-b md:grid-cols-2 md:divide-x">
        <div className="flex flex-col justify-between">
          <p className="border-t p-5 font-serif text-xl md:border-t-0 md:text-3xl">
            {project.metadata.description}
          </p>
          <div className="grid grid-cols-3 divide-x border-t">
            {project.metadata.siteUrl ? (
              <a
                href={project.metadata.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-primary tw-transition hover:text-background p-5 text-center font-medium uppercase"
              >
                {`Site`}
              </a>
            ) : (
              <div />
            )}

            {project.metadata.codeUrl ? (
              <a
                href={project.metadata.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-primary tw-transition hover:text-background p-5 text-center font-medium uppercase"
              >
                {`Code`}
              </a>
            ) : (
              <div />
            )}

            {project.content ? (
              <ProjectContentDrawer content={project.content} />
            ) : (
              <div />
            )}
            {/* <div className="">
              <MDXComponents source={content} />
            </div> */}
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
          {/* <div className="relative z-10 overflow-hidden">
            <Image
              width={1350}
              height={900}
              alt={project.metadata.title}
              src={project.metadata.coverImage}
              objectFit="cover"
              objectPosition="center"
              className="tw-transition border-primary h-full w-full scale-75 rounded-2xl border-4 object-cover object-center group-hover:scale-[0.8] md:grayscale md:group-hover:grayscale-0"
            />
          </div> */}
          <AspectRatio ratio={3 / 2}>
            <Image
              width={1350}
              height={900}
              alt={project.metadata.title}
              src={project.metadata.coverImage}
              objectFit="cover"
              objectPosition="center"
              className="border-primary scale-75 rounded-2xl border-4 object-cover object-center"
            />
            {/* <Image
              src={project.metadata.coverImage!}
              alt={project.metadata.title}
              fill
              className="object-cover object-center"
            /> */}
          </AspectRatio>
        </div>
      </section>

      <div className="grid border-b md:grid-cols-3">
        <div className="border-b p-5 text-lg md:col-span-1 md:grid md:place-content-center md:border-b-0 md:border-r">
          <h2 className="font-serif text-5xl font-black uppercase md:text-9xl">
            {`Tech Stack`}
          </h2>
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-col">
            <div className="grid gap-x-10 gap-y-5 p-5 text-lg md:grid-cols-2">
              {stack?.map((tech) => (
                <div className="flex items-center justify-between gap-x-5">
                  <p className="text-sm md:text-base">{tech[0]}</p>

                  <Badge
                    variant="outline"
                    className="pointer-events-none text-sm md:text-base"
                  >
                    {tech[1]}
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
