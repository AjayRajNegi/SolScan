import { create } from "zustand";

interface WalletStore {
  favorites: string[];
  searchHistory: string[];
  isDevNet: boolean;

  addFavorite: (address: string) => void;
  removeFavorite: (address: string) => void;
  isFavorite: (address: string) => boolean;
  addToHistory: (address: string) => void;
  clearHistory: () => void;
  toogleNetwork: () => void;
}

export const useWalletStore = create<WalletStore>((set, get) => ({
  favorites: [],
  searchHistory: [],
  isDevNet: false,

  addFavorite: (address) =>
    set((state) => ({
      favorites: state.favorites.includes(address)
        ? state.favorites
        : [address, ...state.favorites],
    })),

  removeFavorite: (address) =>
    set((state) => ({
      favorites: state.favorites.filter((a) => a !== address),
    })),

  isFavorite: (address) => get().favorites.includes(address),

  addToHistory: (address) =>
    set((state) => ({
      searchHistory: [
        address,
        ...state.searchHistory.filter((a) => a !== address),
      ].slice(0, 20),
    })),

  clearHistory: () => set({ searchHistory: [] }),
  toogleNetwork: () => set((state) => ({ isDevNet: !state.isDevNet })),
}));
