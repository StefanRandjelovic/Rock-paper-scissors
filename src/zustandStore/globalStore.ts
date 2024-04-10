// DEV DEPENDENCIES
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SimpleScore {
  wins: number;
  setWins: () => void;
  loses: number;
  setLoses: () => void;
}

export const simpleScore = create<SimpleScore>()(
  persist(
    (set, get) => ({
      wins: 0,
      setWins: () => set({ wins: get().wins + 1 }),
      loses: 0,
      setLoses: () => set({ loses: get().loses + 1 }),
    }),
    { name: "score" }
  )
);
