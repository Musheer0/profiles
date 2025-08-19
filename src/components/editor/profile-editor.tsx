"use client"
import React, { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useProfileCard } from "@/hooks/use-probile-card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { CameraIcon } from "lucide-react"

const ProfileEditor = () => {
  const { updateProfileCard, profileCard } = useProfileCard()
  const [imgUrl, setImgUrl] = useState(profileCard.profile.img || "")

  const handleUpdate = () => {
    updateProfileCard({ profile: { ...profileCard.profile, img: imgUrl } })
  }

  return (
    <div className="w-full flex items-center  gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild >
            <div className="relative group">
            <CameraIcon size={15} className="absolute group-hover:flex hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"/>
            <Avatar className="w-[50px]  group-hover:opacity-50 h-[50px] cursor-pointer">
            <AvatarImage src={profileCard.profile.img || "https://github.com/shadcn.png"} />
            <AvatarFallback>{profileCard.profile.name.slice(0, 1)}</AvatarFallback>
          </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4 w-64 flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter image URL"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          />
          <Button size="sm" onClick={handleUpdate}>
            Update Image
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="info w-full flex flex-col ">
        <input
          type="text"
          value={profileCard.profile.name}
          className="line-clamp-1 w-full text-lg"
          onChange={(e) =>
            updateProfileCard({ profile: { ...profileCard.profile, name: e.target.value } })
          }
        />
        <input
          type="text"
          value={profileCard.profile.job_title}
          className="line-clamp-1 w-full text-[12px] text-zinc-500"
          onChange={(e) =>
            updateProfileCard({ profile: { ...profileCard.profile, job_title: e.target.value } })
          }
        />
      </div>
    </div>
  )
}

export default ProfileEditor
