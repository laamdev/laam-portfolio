export const ProjectList = ({ sortedProjects }: { sortedProjects: any }) => {
  return (
    <div className="flex flex-col">
      {sortedProjects.map((project: any, idx: any) => (
        <a href={`/work/${project.slug}`} key={idx}>
          <div className="tw-transition hover:bg-foreground hover:text-background group flex flex-col justify-between gap-x-5 gap-y-2.5 border-b p-5 md:flex-row md:items-center">
            <h3 className="font-serif text-2xl font-bold uppercase md:text-7xl">
              {project.data.title}
            </h3>

            <p className="flex flex-row gap-x-1 text-right text-base font-medium uppercase md:col-span-1 md:flex-col md:self-end md:text-lg">
              <span>{project.data.year}</span>
              <span className="md:hidden">·</span>
              <span>{project.data.category}</span>
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
