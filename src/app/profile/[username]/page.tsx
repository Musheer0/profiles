import React, { Suspense } from 'react'
import UserProfile from '../_components/user-profile'
import ProfileCardLoader from '../_components/loader'
const page = async({params}:{params:Promise<{username:string}>}) => {
  const p =await params
  return (
    <div 
    className='w-full h-screen flex flex-col items-center justify-center '>
      <Suspense fallback={<ProfileCardLoader/>}>
        <UserProfile params={p}/>
      </Suspense>
    </div>
  )
}

export default page