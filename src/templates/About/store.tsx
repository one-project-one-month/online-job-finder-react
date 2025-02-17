import { create } from "zustand";

interface AboutPageState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export const useAboutPageStore = create<AboutPageState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));
