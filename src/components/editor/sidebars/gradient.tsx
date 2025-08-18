/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client"

import { useProfileCard } from "@/hooks/use-probile-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import type { tgradient } from "@/lib/types"

import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowDownRight,
  Square,
} from "lucide-react"

const gradientGrid: { dir: tgradient["anges"] | null; icon: any }[][] = [
  [
    { dir: { name: "tl", slug: "to top left" }, icon: ArrowUpLeft },
    { dir: { name: "t", slug: "to top" }, icon: ArrowUp },
    { dir: { name: "tr", slug: "to top right" }, icon: ArrowUpRight },
  ],
  [
    { dir: { name: "l", slug: "to left" }, icon: ArrowLeft },
    { dir: null, icon: Square }, // solid color
    { dir: { name: "r", slug: "to right" }, icon: ArrowRight },
  ],
  [
    { dir: { name: "bl", slug: "to bottom left" }, icon: ArrowDownLeft },
    { dir: { name: "b", slug: "to bottom" }, icon: ArrowDown },
    { dir: { name: "br", slug: "to bottom right" }, icon: ArrowDownRight },
  ],
]

 export default function GradientPicker() {
  const { profileCard, updateProfileCard } = useProfileCard()

  const { gradient, isGradient, color } = profileCard.colors
  const currentDir = isGradient ? gradient?.anges : null

  const handlePick = (dir: tgradient["anges"] | null) => {
    if (dir === null) {
      updateProfileCard({
        colors: { ...profileCard.colors, isGradient: false, gradient: null },
      })
    } else {
      updateProfileCard({
        colors: {
          ...profileCard.colors,
          isGradient: true,
          gradient: {
            from: gradient?.from || "#ff0000",
            via: gradient?.via || "#00ff00",
            to: gradient?.to || "#0000ff",
            anges: dir,
          },
        },
      })
    }
  }

  const updateColor = (key: "from" | "via" | "to", value: string) => {
    if (!gradient) return
    updateProfileCard({
      colors: {
        ...profileCard.colors,
        gradient: {
          ...gradient,
          [key]: value,
        },
      },
    })
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Toggle */}
      <div className="flex items-center justify-between">
        <Label>Use Gradient</Label>
        <Switch
          checked={isGradient}
          onClick={() =>{
            if(isGradient){
                    updateProfileCard({
              colors: {
                ...profileCard.colors,
                isGradient: false,
                gradient:  null,
              },
            })
            }
            else{
                    updateProfileCard({
              colors: {
                ...profileCard.colors,
                isGradient: true,
                gradient:  {
                      from: "#ff0000",
                      via: "#00ff00",
                      to: "#0000ff",
                      anges: { name: "r", slug: "to right" },
                    }
              },
            })
            }
          }  }
        />
      </div>

      {isGradient ? (
        <>
          {/* Gradient Color Pickers */}
          <div className="grid grid-cols-3 gap-2">
            {(["from", "via", "to"] as const).map((key) => (
              <div key={key} className="flex flex-col items-center gap-1">
                <Label className="capitalize">{key}</Label>
                <Input
                  type="color"
                  value={gradient?.[key] || "#000000"}
                  onChange={(e) => updateColor(key, e.target.value)}
                  className="w-12 h-12 p-1 rounded"
                />
                <Input
                  type="text"
                  value={gradient?.[key] || "#000000"}
                  onChange={(e) => updateColor(key, e.target.value)}
                  className="text-xs"
                />
              </div>
            ))}
          </div>

          {/* Direction Picker */}
          <div>
            <Label>Direction</Label>
            <div className="grid grid-cols-3 gap-2 p-2">
              {gradientGrid.map((row, rIdx) =>
                row.map((cell, cIdx) => {
                  const Icon = cell.icon
                  const isActive =
                    (currentDir?.name === cell.dir?.name && isGradient) ||
                    (cell.dir === null && !isGradient)

                  return (
                    <Button
                      key={`${rIdx}-${cIdx}`}
                      variant="outline"
                      size="icon"
                      className={cn(
                        "h-10 w-10 rounded-lg flex items-center justify-center",
                        isActive && "bg-primary text-primary-foreground"
                      )}
                      onClick={() => handlePick(cell.dir)}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  )
                })
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Solid Color Mode */}
          <div className="flex flex-col gap-2">
            <Label>Color</Label>
            <Input
              type="color"
              value={color || "#000000"}
              onChange={(e) =>
                updateProfileCard({
                  colors: {
                    ...profileCard.colors,
                    color: e.target.value,
                  },
                })
              }
              className="w-12 h-12 p-1 rounded"
            />
            <Input
              type="text"
              value={color || "#000000"}
              onChange={(e) =>
                updateProfileCard({
                  colors: {
                    ...profileCard.colors,
                    color: e.target.value,
                  },
                })
              }
              className="text-xs"
            />
          </div>
        </>
      )}

      {/* Live Preview */}
      <div className="h-16 w-full rounded-lg border shadow">
        <div
          className="h-full w-full rounded-lg"
          style={{
            background: isGradient
              ? `linear-gradient(${gradient?.anges?.slug}, ${gradient?.from}, ${gradient?.via}, ${gradient?.to})`
              : color,
          }}
        />
      </div>
    </div>
  )
}
