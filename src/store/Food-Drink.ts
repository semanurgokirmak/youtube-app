import { create } from "zustand";

type FoodDrinkState = {
  currentIndex: number;
  next: () => void;
  prev: () => void;
};

const useFoodDrinkStore = create<FoodDrinkState>((set) => ({
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

export default useFoodDrinkStore;
