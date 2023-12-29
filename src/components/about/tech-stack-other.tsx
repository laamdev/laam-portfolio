import { Subheading } from "@/components/global/subheading"
import { Badge } from "@/components/ui/badge"
import { techStack } from "@/lib/data"

export const TechStackOther = () => {
  return (
    <div className="flex flex-col">
      <Subheading className="border-y p-5">{`Other`}</Subheading>
      <div className="flex flex-wrap gap-2.5 p-5 text-lg md:gap-5">
        {techStack.other.map((tech) => (
          <Badge>{tech.technology}</Badge>
        ))}
      </div>
    </div>
  )
}
