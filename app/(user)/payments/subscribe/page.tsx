import React from "react"
import { SubscribeBtn } from "../subscribe-btn"
import { monthlyPlanId, yearlyPlanId } from "@/lib/payments"

const Subscribe = async ({
  searchParams,
}: {
  searchParams: { plan: string }
}) => {
  const { plan } = await searchParams

  const planId = plan === "monthly" ? monthlyPlanId : yearlyPlanId

  return (
    <div className="flex border p-4 rounded-md flex-col">
      <h1 className="text-2xl font-bold">Start Your Subscription now: </h1>
      <div className="w-fit mt-3">
        <SubscribeBtn price={planId} />
      </div>
    </div>
  )
}

export default Subscribe
