import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

export interface AuthState {
  jsonToken: string | null;
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
}

export const defaultAuthenticationState: AuthState = {
  jsonToken: null,
  isAuthenticated: false,
  signIn: () => {
    console.log('not invoked');
  },
  signOut: () => {
    console.log('not invoked 2');
  },
};

export const useAuthenticationStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        jsonToken: defaultAuthenticationState.jsonToken,
        isAuthenticated: false,
        signIn: () =>
          set((_state) => ({
            jsonToken: 'dummy',
            isAuthenticated: true,
          })),
        signOut: () =>
          set((_state) => ({
            jsonToken: null,
            isAuthenticated: false,
          })),
      }),
      {
        name: 'authentication-storage',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
