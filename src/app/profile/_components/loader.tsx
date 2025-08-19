"use client"
import React from 'react'
import { motion } from "framer-motion";

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn,  generateTailwindGradient, getBorderWidth } from '@/lib/utils'
import { tprofile_card } from '@/lib/types'
import Bio from '@/components/editor/bio';
import { Loader2Icon } from 'lucide-react';
const ProfileCardLoader = () => {
 
  return (
  <div className='w-full h-screen p-2 flex flex-col items-center pt-10 ' >
      <Card className={cn(
      'w-full  p-0 rounded-[2.4rem] max-w-[500px] gap-0 ',
    )}

    >
     <motion.div
      className={cn(
        "main bg-neutral-900 text-zinc-100 rounded-[2.3rem] pt-2 pb-7",
      )}
   
      initial={{ height: 40 }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
         <Loader2Icon className='animate-spin text-muted-foreground mx-auto'/>
    </motion.div>
     <Bio data={{img:'',txt:'Loading...',reverse:false}}/>
    </Card>
  </div>
  )
}

export default ProfileCardLoader