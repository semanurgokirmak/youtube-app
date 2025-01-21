import { create } from "zustand";

type SidebarState = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebarState: (state: boolean) => void;
};

const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebarState: (state) => set({ isSidebarOpen: state }),
}));

export default useSidebarStore;
