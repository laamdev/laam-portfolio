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
  const featuredProjects = await allProjects
    .filter((project) => project.isFeatured)
    .sort((a: any, b: any) => a.priority - b.priority)
  return (
    <main>
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-y-2.5 md:gap-y-0"></div>

      <ProjectsContainer projects={featuredProjects} />
    </main>
  )
}
