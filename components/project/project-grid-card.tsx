import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export const ProjectGridCard = ({ className, project, idx }: any) => {
  return (
    <Link
      href={project.slug}
      className="group relative flex px-14 even:flex-row-reverse"
    >
      <div
        className={cn(
          "z-10 flex max-w-xl flex-col justify-center gap-y-2.5",
          idx % 2 ? "-ml-20 text-right" : "-mr-20 text-left"
        )}
      >
        <h3 className="font-serif text-3xl font-black uppercase leading-none tracking-tighter md:text-7xl">
          {project.title}
        </h3>

        <p className="text-base md:text-lg">{project.summary}</p>
      </div>

      <div
        className={cn(
          "absolute top-3 z-10 flex gap-x-1.5 text-xs uppercase md:text-sm",
          idx % 2 ? "right-0" : "left-0"
        )}
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="rounded bg-zinc-700 px-0.5 py-1.5 text-zinc-300">
          {project.category}
        </span>
        <span className="rounded bg-zinc-700 px-0.5 py-1.5 text-zinc-300">
          {project.agency}
        </span>
        <span className="rounded bg-zinc-700 px-0.5 py-1.5 text-zinc-300">
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
