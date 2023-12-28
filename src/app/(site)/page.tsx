import Image from "next/image"

import { WorkSection } from "@/components/home/work-section"
import { getProjects } from "@/lib/mdx"

export default async function HomeRoute() {
  let allProjects = getProjects()

  const sortedProjects = allProjects
    .filter((project) => project.metadata.isFeatured)
    .sort((a: any, b: any) => a.metadata.priority - b.metadata.priority)

  return (
    <main>
      <div className="grid border-b md:grid-cols-2">
        <div className="border-r font-serif">
          <h1 className="border-b p-5 text-7xl font-black uppercase md:text-9xl">
            {`LAAM`}
          </h1>
          <p className="flex flex-col border-b p-5 text-3xl font-bold uppercase md:text-5xl">
            <span>{`Creative React Developer `}</span>
            <span>{`specialized in NextJS & Tailwind CSS`}</span>
          </p>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden">
          <Image
            src="/images/home/hero-icon.webp"
            alt="Line art circle."
            width={1080}
            height={1080}
            className="animate-spin-slow object-center"
          />
        </div>
      </div>

      <div>
        <WorkSection sortedProjects={sortedProjects} />
      </div>
    </main>
  )
}

// // import { PlusIcon } from "lucide-react"
// // import type { Metadata } from "next"
// // import Link from "next/link"
// // import { Balancer } from "react-wrap-balancer"

// // import { ProjectsContainer } from "@/components/project/projects-container"
// // import { getAllProjectsMeta } from "@/lib/mdx"

// // // // export const metadata: Metadata = {
// // // //   title: "Home",
// // // //   description:
// // // //     "This section includes end-to-end guides for developing Next.js 13 apps.",
// // // //   openGraph: {
// // // //     title: "Home",
// // // //     description:
// // // //       "This section includes end-to-end guides for developing Next.js 13 apps.",
// // // //   },
// // // // }

// // export default async function IndexPage() {
// //   const projects = await getAllProjectsMeta()

// //   const featuredProjects = projects
// //     .filter((project) => project.isFeatured)
// //     .sort((a: any, b: any) => a.priority - b.priority)
// //   return (
// //     <main>
// //       <div classNameName="mx-auto flex max-w-[980px] flex-col items-center gap-y-2.5 md:gap-y-0"></div>

// //       <ProjectsContainer projects={featuredProjects} />
// //     </main>
// //   )
// // }
