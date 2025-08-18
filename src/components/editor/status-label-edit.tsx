"use client"
import { useProfileCard } from '@/hooks/use-probile-card'
import { cn } from '@/lib/utils'
import React from 'react'

const StatusLabelEditor = () => {
  const {profileCard,updateProfileCard} = useProfileCard()
  return (
   <div className="status flex-1 flex items-center gap-2">
        <div className={cn(
          'w-2 h-2 rounded-full ',

        )}
            style={{
              backgroundColor:profileCard.colors.primary
            }}
        ></div>
        <input type="text " className='flex-1' value={profileCard.status} onChange={(e)=>{
          updateProfileCard({status:e.target.value})
        }} />
    </div>
  )
}

export default StatusLabelEditor