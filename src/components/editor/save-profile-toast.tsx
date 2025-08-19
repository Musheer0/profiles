"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useProfileCard } from "@/hooks/use-probile-card"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMutation } from "convex/react"
import { api } from "../../../convex/_generated/api"

export function SaveToast() {
  const { profileCard, isSaved, isLoading, setIsLoading, setIsSaved } = useProfileCard()
const profileRef = useRef(profileCard)
  const [error, setError] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const action =useMutation(api.profiles.update)
  useEffect(() => {
  profileRef.current = profileCard
}, [profileCard])

  const handleSave = async () => {
    
    try {
      setIsLoading(true)
      setError(null)
      await action({data:profileRef.current})
      setShowSuccess(true)
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 1000)
            setIsLoading(false)
            setIsSaved(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setIsLoading(false)
    }
    
          setIsLoading(false)

  }
  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "s") {
      event.preventDefault() // Prevent browser's default save behavior
  

      if (!isSaved && !isLoading) {
        handleSave()
      }
    }
  }
  useEffect(() => {

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isSaved,setIsSaved])
  // Don't show toast if already saved and no error
  if (isSaved && !error && !showSuccess) {
    return <></>
  }

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={cn(
          "flex items-center gap-3 px-6 py-3 rounded-full shadow-lg border backdrop-blur-sm transition-all duration-300",
          error
            ? "bg-destructive/10 border-destructive/20 text-destructive"
            : showSuccess
              ? "bg-green-50 border-green-200 text-green-700 dark:bg-green-950 dark:border-green-800 dark:text-green-300"
              : "bg-background/80 border-border",
        )}
      >
        {/* Status Icon */}
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : error ? (
          <AlertCircle className="h-4 w-4" />
        ) : showSuccess ? (
          <CheckCircle className="h-4 w-4" />
        ) : null}

        {/* Message */}
        <span className="text-sm font-medium">
          {isLoading
            ? "Saving changes..."
            : error
              ? error
              : showSuccess
                ? "Changes saved successfully!"
                : "You have unsaved changes"}
        </span>

        {/* Action Buttons */}
        {!showSuccess && (
          <div className="flex items-center gap-2">
            {error && (
              <Button variant="ghost" size="sm" onClick={() => setError(null)} className="h-7 px-3 text-xs">
                Dismiss
              </Button>
            )}

            <Button
              onClick={handleSave}
              disabled={isLoading}
              size="sm"
              className={cn(
                "h-7 px-4 text-xs font-medium rounded-full",
                error
                  ? "bg-destructive hover:bg-destructive/90 text-background"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground",
              )}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                  Saving...
                </>
              ) : error ? (
                "Retry"
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
