import { create } from 'zustand';
import { getRandomPrice } from './randomNumber';

interface MultiplierState {
  multiplier: number;
  initialized: boolean;
  setMultiplier: (value: number) => void;
  initMultiplier: () => void;
  resetMultiplier: () => void;
}

export const useMultiplierStore = create<MultiplierState>((set) => ({
  multiplier: 10,
  initialized: false,
  setMultiplier: (value) => set({ multiplier: value }),
  initMultiplier: () =>
    set((state) => {
      if (state.initialized) return {};
      return {
        multiplier: getRandomPrice(10, 15),
        initialized: true,
      };
    }),
    resetMultiplier: () =>
    set({
      multiplier: 10,
      initialized: false,
    }),
}));
