import Image from "next/image"
import Link from "next/link"

import { AspectRatio } from "@/components/ui/aspect-ratio"

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
  )
}
