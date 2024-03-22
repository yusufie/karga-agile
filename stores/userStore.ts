import { create } from "zustand";

interface UserState {
  token: string | null;
  fullName: string | null;
  isLoggedIn: boolean;
  setLoggedIn: (
    token: string,
    fullName: string,
  ) => void;
  setLoggedOut: () => void;
}

export const useUserStore = create<UserState>((set) => {
  // Check if localStorage is available (not in SSR)
  const storedToken =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("token")
      : null;
  const storedFullName =
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage.getItem("fullName") || "null")
      : null;

  set({
    token: storedToken,
    fullName: storedFullName,
    isLoggedIn: storedFullName !== null,
  });

  return {
    token: storedToken,
    fullName: storedFullName,
    isLoggedIn: storedFullName !== null,
    setLoggedIn: (token, fullName) => {
      // Check if localStorage is available (not in SSR)
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("token", token);
        localStorage.setItem("fullName", fullName);
      }

      set({ token, fullName, isLoggedIn: true });
    },
    setLoggedOut: () => {
      // Check if localStorage is available (not in SSR)
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("fullName");
      }

      set({
        token: null,
        fullName: null,
        isLoggedIn: false,
      });
    },
  };
});
