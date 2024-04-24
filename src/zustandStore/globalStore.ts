// DEV DEPENDENCIES
import { create } from "zustand";
import { persist } from "zustand/middleware";

// SCORE TRACKING SIMPLE
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

// THEME CHANGER
interface Theme {
  theme: number;
  setTheme: (param: number) => void;
}

export const themeSet = create<Theme>()(
  persist(
    (set) => ({
      theme: 1,
      setTheme: (param) => set({ theme: param }),
    }),
    { name: "theme" }
  )
);

// SCORE TRACKING COMPLEX
export const complexScore = create<SimpleScore>()(
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
    { name: "scoreComplex" }
  )
);

// SCORE TRACKING COIN TOSS
interface CoinToss {
  wins: number;
  setWins: () => void;
  resetWins: () => void;
  loses: number;
  setLoses: () => void;
  resetLoses: () => void;
}

export const coinTossScore = create<CoinToss>()(
  persist(
    (set, get) => ({
      wins: 0,
      setWins: () => set({ wins: get().wins + 1 }),
      resetWins: () => set({ wins: 0 }),
      loses: 0,
      setLoses: () => set({ loses: get().loses + 1 }),
      resetLoses: () => set({ loses: 0 }),
    }),
    { name: "coinTossScore" }
  )
);
