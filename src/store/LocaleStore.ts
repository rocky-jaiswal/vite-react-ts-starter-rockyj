import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

export interface LocaleState {
  locale: string
  currentLanguage: string
  changeLanguage: (lang: 'en' | 'de') => void
}

export const defaultLocaleState: LocaleState = {
  locale: 'en-EN',
  currentLanguage: 'en',
  changeLanguage: (lang: 'en' | 'de') => {
    console.log(lang)
  },
}

export const useLocaleStore = create<LocaleState>()(
  devtools(
    persist(
      (set) => ({
        locale: defaultLocaleState.locale,
        currentLanguage: defaultLocaleState.currentLanguage,
        changeLanguage: (lang) =>
          set((state) => {
            return {
              ...state,
              locale: state.locale === 'en-EN' ? 'de-DE' : 'en-EN',
              currentLanguage: lang,
            }
          }),
      }),
      {
        name: 'locale-storage',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
)
