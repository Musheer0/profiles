import { tstatus } from '@/lib/types'
import { cn } from '@/lib/utils'
import React from 'react'

const StatusLabel = ({data,primary}:{data:tstatus,primary:string}) => {
  return (
   <div className="status blur-in flex items-center gap-2">
        <div className={cn(
          'w-2 h-2 rounded-full ',

        )}
            style={{
              backgroundColor:primary
            }}
        ></div>
        <p>{data}</p>
    </div>
  )
}

export default StatusLabel