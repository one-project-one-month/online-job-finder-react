import { create } from "zustand";

interface HomePageState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export const useHomePageStore = create<HomePageState>((set) => ({
  count: 5,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));
