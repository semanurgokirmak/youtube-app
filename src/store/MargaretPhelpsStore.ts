import { create } from "zustand";

type MargetPhelpsState = {
  currentIndex: number;
  next: () => void;
  prev: () => void;
};

const useMargetPhelpsStore = create<MargetPhelpsState>((set) => ({
  currentIndex: 0,
  next: () =>
    set((state) => {
      if (state.currentIndex < 10) {
        return { currentIndex: state.currentIndex + 1 };
      }
      return state;
    }),
  prev: () =>
    set((state) => {
      if (state.currentIndex > 0) {
        return { currentIndex: state.currentIndex - 1 };
      }
      return state;
    }),
}));

export default useMargetPhelpsStore;
