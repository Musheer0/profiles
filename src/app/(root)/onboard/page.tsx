"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useMutation } from "convex/react"

import { defaultProfileCard } from "@/lib/utils"
import { api } from "../../../../convex/_generated/api"
import OnBoardingProfileInitializer from "@/components/editor/onboarding-initializer"

const Page = () => {
  const [username, setUsername] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createProfile = useMutation(api.profiles.create)

  const handleContinue = async () => {
    if (username.trim() === "") {
      setError("Username is required")
      toast.error("Username is required")
      return
    }

    if (username.length < 3) {
      setError("Username must be at least 3 characters")
      toast.error("Username must be at least 3 characters")
      return
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      setError("Username can only contain letters, numbers, and underscores")
      toast.error("Username can only contain letters, numbers, and underscores")
      return
    }

    setError(null)
    setIsLoading(true)

    try {
      await createProfile({
        username: username.trim(),
        data: defaultProfileCard,
      })

      setIsSuccess(true)
      toast.success("Profile created successfully!")

      router.push("/editor")
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create profile"
      setError(errorMessage.includes('Username already taken')? 'username already taken': "Failed to create profile")
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      handleContinue()
    }
  }

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center flex-col gap-4 bg-gray-100 p-4">
        <div className="flex flex-col items-center gap-4 w-full max-w-sm bg-white p-8 rounded-xl shadow-md text-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
          <h1 className="text-2xl font-bold text-green-700">Success!</h1>
          <p className="text-gray-600">Your profile has been created successfully.</p>
          <p className="text-sm text-gray-500">Redirecting you to editor...</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading...
          </div>
        </div>
      </div>
    )
  }

  return (
    <OnBoardingProfileInitializer>
      <div className="flex min-h-screen items-center justify-center flex-col gap-2 bg-gray-100 p-4">
      <h1 className="text-xl font-bold">Welcome to Profiles</h1>
      <div className="flex flex-col gap-4 w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
        <Label htmlFor="username">Enter your username</Label>
        <div className="space-y-2">
          <Input
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              if (error) setError(null)
            }}
            onKeyDown={handleKeyPress}
            disabled={isLoading}
            className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
          />
          {error && (
            <div className="flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground">Warning: This will be your permanent username</p>

        <Button onClick={handleContinue} className="mt-2" disabled={isLoading || username.trim() === ""}>
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Creating Profile...
            </>
          ) : (
            "Continue"
          )}
        </Button>

        {isLoading && <p className="text-xs text-center text-gray-500">Please wait while we create your profile...</p>}
      </div>
    </div>
    </OnBoardingProfileInitializer>
  )
}

export default Page
