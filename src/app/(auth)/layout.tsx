import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'


const Provider = ({children}:{children:React.ReactNode}) => {
  return (
  <ClerkProvider>
      <main className='w-full h-screen flex items-center justify-center'>
        {children}
    </main>
  </ClerkProvider>
  )
}

export default Provider