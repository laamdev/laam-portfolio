import { techStack } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export const TechStackCore = () => {
  return (
    <div className="flex flex-col">
      <div className="border-b p-5 font-serif text-3xl font-black uppercase">
        Core
      </div>
      <div className="grid gap-x-10 gap-y-5 p-5 text-lg md:grid-cols-2">
        {techStack.core.map((tech) => (
          <div className="flex items-center justify-between gap-x-5">
            <p className="text-xs md:text-sm">{tech.category}</p>

            <Badge variant="outline" className="mt-1.5">
              <a
                href={tech.link}
                target="_blank"
                rel="noreferrer"
                className="font-serif text-xs font-bold uppercase md:text-sm"
              >
                {tech.technology}
              </a>
            </Badge>
          </div>
        ))}
      </div>
    </div>
    // <div className="flex flex-col border-b border-primary">
    //   <div className="p-5 font-serif text-3xl font-black uppercase">Core</div>
    //   <div className="flex flex-wrap border-t border-primary text-lg md:grid-flow-col">
    //     {techStack.core.map((tech) => (
    //       <div className="p-5">
    //         <p className="text-sm">{tech.category}</p>

    //         <Badge variant="outline" className="mt-1.5">
    //           <a
    //             href={tech.link}
    //             target="_blank"
    //             rel="noreferrer"
    //             className="font-serif text-sm font-bold uppercase"
    //           >
    //             {tech.technology}
    //           </a>
    //         </Badge>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}
