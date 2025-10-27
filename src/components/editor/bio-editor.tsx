"use client"
import { useProfileCard } from '@/hooks/use-probile-card'
import { cn } from '@/lib/utils'
import { Zap } from 'lucide-react'
import React, { useState } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Label } from '@/components/ui/label'
import { Switch } from '../ui/switch'

const BioEditor = () => {
  const { profileCard, updateProfileCard } = useProfileCard()
  const [isEditing, setIsEditing] = useState(false)

  return (
    <HoverCard>
      <HoverCardTrigger>
         <div
      className={cn(
        'flex items-center gap-2 justify-center px-5 w-full h-[45px] text-zinc-900 text-sm font-semibold',
        profileCard.bio.reverse && 'flex-row-reverse gap-1'
      )}
    >
      {profileCard.bio.img ? (
        <img
          src={profileCard.bio.img}
          alt="bio image"
          style={{ width: 15, height: 15, objectFit: 'cover' }}
        />
      ) : (
        <Zap size={15} />
      )}

      {isEditing ? (
        <input
          autoFocus
          className="bg-transparent border-b flex-1 border-gray-300 outline-none text-sm"
          value={profileCard.bio.txt}
          onChange={(e) =>
            updateProfileCard({
              bio: { ...profileCard.bio, txt: e.target.value },
            })
          }
          onBlur={() => setIsEditing(false)}
        />
      ) : (
        <p
          onClick={() => setIsEditing(true)}
          className="cursor-text"
        >
          {profileCard.bio.txt || "Click to add bio..."}
        </p>
      )}
    </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <Label>More actions</Label>
        <div className="action flex items-center justify-between gap-5">
          <p>reverse order</p>
          <Switch checked={profileCard.bio.reverse} onClick={()=>{updateProfileCard({bio:{...profileCard.bio,reverse:!profileCard.bio.reverse}})}}/>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default BioEditor
