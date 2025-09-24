// src/components/Tooltip.tsx
"use client"

import { ReactNode } from "react"

interface TooltipProps {
  children: ReactNode
  content: string
  position?: "top" | "bottom" | "left" | "right"
}

export default function Tooltip({
  children,
  content,
  position = "top",
}: TooltipProps) {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  }

  return (
    <div className="relative group inline-block">
      {children}
      <span
        className={`absolute z-50 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap
        ${positionClasses[position]}`}
      >
        {content}
      </span>
    </div>
  )
}
