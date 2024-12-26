import { Heading } from "@/components/global/heading"
import { ProjectGrid } from "@/components/home/project-grid"

import { getAllProjects } from "@/lib/mdx"

export const WorkSection = async () => {
  const projects = await getAllProjects()
  const sortedProjects = projects
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
