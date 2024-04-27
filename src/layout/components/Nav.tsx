import { useNavigate, useLocation } from 'react-router-dom'
import { css } from '@emotion/css'
import { useContext } from 'react'
import clsx from 'clsx'

import { routes } from '/@/router'
import { GithubOctopusCat } from '/@/components/GithubOctopusCat'
import { ThemeTogglerButton } from '/@/components/ThemeTogglerButton'
import { DummyAuthButton } from '/@/components/DummyAuthButton'
import { ChangeLanguageButton } from '/@/components/ChangeLanguageButton'

import { ThemeContext } from '../../Context/Themes'

const navbarList = routes.map((route) => ({
  id: route.path,
  label: route.label,
  path: route.path,
}))

type Props = {}

export const Nav: React.FC<Props> = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const theme = useContext(ThemeContext)

  return (
    <nav
      className={clsx(
        'left-0 top-0 z-10 w-screen',
        css`
          background-color: ${theme.currentTheme.background};
          color: ${theme.currentTheme.color};
        `,
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between overflow-x-auto overflow-y-hidden">
          <div className="flex-shrink-0 rounded-md px-3 py-2 text-sm font-medium">
            vite-react-ts
          </div>

          <div className="hidden flex-1 items-center justify-center sm:hidden sm:items-stretch sm:justify-start md:hidden lg:flex xl:flex">
            <div className="sm:ml-6 sm:block">
              <div className="flex select-none space-x-4">
                {navbarList.map(({ path, label }) => (
                  <button
                    key={path}
                    className={clsx(
                      'flex-shrink-0 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700',
                      path === pathname && 'bg-gray-900',
                      path !== pathname && 'text-gray-300',
                    )}
                    onClick={() => navigate(path)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden flex-shrink-0 rounded-md px-3 py-2 text-sm font-medium text-blue-600 sm:hidden md:hidden lg:flex xl:flex">
            {`Current Routing Path: "${pathname}"`}
          </div>

          <div>
            <ThemeTogglerButton />
            <DummyAuthButton />
            <ChangeLanguageButton />
          </div>
        </div>
      </div>

      <GithubOctopusCat />
    </nav>
  )
}
