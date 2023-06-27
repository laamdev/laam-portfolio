"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ViewToggle } from "@/components/home/view-toggle"

import { ProjectsGrid } from "./projects-grid"
import { ProjectsList } from "./projects-list"

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
