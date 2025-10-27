import { ConvexHttpClient } from 'convex/browser'
import React from 'react'
import { api } from '../../../../convex/_generated/api'
import ProfileCard from '@/components/editor/profile-card'
import Link from 'next/link'
import { notFound } from 'next/navigation'
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
const UserProfile = async({params}:{params:{username:string}}) => {
    const {username} =  params
    const data = await convex.query(api.profiles.getByUsername,{username})
    if(data==null){
      return notFound()
    }
  return (
    <div 
    style={{
        backgroundColor: data?.data.body_color
    }}
    className='w-full h-screen p-2 flex flex-col items-center pt-10 '>
       <ProfileCard profileCard={data?.data}/>
     
        <Link href={'/'}  className='absolute text-muted-foreground text-xs bottom-5 left-1/2 -translate-x-1/2'>
        Powered By Profiles
        </Link>
    </div>
  )
}

export default UserProfile