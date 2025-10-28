import React, { Suspense } from 'react'
import UserProfile from '../_components/user-profile'
import ProfileCardLoader from '../_components/loader'
import {Inter} from 'next/font/google'
const font = Inter({
  subsets:['latin']
})
const page = async({params}:{params:Promise<{username:string}>}) => {
  const p =await params
  return (
    <div 
    className={`${font.className} w-full`}>
      <Suspense fallback={<ProfileCardLoader/>}>
        <UserProfile params={p}/>
      </Suspense>
    </div>
  )
}

export default page