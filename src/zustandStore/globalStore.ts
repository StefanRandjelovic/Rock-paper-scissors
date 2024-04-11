// DEV DEPENDENCIES
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SimpleScore {
  wins: number;
  setWins: () => void;
  loses: number;
  setLoses: () => void;
  tie: number;
  setTies: () => void;
  resetWins: () => void;
  resetLoses: () => void;
  resetTies: () => void;
}

export const simpleScore = create<SimpleScore>()(
  persist(
    (set, get) => ({
      wins: 0,
      setWins: () => set({ wins: get().wins + 1 }),
      resetWins: () => set({ wins: 0 }),
      loses: 0,
      setLoses: () => set({ loses: get().loses + 1 }),
      resetLoses: () => set({ loses: 0 }),
      tie: 0,
      setTies: () => set({ tie: get().tie + 1 }),
      resetTies: () => set({ tie: 0 }),
    }),
    { name: "score" }
  )
);
