"use client"

import {  useState } from "react"
import { useLinks } from "@/components/editor/links-context"
import { Button } from "@/components/ui/button"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Plus, X } from "lucide-react"
import { SidebarInputField } from "./sidebar-input"

function getHostnameFromUrl(url: string): string | null {
  try {
    // Add protocol if missing
    const urlWithProtocol = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`
    const urlObj = new URL(urlWithProtocol)
    return urlObj.hostname
  } catch {
    return null
  }
}

export function LinksSidebar() {
  const { links, selectedLink, addLink, updateLink, deleteLink, selectLink } = useLinks()
  const [newLinkName, setNewLinkName] = useState("")
  const [newLinkUrl, setNewLinkUrl] = useState("")
  

  const handleAddLink = () => {
    
    if (newLinkName.trim() && newLinkUrl.trim()) {
          const urlWithProtocol = newLinkUrl.startsWith("http://") || newLinkUrl.startsWith("https://") ? newLinkUrl : `https://${newLinkUrl}`
      addLink({
        name: newLinkName.trim(),
        link: urlWithProtocol,
      })
      setNewLinkName("")
      setNewLinkUrl("")
    }
  }

  const handleSelectedLinkChange = (field: "name" | "link", value: string) => {
    if (selectedLink) {
      selectLink({...selectedLink,[field]:value})
      updateLink(selectedLink.id, { [field]: value })
      
      
    }
  }

  const handleDeleteSelected = () => {
    if (selectedLink) {
      deleteLink(selectedLink.id)
      selectLink(null)
    }
  }

  return (
    <div className="fixed right-0 top-0 h-[98%] mt-[0.5%] hide-scrollbar rounded-xl w-64  mx-5 bg-background border overflow-y-auto shadow-lg py-2 flex flex-col gap-6 z-50">
      <div className="space-y-6">
        {selectedLink ? (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold">Edit Link</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => selectLink(null)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
               <SidebarInputField 
               title="Name"
                   value={selectedLink.name}
                  onChange={(e) => {
                    handleSelectedLinkChange("name", e as string)
                  }}              
               />             
              </div>
              <div className="space-y-2">
                 <SidebarInputField 
               title="Url"
                 value={selectedLink.link}
                  onChange={(e) => handleSelectedLinkChange("link", e as string)}            
               />
              </div>
              <Button onClick={handleDeleteSelected} variant="destructive" className="w-full">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Link
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Add New Link</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <SidebarInputField
                title="Link Name"
    value={newLinkName}
                  onChange={(e) => setNewLinkName(e as string)}
                />
              
                <SidebarInputField
                title="Url"
            value={newLinkUrl}
                  onChange={(e) => setNewLinkUrl(e as string)}
                />
              
              </div>
              <Button onClick={handleAddLink} className="w-full h-fit!" disabled={!newLinkName.trim() || !newLinkUrl.trim()}>
                <Plus className="w-4 h-4 mr-2" />
                Add Link
              </Button>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">All Links ({links.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {links.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-4">No links added yet</p>
            ) : (
              <div className="space-y-2">
                {links.map((link) => {
                  const hostname = getHostnameFromUrl(link.link)
                  return (
                    <div
                      key={link.id}
                      onClick={() => selectLink(link)}
                      className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-muted transition-colors ${
                        selectedLink?.id === link.id ? "bg-primary/10 border border-primary/20" : ""
                      }`}
                    >
                      {hostname ? (
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${hostname}&sz=64`}
                          className="w-4 h-4 rounded"
                          alt="favicon"
                        />
                      ) : (
                        <div className="w-4 h-4 rounded bg-muted-foreground/20" />
                      )}
                      <span className="text-sm truncate">{link.name}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
