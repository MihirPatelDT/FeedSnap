import App from "@/components/layout/table"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { projects as dbProject } from "@/db/schema"
import { eq } from "drizzle-orm"
import { ChevronLeft, Globe } from "lucide-react"
import Link from "next/link"
import React from "react"

const page = async ({
  params,
}: {
  params: {
    projectId: string
  }
}) => {
  const { projectId } = await params
  if (!projectId) return <div>Invalid Project ID</div>

  const projects = await db.query.projects.findMany({
    where: eq(dbProject.id, parseInt(projectId)),
    with: {
      feedbacks: true,
    },
  })

  const project = projects[0]

  return (
    <div>
      <div>
        <Link href="/dashboard" className="flex items-center mb-5 text-indigo-700 ml-[-4px]"><ChevronLeft className="h-5 w-5 mr-1"/><span className="text-lg">Back to projects</span></Link>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-3">{project.name}</h1>
          <h2 className="text-muted-foreground text-xl mb-2">
            {project.description}
          </h2>
        </div>
        {project.url ? (
          <Button className="rounded-full">
            <Link href={project.url} className="flex items-center">
              <Globe className="h-5 w-5 mr-1" />
              <span className="text-lg">Visit Site</span>
            </Link>
          </Button>
        ) : null}
      </div>
      <div>
        <App data={project.feedbacks} />
      </div>
    </div>
  )
}

export default page
