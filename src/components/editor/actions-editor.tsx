"use client"
import React from "react"
import { Button } from "../ui/button"
import { PlusCircleIcon, CopyIcon } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { useProfileCard } from "@/hooks/use-probile-card"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

const ActionsEditor = () => {
  const { profileCard, updateProfileCard } = useProfileCard()
  const primary = profileCard.primary_btn
  const secondary = profileCard.secondary_btn

  return (
    <div className="flex items-center w-full gap-4">
      {/* 🔹 Primary Button */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button className="w-full flex-1 hover:bg-neutral-700/70 py-6 rounded-2xl text-neutral-200 bg-neutral-700 border-t-2 border-r-2 border-l-2 hover:border-neutral-700 border-neutral-600">
          {primary.showIcon &&   <PlusCircleIcon />}
            Hire me
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64 space-y-2">
          <Label>Edit hire me link</Label>
          <Input
            placeholder="Button Link"
            value={primary.link}
            onChange={(e) =>
              updateProfileCard({
                primary_btn: { ...primary, link: e.target.value },
              })
            }
            />
              <div className="action py-2 flex items-center justify-between gap-5">
          <p>Hide Icon</p>
          <Switch checked={profileCard.primary_btn.showIcon} onClick={()=>{updateProfileCard({primary_btn:{...profileCard.primary_btn,showIcon:!profileCard.primary_btn.showIcon}})}}/>
        </div>
        </HoverCardContent>
      </HoverCard>

      {/* 🔹 Secondary Button */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button className="flex-1 border-t-2 border-r-2 border-l-2 hover:border-neutral-800 border-neutral-700/50 bg-neutral-800 hover:bg-neutral-800/70 text-neutral-400 py-6 rounded-2xl flex items-center justify-center gap-2">
           {secondary.showIcon &&  <CopyIcon />}
           Copy Email
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64 space-y-2">
         <Label>Edit email</Label>
          <Input
            placeholder="email"
            value={secondary.link}
            onChange={(e) =>
              updateProfileCard({
                secondary_btn: { ...secondary, link: e.target.value },
              })
            }
          />
             <div className="action py-2 flex items-center justify-between gap-5">
          <p>Hide Icon</p>
          <Switch checked={profileCard.secondary_btn.showIcon} onClick={()=>{updateProfileCard({secondary_btn:{...profileCard.primary_btn,showIcon:!profileCard.secondary_btn.showIcon}})}}/>
        </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

export default ActionsEditor
