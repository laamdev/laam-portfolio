import { ProjectListCard } from "@/components/project/project-list-card"

export const ProjectsList = ({ projects }: { projects: any }) => {
  return (
    <div className="mt-10 grid divide-y-2">
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
