"use client"
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import TimeLabel from './time-label'
import Links from './links'
import { cn,  generateTailwindGradient } from '@/lib/utils'
import StatusLabelEditor from './status-label-edit'
import ProfileEditor from './profile-editor'
import BioEditor from './bio-editor'
import ActionsEditor from './actions-editor'
import { useProfileCard } from '@/hooks/use-probile-card'
import LinksEditor from './links-editor'
const ProfileCardEditor = () => {
    const {profileCard}=useProfileCard();
    const sides = profileCard.border?.sides || []
const thickness = profileCard.border?.thickness || 0
  return (
    <Card className={cn(
      'w-full  p-0 rounded-[51.07px] max-w-[527px] h-fit  gap-0',
      !profileCard.innershadow_disables && 'inner-shadow-bottom',
    )}
    style={{
      backgroundColor:profileCard.colors.primary
    }}
    >
     <div className={cn(
      "main  bg-neutral-900 text-zinc-100 rounded-[51.07px] -translate-y-[3px] py-[32px] px-[22px]",
      !profileCard.shadow_disabled && 'profile-body ',
     )}
     style={{
      backgroundImage:profileCard.colors.gradient ? generateTailwindGradient(profileCard.colors.gradient):'',
      backgroundColor:profileCard.colors.color,
      borderColor: profileCard?.border?.color||'transparent',
      borderTopWidth: sides.some(e => e.name === 'm' || e.name === 't') ? `${thickness}px` : '0px',
  borderBottomWidth: sides.some(e => e.name === 'm' || e.name === 'b') ? `${thickness}px` : '0px',
  borderLeftWidth: sides.some(e => e.name === 'm' || e.name === 'l') ? `${thickness}px` : '0px',
  borderRightWidth: sides.some(e => e.name === 'm' || e.name === 'r') ? `${thickness}px` : '0px',
      
     }}
     >
     <CardHeader className='flex text-zinc-500 tracking-tight  font-[500] text-[12px] pb-[31px] items-center justify-between'>
    <StatusLabelEditor/>
    <TimeLabel/>
    </CardHeader>
    <CardContent >
     <ProfileEditor/>
    </CardContent>
    <CardFooter className='flex pt-[28px] flex-col'>
     <ActionsEditor/>
      <LinksEditor/>
    </CardFooter>
     </div>
     <BioEditor/>
    </Card>
  )
}

export default ProfileCardEditor