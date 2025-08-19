"use client";

import { ReactNode, useEffect } from "react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { useProfileCard } from "@/hooks/use-probile-card";
import { api } from "../../../convex/_generated/api";

type ProfileInitializerProps = {
  children: ReactNode;
};

export default function ProfileInitializer({ children }: ProfileInitializerProps) {
  const router = useRouter();
  const profile = useQuery(api.profiles.getProfile);
  const { setProfileCard ,resetProfileCard,setUsername} = useProfileCard();

  // Always call hooks first (useEffect)
  useEffect(() => {
    if (profile) {
      setUsername(profile.username)
      setProfileCard(profile.data);
    }
    // If profile is null (doesn't exist), redirect
    if (profile === null) {
      router.replace("/onboard");
      resetProfileCard()
    }
  }, [profile]);

  // Show loader while fetching
  if (!profile)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loader2Icon className="animate-spin" />
      </div>
    );

  return <>{children}</>;
}
