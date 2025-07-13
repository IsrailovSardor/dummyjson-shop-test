import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  token: string;
}

interface AuthState {
  user: User | null;
  error: string | null;
  login: (user: User) => void;
  logout: () => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      error: null,
      login: (user) => set({ user, error: null }),
      logout: () => set({ user: null, error: null }),
      setError: (error) => set({ error }),
    }),
    {
      name: "auth-storage", // ключ localStorage
    }
  )
);
