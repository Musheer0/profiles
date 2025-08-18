import { tlink } from '@/lib/types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Links = ({data}:{data:tlink[]}) => {
if(data.length>0)
  return (
    <div className='flex flex-col py-3 pt-6 w-full  gap-2'>
       {data.map((e)=>{
                const favicon = `https://www.google.com/s2/favicons?domain=${new URL(e.link).hostname}&sz=64`;

        return <React.Fragment key={e.link}>
             <Link href={e.link} className='flex p-2 hover:rounded-lg  border-muted-foreground/10 hover:bg-muted-foreground/5  w-full items-center justify-between gap-2'>
            <img src={favicon} className='w-6 rounded-lg h-6' alt="link favicon" />
            <p className='line-clamp-1 mr-auto text-[16px]'>{e.name}</p>
            <ArrowRight size={14} className='text-muted-foreground'/>
        </Link>
        </React.Fragment>
       })}
       
    </div>
  )
}

export default Links