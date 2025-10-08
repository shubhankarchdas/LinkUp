import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("LinkUp-theme") || "light",
  setTheme: (theme) => {
    localStorage.setItem("LinkUp-theme", theme);
    set({ theme });
  },
}));