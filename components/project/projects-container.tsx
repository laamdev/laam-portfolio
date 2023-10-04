"use client"

import { useState } from "react"

import { ViewToggle } from "@/components/home/view-toggle"
import { ProjectsGrid } from "@/components/project/projects-grid"
import { ProjectsList } from "@/components/project/projects-list"

export const ProjectsContainer = ({ projects }: { projects: any }) => {
  const [toggleViewMode, setToggleViewMode] = useState(true)

  return (
    <div>
      <div className="flex justify-between border-b p-5">
        <h1 className="font-serif text-5xl font-black uppercase md:text-9xl">
          Work
        </h1>
        <ViewToggle
          toggleViewMode={toggleViewMode}
          setToggleViewMode={setToggleViewMode}
        />
      </div>

      {toggleViewMode ? (
        <ProjectsGrid projects={projects} />
      ) : (
        <ProjectsList projects={projects} />
      )}
    </div>
  )
}
