"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import React from "react"

interface ColorInputFieldProps {
  title: string
  value: string
  onChange: (value: string) => void
  hidetitle?:boolean
}

export function ColorInputField({ title, value, onChange,hidetitle }: ColorInputFieldProps) {
  const id = React.useId() // ensures unique id for label-input pair

  return (
    <div className="flex flex-col gap-2 ">
    {!hidetitle &&
      <p className="text-xs px-2 text-muted-foreground font-semibold text-nowrap">
        {title}
      </p>

    }
      <div className="input relative">
        {/* Color Picker */}
        <Label
          htmlFor={id}
          style={{ backgroundColor: value }}
          className="w-10 h-6 z-10 absolute -translate-y-1/2 top-1/2 right-1 border rounded-sm cursor-pointer"
        >
          <Input
            id={id}
            name={id}
            hidden
            type="color"
            value={value}
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </Label>

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
