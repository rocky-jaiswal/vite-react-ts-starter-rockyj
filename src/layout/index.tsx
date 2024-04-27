import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { Nav } from './components/Nav'
import { Main } from './components/Main'

import { ThemeContext } from '../Context/Themes'
import { AuthenticationContext } from '../Context/Authentication'
import { LocaleContext } from '../Context/Locale'
import { AuthenticatedPage } from '../pages/AuthenticatedPage'
import { useAuthenticationStore, useLocaleStore, useThemeStore } from '../store'

type Props = {}

export const Layout: React.FC<Props> = () => {
  const location = useLocation()

  const themeState = useThemeStore()
  const authenticationState = useAuthenticationStore()
  const localeState = useLocaleStore()

  if (location.pathname === '/') {
    return <Navigate replace to={'/home'} />
  }

  return (
    <>
      <AuthenticationContext.Provider value={authenticationState}>
        <ThemeContext.Provider value={themeState}>
          <LocaleContext.Provider value={localeState}>
            <AuthenticatedPage />
            <Nav />
            <Main children={<Outlet />} />
          </LocaleContext.Provider>
        </ThemeContext.Provider>
      </AuthenticationContext.Provider>
    </>
  )
}
