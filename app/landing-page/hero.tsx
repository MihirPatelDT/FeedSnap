import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs"
import { Github, LogIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const HeroPage = () => {
  return (
    <section className="grow">
      <div className="container mx-auto px-4 my-20 flex flex-col md:flex-row gap-25">
        <div className="flex flex-col max-w-sm">
          <div className=" mb-8">
            <h1 className="mb-5 text-5xl font-extrabold leading-tight">
              Collect your feedback seamlessly
            </h1>
            <p className="text-gray-500 text-lg">
              Easily integrate FeedSnap. and start collecting feedback now.
            </p>
          </div>
          <div>
            <SignedOut>
              <SignUpButton>
                <div className="flex items-center gap-3 ">
                  <Button className="cursor-pointer">
                    <LogIn className="w-4 h-4" /> Get Started
                  </Button>
                  <Link href="https://github.com/MihirPatelDT/FeedSnap">
                    <Button className="cursor-pointer bg-zinc-600">
                      <Github className="w-4 h-4" />
                      Github
                    </Button>
                  </Link>
                </div>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </SignedIn>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/Animation.gif"
            alt="Animation Hero"
            height={600}
            width={600}
            // layout="responsive"
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroPage
