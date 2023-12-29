"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

import { ProjectGrid } from "@/components/home/project-grid"
import { ProjectList } from "@/components/home/project-list"
import { ViewToggle } from "@/components/home/view-toggle"
import { FilterPill } from "@/components/work/filter-pill"
import { projectCategoryVariants } from "@/lib/data"
import { useViewStore } from "@/lib/store"

import { Heading } from "../global/heading"

export const WorkSection = ({ sortedProjects }: { sortedProjects: any }) => {
  const viewStore = useViewStore()
  const searchParams = useSearchParams()
  const selectedProjectCategory = searchParams.get("project_type")

  useEffect(() => {
    useViewStore.persist.rehydrate()
  }, [])

  return (
    <div>
      <div className="flex justify-between border-b p-5">
        <Heading>Work</Heading>
        <ViewToggle
          isToggled={viewStore.isToggled}
          setToggle={viewStore.setToggle}
        />
      </div>
      {/* <div className="flex items-center gap-x-10 border-b p-5">
        <p>Filters by</p>
        <div className="flex gap-x-5">
          {projectCategoryVariants.map((category, idx) => (
            <FilterPill key={idx} href={`?project_category=${category}`}>
              {category}
            </FilterPill>
          ))}
        </div>
      </div> */}

      {viewStore.isToggled ? (
        <ProjectGrid sortedProjects={sortedProjects} />
      ) : (
        <ProjectList sortedProjects={sortedProjects} />
      )}
    </div>
  )
}
