"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { CopyIcon, PlusCircleIcon } from 'lucide-react'
import { tbutton } from '@/lib/types'
import Link from 'next/link'

const Actions = ({ primary, secondary }: { primary: tbutton, secondary: tbutton }) => {
  const [copied, setCopied] = useState(false)
   const primary_href = primary.link.includes("@") && !primary.link.startsWith("http")
    ? `mailto:${primary.link}`
    : primary.link
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(secondary.link)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // revert after 2 sec
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className='flex items-center w-full gap-4'>
      <Link href={primary_href} className='flex-1 blur-in'>
        <Button className='w-full  hover:bg-neutral-700/70 py-6 rounded-2xl text-neutral-200 bg-neutral-700 border-t-2 border-r-2 border-l-2 hover:border-neutral-700 border-neutral-600'>
          <PlusCircleIcon className='mr-2'/>
          Hire Me
        </Button>
      </Link>

      <Button
        onClick={handleCopy}
        disabled={copied}
        className='flex-1 blur-in border-t-2 border-r-2 border-l-2 hover:border-neutral-800 border-neutral-700/50 bg-neutral-700/60 hover:bg-neutral-800/70 text-neutral-400 py-6 rounded-2xl flex items-center justify-center gap-2'
      >
        <CopyIcon/>
        {copied ? "Copied!" : "Copy Email"}
      </Button>
    </div>
  )
}

export default Actions
