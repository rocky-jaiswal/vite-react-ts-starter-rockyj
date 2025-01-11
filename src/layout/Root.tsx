import React from 'react';
import { Outlet } from '@tanstack/react-router';

import { Nav } from './components/Nav';

import { ThemeContext } from '../Context/Themes';
import { AuthenticationContext } from '../Context/Authentication';
import { LocaleContext } from '../Context/Locale';
import { AuthenticatedPage } from '../pages/AuthenticatedPage';
import { useAuthenticationStore, useLocaleStore, useThemeStore } from '../store';

type Props = unknown;

export const Root: React.FC<Props> = () => {
  const themeState = useThemeStore();
  const authenticationState = useAuthenticationStore();
  const localeState = useLocaleStore();

  return (
    <div data-theme={themeState.currentTheme} className="v-screen flex h-screen min-h-full min-w-full flex-col">
      <AuthenticationContext.Provider value={authenticationState}>
        <ThemeContext.Provider value={themeState}>
          <LocaleContext.Provider value={localeState}>
            <AuthenticatedPage>
              <Nav />
              <div className="flex flex-col container mx-auto px-4">
                <Outlet />
              </div>
            </AuthenticatedPage>
          </LocaleContext.Provider>
        </ThemeContext.Provider>
      </AuthenticationContext.Provider>
    </div>
  );
};
