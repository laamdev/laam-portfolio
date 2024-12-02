import { Label } from "@/components/global/label"
import { Subheading } from "@/components/global/subheading"

export const ProjectList = ({ projects }: { projects: any }) => {
  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <a href={`/work/${project.slug}`} key={project.slug}>
          <div className="tw-transition hover:bg-foreground hover:text-background group flex flex-col justify-between gap-x-5 gap-y-2.5 border-b p-5 md:flex-row md:items-center">
            <Subheading>{project.title}</Subheading>

            <Label className="flex flex-row gap-x-1 text-right text-base md:col-span-1 md:flex-col md:self-end">
              <span>{project.year}</span>
              <span className="md:hidden">·</span>
              <span>{project.category}</span>
            </Label>
          </div>
        </a>
      ))}
    </div>
  )
}
