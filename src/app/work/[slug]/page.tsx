import Image from "next/image"
import { notFound } from "next/navigation"
import matter from "gray-matter"
import remarkFrontmatter from "remark-frontmatter"
import { serialize } from "next-mdx-remote/serialize"

import { Label } from "@/components/global/label"
import { LabelSm } from "@/components/global/label-sm"
import { Subheading } from "@/components/global/subheading"
import { Badge } from "@/components/ui/badge"
import { MdxContent } from "@/components/global/mdx-content"

import { getAllProjects } from "@/lib/mdx"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params

  const project = getAllProjects().find((project) => project.slug === slug)

  return { title: project?.metadata.title }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  const project = await getAllProjects().find(
    (project) => project.slug === slug
  )

  if (!project) {
    notFound()
  }

  // Parse and remove frontmatter
  const { content } = matter(project.content)

  // Serialize the content with properly configured remarkFrontmatter
  const serializedContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[remarkFrontmatter, { type: "yaml", marker: "-" }]],
    },
  })

  const stack = project.metadata.stack.split(",").map((elm) => elm.split("-"))
  const role = project.metadata.role.split(",")

  return (
    <main>
      {/* <script type="application/ld+json">
        {JSON.stringify(project.structuredData)}
      </script> */}
      <div className="grid gap-y-5 border-b p-5 md:grid-cols-3">
        <h1 className="col-span-2 font-serif text-4xl font-black uppercase md:self-center md:text-9xl">
          {project.metadata.title}
        </h1>

        <div className="col-span-1 text-base md:self-end md:text-lg">
          <Label className="flex flex-col md:text-right">
            <span>{project.metadata.category}</span>
            <span>
              {project.metadata.agency} {project.metadata.year}
            </span>
            <span>{project.metadata.summary}</span>
          </Label>
        </div>
      </div>

      <section className="grid border-b md:grid-cols-2 md:divide-x">
        <div className="flex flex-col justify-between">
          <div className="p-5">
            <Subheading>{project.metadata.description}</Subheading>
          </div>
          <div className="grid grid-cols-3 divide-x border-t">
            {project.metadata.siteUrl ? (
              <a
                href={project.metadata.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-primary tw-transition hover:text-background p-5 text-center text-sm font-bold uppercase md:text-base"
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
                className="hover:bg-primary tw-transition hover:text-background p-5 text-center text-sm font-bold uppercase md:text-base"
              >
                {`Code`}
              </a>
            ) : (
              <div />
            )}

            {project.content ? (
              <div></div>
            ) : (
              // <ProjectContentDrawer content={project.content} />
              <div />
            )}
          </div>
        </div>
        <div className="row-start-1 md:row-auto">
          <div className="aspect-[16/10] relative">
            <Image
              alt={project.metadata.title}
              src={project.metadata.coverImage}
              fill
              className="border-primary scale-75 rounded-2xl border-4 object-cover object-top"
            />
          </div>
        </div>
      </section>

      <div className="grid border-b md:grid-cols-3">
        <div className="border-b p-5 text-lg md:col-span-1 md:grid md:place-content-center md:border-b-0 md:border-r">
          <h2 className="font-serif text-5xl font-black uppercase md:text-9xl">
            {`Stack`}
          </h2>
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-col">
            <div className="grid gap-x-10 gap-y-5 p-5 text-lg md:grid-cols-2">
              {stack?.map((tech) => (
                <div className="flex items-center justify-between gap-x-5">
                  <LabelSm>{tech[0]}</LabelSm>

                  <Badge>{tech[1]}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid border-b md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-x-10 gap-y-5 p-5 text-lg">
              {role?.map((tech) => <Badge>{tech}</Badge>)}
            </div>
          </div>
        </div>

        <div className="row-start-1 border-b p-5 text-lg md:col-span-1 md:row-auto md:grid md:place-content-center md:border-b-0 md:border-l">
          <h2 className="font-serif text-5xl font-black uppercase md:text-9xl">
            {`Role`}
          </h2>
        </div>
      </div>

      <div className="prose mx-auto prose-invert p-10">
        <MdxContent source={serializedContent} />
      </div>
    </main>
  )
}
