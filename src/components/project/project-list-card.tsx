import Link from "next/link"

export const ProjectListCard = ({
  project,
  projectNumber,
}: {
  project: any
  projectNumber: number
}) => {
  return (
    <Link
      href={project.slug}
      className="flex items-center justify-between p-5 hover:bg-primary hover:text-background"
    >
      <div className="flex items-baseline gap-x-10">
        <div className="tabular-nums">
          {projectNumber < 10 ? `0${projectNumber}` : projectNumber}
        </div>
        <h2 className="font-serif text-4xl font-bold uppercase tracking-tighter">
          {project.title}
        </h2>
      </div>
      <div className="text-right">
        <h3 className="uppercase">{project.summary}</h3>
        <h3 className="uppercase">{`(${project.year})`}</h3>
      </div>
    </Link>
  )
}
