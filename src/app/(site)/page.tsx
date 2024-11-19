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

  console.log(allProjects)

  const sortedProjects = allProjects
    .filter((project) => project.metadata.isFeatured)
    .sort((a: any, b: any) => a.metadata.priority - b.metadata.priority)

  return (
    <main>
      <div className="grid border-b md:grid-cols-2">
        <div className="border-r font-serif">
          <Heading isPageTitle className="border-b p-5">{`LAAM`}</Heading>

          <div className="border-b p-5 ">
            <Subheading>
              {`Fullstack Developer specialized in NextJS, Tailwind CSS & Sanity`}
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

      <WorkSection projects={sortedProjects} />
    </main>
  )
}
