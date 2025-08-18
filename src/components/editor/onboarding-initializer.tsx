"use client";

import { ReactNode, useEffect } from "react";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { Loader2Icon } from "lucide-react";
import { api } from "../../../convex/_generated/api";

type ProfileInitializerProps = {
  children: ReactNode;
};

export default function OnBoardingProfileInitializer({ children }: ProfileInitializerProps) {
  const router = useRouter();
  const profile = useQuery(api.profiles.getProfile);

  useEffect(() => {
    if (profile) {
     router.replace("/editor");
    }
  
  }, [profile]);

  if (profile === undefined)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loader2Icon className="animate-spin" />
      </div>
    );
if(!profile)
  return <>{children}</>;
}
