"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useProfileCard } from '@/hooks/use-probile-card'
import { tborder_sides } from '@/lib/types';
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon,  LucideProps,  Square } from 'lucide-react';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react'

const Border = () => {
    const {profileCard,updateProfileCard} =useProfileCard();
    const border = profileCard?.border;
      const exists = (dir:string)=>(border?.sides||[]).some(e => e.name === dir)
type DirectionCell = {
  dir: tborder_sides
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">> & RefAttributes<SVGSVGElement>
} | null

   const directionGrid: DirectionCell[][] = [
  [null, { dir: "t", icon: ArrowUpIcon }, null],
  [
    { dir: "l", icon: ArrowLeftIcon },
    { dir: "m", icon: Square },
    { dir: "r", icon: ArrowRightIcon },
  ],
  [null, { dir: "b", icon: ArrowDownIcon }, null],
]
  return (
    <div className='flex flex-col gap-2 py-2 w-full'>
        <div className="header w-full flex items-center justify-between">
            <Label>Border</Label>
            <Switch checked={!!border} onCheckedChange={()=>{
                if(border){
                    updateProfileCard({border:null})
                }
                else{
                    updateProfileCard({border:{color:'#ff0000',thickness:2,sides:[{name:'m'}]}})
                }
            }}/>
        </div>

        {border && 
        <div className='body w-full'>
           <div className="main flex py-3 items-center gap-2 justify-between">
             <input type="color" value={border.color} onChange={(e)=>{
                                    updateProfileCard({border:{...border,color:e.currentTarget.value}})
            }}/>
            <Input type='number' min={0} className='flex-1 ' value={border.thickness}
            onChange={(e)=>{
                                    updateProfileCard({border:{...border,thickness:Number(e.currentTarget.value)}})
            }}
            />
           </div>

           <div>
  <Label>Direction</Label>
  <div className="grid grid-cols-3 gap-2 p-2">
    {directionGrid.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        if (!cell) return <div key={`${rIdx}-${cIdx}`} /> // empty space

        const Icon = cell.icon

        return (
          <Button
            key={`${rIdx}-${cIdx}`}
            onClick={()=>{
                if(exists(cell.dir)){
                    updateProfileCard({border:{...border,sides:(border.sides||[])?.filter((e)=>e.name!==cell.dir)}})
                }
                else{
                    if(cell.dir==='m'){
                        updateProfileCard({border:{...border,sides:[{name:'m'}]}});
                        return ;
                    }
                    const sides = (border.sides||[]).filter((e)=>e.name!=='m');
                    
                    sides.push({name:cell.dir})
                    updateProfileCard({border:{...border,sides}});

                }
            }}
            variant={exists(cell.dir) ?'default':((!border.sides || border.sides?.length==0) && cell.dir==='m') ? 'default':'outline'}
            size="icon"
            className="h-10 w-10 rounded-lg flex items-center justify-center"
          >
            <Icon className="h-5 w-5" />
          </Button>
        )
      })
    )}
  </div>
</div>
        </div>
        }
    </div>
  )
}

export default Border