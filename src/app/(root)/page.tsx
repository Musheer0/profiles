
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full max-w-[1300px] h-full  py-5 mx-auto'>
      <nav className='w-full pb-5 flex gap-[22px] items-center justify-between'>
        <p className='text-xl font-bold '>Profiles</p>
         <Link href={'https://x.com/heysatya_'} className='ml-auto'>
         <Button className='rounded-full '>Inspiration</Button>
         </Link>
       <SignedIn>
         <Link href={'/editor'}>
         <Button className='rounded-full'><UserIcon/> Customize profile</Button>
         </Link>
       </SignedIn>
       <SignedOut>
      <Link href={'/editor'}>
         <Button className='rounded-full'>Sign In</Button>
         </Link>
       </SignedOut>
      </nav>
      <section id='hero' className='flex flex-col my-[3dvh] px-1 items-center justify-center pt-[10vh] gap-[20px]'>
        <h1 className='text-zinc-500 leading-none text-4xl  sm:text-5xl max-w-5xl text-center font-black tracking-tight'>
          <span className='text-zinc-900'>
            Your Profile, Your Aesthetic.
          </span>
          <br/>
Create a sleek, customizable profile card. Share it anywhere with your personal link just like a digital identity card.
        </h1>
         <Link href={'/editor'}>
          <button className='text-zinc-50 bg-zinc-900 px-8 font-semibold py-3 rounded-full'>Get Started</button>
         </Link>
      </section>
      <section id='hero-img' 
      className='w-full  mt-[15vh]  object-contain rounded-2xl overflow-hidden'
      >
        <img src="/hero.png" alt="product screenshot" />
      </section>
      <section className='flex items-center justify-center py-[10vh]' >
         <h1 className='text-zinc-500 leading-none text-2xl  sm:text-4xl max-w-5xl text-center font-black tracking-tigh'>
          <span className='text-zinc-900'>
⚡ Takes less than 1 minute to set up.
          </span>
          <br/>
No coding. Just vibes.
        </h1>
      </section>
 <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white  px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="text-sm text-gray-600">https://profiless.vercel.app/profile/musheer</div>
          <Button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-full text-sm">
            Share Profile
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Side - Hero Content */}
        <div className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-black ">One-click setup.</h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Instantly create and personalize your card with live preview.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="w-full max-w-sm">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Enter your username</label>
                <Input
                  type="text"
                  defaultValue={'musheer'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="musheer"
                />
                <p className="text-xs text-gray-500 mt-2">Warning: This will be your permanent username</p>
              </div>
              <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-lg font-medium">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col flex-row-reverse  lg:flex-row items-center justify-between gap-12">
          {/* Left - Share URL Preview */}
          <div className="flex-1">
            <div className="bg-white rounded-full shadow-md px-6 py-4 flex items-center justify-between max-w-md">
              <div className="text-sm text-gray-600">https://profiless.vercel.app/profile/musheer</div>
              <Button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-full text-sm ml-4">
                Share Profile
              </Button>
            </div>
          </div>

          {/* Right - Share Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-black ">Share anywhere.</h2>
            <p className="text-xl text-gray-500 leading-relaxed">Copy your unique link and post it anywhere online.</p>
          </div>
        </div>
      </div>
    </div>
       <section className="text-center w-full flex flex-col items-center justify-center px-4 py-12 h-screen md:py-20">
       <div>
         <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Start your flex card now.</h2>
        <p className="text-lg text-gray-500 mb-8">Be online, be aesthetic in less than 60 seconds.</p>
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3">Get Started Free</Button>
       </div>
        <p className='text-xs text-muted-foreground mt-auto'>2025&copy; profiles</p>
      </section>
    </div>
  )
}

export default page