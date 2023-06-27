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
import { ProjectCard } from "@/components/home/project-card"
import { ViewToggle } from "@/components/home/view-toggle"

export const ProjectList = ({ projects }: { projects: any }) => {
  const [toggleViewMode, setToggleViewMode] = useState(false)

  return (
    <div className="mt-20">
      <ViewToggle
        toggleViewMode={toggleViewMode}
        setToggleViewMode={setToggleViewMode}
      />

      {toggleViewMode ? (
        <div className="mt-10 grid grid-cols-4 gap-10">
          {projects.map((project: any, idx: number) => (
            <Link href={project.slug} className="text-center">
              {/* <Card className={cn("", className)} {...props}> */}
              {/* <CardHeader>
          <CardTitle className="font-serif text-4xl">{project.title}</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader> */}
              {/* <CardContent className="grid gap-4"> */}
              <div className="relative aspect-video">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="transition-all duration-500 ease-in-out hover:scale-105"
                />
              </div>
              {/* <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
              {/* </CardContent>
        <CardFooter> */}
              <h3 className="font-serif text-lg">{project.title}</h3>
              {/* <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Mark all as read
          </Button> */}
              {/* </CardFooter>
      </Card> */}
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-y-28 md:gap-y-20">
          {projects.map((project: any, idx: number) => (
            <ProjectCard project={project} idx={idx} />
          ))}
        </div>
      )}
    </div>
  )
}
