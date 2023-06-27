import type { Metadata } from "next"
import Link from "next/link"
import { allProjects } from "@/contentlayer/generated"
import { PlusIcon } from "lucide-react"
import { Balancer } from "react-wrap-balancer"

import { ProjectsContainer } from "@/components/project/projects-container"

// // export const metadata: Metadata = {
// //   title: "Home",
// //   description:
// //     "This section includes end-to-end guides for developing Next.js 13 apps.",
// //   openGraph: {
// //     title: "Home",
// //     description:
// //       "This section includes end-to-end guides for developing Next.js 13 apps.",
// //   },
// // }

export default async function IndexPage() {
  const featuredProjects = await allProjects.filter(
    (project) => project.isFeatured
  )
  return (
    <main className="container">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-y-2.5 md:gap-y-0">
        <h1 className="text-center font-serif text-4xl font-extrabold uppercase leading-tight tracking-tighter md:text-7xl">
          <Balancer>Luis Alejandro Anaya Marín</Balancer>
        </h1>
        <h2 className="text-center text-2xl leading-tight tracking-tighter text-zinc-300 md:text-4xl">
          <Balancer>
            <br className="hidden sm:inline" />
            {`Full-stack developer specialized `}
            <br className="hidden sm:inline" />
            {`in Next.js and Tailwind CSS.`}
          </Balancer>
        </h2>
        {/* <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1> */}
        {/* <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p> */}
      </div>

      {/* <h2 className="text-center text-5xl">
        <Balancer>
          Full-stack developer specialized in Next.js and Tailwind CSS.
        </Balancer>
      </h2>
     */}

      <ProjectsContainer projects={featuredProjects} />
    </main>
  )
}
