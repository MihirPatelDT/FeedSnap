import { db } from "@/db"
import { subscriptions } from "@/db/schema"
import { auth } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import React from "react"
import ManageSubscription from "./manage-subs"

const Page = async () => {
  const { userId } = await auth()

  if (!userId) {
    return null
  }

  const subscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, userId),
  })

  const plan = subscription && subscription.subscribed ? "premium" : "free"

  return (
    <div className="p-4 border rounded-md">
      <h1 className="text-4xl mb-3">Subscriptions Details</h1>
      <p className="mb-2 text:lg">Your current plan is : {plan}</p>
      <ManageSubscription/>
    </div>
  )
}

export default Page
