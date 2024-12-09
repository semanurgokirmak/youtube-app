import { create } from "zustand";

type SidebarState = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const useSidebarStore = create<SidebarState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useSidebarStore;
