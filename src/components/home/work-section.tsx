"use client"

import { useEffect } from "react"

import { updateFilters } from "@/app/_actions"
import { Heading } from "@/components/global/heading"
import { ProjectGrid } from "@/components/home/project-grid"
import { ProjectList } from "@/components/home/project-list"
import { ViewToggle } from "@/components/home/view-toggle"
import { FilterPill } from "@/components/work/filter-pill"
import { projectCategoryVariants } from "@/lib/data"
import { useViewStore } from "@/lib/store"

import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"

export const WorkSection = ({ projects }) => {
  const viewStore = useViewStore()

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

      {viewStore.isToggled ? (
        <ProjectGrid projects={projects} />
      ) : (
        <ProjectList projects={projects} />
      )}
    </div>
  )
}
