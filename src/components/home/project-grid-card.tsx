import Image from "next/image"
import Link from "next/link"
import { Balancer } from "react-wrap-balancer"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"

export const ProjectGridCard = ({ project, idx }: any) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group border-b odd:border-r"
    >
      <AspectRatio ratio={3 / 2}>
        <div className="bg-primary absolute inset-0 z-10 mix-blend-overlay transition-opacity duration-500 ease-in-out group-hover:opacity-0" />

        <Image
          src={project.coverImage!}
          alt={project.title}
          fill
          className="scale-90 object-cover object-center grayscale transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:grayscale-0"
        />
      </AspectRatio>

      <div className="group-hover:bg-primary group-hover:text-background border-t p-5">
        <h2 className="font-serif text-3xl font-bold uppercase">{`${project.title}`}</h2>
      </div>
    </Link>
    // <Link
    //   href={project.slug}
    //   className="group relative flex flex-col-reverse px-8 md:flex-row md:px-16 md:even:flex-row-reverse"
    // >
    //   <div
    //     className={cn(
    //       "z-10 flex max-w-xl flex-col justify-center gap-y-2.5",
    //       idx % 2 ? "text-right md:-ml-20" : "text-left md:-mr-20"
    //     )}
    //   >
    //     <h3
    //       className={cn(
    //         "-mt-2 w-full font-serif text-xl font-bold uppercase leading-none tracking-tighter md:mt-0 md:text-7xl",
    //         idx % 2 ? "text-right" : "text-left"
    //       )}
    //     >
    //       {project.title}
    //     </h3>

    //     <p className="text-sm text-zinc-300 md:text-lg">
    //       {project.description}
    //     </p>
    //   </div>

    //   <div
    //     className={cn(
    //       "absolute top-3 z-10 flex gap-x-1 text-[8px] uppercase md:gap-x-2 md:text-sm",
    //       idx % 2 ? "right-0" : "left-0"
    //     )}
    //     style={{ writingMode: "vertical-rl" }}
    //   >
    //     <span className="whitespace-nowrap bg-primary px-0.5 py-1.5 text-primary-foreground">
    //       {project.category}
    //     </span>
    //     <span className="whitespace-nowrap bg-primary px-0.5 py-1.5 text-primary-foreground">
    //       {project.agency}
    //     </span>
    //     <span className="whitespace-nowrap bg-primary px-0.5 py-1.5 text-primary-foreground">
    //       {project.year}
    //     </span>
    //   </div>

    //   <div className="relative aspect-video w-full bg-zinc-900 md:w-2/3">
    //     <Image
    //       src={project.coverImage}
    //       alt={project.title}
    //       fill
    //       className="transition-all duration-500 ease-in-out group-hover:scale-105"
    //     />
    //   </div>
    // </Link>
  )
}
