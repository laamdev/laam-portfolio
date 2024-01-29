"use client"

import { useEffect } from "react"

import { Heading } from "@/components/global/heading"
import { ProjectGrid } from "@/components/home/project-grid"
import { ProjectList } from "@/components/home/project-list"
import { ViewToggle } from "@/components/home/view-toggle"
import { useViewStore } from "@/lib/store"


export const WorkSection = ({ projects }) => {
  const viewStore = useViewStore()

  useEffect(() => {
    useViewStore.persist.rehydrate()
  }, [])


  const sortedProjects = projects.sort((a,b) => a.metadata.priority - b.metadata.priority)

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
        <ProjectGrid projects={sortedProjects} />
      ) : (
        <ProjectList projects={sortedProjects} />
      )}
    </div>
  )
}
