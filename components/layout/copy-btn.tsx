"use client"

import { Clipboard } from "lucide-react"
import React from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const CopyBtn = ({ text }: { text: string }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard")
    })
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => copyToClipboard(text)}
          className="text-slate-50 absolute right-0 top-0 p-1"
        >
          <Clipboard />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy Code</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default CopyBtn
