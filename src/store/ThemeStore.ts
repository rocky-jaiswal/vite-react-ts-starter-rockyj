import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Styles {
  color: string
  background: string
}

interface Themes {
  light: Styles
  dark: Styles
}

export interface ThemeState {
  themes: Themes
  currentTheme: Styles
  toggleTheme: () => void
}

const themes = {
  light: {
    color: '#333',
    background: '#dedede',
  },
  dark: {
    color: '#ddd',
    background: '#000',
  },
}

export const defaultThemeState: ThemeState = {
  themes,
  currentTheme: themes.dark,
  toggleTheme: () => {
    console.log('not invoked')
  },
}

export const useThemeStore = create<ThemeState>()(
  devtools((set) => ({
    themes: defaultThemeState.themes,
    currentTheme: defaultThemeState.currentTheme,
    toggleTheme: () =>
      set((state) => {
        // console.log(state)
        return {
          ...state,
          currentTheme:
            state.currentTheme === state.themes.dark ? state.themes.light : state.themes.dark,
        }
      }),
  })),
)
