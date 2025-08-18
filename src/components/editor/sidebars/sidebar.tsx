/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client"

import { useProfileCard } from "@/hooks/use-probile-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import GradientPicker from "./gradient"
import Border from "./border"
import { UserButton } from "@clerk/clerk-react"


export default function Sidebar() {
  const { profileCard, updateProfileCard } = useProfileCard()

  return (
    <aside className="fixed left-0 top-0 h-[98%] mt-[0.5%] hide-scrollbar rounded-xl w-64  mx-5 bg-background border overflow-y-auto shadow-lg p-4 flex flex-col gap-6 z-50">
      <h2 className="font-semibold text-lg flex items-center gap-1"><UserButton/> Style Editor</h2>

      <div>
        <div className="flex items-center justify-between">
                <Label>Body Color</Label>
        <Input
          type="color"
          className="flex-1 border-none outline-none cursor-pointer"
          value={profileCard.body_color}
          onChange={(e) =>
            updateProfileCard({
              body_color:e.currentTarget.value,
            })
          }
        />

      </div>
       <Input
          type="text"
           value={profileCard.body_color}
          onChange={(e) =>
            updateProfileCard({
              body_color:e.currentTarget.value,
            })
          }
          className="text-sm"
        />
      </div>
     
      {/* Primary Color Input */}
      <div className="flex flex-col gap-2">
        <Label>Primary Color</Label>
        <Input
          type="color"
          className="h-20 border-none outline-none cursor-pointer"
          value={profileCard.colors.primary}
          onChange={(e) =>
            updateProfileCard({
              colors: { ...profileCard.colors, primary: e.target.value },
            })
          }
        />
        <Input
          type="text"
          value={profileCard.colors.primary}
          onChange={(e) =>
            updateProfileCard({
              colors: { ...profileCard.colors, primary: e.target.value },
            })
          }
          className="text-sm"
        />
      </div>

      {/* Gradient Picker */}
      <div>
        <GradientPicker/>
      </div>
      {/* Border */}
      <div>
       <Border/>
      </div>

      {/* Shadow Toggles */}
      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex items-center justify-between">
          <Label>Shadow</Label>
          <Switch
            checked={!profileCard.shadow_disabled}
            onCheckedChange={(val) =>
              updateProfileCard({
                shadow_disabled: !val,
              })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <Label>Inner Shadow</Label>
          <Switch
            checked={!profileCard.innershadow_disables}
            onCheckedChange={(val) =>
              updateProfileCard({
                innershadow_disables: !val,
              })
            }
          />
        </div>
      </div>
    </aside>
  )
}
