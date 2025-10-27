"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import React from "react"

interface ColorInputFieldProps {
  title: string
  value: string|number
  onChange: (value: string|number) => void
}

export function SidebarInputField({ title, value, onChange }: ColorInputFieldProps) {

  return (
    <div className="flex flex-col gap-2 ">
      <p className="text-xs px-2 text-muted-foreground font-semibold text-nowrap">
        {title}
      </p>

      <div className="input relative">
 

        {/* Text Input */}
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          className="text-sm flex-1 p-0 py-1 pr-10 h-fit! px-3 border-none bg-zinc-200 dark:bg-zinc-900"
        />
      </div>
    </div>
  )
}
