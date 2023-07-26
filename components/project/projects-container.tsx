"use client"

import { useState } from "react"

import { ViewToggle } from "@/components/home/view-toggle"
import { ProjectsGrid } from "@/components/project/projects-grid"
import { ProjectsList } from "@/components/project/projects-list"

export const ProjectsContainer = ({ projects }: { projects: any }) => {
  const [toggleViewMode, setToggleViewMode] = useState(true)

  return (
    <div className="mt-20">
      <ViewToggle
        toggleViewMode={toggleViewMode}
        setToggleViewMode={setToggleViewMode}
      />

      {toggleViewMode ? (
        <ProjectsGrid projects={projects} />
      ) : (
        <ProjectsList projects={projects} />
      )}
    </div>
  )
}
