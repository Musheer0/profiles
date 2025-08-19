"use client"
import { ArrowRight } from "lucide-react"
import React from "react"
import { useLinks } from "./links-context"

const LinksEditor = () => {
  const { links, selectLink, selectedLink } = useLinks()
  
  if (links.length > 0)
    return (
      <div className="flex flex-col py-3 pt-6 w-full gap-2">
        {links.map((e) => {
          const favicon = `https://www.google.com/s2/favicons?domain=${new URL(e.link).hostname}&sz=64`

          return (
            <React.Fragment key={e.id}>
              <div
                onClick={() => selectLink(e)}
                className={`flex p-2 hover:rounded-lg border-muted-foreground/10 hover:bg-muted-foreground/5 w-full items-center justify-between gap-2 cursor-pointer transition-colors ${
                  selectedLink?.id === e.id ? "bg-primary/10 border border-primary/20 rounded-lg" : ""
                }`}
              >
                <img src={favicon || "/placeholder.svg"} className="w-6 rounded-lg h-6" alt="link favicon" />
                <p className="line-clamp-1 mr-auto text-[16px]">{e.name}</p>
                <ArrowRight size={14} className="text-muted-foreground" />
              </div>
            </React.Fragment>
          )
        })}
      </div>
    )

  return (
  <></>
  )
}

export default LinksEditor
