import { ProjectListCard } from "@/components/project/project-list-card"

export const ProjectsList = ({ projects }: { projects: any }) => {
  return (
    <div className="grid divide-y border-b">
      {projects.map((project: any, projectIdx: number) => (
        <ProjectListCard
          project={project}
          key={projectIdx}
          projectNumber={projectIdx + 1}
        />
      ))}
    </div>
  )
}
