import { Badge } from "@/components/ui/badge"
import { techStack } from "@/lib/data"

import { Label } from "../global/label"
import { LabelSm } from "../global/label-sm"
import { NavButton } from "../global/nav-button"
import { Subheading } from "../global/subheading"

export const TechStackCore = () => {
  return (
    <div className="flex flex-col">
      <Subheading className="border-b p-5">{`Core`}</Subheading>
      <div className="grid text-lg md:grid-cols-2 md:divide-x">
        <div>
          <div className="border-b p-5">
            <Label>{`Frontend`}</Label>
          </div>
          <div className="flex flex-col gap-y-5 p-5">
            {techStack.core.frontend.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-x-2.5 md:gap-x-5"
              >
                <LabelSm>{tech.category}</LabelSm>

                <Badge>{tech.technology}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="border-b p-5">
            <Label>{`Backend`}</Label>
          </div>
          <div className="flex flex-col gap-y-5 p-5">
            {techStack.core.backend.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-x-2.5 md:gap-x-5"
              >
                <LabelSm>{tech.category}</LabelSm>

                <Badge>{tech.technology}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
