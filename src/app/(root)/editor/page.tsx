"use client"
import ProfileInitializer from '@/components/editor/initialize'
import { LinksProvider } from '@/components/editor/links-context'
import ProfileCardEditor from '@/components/editor/profile-card-editor'
import { SaveToast } from '@/components/editor/save-profile-toast'
import { LinksSidebar } from '@/components/editor/sidebars/links-sidebar'
import Sidebar from '@/components/editor/sidebars/sidebar'
import { Button } from '@/components/ui/button'
import { useProfileCard } from '@/hooks/use-probile-card'
import { CopyIcon } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

const Page = () => {
  const {profileCard,username} = useProfileCard()
  return (
  <ProfileInitializer>
      <section
    style={{
      backgroundColor:profileCard.body_color
    }}
    className='editor w-full px-10 h-screen flex items-center justify-center'>
      <div className='top-5 left-1/2 -translate-x-1/2 flex items-center gap-2  text-foreground px-4 py-2 rounded-xl fixed'>
       <Button size={'sm'} variant={'default'} onClick={async()=>{
        await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_URL+"/profile/"+username)
        toast.success('coppied')
      }}>Copy Profile Url<CopyIcon/></Button>
      </div>
      <Sidebar/>
     <LinksProvider>
       <ProfileCardEditor/>
       <LinksSidebar/>
       </LinksProvider>
       <SaveToast/>
    </section>
  </ProfileInitializer>
  )
}

export default Page