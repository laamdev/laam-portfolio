import Image from "next/image"

import { ProjectFrontmatter } from "@/types/mdx"

import { Label } from "../global/label"
import { Subheading } from "../global/subheading"

export const ProjectGrid = ({ projects }: { projects: any }) => {
  return (
    <div className="grid md:grid-cols-2">
      {projects.map(
        (
          project: { slug: string; metadata: ProjectFrontmatter },
          idx: number
        ) => (
          <a
            key={idx}
            href={`/work/${project.slug}`}
            className="group relative border-b last:border-b-0 odd:border-r"
          >
            <div className="relative z-10 overflow-hidden">
              <Image
                width={1350}
                height={900}
                alt={project.metadata.title}
                src={project.metadata.coverImage}
                objectFit="cover"
                objectPosition="center"
                className="tw-transition border-primary h-full w-full scale-75 rounded-2xl border-4 object-cover object-center group-hover:scale-[0.8] md:grayscale md:group-hover:grayscale-0"
              />
              {/* <div className="tw-transition bg-foreground inset-0 z-20 hidden scale-75 rounded opacity-75 mix-blend-multiply group-hover:opacity-0 md:absolute md:block"></div> */}
            </div>

            <div className="tw-transition group-hover:bg-foreground group-hover:text-background border-t p-5">
              <Label>
                <span className="flex gap-x-1">
                  <span>{project.metadata.year}</span>
                  <span>·</span>
                  <span>{project.metadata.functionality}</span>
                </span>
              </Label>
              <Subheading>{`${project.metadata.title}`}</Subheading>
            </div>
          </a>
        )
      )}
    </div>
  )
}
