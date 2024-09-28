"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BannerState {
  dismissed: boolean;
  setDismissed: () => void;
  getDismissed: () => boolean;
}
export const BannerStore = create<BannerState>()(
  persist(
    (set, get) => ({
      dismissed: false,
      setDismissed: () => set({ dismissed: true }),
      getDismissed: () => get().dismissed,
    }),
    { name: "banner" },
  ),
);
