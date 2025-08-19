import { tbio } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Zap } from 'lucide-react'
import React from 'react'

const Bio = ({data}:{data:tbio}) => {
  return (
    <div className={cn(
      'flex items-center gap-2 justify-center w-full h-[40px] text-sm font-semibold ',
      data.reverse && 'flex-row-reverse'
    )}>
   {data.img ? (
  <img 
    src={data.img} 
    alt="" 
    style={{ width: 15, height: 15, objectFit: 'cover' }} 
  />
) : (
  <Zap size={15} />
)}

 {data.txt}
    </div>
  )
}

export default Bio