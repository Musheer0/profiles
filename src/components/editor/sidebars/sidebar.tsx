/* eslint-disable  @typescript-eslint/no-explicit-any */
"use client"

import { useProfileCard } from "@/hooks/use-probile-card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import GradientPicker from "./gradient"
import Border from "./border"
import { UserButton } from "@clerk/clerk-react"
import { ColorInputField } from "./color-input"


export default function Sidebar() {
  const { profileCard, updateProfileCard } = useProfileCard()

  return (
    <aside className="fixed left-0 top-0 h-[98%] mt-[0.5%] hide-scrollbar rounded-xl w-64  mx-5 bg-background border overflow-y-auto shadow-lg p-4 pt-0 flex flex-col gap-6 z-50">
      <h2 className="font-semibold text-lg flex items-center gap-1 sticky top-0 bg-background pt-4 pb-2 "><UserButton/> Style Editor
      <div className="absolute w-full top-full h-1/2 bg-gradient-to-b from-background  to-transparent"></div>
   
      </h2>
       <ColorInputField
      title="Body Fill"
        value={profileCard.body_color}
         onChange={(e) =>
            updateProfileCard({
              body_color:e,
            })
          }
      />
       <ColorInputField
      title="Primary Fill"
        value={profileCard.colors.primary}
          onChange={(e) =>
            updateProfileCard({
              colors: { ...profileCard.colors, primary: e },
            })
          }
      />
      {/* Gradient Picker */}
      <div>
        <GradientPicker/>
      </div>
      {/* Border */}
      <div>
       <Border/>
      </div>

      {/* Shadow Toggles */}
      <div className="flex flex-col gap-4 ">
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
