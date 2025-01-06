import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'dark' | 'blue';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'dark',
      toggleTheme: () => 
        set((state) => {
          const newTheme = state.theme === 'dark' ? 'blue' : 'dark';
          document.documentElement.setAttribute('data-theme', newTheme);
          return { theme: newTheme };
        }),
    }),
    {
      name: 'theme-storage',
    }
  )
);