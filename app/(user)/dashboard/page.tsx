import React from "react"
import NewProjBtn from "@/components/layout/new-proj"
import { projects } from "@/db/schema"
import { db } from "@/db"
import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import ProjectsList from "./project-list"
import { getSubscription } from "@/actions/userSubscription"
import { maxFreeProjects } from "@/lib/payments"

const Dashboard = async () => {
  const { userId } = await auth()
  if (!userId) return null

  // Particular user projects fetch
  const userProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.userId, userId))
  // console.log(allProjects)

  const subscribed = await getSubscription({ userId })

  return (
    <div>
      {subscribed !== true && userProjects.length >= maxFreeProjects ? null : (
        <NewProjBtn />
      )}

      <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
      {!subscribed ? <ProjectsList projects={userProjects} /> : null}
    </div>
  )
}

export default Dashboard
