
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
       <nav className='w-full  relative pb-5 flex gap-[22px] items-center justify-between'>
        <div className='ray w-10 h-[150%] absolute bg-primary z-[999] blur-2xl opacity-30 -rotate-12'></div>
   
        <div className='ray w-10 h-[150%] absolute right-0 bg-primary z-[999] blur-2xl opacity-30 rotate-12'></div>
        <p className='text-xl font-bold '>Profiles</p>
         <Link href={'https://x.com/heysatya_'} className='ml-auto'>
         <Button variant={'outline'} className='rounded-full '>Inspiration</Button>
         </Link>
        <Link href={'/editor'}>
         <Button className='rounded-full'>Get Started</Button>
         </Link>
      </nav>
  )
}

export default Navbar
