// TokenStore.ts
import { create } from "zustand";

interface TokenStore {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useTokenStore = create<TokenStore>((set) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: null }),
}));

export default useTokenStore;
