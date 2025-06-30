import React from "react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { InferSelectModel } from "drizzle-orm"
import { projects } from "@/db/schema"
import Link from "next/link"
import { Button } from "@/components/ui/button"


// We pass project data from page to here so for types we dont need to define it again we have InferSelectModel from drizzle-orm
type Project = InferSelectModel<typeof projects>

// We get array of projects
type Props = {
  projects: Project[]
}

const ProjectsList = (props: Props) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
        {props.projects.map((project: Project) => (
          <li key={project.id}>
            <Card className="max-w-[350px] flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/projects/${project.id}`}>
                  <Button>View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsList
