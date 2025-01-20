import Image from "next/image"

import { Label } from "@/components/global/label"
import { Subheading } from "@/components/global/subheading"
import { Badge } from "@/components/ui/badge"

import { ProjectFrontmatter } from "@/types/mdx"

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
            <div className="relative aspect-[16/9] z-10 overflow-hidden">
              <Image
                alt={project.metadata.title}
                src={project.metadata.coverImage}
                fill
                className="tw-transition border-primary size-full scale-75 rounded-2xl border-4 object-cover object-top group-hover:scale-[0.8] md:grayscale md:group-hover:grayscale-0"
              />
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
