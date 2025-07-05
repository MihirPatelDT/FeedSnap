"use client"

import { Clipboard, Check } from "lucide-react"
import React, { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const CopyBtn = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
    })
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => copyToClipboard(text)}
          className="text-slate-50 absolute right-0 top-0 p-1"
        >
          {copied ? <Check className="text-green-400" /> : <Clipboard />}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{copied ? "Copied!" : "Copy Code"}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default CopyBtn
