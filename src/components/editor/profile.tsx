import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { tprofile } from '@/lib/types'
const Profile = ({data}:{data:tprofile}) => {
  return (
    <div className='w-full  flex items-center gap-[14px]'>
        <Avatar className='w-[61px] blur-in h-[59.82px]' >
  <AvatarImage src={data.img||"https://github.com/shadcn.png"}   />
  <AvatarFallback>{data.name.slice(0,1)}</AvatarFallback>
</Avatar>
        <div className="info gap-[7px]">
            <p className='line-clamp-1 blur-in text-lg '>{data.name}</p>
            <p className='line-clamp-1 blur-in text-[12px] text-zinc-500'>{data.job_title}</p>
        </div>
    </div>
  )
}

export default Profile