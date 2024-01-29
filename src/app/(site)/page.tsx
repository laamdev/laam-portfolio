import Image from "next/image"

import { Heading } from "@/components/global/heading"
import { Subheading } from "@/components/global/subheading"
import { WorkSection } from "@/components/home/work-section"
import { getProjects } from "@/lib/mdx"

interface ProjectCategoryParams {
  [key: string]: string
}

export default async function HomeRoute({
  searchParams,
}: {
  searchParams: { searchParams: ProjectCategoryParams }
}) {
  let allProjects = getProjects()

  // // const sortedProjects = allProjects
  // //   .filter((project) => project.metadata.isFeatured)
  // //   .sort((a: any, b: any) => a.metadata.priority - b.metadata.priority)
  // // const { project_category: projectCategory } = searchParams

  return (
    <main>
      <div className="grid border-b md:grid-cols-2">
        <div className="border-r font-serif">
          <Heading isPageTitle className="border-b p-5">{`LAAM`}</Heading>

          <div className="border-b p-5 ">
            <Subheading>
              {`Creative React Developer specialized in NextJS & Tailwind
            CSS`}
            </Subheading>
          </div>
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

      <WorkSection projects={allProjects} />
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
