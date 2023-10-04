import { ProjectGridCard } from "@/components/home/project-grid-card"

export const ProjectsGrid = ({ projects }: { projects: any }) => {
  return (
    <div className="grid md:grid-cols-2">
      {projects.map((project: any, idx: number) => (
        <ProjectGridCard project={project} idx={idx} />
      ))}
    </div>
  )
}
