import { create } from "zustand";

interface GlobalState {
  count: number;
  increase: () => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));
