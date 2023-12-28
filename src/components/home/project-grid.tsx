import Image from "next/image"

import { ProjectFrontmatter } from "@/types/mdx"

export const ProjectGrid = ({ sortedProjects }: { sortedProjects: any }) => {
  return (
    <div className="grid md:grid-cols-2">
      {sortedProjects.map(
        (
          project: { slug: string; metadata: ProjectFrontmatter },
          idx: number
        ) => (
          <a
            key={idx}
            href={`/work/${project.slug}`}
            className="group relative border-b odd:border-r"
          >
            <div className="relative z-10 overflow-hidden">
              <Image
                width={1350}
                height={900}
                alt={project.metadata.title}
                src={project.metadata.coverImage}
                objectFit="cover"
                objectPosition="center"
                className="tw-transition border-primary h-full w-full scale-75 rounded-2xl border-4 object-cover object-center group-hover:scale-[0.8] md:grayscale md:group-hover:grayscale-0"
              />
              {/* <div className="tw-transition bg-foreground inset-0 z-20 hidden scale-75 rounded opacity-75 mix-blend-multiply group-hover:opacity-0 md:absolute md:block"></div> */}
            </div>

            <div className="tw-transition group-hover:bg-foreground group-hover:text-background border-t p-5">
              <p className="flex gap-x-1 text-base font-medium uppercase md:text-lg">
                <span>{project.metadata.year}</span>
                <span>·</span>
                <span>{project.metadata.category}</span>
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold uppercase md:text-5xl">
                {`${project.metadata.title}`}
              </h2>
            </div>
          </a>
        )
      )}
    </div>
  )
}
