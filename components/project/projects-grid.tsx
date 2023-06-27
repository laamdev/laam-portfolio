import { ProjectCard } from "@/components/home/project-card"

export const ProjectsGrid = ({ projects }: { projects: any }) => {
  return (
    <div className="mt-10 grid gap-y-28 md:gap-y-20">
      {projects.map((project: any, idx: number) => (
        <ProjectCard project={project} idx={idx} />
      ))}
    </div>
  )
}
