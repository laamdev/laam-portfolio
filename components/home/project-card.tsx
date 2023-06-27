import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export const ProjectCard = ({ className, project, idx, ...props }: any) => {
  return (
    <Link
      href={project.slug}
      className="group relative flex even:flex-row-reverse"
    >
      <div
        className={cn(
          "absolute -bottom-20 z-10 flex max-w-xl flex-col gap-y-2.5 md:top-0",
          idx % 2 ? "left-10 text-left" : "right-10 text-right"
        )}
      >
        <h3 className="font-serif text-3xl font-black uppercase leading-none tracking-tighter md:text-7xl">
          {project.title}
        </h3>

        <p className="text-sm md:text-lg">{project.summary}</p>
      </div>

      <div
        className={cn(
          "absolute top-3 z-10 flex gap-x-1.5 text-xs uppercase md:text-sm",
          idx % 2 ? "left-0" : "right-0"
        )}
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="rounded bg-zinc-700 px-0.5 py-1.5">
          {project.category}
        </span>
        <span className="rounded bg-zinc-700 px-0.5 py-1.5">
          {project.year}
        </span>
      </div>

      <div className="relative aspect-video w-11/12 rounded bg-zinc-900 md:w-2/3">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="transition-all duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
    </Link>
  )
}
