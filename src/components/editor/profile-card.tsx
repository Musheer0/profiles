"use client"
import React from 'react'
import { motion } from "framer-motion";

import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import TimeLabel from './time-label'
import StatusLabel from './status-label'
import Profile from './profile'
import Actions from './actions'
import Bio from './bio'
import Links from './links'
import { cn,  generateTailwindGradient, getBorderWidth } from '@/lib/utils'
import { tprofile_card } from '@/lib/types'
const ProfileCard = ({profileCard}:{profileCard:tprofile_card}) => {
  const sides = profileCard.border?.sides || []
const thickness = profileCard.border?.thickness || 0
  return (
    <Card className={cn(
      'w-full  p-0 rounded-[2.4rem] max-w-[500px] gap-0',
      !profileCard.innershadow_disables && 'inner-shadow-bottom',
    )}
       style={{
      backgroundColor:profileCard.colors.primary
    }}

    >
     <motion.div
      className={cn(
        "main bg-neutral-900 text-zinc-100 rounded-[2.3rem] pt-2 pb-7",
        !profileCard.shadow_disabled && "profile-body"
      )}
      style={{
        backgroundImage: profileCard.colors.gradient
          ? generateTailwindGradient(profileCard.colors.gradient)
          : "",
        backgroundColor: profileCard.colors.color,
        borderColor: profileCard?.border?.color || "transparent",
        borderTopWidth: sides.some((e) => e.name === "m" || e.name === "t")
          ? `${thickness}px`
          : "0px",
        borderBottomWidth: sides.some((e) => e.name === "m" || e.name === "b")
          ? `${thickness}px`
          : "0px",
        borderLeftWidth: sides.some((e) => e.name === "m" || e.name === "l")
          ? `${thickness}px`
          : "0px",
        borderRightWidth: sides.some((e) => e.name === "m" || e.name === "r")
          ? `${thickness}px`
          : "0px",
      }}
      initial={{ height: 40 }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      
      {/* fade-in wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
      >
        <CardHeader className="flex text-zinc-500 shadow-sm tracking-tight font-[500] text-[12px] py-4 items-center justify-between">
          <StatusLabel
            data={profileCard.status}
            primary={profileCard.colors.primary}
          />
          <TimeLabel />
        </CardHeader>

        <CardContent>
          <Profile data={profileCard.profile} />
        </CardContent>

        <CardFooter className="flex flex-col">
          <Actions
            primary={profileCard.primary_btn}
            secondary={profileCard.secondary_btn}
          />
          <Links data={profileCard.links} />
        </CardFooter>
      </motion.div>
    </motion.div>
     <Bio data={profileCard.bio}/>
    </Card>
  )
}

export default ProfileCard