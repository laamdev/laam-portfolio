import { Heading } from "@/components/global/heading"
import { ProjectGrid } from "@/components/home/project-grid"

import { getProjects } from "@/lib/mdx"

export const WorkSection = async () => {
  const allProjects = getProjects()

  const sortedProjects = allProjects
    .filter((project) => project.metadata.isFeatured)
    .sort((a: any, b: any) => a.metadata.priority - b.metadata.priority)

  return (
    <div>
      <div className="border-b p-5">
        <Heading>Work</Heading>
      </div>

      <ProjectGrid projects={sortedProjects} />
    </div>
  )
}
