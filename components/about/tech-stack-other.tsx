import { techStack } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export const TechStackOther = () => {
  return (
    <div className="flex flex-col">
      <div className="border-y p-5 font-serif text-3xl font-black uppercase">
        Other
      </div>
      <div className="flex flex-wrap gap-5 p-5 text-lg">
        {techStack.other.map((tech) => (
          <Badge variant="outline">
            <a
              href={tech.link}
              target="_blank"
              rel="noreferrer"
              className="font-serif text-xs font-bold uppercase md:text-sm"
            >
              {tech.technology}
            </a>
          </Badge>
        ))}
      </div>
    </div>
  )
}
