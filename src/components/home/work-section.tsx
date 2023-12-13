"use client"

import { useState } from "react"

import { ProjectGrid } from "@/components/home/project-grid"
import { ProjectList } from "@/components/home/project-list"
import { ViewToggle } from "@/components/home/view-toggle"

export const WorkSection = ({ sortedProjects }: { sortedProjects: any }) => {
  const [toggleViewMode, setToggleViewMode] = useState(true)

  return (
    <div>
      <div className="flex justify-between border-b p-5">
        <h1 className="font-serif text-6xl font-black uppercase md:text-9xl">
          Work
        </h1>
        <ViewToggle
          toggleViewMode={toggleViewMode}
          setToggleViewMode={setToggleViewMode}
        />
      </div>

      {toggleViewMode ? (
        <ProjectGrid sortedProjects={sortedProjects} />
      ) : (
        <ProjectList sortedProjects={sortedProjects} />
      )}
    </div>
  )
}
