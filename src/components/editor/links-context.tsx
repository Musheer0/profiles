"use client"

import { useProfileCard } from "@/hooks/use-probile-card"
import { tlink } from "@/lib/types"
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface LinksContextType {
  links: tlink[]
  selectedLink: tlink | null
  addLink: (link: Omit<tlink, "id">) => void
  updateLink: (id: string, updates: Partial<Omit<tlink, "id">>) => void
  deleteLink: (id: string) => void
  reorderLinks: (newLinks: tlink[]) => void
  selectLink: (link: tlink | null) => void,
}

const LinksContext = createContext<LinksContextType | undefined>(undefined)

export function LinksProvider({ children }: { children: ReactNode }) {
    const {updateProfileCard,profileCard} =useProfileCard()
  const [initilalized,setInitialized] =useState(false)
  const [links, setLinks] = useState<tlink[]>(profileCard.links)
  const [selectedLink, setSelectedLink] = useState<tlink | null>(null)
  useEffect(()=>{
    if(initilalized ) return ;
    if(profileCard.links.length===0) return;
    setLinks(profileCard.links)
    setInitialized(true)
  },[profileCard])
 

  const addLink = (link: Omit<tlink, "id">) => {
    const newLink: tlink = {
      ...link,
      id: crypto.randomUUID(),
    }
    setLinks((prev) =>{        return  [...prev, newLink]
    });
      updateProfileCard({links: [...links, newLink]})

  }

  const updateLink = (id: string, updates: Partial<Omit<tlink, "id">>) => {
    setLinks((prev) => {
        const updated_list =prev.map((link) => (link.id === id ? { ...link, ...updates } : link))
        return updated_list
    })
            updateProfileCard({links:links.map((link) => (link.id === id ? { ...link, ...updates } : link))})
  }

  const deleteLink = (id: string) => {
    setLinks((prev) =>{
        updateProfileCard({links: prev.filter((link) => link.id !== id)})
        return  prev.filter((link) => link.id !== id)
    })
  }

  const reorderLinks = (newLinks: tlink[]) => {
    setLinks(newLinks)
    updateProfileCard({links:newLinks})
 
  }

  const selectLink = (link: tlink | null) => {
    setSelectedLink(link)
  }

  return (
    <LinksContext.Provider
      value={{
        links,
        selectedLink,
        addLink,
        updateLink,
        deleteLink,
        reorderLinks,
        selectLink,
    
      }}
    >
      {children}
    </LinksContext.Provider>
  )
}

export function useLinks() {
  const context = useContext(LinksContext)
  if (context === undefined) {
    throw new Error("useLinks must be used within a LinksProvider")
  }
  return context
}
