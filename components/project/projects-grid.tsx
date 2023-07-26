import { ProjectGridCard } from "@/components/home/project-grid-card"

export const ProjectsGrid = ({ projects }: { projects: any }) => {
  return (
    <div className="mt-10 grid gap-y-28 md:gap-y-20">
      {projects.map((project: any, idx: number) => (
        <ProjectGridCard project={project} idx={idx} />
      ))}
    </div>
  )
}
