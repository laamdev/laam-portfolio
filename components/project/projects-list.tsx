import Link from "next/link"
import { ArrowTopRightIcon, PlusIcon } from "@radix-ui/react-icons"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const ProjectsList = ({ projects }: { projects: any }) => {
  return (
    <div className="mt-10">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Year</TableHead>
            <TableHead>Project</TableHead>
            <TableHead className="hidden md:table-cell">Category</TableHead>
            <TableHead className="hidden md:table-cell">
              Agency / Client
            </TableHead>
            {/* <TableHead className="hidden w-[100px] text-center md:block">
              Live Site
            </TableHead> */}
            <TableHead className="text-right">More</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project: any) => (
            <TableRow>
              <TableCell className="font-medium">{project.year}</TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell className="hidden capitalize md:table-cell">
                {project.category}
              </TableCell>
              <TableCell className="hidden capitalize md:table-cell">
                <span>{`${project.agency}`}</span>
                {project.client && <span>{` @ ${project.client}`}</span>}
              </TableCell>
              {/* <TableCell className="hidden place-content-center md:grid">
                <a
                  className=" text-center"
                  href={project.siteUrl}
                  target="_blank"
                >
                  <ArrowTopRightIcon className="text-center" />
                </a>
              </TableCell> */}
              <TableCell className="text-right">
                <Link href={`${project.slug}`}>+</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* <ul className="space-y-10">
        {projects.map((project: any) => (
          <li>
            <h3 className="font-serif text-3xl font-bold">{project.title}</h3>
          </li>
        ))}
      </ul> */}
    </div>
  )
}
