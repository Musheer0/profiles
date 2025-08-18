import { create } from "zustand";
import type { tprofile_card } from "@/lib/types"; 
import { defaultProfileCard } from "@/lib/utils";

interface ProfileCardStore {
  profileCard: tprofile_card;
  lastSaved: string | null;

  // new states
  isLoading: boolean;
  isSaved: boolean;

  // username management
  username: string | null;
  setUsername: (username: string) => void;
  removeUsername: () => void;

  // setters for new states
  setIsLoading: (value: boolean) => void;
  setIsSaved: (value: boolean) => void;

  setProfileCard: (data: tprofile_card) => void;
  updateProfileCard: (data: Partial<tprofile_card>) => void;
  resetProfileCard: () => void;
}

export const useProfileCard = create<ProfileCardStore>((set) => ({
  profileCard: defaultProfileCard,
  lastSaved: null,

  // initialize new states
  isLoading: false,
  isSaved: false,

  // username management
  username: null,
  setUsername: (username) => set({ username }),
  removeUsername: () => set({ username: null }),

  // setters for new states
  setIsLoading: (value) => set({ isLoading: value }),
  setIsSaved: (value) => set({ isSaved: value }),

  setProfileCard: (data) =>
    set({
      profileCard: data,
      lastSaved: new Date().toISOString(),
      isSaved: true,
      isLoading: false,
    }),

  updateProfileCard: (data) =>
    set((state) => ({
      profileCard: { ...state.profileCard, ...data },
      lastSaved: new Date().toISOString(),
      isSaved: false,
    })),

  resetProfileCard: () =>
    set({
      profileCard: defaultProfileCard,
      lastSaved: new Date().toISOString(),
      isSaved: false,
      isLoading: false,
      username: null,
    }),
}));
