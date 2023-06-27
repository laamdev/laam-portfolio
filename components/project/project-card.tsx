import Image from "next/image"

export const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="border-branding-300 group col-span-1 h-full rounded-md border-2">
      <div className="bg-branding-100">
        <Image
          src={project.coverImage}
          alt={`Cover image from ${project.title}`}
          width={400}
          height={400}
          // // classesWrapper="relative aspect-[4/3] transition-all duration-500 ease-in-out lg:scale-90 lg:grayscale lg:group-hover:scale-95 lg:group-hover:grayscale-0"
        />
      </div>

      <div className="p-5">
        {/* <div className="mt-2.5 flex">
          <h4 className="tw-transition inline-flex w-fit items-center rounded-full border-2 border-branding-300 px-2.5 py-0.5 text-xs font-semibold uppercase text-branding-300 group-hover:bg-branding-300 group-hover:text-zinc-900 lg:text-sm">
            {project.siteType.join(' + ')}
          </h4>
        </div> */}

        {/* <h4 className="tw-transition inline-flex w-fit items-center rounded-full border border-branding-300 px-3 py-0.5 text-sm font-medium uppercase text-branding-300 group-hover:bg-branding-300 group-hover:text-zinc-900">
          {project.siteType.join(' + ')}
        </h4> */}
        <h3 className="mt-5 font-mono text-3xl font-semibold">
          {project.title}
        </h3>
        {project.overview && (
          <div className="mt-1.5 text-base font-medium text-zinc-300 md:text-lg">
            {project.summary}
          </div>
        )}
        {/* <ul className="mt-2.5 flex gap-x-2.5">
          {project.tags?.map((tag, tagIdx) => (
            <li
              key={tagIdx}
              className="inline-flex w-fit items-center rounded-full border-2 border-branding-300 px-2.5 py-0.5 text-xs font-semibold uppercase text-branding-300 lg:text-sm"
            >
              {tag}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  )
}
