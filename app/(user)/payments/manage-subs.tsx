"use client"

import { Button } from "@/components/ui/button"
import { getStripe } from "@/lib/stripe-client"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import React from "react"

const ManageSubscription = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const redirectToCustomerPortal = async () => {
    console.log("inside");
    
    setLoading(true)
    try {
      const { url } = await fetch("/api/stripe/create-portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json())

      router.push(url.url)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  if (error) {
    return <p>{error}</p>
  }
  return (
    <Button
      className="bg-indigo-700"
      onClick={() => redirectToCustomerPortal()}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className=" h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        "Upgrade Your Subscription"
      )}
    </Button>
  )
}

export default ManageSubscription
