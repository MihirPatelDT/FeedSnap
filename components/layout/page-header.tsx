import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/button"

const PageHeader = () => {
  return (
    <header className="border-b sticky inset-x-0 top-0 z-30 w-full transition-all ">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto ">
        <div className="flex h-14 items-center justify-between">
          <Image src="/logo.png" alt="Logo" width={140} height={100} />
          <SignedOut>
            <SignInButton>
                <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}

export default PageHeader
