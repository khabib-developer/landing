import { create } from "zustand";

export const useAppStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  loading: true,
  setLoading: (loading) => {
    return set({ loading });
  },
  error: null,
  setError: (error) => set({ error }),
  info: null,
  setInfo: (info) => set({ info }),
}));
