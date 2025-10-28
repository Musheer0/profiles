import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Bento = () => {
  return (
    
        <div className="flex flex-col mt-40 sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Level up your profile aesthetic today.
          </h2>

          <Link href="/editor">
            <button className="text-zinc-950 flex items-center gap-2 group cursor-pointer bg-zinc-100 px-3 pr-2.5 font-semibold py-3 rounded-full">
              Get Started
              <div className="p-1.5 text-zinc-100 overflow-hidden rounded-full bg-primary relative">
                <ArrowRight
                  size={16}
                  className="absolute left-1/2 top-1/2 -translate-x-[173%] group-hover:-translate-x-1/2 transition-all duration-100 -translate-y-1/2"
                />
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-[120%] transition-all duration-100 ease-in"
                />
              </div>
            </button>
          </Link>
        </div>
  )
}

export default Bento
