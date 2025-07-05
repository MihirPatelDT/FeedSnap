"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CreditCard, Folder, Menu, X } from "lucide-react"

import React, { useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"

const HeaderMenu = () => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  return (
    <DropdownMenu open={open} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger asChild>
        <Button className="mr-4" variant="secondary">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center">
            <Folder className="h-4 w-4 mr-2" />
            <span>Projects</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/payments" className="flex items-center">
            <CreditCard className="h-4 w-4 mr-2" />
            <span>Billing</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HeaderMenu
