"use server"

import { db } from "@/db"
import { projects } from "@/db/schema"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function CreateProject(formData: FormData) {
  const { userId } = await auth()

  //   console.log(userId)

  const project = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    userId,
    url: formData.get("url") as string,
  }

  const [newProject] = await db
    .insert(projects)
    .values(project)
    .returning({ insertedId: projects.id })

  redirect(`/projects/${newProject.insertedId}/instructions`)
}
