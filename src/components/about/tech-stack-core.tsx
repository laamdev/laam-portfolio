import { techStack } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export const TechStackCore = () => {
  return (
    <div className="flex flex-col">
      <div className="border-b p-5 font-serif text-3xl font-black uppercase">
        Core
      </div>
      <div className="grid gap-x-10 gap-y-5 p-5 text-lg md:grid-cols-3">
        {techStack.core.map((tech, idx) => (
          <div key={idx} className="flex items-center justify-between gap-x-5">
            <p className="text-xs md:text-sm">{tech.category}</p>

            <Badge variant="outline">
              <a href={tech.link} target="_blank" rel="noreferrer">
                {tech.technology}
              </a>
            </Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
