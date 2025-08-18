import { ConvexHttpClient } from 'convex/browser'
import React from 'react'
import { api } from '../../../../convex/_generated/api'
import ProfileCard from '@/components/editor/profile-card'
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
const UserProfile = async({params}:{params:{username:string}}) => {
    const {username} =  params
    const data = await convex.query(api.profiles.getByUsername,{username})
  return (
    <div 
    style={{
        backgroundColor: data?.data.body_color
    }}
    className='w-full h-screen flex flex-col items-center justify-center '>
       <ProfileCard profileCard={data?.data}/>
       
    </div>
  )
}

export default UserProfile