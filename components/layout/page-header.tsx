import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import Image from "next/image"
import React from "react"
import { Button } from "../ui/button"
import HeaderMenu from "./header-menu"
import Link from "next/link"

const PageHeader = () => {
  return (
    <header className="border-b sticky inset-x-0 top-0 z-30 w-full transition-all bg-white/20 backdrop-blur-md ">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto ">
        <div className="flex h-14 items-center justify-between">
          <Link href="/">
            <Image src="/logo2.png" alt="Logo" width={140} height={100} />
          </Link>
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="bg-black">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-black ml-2">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <div className="flex items-center">
              <SignedIn>
                <HeaderMenu />
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PageHeader
