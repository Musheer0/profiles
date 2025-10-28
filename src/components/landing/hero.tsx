import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
       <section id='hero' className='flex z-10 relative flex-col my-[3dvh] px-1 items-center justify-center pt-[10vh] gap-[20px]'>
        <h1 className=' leading-none text-3xl  sm:text-5xl max-w-5xl text-center tracking-tight'>
          <span className='text-primary font-semibold'>
            Your Profile, Your Aesthetic.
          </span>
          <br/>
            Create a sleek, customizable profile card
        </h1>
         <Link href={'/editor'}>
          <button className='text-zinc-950   flex items-center gap-2 group cursor-pointer bg-zinc-100 px-3 pr-2.5 font-semibold py-3 rounded-full'>Get Started

            <div className='p-1.5 text-zinc-100 overflow-hidden   rounded-full bg-primary relative'>
                <ArrowRight size={16} className='absolute left-1/2 top-1/2 -translate-x-[173%] group-hover:-translate-x-1/2 transition-all duration-100 -translate-y-1/2'/>
                <ArrowRight size={16} className='group-hover:translate-x-[120%] transition-all duration-100 ease-in'/>
            </div>
          </button>
         </Link>
      </section>
    </>
  )
}

export default Hero
