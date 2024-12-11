import { create } from "zustand";

type DollieBlairState = {
  currentIndex: number;
  next: () => void;
  prev: () => void;
};

const useDollieBlairStore = create<DollieBlairState>((set) => ({
  currentIndex: 0,
  next: () =>
    set((state) => {
      if (state.currentIndex < 6) {
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

export default useDollieBlairStore;
